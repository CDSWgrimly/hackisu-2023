function changeColor() {
    let abc = document.getElementById("abc");
    let red = document.getElementById("redSlider").value;
    let green = document.getElementById("greenSlider").value;
    let blue = document.getElementById("blueSlider").value;
    abc.style.color = `rgb(${red}, ${green}, ${blue})`;
    console.log(red);
}