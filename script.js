//Toggle dark/light mode
function toggleMode() {
    document.body.classList.toggle('dark-mode');
}

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Show message on Hire me button click
    const hireButton = document.getElementById('hireMe');
    if (hireButton) {
        hireButton.addEventListener('click', function() {
            alert('Thanks for hiring me! 🎉');
        });
    }
});
