let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
    const loaderWrapper = document.querySelector(".loader-wrapper");
    if (loaderWrapper) {
        loaderWrapper.style.transition = "opacity 1s";
        loaderWrapper.style.opacity = "0";
        setTimeout(() => {
            loaderWrapper.style.display = "none";
        }, 1000); // 1000ms = 1s (gelijk aan "slow")
    }
});