function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}





// script.js
let currentIndex = 0;
const images = document.querySelectorAll('.about-pic');

function showNextImage() {
    // Hide the current image
    images[currentIndex].classList.remove('visible');
    
    // Update the index to the next image
    currentIndex = (currentIndex + 1) % images.length;
    
    // Show the next image
    images[currentIndex].classList.add('visible');
}

// Initial display
images[currentIndex].classList.add('visible');

// Change image every 2 seconds
setInterval(showNextImage, 2000);
