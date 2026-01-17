import { NextRequest, NextResponse } from 'next/server';

const BITRIX_WEBHOOK_URL = 'https://sladikmladik.bitrix24.ru/rest/19494/pswzhpup008nfd6i/crm.lead.add';

export async function POST(req: NextRequest) {
  try {
    const { name, phone, service } = await req.json();

    // Подготовка данных для Bitrix24
    const bitrixData = {
      fields: {
        TITLE: `Заявка: ${service}`,
        NAME: name,
        PHONE: [
          {
            VALUE: phone,
            VALUE_TYPE: 'WORK'
          }
        ],
        SOURCE_ID: 'WEB', // Источник - веб-сайт
        SOURCE_DESCRIPTION: `Услуга: ${service}`,
        COMMENTS: `Клиент интересуется услугой: ${service}\nТелефон: ${phone}`,
        ASSIGNED_BY_ID: 1, // ID ответственного (можно изменить)
      }
    };

    // Отправка в Bitrix24
    const response = await fetch(BITRIX_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bitrixData),
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
