document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tabbutton');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const pageName = this.textContent.toLowerCase().replace(/\s+/g, '-');
            navigateToPage(pageName);
        });
    });
    
    function navigateToPage(pageName) {
        // Hide all content
        document.querySelectorAll('.page-content').forEach(page => {
            page.style.display = 'none';
        });
        
        // Show selected page content
        const selectedPage = document.getElementById(pageName);
        if (selectedPage) {
            selectedPage.style.display = 'block';
        }
        
        // Update active tab
        tabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    }
    
    // Load default page
    navigateToPage('home');
});