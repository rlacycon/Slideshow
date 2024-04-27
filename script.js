//I used w3 schools to help me create fuctions
const images = [
    "assets/img.1.jpg",
    "assets/img.2.jpg",
    "assets/img.3.jpg",
    "assets/img.4.jpg",
    "assets/img.5.jpg",
    "assets/img.6.jpg",
    "assets/img.7.jpg",
    "assets/img.8.jpg",
    "assets/img.9.jpg",
    "assets/img.10.jpg",
];

let currentIndex = 0;
let intervalId;
let isPlaying = true;
let timing = 2000;

function showImage() {
    document.getElementById("slideshow").src = images[currentIndex];
}

function startSlideshow() {
    intervalId = setInterval(nextImage, timing);
}

function playPause() {
    if (isPlaying) {
        clearInterval(intervalId);
        isPlaying = false;
    } else {
        startSlideshow();
        isPlaying = true;
    }
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

document.getElementById("next").addEventListener("click", nextImage);
document.getElementById("prev").addEventListener("click", previousImage);
document.getElementById("pause").addEventListener("click", playPause);

document.getElementById("timingDropdown").addEventListener('change', function() {
    timing = parseInt(this.value, 10);
    if (isPlaying) {
        clearInterval(intervalId);
        startSlideshow();
    }
});

showImage();
startSlideshow();