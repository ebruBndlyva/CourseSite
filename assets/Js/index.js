
const sliders = document.querySelectorAll(".slide")
const next = document.querySelector(".next")
const prev = document.querySelector(".back")
const dots = document.querySelectorAll(".dots-container")
let counter = 0
next.addEventListener("click", function () {

    sliders[counter].style.animation = "next1 0.5s ease-in forwards";
    if (counter >= sliders.length - 1) {
        counter = 0
    } else {
        counter++
    }
    sliders[counter].style.animation = "next2 0.5s ease-in forwards";


})
prev.addEventListener("click", function () {
    sliders[counter].style.animation = "prev1 0.5s ease-in forwards";
    if (counter == 0) {
        counter = sliders.length - 1
    } else {
        counter--
    }
    sliders[counter].style.animation = "prev2 0.5s ease-in forwards";


})