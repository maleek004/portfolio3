document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('.project-nav a');
    const projectContainers = document.querySelectorAll('.project-container');
    let currentIndex = 0;

    // Function to update active state and show project
    function updateActiveState(index) {
        // Update navigation links
        projectLinks.forEach((link, i) => {
            if (i === index) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Update project containers
        projectContainers.forEach((container, i) => {
            if (i === index) {
                container.classList.add('active');
            } else {
                container.classList.remove('active');
            }
        });

        currentIndex = index;
    }

    // Add click event listeners to navigation links
    projectLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            updateActiveState(index);
        });
    });

    // Initialize with first project
    updateActiveState(0);

    // Optional: Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            updateActiveState(currentIndex - 1);
        } else if (e.key === 'ArrowRight' && currentIndex < projectContainers.length - 1) {
            updateActiveState(currentIndex + 1);
        }
    });
}); 