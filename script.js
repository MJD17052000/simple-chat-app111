function login() {
    const password = document.getElementById('password').value;
    if (password === 'MJD') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('chat').style.display = 'block';
    } else {
        alert('كلمة المرور غير صحيحة!');
    }
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    if (message.trim() !== '') {
        const messagesDiv = document.getElementById('messages');
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messagesDiv.appendChild(messageElement);
        messageInput.value = '';
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
}
