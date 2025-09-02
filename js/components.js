// Component loader for reusable page elements
document.addEventListener('DOMContentLoaded', function() {
    // Load navbar
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        });

    // Load appropriate sidebar based on page
    const currentPage = window.location.pathname.split('/').pop();
    let sidebarComponent = 'components/sidebar.html'; // Default sidebar (no news)
    
    if (currentPage === 'index_new.html' || currentPage === '' || currentPage === 'index.html') {
        sidebarComponent = 'components/sidebar-home.html'; // Home page sidebar (with news)
    }
    
    fetch(sidebarComponent)
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-placeholder').innerHTML = data;
        });

    // Load footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});
