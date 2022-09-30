
/*===============nav bar==============*/
// sub menu
const liClick = document.getElementById("click-li");
liClick.addEventListener("click", function () {
    const li = document.getElementById("plus-sub");
    const subMenu = document.getElementById("S-sub-menu");
    li.classList.toggle("add-menu");
    subMenu.classList.toggle("subMenutoggle");
});

// hamburger
const hamburgerOne = document.getElementById("hambergurOne");
const sidebar = document.querySelector(".S-Sidebar-left");
const navfull = document.querySelector("section.main-content-section");
const audio = new Audio("./assets/sound/click.wav");

const scrn = window.innerWidth;
var bodyClick = document.querySelector(".bodyClick");

hamburgerOne.addEventListener("click", function () {
    hamburgerOne.classList.toggle("active_hamburgerOne");
    sidebar.classList.toggle("sm-sidebar");
    navfull.classList.toggle("nav-full");
    audio.play();
    bodyClick.classList.toggle("bClick_hide");
    notif[0].classList.remove("notif_toggle");
    notif[1].classList.remove("notif_toggle");
    notif[2].classList.remove("notif_toggle");
    notif[3].classList.remove("notif_toggle");
    notif_sm[0].classList.remove("notif_toggle");
    notif_sm[1].classList.remove("notif_toggle");
    notif_sm[2].classList.remove("notif_toggle");
    notif_sm[3].classList.remove("notif_toggle");
    toggleDiv.classList.remove("toggle");
});

//bodyClick
bodyClick.addEventListener("click", function () {
    notif[0].classList.remove("notif_toggle");
    notif[1].classList.remove("notif_toggle");
    notif[2].classList.remove("notif_toggle");
    notif[3].classList.remove("notif_toggle");
    notif_sm[0].classList.remove("notif_toggle");
    notif_sm[1].classList.remove("notif_toggle");
    notif_sm[2].classList.remove("notif_toggle");
    notif_sm[3].classList.remove("notif_toggle");
    toggleDiv.classList.remove("toggle");
    if (bodyClick.classList.contains("bClick_hide")) {
        audio.play();
    } else {
        audio.pause();
    }
    sidebar.classList.remove("sm-sidebar");
    if (bodyClick.classList.contains("bClick_hide")) {
        bodyClick.classList.remove("bClick_hide");
    }
    if (hamburgerOne.classList.contains("active_hamburgerOne")) {
        hamburgerOne.classList.remove("active_hamburgerOne");
    }
    navfull.classList.remove("nav-full");
});

// profile-click
var profClick = document.querySelector(".prof-cntnt-btn");
const toggleDiv = document.getElementById("click-content-two");
profClick.addEventListener("click", function () {
    toggleDiv.classList.toggle("toggle");
    audio.play();
    notif[0].classList.remove("notif_toggle");
    notif[1].classList.remove("notif_toggle");
    notif[2].classList.remove("notif_toggle");
    notif[3].classList.remove("notif_toggle");
    notif_sm[0].classList.remove("notif_toggle");
    notif_sm[1].classList.remove("notif_toggle");
    notif_sm[2].classList.remove("notif_toggle");
    notif_sm[3].classList.remove("notif_toggle");
});

// notification click content
const notif = document.querySelectorAll(".see_notif");
for (let i = 0; i < notif.length; i++) {
    var notifSm = notif[i];

    function myfunOne() {
        notif[0].classList.toggle("notif_toggle");
        notif[1].classList.remove("notif_toggle");
        notif[2].classList.remove("notif_toggle");
        notif[3].classList.remove("notif_toggle");
        toggleDiv.classList.remove("toggle");
    }
    function myfunTwo() {
        notif[0].classList.remove("notif_toggle");
        notif[1].classList.toggle("notif_toggle");
        notif[2].classList.remove("notif_toggle");
        notif[3].classList.remove("notif_toggle");
        toggleDiv.classList.remove("toggle");
    }
    function myfunThree() {
        notif[0].classList.remove("notif_toggle");
        notif[1].classList.remove("notif_toggle");
        notif[2].classList.toggle("notif_toggle");
        notif[3].classList.remove("notif_toggle");
        toggleDiv.classList.remove("toggle");
    }
    function myfunFour() {
        notif[0].classList.remove("notif_toggle");
        notif[1].classList.remove("notif_toggle");
        notif[2].classList.remove("notif_toggle");
        notif[3].classList.toggle("notif_toggle");
        toggleDiv.classList.remove("toggle");
    }
}
const notif_sm = document.querySelectorAll(".see_notif-Sm");

for (let i = 0; i < notif_sm.length; i++) {
    function myfunFive() {
        notif_sm[0].classList.toggle("notif_toggle");
        notif_sm[1].classList.remove("notif_toggle");
        notif_sm[2].classList.remove("notif_toggle");
        notif_sm[3].classList.remove("notif_toggle");
        toggleDiv.classList.remove("toggle");
    }
    function myfunSix() {
        notif_sm[0].classList.remove("notif_toggle");
        notif_sm[1].classList.toggle("notif_toggle");
        notif_sm[2].classList.remove("notif_toggle");
        notif_sm[3].classList.remove("notif_toggle");
        toggleDiv.classList.remove("toggle");
    }
    function myfunSeven() {
        notif_sm[0].classList.remove("notif_toggle");
        notif_sm[1].classList.remove("notif_toggle");
        notif_sm[2].classList.toggle("notif_toggle");
        notif_sm[3].classList.remove("notif_toggle");
        toggleDiv.classList.remove("toggle");
    }
    function myfunEight() {
        notif_sm[0].classList.remove("notif_toggle");
        notif_sm[1].classList.remove("notif_toggle");
        notif_sm[2].classList.remove("notif_toggle");
        notif_sm[3].classList.toggle("notif_toggle");
        toggleDiv.classList.remove("toggle");
    }
}



