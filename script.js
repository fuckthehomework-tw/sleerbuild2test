// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
}

// Function to handle main clouds based on search bar visibility
function handleMainClouds() {
    const leftCloud = document.querySelector('.clouds.left');
    const rightCloud = document.querySelector('.clouds.right');
    const searchBar = document.querySelector('.search-bar');

    if (!leftCloud || !rightCloud || !searchBar) return;

    if (isInViewport(searchBar)) {
        
        leftCloud.classList.add('visible');
        rightCloud.classList.add('visible');

        const searchBarTop = searchBar.getBoundingClientRect().top;
        const offsetPosition = searchBarTop - 200; // Adjusted offset

        leftCloud.style.top = `${offsetPosition}px`;
        rightCloud.style.top = `${offsetPosition}px`;

        leftCloud.style.position = 'fixed';
        rightCloud.style.position = 'fixed';
    } else {
        leftCloud.classList.remove('visible');
        rightCloud.classList.remove('visible');
        leftCloud.style.position = '';
        rightCloud.style.position = '';
    }
}

// Function to handle new clouds based on home section visibility
function handleNewClouds() {
    const newCloudsLeft = document.querySelector(".clouds.new-left");
    const newCloudsRight = document.querySelector(".clouds.new-right");
    const homeSection = document.querySelector(".home-section");

    if (!newCloudsLeft || !newCloudsRight || !homeSection) return;

    newCloudsLeft.style.opacity = '0';
    newCloudsRight.style.opacity = '0';

    if (isInViewport(homeSection)) {
        newCloudsLeft.classList.add("visible");
        newCloudsRight.classList.add("visible");

        const homeSectionTop = homeSection.getBoundingClientRect().top;
        const offsetPosition = homeSectionTop - 20;

        newCloudsLeft.style.top = `${offsetPosition+50}px`;
        newCloudsRight.style.top = `${offsetPosition+50}px`;

        newCloudsLeft.style.position = 'fixed';
        newCloudsRight.style.position = 'fixed';

        

        newCloudsLeft.style.transition = 'opacity 1s ease';
        newCloudsRight.style.transition = 'opacity 1s ease';
        newCloudsLeft.style.opacity = '1';
        newCloudsRight.style.opacity = '1';
    } else {
        newCloudsLeft.classList.remove("visible");
        newCloudsRight.classList.remove("visible");

        newCloudsLeft.style.position = '';
        newCloudsRight.style.position = '';

        newCloudsLeft.style.opacity = '0';
        newCloudsRight.style.opacity = '0';
    }
}

// Combined function to handle all cloud effects
function handleClouds() {
    handleMainClouds();
    handleNewClouds();
}

// Event listener for scroll to update cloud positions
window.addEventListener('scroll', handleClouds);

// Initial check on page load
document.addEventListener("DOMContentLoaded", handleClouds);











//music section
// Get the audio element and sound icon button (one time declaration)
const audio = document.getElementById('background-music');
const soundButton = document.getElementById('sound');
const tooltip = document.querySelector('.tooltip');


// Function to toggle play/pause and mute/unmute
function toggleSound() {
    if (audio.paused) {
        audio.play();
        soundButton.innerHTML = "🔊"; // Show sound icon
    } else {
        audio.pause();
        soundButton.innerHTML = "🔇"; // Show mute icon when paused
    }
}

// Toggle mute/unmute when clicking the sound button
soundButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        soundButton.innerHTML = "🔊"; // Show sound icon when playing
    } else {
        audio.muted = !audio.muted;  // Mute/unmute the audio
        soundButton.innerHTML = audio.muted ? "🔇" : "🔊"; // Change icon based on mute state
    }
});

// Handle the dropdown menu toggle
const moreButton = document.getElementById('more');
const dropdownMenu = document.getElementById('dropdown-menu');

// Toggle dropdown menu visibility on click
moreButton.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '' ? 'block' : 'none';
});

// Close the dropdown menu when clicking outside of it
window.addEventListener('mouseover', (e) => {
    const isClickInside = moreButton.contains(e.target) || dropdownMenu.contains(e.target);
    if (!isClickInside) {
        dropdownMenu.style.display = 'none';
    }
});










// Get the elements for volume adjustment
const adjustVolumeButton = document.getElementById('adjust-volume');
const volumeSliderContainer = document.getElementById('volume-slider-container');

// Function to toggle Adjust Volume button and volume slider
adjustVolumeButton.addEventListener('click', () => {
    // Toggle the visibility of the volume slider
    volumeSliderContainer.style.display = volumeSliderContainer.style.display === 'block' ? 'none' : 'block';

    // Hide/show the text in the Adjust Volume button
    adjustVolumeButton.classList.toggle('active'); // Hide the text when slider is visible
});

// Hide the volume slider and revert the text when mouse leaves the slider container
volumeSliderContainer.addEventListener('mouseleave', () => {
    volumeSliderContainer.style.display = 'none'; // Hide the slider
    adjustVolumeButton.classList.remove('active'); // Show the text again
});

// Get the audio player and volume slider
const volumeSlider = document.getElementById('volume-slider');

// Set the initial volume based on the slider's value
audio.volume = volumeSlider.value;

// Add an event listener to update the volume when the slider is changed
volumeSlider.addEventListener('input', function () {
    audio.volume = volumeSlider.value;
});





//start/resume music
// Function to start/resume music
function playMusic() {
    if (audio.paused) {
        audio.play();
    }
}

// Function to stop music
function stopMusic() {
    audio.pause();
}

// Variable to track if the tooltip has been clicked
let tooltipClicked = false;

// Add event listener to sound button
soundButton.addEventListener('mouseover', () => {
    // Show the tooltip when hovering over the button, but only if it's not clicked
    if (!tooltipClicked) {
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
    }
});

soundButton.addEventListener('mouseout', () => {
    // Hide the tooltip when mouse leaves the button
    if (!tooltipClicked) {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    }
});

// Add event listener for click to stop showing the tooltip
soundButton.addEventListener('click', () => {
    // Set the flag to true to stop showing the tooltip after click
    tooltipClicked = true;
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0'; // Hide it immediately after click
});


// scary part
document.addEventListener('DOMContentLoaded', function() {
    // Get the audio element and the "why home page" link
    const whyHomeMusic = document.getElementById('why-home-music');
    const whyHomePageLink = document.getElementById('why-home-page');

    // Play the new music when the "Why Home Page" link is clicked
    whyHomePageLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        
        // Play the new music and ensure it loops
        whyHomeMusic.play();
    });
});











// Select elements
const prevButton = document.querySelector('.prev');  // Previous button
const nextButton = document.querySelector('.next');  // Next button
const slides = document.querySelectorAll('.slide');  // All slides
const sliderImages = document.querySelector('.slider-images');  // Slider container
const prevButtonImg = prevButton.querySelector('img');  // Previous button image
const nextButtonImg = nextButton.querySelector('img');  // Next button image
let currentIndex = 0;  // Start at the first image

// Image paths for the preview images of prev/next buttons
const imagePaths = Array.from(slides).map(slide => slide.querySelector('img').src);

// Function to update the slide
function updateSlider() {
    const newTransform = `translateX(-${currentIndex * 100}%)`;
    sliderImages.style.transform = newTransform;

    // Update the preview images for the Previous and Next buttons
    updatePreviewImages();
}

// Function to update the preview images for both buttons
function updatePreviewImages() {
    // Calculate the previous and next indices correctly, ensuring looping works
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;  // Make sure the index wraps around
    const nextIndex = (currentIndex + 1) % slides.length;

    // Set the preview images for the Previous and Next buttons
    prevButtonImg.src = imagePaths[prevIndex];
    nextButtonImg.src = imagePaths[nextIndex];

    // Edge Case Handling: If at the first or last image, the preview buttons should show the correct images
    if (currentIndex === 0) {
        prevButtonImg.src = imagePaths[slides.length - 1]; // Show the last image as preview for 'Previous' button
    }
    if (currentIndex === slides.length - 1) {
        nextButtonImg.src = imagePaths[0]; // Show the first image as preview for 'Next' button
    }
}

// Event listener for the Previous button
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;  // Decrement index and loop back to the last slide
    updateSlider();
});

// Event listener for the Next button
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;  // Increment index and loop back to the first slide
    updateSlider();
});

// Initialize the first slide and preview images
updateSlider();













// Art Page Scroll Background Transition
if (document.body.classList.contains('art-page')) {
    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY || window.pageYOffset;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = scrollY / maxScroll;

        // Start and end color values for the transition
        const startColor = { r: 13, g: 10, b: 43 };  // #0d0a2b
        const endColor = { r: 27, g: 23, b: 59 };   // #1b173b

        // Calculate the current color values based on scroll percentage
        const red = Math.round(startColor.r + (scrollPercentage * (endColor.r - startColor.r)));
        const green = Math.round(startColor.g + (scrollPercentage * (endColor.g - startColor.g)));
        const blue = Math.round(startColor.b + (scrollPercentage * (endColor.b - startColor.b)));

        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

        // Reset to the initial color when near the top of the page
        if (scrollY <= 10) {
            document.body.style.backgroundColor = "#0d0a2b";  // Dark blue at the top
        }
    });
}





































let currentImageIndex = 1;  // Keep track of the image index
let isLoading = false;      // Flag to prevent multiple loads
const totalImages = 22;     // Total number of images to load
const initialLoad = 3;      // Number of images to load initially
const imagesPerLoad = 5;    // Number of images to load at a time

// Function to preload images
function preloadImages(numberOfImages) {
    const promises = [];
    for (let i = 0; i < numberOfImages; i++) {
        if (currentImageIndex > totalImages) break;

        const img = new Image();
        img.src = `photo/scollpics/${currentImageIndex}.jpg`;  // Image path
        img.alt = `Image ${currentImageIndex}`;

        // Create a promise that resolves when the image is loaded
        const promise = new Promise((resolve, reject) => {
            img.onload = resolve;  // Resolve when image is fully loaded
            img.onerror = reject;  // Reject if there's an error
        });

        promises.push(promise);  // Add promise to the array
        currentImageIndex++;  // Increment the image index for the next batch
    }
    return promises;  // Return all promises for image loading
}

// Function to load images into the gallery after they are preloaded
function loadImages(numberOfImages) {
    const gallery = document.getElementById("infinite-scroll-gallery");
    const loadingMessage = document.getElementById("loading-message");

    // Show the loading message while preloading
    loadingMessage.style.display = "block"; // Make the loading message visible

    // Preload images
    const preloadPromises = preloadImages(numberOfImages);

    // Wait for all preloading promises to resolve
    Promise.all(preloadPromises).then(() => {
        // Once images are loaded, hide the loading message
        loadingMessage.style.display = "none";

        // Now, append the images to the gallery
        for (let i = 0; i < numberOfImages; i++) {
            if (currentImageIndex - numberOfImages + i > totalImages) break;  // Prevent loading more than available images

            const img = document.createElement("img");
            img.src = `photo/scollpics/${currentImageIndex - numberOfImages + i}.jpg`;  // Image path
            img.alt = `Image ${currentImageIndex - numberOfImages + i}`;
            img.classList.add("gallery-photo");

            // Append the image to the gallery section
            gallery.appendChild(img);
        }

        isLoading = false; // Allow further loading
    }).catch(() => {
        console.error("Error loading images");
        isLoading = false; // Allow further loading in case of error
    });
}

// Function to handle infinite scrolling
function loadMoreImages() {
    if (isLoading || currentImageIndex > totalImages) return; // Prevent multiple loads or excess loading

    isLoading = true; // Set the loading flag
    loadImages(imagesPerLoad);    // Load 5 images at a time
}

// Initially load the first 3 images (without showing loading message)
loadImages(initialLoad);

// Infinite scroll trigger
window.addEventListener('scroll', () => {
    // Check if the user has scrolled to the bottom
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        loadMoreImages();  // Load more images when near bottom
    }
});

// Modal functionality
document.addEventListener('click', function (event) {
    const modal = document.getElementById('photo-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const closeModal = document.getElementById('close-modal');

    // Check if a gallery-photo was clicked
    if (event.target.classList.contains('gallery-photo')) {
        modal.style.display = 'block';
        modalImage.src = event.target.src; // Set the modal image source
        modalCaption.textContent = event.target.getAttribute('data-caption'); // Set the modal caption
    }

    // Close modal when the close button is clicked
    closeModal.onclick = function () {
        modal.style.display = 'none';
    };

    // Close modal when clicking outside the modal content
    window.onclick = function (e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    };
});







const modalContent = document.querySelector(".modal-content");
const modalImage = document.getElementById("modal-image");

modalImage.addEventListener("load", () => {
    // Ensure the image has loaded before extracting the color
    const colorThief = new ColorThief();
    const dominantColor = colorThief.getColor(modalImage); // Get the dominant color (an array: [r, g, b])

    // Convert the RGB color to a CSS rgba string
    const rgbaColor = `rgba(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}, 0.2)`;

    // Set the modal background to the extracted color with transparency
    modalContent.style.background = rgbaColor;

    // Optional: Adjust the border color to match
    modalContent.style.border = `1px solid rgba(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}, 0.5)`;
});





