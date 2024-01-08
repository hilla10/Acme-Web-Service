// Get the accordion element by its ID
const accordion = document.querySelector('.accordion');

// Get all accordion headers within the accordion element
const accordionHeaders = accordion.querySelectorAll('.accordion-header');

// Add click event listener to each accordion header
accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
        // Check if the clicked header is already active
        const isActive = this.classList.contains('active');

        // Close all accordion items
        accordionHeaders.forEach(item => {
            const content = item.nextElementSibling;
            item.classList.remove('active');
            content.style.maxHeight = null;
        });

        // Toggle the active class on the clicked header
        if (!isActive) {
            this.classList.add('active');

            // Get the sibling accordion content
            const accordionContent = this.nextElementSibling;

            // Toggle the display of the accordion content
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }
    });
});