function toHex(n){
    var hex = n.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

var css = document.getElementById("css-property");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randButton = document.getElementById("rand-color-button");

function changeBackgroundGradient() {
    body.style.background = "linear-gradient(to right, " 
                            + color1.value + ", " 
                            + color2.value + ")";
    css.value = body.style.background + ";";
}

color1.addEventListener("input", changeBackgroundGradient)

color2.addEventListener("input", changeBackgroundGradient)

changeBackgroundGradient();


// Random button behaviour:
randButton.addEventListener("mousedown", function buttonPressed() {
    randButton.classList.add("pressed");
})

randButton.addEventListener("click", function generateRandomBgColor() {
    var rColor1 = "#" + toHex(Math.floor(Math.random() * 256)) + toHex(Math.floor(Math.random() * 256)) + toHex(Math.floor(Math.random() * 256));
    var rColor2 = "#" + toHex(Math.floor(Math.random() * 256)) + toHex(Math.floor(Math.random() * 256)) + toHex(Math.floor(Math.random() * 256));
    color1.value = rColor1;
    color2.value = rColor2;
    changeBackgroundGradient();
    randButton.classList.remove("pressed");
})

