window.addEventListener("DOMContentLoaded",function() {
    setTimeout(function() {
        let img = document.querySelector(".img");
        img.style.transform = "translateY(0px)";
        img.style.opacity = 1;
        img.style.filter = "brightness(100%)";

        let element = document.querySelector(".element");
        element.style.transform = "translate(0)";
        element.style.opacity = 1;
        element.style.filter = "brightness(100%)";
    },1000);
});