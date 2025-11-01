AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Newsletter form handling
document.querySelector('.footer-subscribe').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    this.reset();
});
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        // Get current position's latitude and longitude
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Dynamically set the iframe src URL with the current location
        const iframeUrl = `https://www.google.com/maps/embed?pb=${latitude},${longitude}&zoom=15`;

        // Set the iframe's source URL to the one with the live location
        document.getElementById("liveLocationMap").src = iframeUrl;
    }, function (error) {
        // Handle error (e.g., user denied geolocation access)
        alert("Unable to retrieve your location. Error: " + error.message);
    });
} else {
    alert("Geolocation is not supported by your browser.");
}

document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust the scroll value as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
