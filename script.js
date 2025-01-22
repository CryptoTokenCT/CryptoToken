// Function to remove the spinner
function removeSpinner() {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (loadingSpinner) {
        loadingSpinner.style.display = 'none'; // Hide the spinner
        console.log('Loading spinner successfully removed.');
    } else {
        console.error('Loading spinner element not found.');
    }
}

// Ensure the spinner is removed after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event triggered.');
    removeSpinner();
});

// Backup: Ensure the spinner is removed after a maximum of 5 seconds
setTimeout(() => {
    console.log('Backup timeout triggered. Removing spinner.');
    removeSpinner();
}, 5000);
