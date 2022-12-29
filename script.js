const menuBtn = document.getElementById("toggle-menu");
const menu = document.getElementById("menu");
const arrow = document.querySelectorAll(".footer-menu__header");
const quastionsArrow = document.querySelectorAll(".quastions__header");

menuBtn.addEventListener("click", showMenu);
arrow.forEach((event) => event.addEventListener("click", showFooter));
quastionsArrow.forEach((event) =>
    event.addEventListener("click", showQuastions)
);

function showMenu() {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
}

function showFooter(e) {
    e.currentTarget.nextElementSibling.classList.toggle("show");
    e.currentTarget.lastChild.previousSibling.firstChild.classList.toggle(
        "reverse"
    );
}

function showQuastions(e) {
    e.currentTarget.classList.toggle("show");
    e.currentTarget.nextElementSibling.classList.toggle("show");
    // e.currentTarget.lastChild.previousSibling.firstChild.classList.toggle(
    //     "reverse"
    // );
}
