var button = document.querySelector("button");
var number1 = document.getElementById("numb1");
var number2 = document.getElementById("numb2");
function add(number1, number2) {
    return number1 + number2;
}
button.addEventListener("click", function () {
    console.log(add(+number1.value, +number2.value));
});
