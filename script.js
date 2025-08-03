// Slideshow
var img0 = "assets/slides/slide0.png";
var img1 = "assets/slides/slide1.png";
var img2 = "assets/slides/slide2.png";
var img3 = "assets/slides/slide3.png";
var img4 = "assets/slides/slide4.png";

var left = document.getElementById("left-button");
var right = document.getElementById("right-button");

left.addEventListener("click", leftClick);
right.addEventListener("click", rightClick);

// Only push 5 images to match your HTML
const imgList = [];
for (let i = 0; i < 5; i++) {
    imgList.push(`assets/slides/slide${i}.png`);
}

let index = 0;

function leftClick() {
    index = (index + 1) % imgList.length;
    for (let i = 0; i < imgList.length; i++) {
        document.getElementById(`slide${i}`).src = imgList[(index + i) % imgList.length];
    }
}

function rightClick() {
    index = (index - 1 + imgList.length) % imgList.length;
    for (let i = 0; i < imgList.length; i++) {
        document.getElementById(`slide${i}`).src = imgList[(index + i) % imgList.length];
    }
}

// Initialize slideshow on page load
for (let i = 0; i < imgList.length; i++) {
    document.getElementById(`slide${i}`).src = imgList[i];
}