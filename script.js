const button = document.getElementById("loadBtn");
const frameContainer = document.getElementById("frameContainer");
const gameFrame = document.getElementById("gameFrame");

button.addEventListener("click", function() {
    gameFrame.src = "https://delatrune-tallmii.netlify.app/";
    frameContainer.style.display = "block";
    button.style.display = "none";
});
