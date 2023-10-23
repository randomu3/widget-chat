const chatBox = document.getElementById('chat-box');

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value;
    userInput.value = '';
    
    if (message) {
        const userMessage = document.createElement('div');
        userMessage.textContent = 'Вы: ' + message;
        userMessage.className = 'user-message';  /* применить класс user-message */
        chatBox.appendChild(userMessage);
        
        const botResponse = document.createElement('div');
        botResponse.textContent = getBotResponse(message);
        botResponse.className = 'bot-message';  /* применить класс bot-message */
        chatBox.appendChild(botResponse);
    }
}

function getBotResponse(message) {
  const lowerCaseMessage = message.toLowerCase();
  if (lowerCaseMessage.includes('пенсия')) {
    return 'Бот: Мы предлагаем различные пенсионные программы...';
  } else if (lowerCaseMessage.includes('вклад')) {
    return 'Бот: У нас есть множество вариантов вкладов...';
  } else {
    return 'Бот: Извините, я не понял ваш вопрос.';
  }
}
