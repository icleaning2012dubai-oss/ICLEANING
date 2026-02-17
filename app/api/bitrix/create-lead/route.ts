import { NextRequest, NextResponse } from 'next/server';

const BITRIX_WEBHOOK_URL = 'https://sladikmladik.bitrix24.ru/rest/19494/okr8lrulj28o3o84/crm.lead.add.json';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message, business } = body;

    // Подготовка данных для Bitrix24
    const fields: Record<string, unknown> = {
      TITLE: `Заявка с сайта: ${name || 'Без имени'}`,
      NAME: name || '',
      SOURCE_ID: 'WEB',
      UF_CRM_1771256999: 'icleaning.ae', // Тип клиента - сайт
      ASSIGNED_BY_ID: 1,
    };

    // Телефон
    if (phone) {
      fields.PHONE = [{ VALUE: phone, VALUE_TYPE: 'WORK' }];
    }

    // Email
    if (email) {
      fields.EMAIL = [{ VALUE: email, VALUE_TYPE: 'WORK' }];
    }

    // Тип услуги
    if (service) {
      fields.UF_CRM_1771256908 = service;
    }

    // Комментарий: собираем всё полезное
    const commentParts: string[] = [];
    if (service) commentParts.push(`Услуга: ${service}`);
    if (business && business !== 'INDIVIDUAL') commentParts.push(`Тип бизнеса: ${business}`);
    if (message) commentParts.push(`Сообщение: ${message}`);
    if (commentParts.length > 0) {
      fields.COMMENTS = commentParts.join('\n');
    }

    // Отправка в Bitrix24
    const response = await fetch(BITRIX_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields }),
    });

    const result = await response.json();

    if (result.result) {
      console.log('Lead created in Bitrix24:', result.result);
      return NextResponse.json({ 
        success: true, 
        leadId: result.result,
        message: 'Lead created successfully' 
      });
    } else {
      console.error('Bitrix24 error:', result);
      return NextResponse.json(
        { error: 'Failed to create lead in CRM', details: result },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
