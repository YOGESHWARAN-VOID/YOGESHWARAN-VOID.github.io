
// Welcome message
console.log("Welcome to my Cybersecurity Portfolio!");

// Display a message when the page loads
window.addEventListener("load", function() {
    console.log("Website loaded successfully!");
});

// Navigation click effect
const links = document.querySelectorAll(".navbar a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Navigating to: " + link.textContent);
    });
});
