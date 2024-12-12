// Define constants and variables
const chatWindow = document.getElementById('chat-window');
const prompts = document.querySelectorAll('.prompt-button');

// Functions for handling user input and API interaction
function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

function getGPTResponse(prompt) {
    fetch('YOUR_GPT_API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({ prompt })
    })
    .then(response => response.json())
    .then(data => {
        const gptResponse = data.choices[0].text.trim();
        displayMessage('GPT', gptResponse);
    })
    .catch(error => {
        console.error('Error:', error);
        displayMessage('GPT', 'Sorry, there was an error processing your request.');
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    prompts.forEach(prompt => {
        prompt.addEventListener('click', function() {
            const userPrompt = this.getAttribute('data-prompt');
            displayMessage('User', userPrompt);
            getGPTResponse(userPrompt);
        });
    });
});
