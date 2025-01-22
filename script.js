// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded triggered. Removing spinner.');
    removeSpinner();
});

// Backup: Ensure the spinner is removed after 5 seconds
setTimeout(() => {
    console.log('Backup timeout triggered. Removing spinner.');
    removeSpinner();
}, 5000);

// Function to safely remove the loading spinner
function removeSpinner() {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (loadingSpinner) {
        loadingSpinner.style.display = 'none'; // Hide spinner
        console.log('Loading spinner removed.');
    } else {
        console.log('Loading spinner not found.');
    }
}

// Smooth scrolling for navigation links
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

// Add hover effect to navigation items
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseenter', function () {
        this.style.color = '#ffd700'; // Change text color to gold on hover
    });
    link.addEventListener('mouseleave', function () {
        this.style.color = ''; // Revert to default text color
    });
});

// Testimonial slider (optional future feature)
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
if (testimonials.length > 0) {
    setInterval(() => {
        testimonials[currentTestimonial].style.display = 'none'; // Hide current testimonial
        currentTestimonial = (currentTestimonial + 1) % testimonials.length; // Move to the next
        testimonials[currentTestimonial].style.display = 'block'; // Show next testimonial
    }, 5000); // Change every 5 seconds
}
