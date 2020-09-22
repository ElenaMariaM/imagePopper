const imagesNames = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
];

//show image
let image = document.getElementById("immageHolderId");

let randomPick = Math.round(Math.random() * (imagesNames.length - 1));

image.src = imagesNames[randomPick];