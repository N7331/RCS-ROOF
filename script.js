// script.js

// Example of a function to display an alert when a service is clicked
document.querySelectorAll('.service').forEach(service => {
    service.addEventListener('click', () => {
        alert('You clicked on a service!');
    });
});
