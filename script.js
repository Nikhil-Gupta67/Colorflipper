
let inputColor = document.getElementById("color-input");
let generateColor = document.getElementById("generate-color");
let randomColor = document.getElementById("random-color");

generateColor.addEventListener("click", () => {
    document.body.style.backgroundColor = inputColor.value;
    inputColor.value = ""; 
});

randomColor.addEventListener("click", () => {
    const random = generate_random_color();
    document.body.style.backgroundColor = random;
});

function generate_random_color() {
    let hue = Math.floor(Math.random() * 360); // 0 to 359
    let saturation = Math.floor(Math.random() * 100); // 0 to 99%
    let lightness = Math.floor(Math.random() * 100); // 0 to 99%
    let alphaValue = Math.random().toFixed(2); // 0.00 to 1.00

    let color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alphaValue})`;
    return color;
}