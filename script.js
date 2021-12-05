// $('.carousel').carousel({
//     interval: 2000
// })


$(".owl-carousel").owlCarousel({

    autoPlay: 3000,
    items: 4,
    itemsDesktop: [1600, 3],
    itemsDesktopSmall: [979, 3],
    center: true,
    margin: 3,
    dots: true,
    pagination: true,
    nav: true,
    loop: true,
    responsive: {
        600: {
            items: 3
        }
    }
});

var mobile_menu = document.querySelector(".menu");
var backdrop_ = document.querySelector(".backdrop")
var nav_ = document.querySelector("nav")

mobile_menu.addEventListener("click", () => {
    if (mobile_menu.src.includes("images/icon-close.svg")) {
        backdrop_.style.display = "none";
        nav_.style.display = "none";
        mobile_menu.src = "images/icon-hamburger.svg";
    } else {
        backdrop_.style.display = "block";
        nav_.style.display = "flex";
        mobile_menu.src = "images/icon-close.svg";
    }
})