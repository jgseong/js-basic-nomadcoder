const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const body = document.querySelector("body");

body.style.backgroundImage = `url(img/${chosenImage})`;
