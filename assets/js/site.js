
let bigImg = document.getElementById("big");
let smallImages = document.querySelectorAll(".small");

smallImages.forEach(img => {
    img.addEventListener("click", function() {
        let tempSrc = bigImg.src;
        bigImg.src = img.src;
        img.src = tempSrc;
    });
});
