document.addEventListener('DOMContentLoaded', function() {
    const prompts = document.querySelectorAll('.prompt-button');
    const chatWindow = document.getElementById('chat-window');

    prompts.forEach(prompt => {
        prompt.addEventListener('click', function() {
            const userPrompt = this.getAttribute('data-prompt');
            displayMessage('User', userPrompt);
            getGPTResponse(userPrompt);
        });
    });

    function displayMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
    }

    function getGPTResponse(prompt) {
        // Replace with your actual API endpoint and fetch request
        fetch('YOUR_GPT_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY' // If needed
            },
            body: JSON.stringify({ prompt })
        })
        .then(response => response.json())
        .then(data => {
            const gptResponse = data.choices[0].text.trim(); // Adjust based on actual API response
            displayMessage('GPT', gptResponse);
        })
        .catch(error => {
            console.error('Error:', error);
            displayMessage('GPT', 'Sorry, there was an error processing your request.');
        });
    }
});
