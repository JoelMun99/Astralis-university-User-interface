document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.getElementById('menuButton');
    const accountButton = document.getElementById('account-button');
    const accountPopup = document.getElementById('account-popup');
    const modal = document.getElementById('modal');
    const closeButton = document.getElementById('close-button');
    const settingsLink = document.getElementById('settings-link');
    const chatbarContainer = document.getElementById('chatbarContainer');
    const menuButtonTopbar = document.getElementById('menuButtonTopbar');
    const chatHistorySidebar = document.getElementById('chatHistorySidebar');
    const closeChatHistory = document.getElementById('closeChatHistory');

    menuButton.addEventListener('click', function() {
        console.log('Menu button clicked'); // Debugging line
        sidebar.classList.toggle('expanded');
        console.log('Sidebar expanded state:', sidebar.classList.contains('expanded'));
        if (sidebar.classList.contains('expanded')) {
            console.log('Expanding sidebar, shifting chat bar');
            document.querySelector('.grid-container').style.gridTemplateColumns = '250px 1fr';
            chatbarContainer.classList.add('shifted'); // Shift chat bar to make room for expanded sidebar
        } else {
            console.log('Collapsing sidebar, resetting chat bar');
            document.querySelector('.grid-container').style.gridTemplateColumns = '70px 1fr';
            chatbarContainer.classList.remove('shifted'); 
        }
    });

    menuButtonTopbar.addEventListener('click', function() {
        console.log('Topbar menu button clicked');
        chatHistorySidebar.classList.toggle('active');
        overlay.classList.add('active');
    });

    closeChatHistory.addEventListener('click', function() {
        chatHistorySidebar.classList.remove('active');
        overlay.classList.remove ('active');
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
        modal.style.display = 'block';
    });
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });     
    // Close the popup if clicked outside
    window.addEventListener('click', function(event) {
        if (event.target !== popup && event.target !== accountButton && !popup.contains(event.target)) {
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
    // Initial call to set up the menu button position
    handleResize();

    // Handle resize event to move the menu button
    window.addEventListener('resize', handleResize);
});
