document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById('popup').style.display = 'flex'; // Show the popup
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none'; // Hide the popup
});
