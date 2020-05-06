var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2')
var body = document.getElementById('body')
var nameGradient = document.getElementById('nameGradient')
var randomizerBtn = document.getElementById('randomizerBtn')
var slider = document.getElementById('myRange')
var currentSliderValue = document.getElementById('currentSliderValue')


function colorInput() {
    body.style.background = "linear-gradient(" +
        slider.value + "deg, " +
        color1.value +
        ", " +
        color2.value +
        ")";

    nameGradientDisplay();
}

function nameGradientDisplay() {
    nameGradient.innerHTML = "linear-gradient(" +
        slider.value + "deg, " +
        color1.value +
        ", " +
        color2.value +
        ")";
}

nameGradientDisplay();

function randomizeColor() {
    var randomColor1 = "#000000".replace(/0/g, function() {
        return (~~(Math.random() * 16)).toString(16);
    });
    var randomColor2 = "#000000".replace(/0/g, function() {
        return (~~(Math.random() * 16)).toString(16);
    });

    body.style.background = "linear-gradient(" +
        slider.value + "deg, " +
        randomColor1 +
        ", " +
        randomColor2 +
        ")";

    color1.value = randomColor1
    color2.value = randomColor2

    nameGradientDisplay();
}


function randomizeAngle() {

    // alert(slider.value);
    body.style.background = "linear-gradient(" +
        slider.value + "deg, " +
        color1.value +
        ", " +
        color2.value +
        ")";

    nameGradient.innerHTML = "linear-gradient(" +
        slider.value + "deg, " +
        color1.value +
        ", " +
        color2.value +
        ")";

}


color1.addEventListener("input", colorInput);
color2.addEventListener("input", colorInput);
randomizerBtn.addEventListener("click", randomizeColor);
slider.addEventListener("input", randomizeAngle);


// Copy Paste
var span = document.querySelector("span");

span.onclick = function() {
    document.execCommand("copy");
}

span.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", span.textContent);
        console.log(event.clipboardData.getData("text"))
    } {
        alert("Copied:" + span.innerHTML);
    }
});