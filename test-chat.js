import fetch from 'node-fetch';

const testChatAPI = async () => {
  try {
    console.log('🧪 Testando API do ChatGPT...');
    
    const response = await fetch('http://localhost:8080/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Olá! Como você pode me ajudar?',
        context: 'Teste da API'
      }),
    });

    const data = await response.json();
    
    console.log('📡 Status da resposta:', response.status);
    console.log('📄 Resposta:', data);
    
    if (response.ok) {
      console.log('✅ API funcionando corretamente!');
    } else {
      console.log('❌ Erro na API:', data.message);
    }
    
  } catch (error) {
    console.error('❌ Erro ao testar API:', error.message);
  }
};

testChatAPI(); 