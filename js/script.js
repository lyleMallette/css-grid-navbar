document.querySelector("#hamburger").addEventListener("click", toggleMenu);

function toggleMenu() {
    document.querySelector(".nav-list").classList.toggle("toggle");
}