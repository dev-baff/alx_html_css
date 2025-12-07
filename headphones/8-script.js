// Hamburger Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Create hamburger icon
  const navbar = document.querySelector('.navbar');
  const hamburger = document.createElement('div');
  hamburger.className = 'hamburger';
  hamburger.innerHTML = `
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
  `;
  
  // Insert hamburger before navbar
  navbar.parentNode.insertBefore(hamburger, navbar);
  
  // Toggle menu on hamburger click
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navbar.classList.toggle('active');
  });
  
  // Close menu when clicking on a nav link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navbar.classList.remove('active');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideNav = navbar.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnHamburger && navbar.classList.contains('active')) {
      hamburger.classList.remove('active');
      navbar.classList.remove('active');
    }
  });
});