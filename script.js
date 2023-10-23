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
    
    // Проверка, проскроллил ли пользователь чат вверх
    const isScrolledToBottom = chatBox.scrollHeight - chatBox.clientHeight <= chatBox.scrollTop + 1;

    // Если это так, прокрутите чат вниз
    if (isScrolledToBottom) {
        chatBox.scrollTop = chatBox.scrollHeight - chatBox.clientHeight;
    }
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

function quickResponse(message) {
    appendMessage('Вы: ' + message, 'user-message');
    appendMessage(getBotResponse(message), 'bot-message');
}

function toggleChat() {
    const widgetContainer = document.getElementById('widget-container');
    if (widgetContainer.classList.contains('hidden')) {
        widgetContainer.classList.remove('hidden');
        widgetContainer.classList.add('visible');
    } else {
        widgetContainer.classList.remove('visible');
        widgetContainer.classList.add('hidden');
    }
}

function scrollToBottom() {
    chatBox.scrollTop = chatBox.scrollHeight - chatBox.clientHeight;
    document.getElementById('scroll-button').classList.add('hidden');
}

chatBox.addEventListener('scroll', () => {
    const isScrolledToBottom = chatBox.scrollHeight - chatBox.clientHeight <= chatBox.scrollTop + 1;
    const scrollButton = document.getElementById('scroll-button');
    if (isScrolledToBottom) {
        scrollButton.classList.add('hidden');
    } else {
        scrollButton.classList.remove('hidden');
    }
});

