const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const message = userInput.value.trim();  // Удалить пробелы по краям
    userInput.value = '';
    
    if (!message) {
        console.error('The message cannot be empty');  // Логирование ошибки в консоль
        return;  // Прекратить выполнение функции, если сообщение пустое
    }

    appendMessage('Вы: ' + message, 'user-message');
    appendMessage(getBotResponse(message), 'bot-message');
}

function appendMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = text;
    messageDiv.className = className;
    chatBox.appendChild(messageDiv);
}

function getBotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('пенсия')) {
        return 'AI-Помощник: Мы предлагаем различные пенсионные программы...';
    } else if (lowerCaseMessage.includes('вклад')) {
        return 'AI-Помощник: У нас есть множество вариантов вкладов...';
    } else {
        return 'AI-Помощник: Извините, я не понял ваш вопрос.';
    }
}
