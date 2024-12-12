document.addEventListener('DOMContentLoaded', function() {
    // Function to load archived chats
    function loadArchivedChats() {
        fetch('/api/archived-chats')
            .then(response => response.json())
            .then(data => {
                const container = document.querySelector('.modal-container');
                container.innerHTML = ''; // Clear existing content
                data.chats.forEach(chat => {
                    const chatItem = document.createElement('div');
                    chatItem.classList.add('chat-item');
                    chatItem.innerHTML = `
                        <div class="chat-details">
                            <p class="chat-name">${chat.name}</p>
                            <p class="chat-date">Created on: ${chat.created_date}</p>
                        </div>
                        <div class="chat-actions">
                            <button class="unarchive-button" data-chat-id="${chat.id}">Unarchive</button>
                            <button class="delete-button" data-chat-id="${chat.id}">Delete</button>
                        </div>
                    `;
                    container.appendChild(chatItem);
                });
            })
            .catch(error => console.error('Error loading archived chats:', error));
    }

    // Event listener to load archived chats when the modal opens
    document.getElementById('settings-link').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        loadArchivedChats(); // Load chats when modal is opened
        document.getElementById('archivedChatsModal').style.display = 'block'; // Show the modal
    });

    // Event listener to close the modal
    document.getElementById('close-archived-chats-modal').addEventListener('click', function() {
        document.getElementById('archivedChatsModal').style.display = 'none';
    });
});
