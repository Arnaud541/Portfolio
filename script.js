const navbar = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger-menu");

const container = document.querySelector("nav .container");
const menu = document.querySelector("nav .container ul");
const test = document.querySelector(".hamburger-menu i:nth-child(1)");
console.log(test)

hamburger.addEventListener("click", () => {
    container.classList.toggle("active");
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
    menu.classList.toggle("active");
    test.classList.toggle("active");
})

