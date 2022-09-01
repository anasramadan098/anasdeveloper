let loadingCircle = document.querySelector(".loading-circle");
let loadingText = document.querySelector(".text");
let scrollDown = document.querySelector(".scroll");
let toogle = document.querySelector(".menu");
let social = document.querySelector(".social-links");
let useful = document.querySelector(".useful-links");
let span = document.querySelectorAll(".sp");


toogle.onclick = function () {
    social.classList.toggle("show")
    useful.classList.toggle("show")
}
setTimeout(function () {
    loadingCircle.style.opacity = "0"
},7500);
setTimeout(function () {
    loadingCircle.style.display = "none"
},7500);
setTimeout(function () {
    loadingText.style.display ="block"
},1500);
setTimeout(function () {
    scrollDown.style.display = "block"
    document.body.style.overflowY = "visible"
},10000)


scrollDown.onclick = function () {
    setTimeout(function () {
        span[0].style.color = "#0534f1"
        span[1].style.color = "#f16f05"
        span[2].style.color = "#05f140"
        span[3].style.color = "#f10505"
        } , 1500)
}