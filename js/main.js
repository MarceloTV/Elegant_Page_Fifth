const carousel = new Glide(".glide", {
    type: "carousel",
    autoplay: 4500,
    animationDuration: 1000
});

carousel.mount();

const open_menu = document.getElementById("open");
const mobile_menu = document.getElementById("menu");
const close_menu = document.getElementById("close");

function menu(e){
    mobile_menu.classList.toggle("show");
}

open_menu.onclick = menu;
close_menu.onclick = menu;
