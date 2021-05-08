var burger = document.querySelector(".hamburger");
var nav = document.querySelector(".header__nav");

burger.addEventListener("click", function() {
    burger.classList.toggle("hamburger--active");
    nav.classList.toggle("header__nav--active");
})