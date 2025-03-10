let lastScrollY = window.scrollY;
const sidebar = document.querySelector(".sidebar");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        sidebar.classList.add("hidden");
    } else {
        sidebar.classList.remove("hidden");
    }
    lastScrollY = window.scrollY;
});

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}
