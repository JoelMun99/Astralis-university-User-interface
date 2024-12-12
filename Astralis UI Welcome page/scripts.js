document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.getElementById('menuButton');
    const chatHistoryContainer = document.getElementById('chat-history-container');
    const accountButton = document.getElementById('account-button');
    const accountPopup = document.getElementById('accountPopup');

    const uploadFilesButton = document.getElementById('uploadButton');
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendButton');
    const microphoneButton = document.getElementById('microphoneButton');

    const mainModal = document.getElementById('mainModal');
    const nestedModal = document.getElementById('nestedModal');
    const closeMainModal = document.getElementById('close-main-modal');
    const closeNestedModal = document.getElementById('close-nested-modal');

    const settingsLink = document.getElementById('settings-link');
    const archiveButton = document.getElementById('archiveButton');
    const manageButton = document.getElementById('manageButton');
    const deleteButton = document.getElementById('deleteButton');

    const deleteModal = document.getElementById('deleteModal'); 
    const cancelDeleteButton = document.getElementById('cancelDeleteButton'); 
    const confirmDeleteButton = document.getElementById('confirmDeleteButton');

    const archiveAllModal = document.getElementById('archiveAllModal');
    const cancelArchiveAllButton  = document.getElementById('cancelArchiveAllButton');
    const confirmArchiveAllButton = document.getElementById('confirmArchiveAllButton');

    const manageSharedLinksButton = document.getElementById('manageSharedLinksButton');
    const sharedLinksModal = document.getElementById('sharedLinksModal');
    const closeSharedLinksModal = document.getElementById('close-shared-links-modal');
    const manageExportdataButton = document.getElementById('manageExportdataButton');
    
    const exportDataModal = document.getElementById('exportDataModal');
    const cancelRequestDataReportButton = document.getElementById('cancelRequestDataReportButton');
    const confirmRequestDataReportButton = document.getElementById('confirmRequestDataReportButton');

    const deleteAccountButton = document.getElementById('deleteAccountButton');
    const deleteAccountModal = document.getElementById('deleteAccountModal');
    const cancelDeleteAccountButton = document.getElementById('cancelDeleteAccountButton');
    const confirmDeleteAccountButton= document.getElementById('confirmDeleteAccountButton');

    const enableButton = document.getElementById('enableButton');
    const enableMultifactorAuthenticationModal = document.getElementById('enableMultifactorAuthenticationModal');
    const cancelEnableMultifactorAuthenticationButton = document.getElementById('cancelEnableMultifactorAuthenticationButton');
    const enableMFAButton= document.getElementById('enableMFAButton');
    
    const gridContainer = document.querySelector('.grid-container');

    menuButton.addEventListener('click', function() {
        sidebar.classList.toggle('expanded');
        gridContainer.classList.toggle('expanded'); // Toggle class for grid layout

        if (sidebar.classList.contains('expanded')) {
            chatHistoryContainer.style.display = 'block'; // Show chat history
        } else {
            chatHistoryContainer.style.display = 'none'; // Hide chat history
        }
    });
   
    accountButton.addEventListener('click', function() {
        if (accountPopup.style.display === 'block') {
            accountPopup.style.display = 'none';
        } else {
            accountPopup.style.display = 'block';
        }
    });
    
    document.addEventListener('click', function(event) {
        if (!accountButton.contains(event.target) && !accountPopup.contains(event.target)) {
            accountPopup.style.display = 'none';
        }
    });

    settingsLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        mainModal.style.display = 'block';
    });
    closeMainModal.addEventListener('click', function() {
        mainModal.style.display = 'none';
    });
    
    manageButton.addEventListener('click', function() {
        mainModal.style.display = 'none'; // Hide the main modal
        nestedModal.style.display = 'flex'; // Show the nested modal
    });
    // Close nested modal when close button is clicked
    closeNestedModal.addEventListener('click', function() {
        nestedModal.style.display = 'none'; // Hide the nested modal
    });
    archiveButton.addEventListener('click', function() {
        mainModal.style.display = 'none'; // Hide the main modal
        archiveAllModal.style.display = 'flex'; // Show the archive all modal 
    });
    cancelArchiveAllButton.addEventListener('click', function() {
        archiveAllModal.style.display = 'none'; // Hide the delete modal
    });
    // Confirm Archive All Button
    confirmArchiveAllButton.addEventListener('click', function() {
        // Implement archive logic here
        console.log('Archived all chats');
        archiveAllModal.style.display = 'none'; // Hide the delete modal
    });

    deleteButton.addEventListener('click', function() {
        mainModal.style.display = 'none'; // Hide the main modal
        deleteModal.style.display = 'flex'; // Show the delete modal
    });
    
    cancelDeleteButton.addEventListener('click', function() {
        deleteModal.style.display = 'none'; // Hide the delete modal
    });
    // Confirm Delete Button
    confirmDeleteButton.addEventListener('click', function() {
        // Implement deletion logic here
        console.log('Chat history cleared');
        deleteModal.style.display = 'none'; // Hide the delete modal
    });

    manageSharedLinksButton.addEventListener('click', function() {
        mainModal.style.display = 'none';
        sharedLinksModal.style.display = 'flex';
    });

    closeSharedLinksModal.addEventListener('click', function() {
        sharedLinksModal.style.display = 'none';
    });

    manageExportdataButton.addEventListener('click', function() {
        mainModal.style.display = 'none'; // Hide the main modal
        exportDataModal.style.display = 'flex'; // Show the export data modal
    });

    
    cancelRequestDataReportButton.addEventListener('click', function() {
        mainModal.style.display = 'none'; // Hide the main modal
        exportDataModal.style.display = 'none'; // Hide the  Enable Multifactor Authentication modal
    });

    confirmRequestDataReportButton.addEventListener('click', function() {
        
        console.log('Data report requested');
        exportDataModal.style.display = 'none'; // Hide the Enable Multifactor Authentication modal
    });

    deleteAccountButton.addEventListener('click', function() {
        mainModal.style.display = 'none'; // Hide the main modal
        deleteAccountModal.style.display = 'flex'; // Show the delete account modal
    });

    cancelDeleteAccountButton.addEventListener('click', function() {
        mainModal.style.display = 'none'; // Hide the main modal
        deleteAccountModal.style.display = 'none'; // Hide the  Enable Multifactor Authentication modal
    });

    confirmDeleteAccountButton.addEventListener('click', function() {
    
        console.log('Account deleted');
        deleteAccountModal.style.display = 'none'; // Hide the Enable Multifactor Authentication modal
    });

    enableButton.addEventListener('click', function() {
        mainModal.style.display = 'none'; // Hide the main modal
        enableMultifactorAuthenticationModal.style.display = 'flex'; // Show the export data modal
    });

    cancelEnableMultifactorAuthenticationButton.addEventListener('click', function() {
        mainModal.style.display = 'none'; // Hide the main modal
        enableMultifactorAuthenticationModal.style.display = 'none'; // Hide the  Enable Multifactor Authentication modal
    });

    enableMFAButton.addEventListener('click', function() {
        // Implement enable MFA logic here
        console.log('MFA enabled');
        enableMultifactorAuthenticationModal.style.display = 'none'; // Hide the Enable Multifactor Authentication modal
    });

    // Close the popup if clicked outside
    window.addEventListener('click', function(event) {
        if (event.target !== accountPopup && event.target !== accountButton && !accountPopup.contains(event.target)) {
            console.log('Clicked outside popup'); // Debugging line
            popup.style.display = 'none';
        }
    });

    const sidebarLinks = document.querySelectorAll('.modal-sidebar a');
    const sections = document.querySelectorAll('.modal-section');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });

        sidebarLinks.forEach(link => {
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    // handle send button
    sendButton.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message) {
            // Process the message (send it to the server, add it to the chat window, etc.)
            console.log('Sending message:', message);
            chatInput.value = ''; // Clear the input field after sending
        } else {
            console.log('Message is empty');
        }
    });

    // Handle upload button click
    uploadFilesButton.addEventListener('click', function() {
        // Trigger file input
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '*/*';
        fileInput.style.display = 'none';
        document.body.appendChild(fileInput);

        fileInput.addEventListener('change', function(event) {
            const files = event.target.files;
            if (files.length > 0) {
                // Handle file upload (upload to server, display in chat, etc.)
                console.log('Files selected:', files);
            }
        });

        fileInput.click(); // Open file dialog
    });

    // Handle microphone button click
    microphoneButton.addEventListener('click', function() {
        // Handle microphone functionality (start recording, etc.)
        console.log('Microphone button clicked');
  
    });

     // Function to load archived chats
    function loadArchivedChats() {
        fetch('/api/archived-chats')
            .then(response => response.json())
            .then(data => {
                const container = document.querySelector('.modal-container');
                container.innerHTML = ''; // Clear existing content

                if (data.chats.length === 0) {
                    // Display a message if there are no archived chats
                    const noChatsMessage = document.createElement('div');
                    noChatsMessage.classList.add('no-chats-message');
                    noChatsMessage.textContent = 'No archived chats.';
                    container.appendChild(noChatsMessage);
                } else {
                    // Loop through and display each archived chat
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
                }
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

    const chatHistoryNav = document.getElementById('chatHistoryNav');

    const mockChatHistory = [
        { id: 1, name: "Chat 1", created_date: "2024-08-28" },
        { id: 2, name: "Chat 2", created_date: "2024-08-27" },
        
    ];

    console.log('Chat History Data:', mockChatHistory);


    function displayChatHistory(chats) {
        console.log('Display Chat History function called');
        chatHistoryNav.innerHTML = ''; // Clear existing content
        

        // Organize chats by date
        const groupedChats = chats.reduce((acc, chat) => {
            const date = chat.created_date;
            if (!acc[date]) acc[date] = [];
            acc[date].push(chat);
            return acc;
        }, {});

        console.log('Grouped Chats:', groupedChats);

        // Append each group of chats to the navigation
        for (const date in groupedChats) {
            const dateHeader = document.createElement('div');
            dateHeader.classList.add('date-header');
            dateHeader.textContent = date === 'today' ? 'Today' : date;
            chatHistoryNav.appendChild(dateHeader);

            groupedChats[date].forEach(chat => {
                const chatLink = document.createElement('a');
                chatLink.classList.add('chat-link');
                chatLink.setAttribute('href', '#');
                chatLink.setAttribute('data-chat-id', chat.id);
                chatLink.textContent = chat.name;

                console.log('Adding Chat Link:', chat.name);


                // Options icon
                const optionsIcon = document.createElement('span');
                optionsIcon.classList.add('options-icon');
                optionsIcon.innerHTML = '⋮';
                chatLink.appendChild(optionsIcon);

                chatHistoryNav.appendChild(chatLink);
            });
        }
    }

    // Call the displayChatHistory function with mock data
    displayChatHistory(mockChatHistory);
});