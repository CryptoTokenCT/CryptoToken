// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the loading spinner element
    const loadingSpinner = document.getElementById('loading-spinner');

    // Hide the spinner once the page has fully loaded
    if (loadingSpinner) {
        loadingSpinner.style.display = 'none';
    }

    console.log('Page loaded successfully, loading spinner removed.');
});

// Example: Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Example: Add hover effect to navigation items
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseenter', function () {
        this.style.color = '#ffd700'; // Change text color to gold on hover
    });
    link.addEventListener('mouseleave', function () {
        this.style.color = ''; // Revert to default text color
    });
});

// Example: Testimonial slider (optional future feature)
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
if (testimonials.length > 0) {
    setInterval(() => {
        testimonials[currentTestimonial].style.display = 'none'; // Hide current testimonial
        currentTestimonial = (currentTestimonial + 1) % testimonials.length; // Move to the next
        testimonials[currentTestimonial].style.display = 'block'; // Show next testimonial
    }, 5000); // Change every 5 seconds
}
