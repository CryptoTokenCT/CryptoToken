// Function to remove the spinner
function removeSpinner() {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (loadingSpinner) {
        loadingSpinner.style.display = 'none';
        console.log('Spinner removed successfully.');
    } else {
        console.error('Spinner element not found.');
    }
}

// DOM Content Loaded Listener
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded. Removing spinner...');
    removeSpinner();
});

// Backup: Ensure spinner is removed after 5 seconds
setTimeout(() => {
    console.log('Backup timeout triggered. Removing spinner...');
    removeSpinner();
}, 5000);
