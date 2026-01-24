// Тест Bitrix24 API
// Запустите: node test-bitrix.js

const BITRIX_WEBHOOK_URL = 'https://sladikmladik.bitrix24.ru/rest/19494/pswzhpup008nfd6i/crm.lead.add';

const testData = {
  fields: {
    TITLE: 'Тестовый лид из API',
    NAME: 'Test User',
    PHONE: [{ VALUE: '+971501234567', VALUE_TYPE: 'WORK' }],
    EMAIL: [{ VALUE: 'test@example.com', VALUE_TYPE: 'WORK' }],
    SOURCE_ID: 'WEB',
    COMMENTS: 'Тест интеграции',
    ASSIGNED_BY_ID: 1,
  }
};

fetch(BITRIX_WEBHOOK_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(testData),
})
  .then(res => res.json())
  .then(data => {
    console.log('✅ Response from Bitrix24:');
    console.log(JSON.stringify(data, null, 2));
    
    if (data.result) {
      console.log('✅ SUCCESS! Lead ID:', data.result);
    } else if (data.error) {
      console.log('❌ ERROR:', data.error_description || data.error);
    }
  })
  .catch(err => console.error('❌ Request failed:', err));
