const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const body = this.nextElementSibling;

        // Toggle the current accordion body
        if (body.style.display === 'block') {
            body.style.display = 'none';
            this.classList.remove('active');
        } else {
            // Collapse other accordions
            document.querySelectorAll('.accordion-body').forEach(body => body.style.display = 'none');
            document.querySelectorAll('.accordion-header').forEach(header => header.classList.remove('active'));

            // Expand the clicked accordion
            body.style.display = 'block';
            this.classList.add('active');
        }
    });
});
