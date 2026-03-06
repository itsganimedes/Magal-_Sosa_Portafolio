const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav_buttons");
const body = document.body;
const overlay = document.querySelector(".overlay");

const backToTop = document.querySelector(".back_to_top");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    body.classList.toggle("active");
    hamburger.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    nav.classList.remove("active");
    hamburger.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("active");
});

window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        backToTop.classList.add("active");
    } else {
        backToTop.classList.remove("active");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});