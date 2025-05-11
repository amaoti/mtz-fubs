document.addEventListener("DOMContentLoaded", function () {
    let sidebar = document.querySelector(".sidebar");
    let sidebarToggle = document.querySelector(".sidebar-toggle");
    let sidebarLinks = document.querySelectorAll(".sidebar a");

    function toggleSidebar() {
        sidebar.classList.toggle("active");
        if (sidebar.classList.contains("active")) {
            sidebarToggle.textContent = "🗙 Stories";
        } else {
            sidebarToggle.textContent = "☰ Stories";
        }
    }

    sidebarToggle.addEventListener("click", toggleSidebar);

    sidebarLinks.forEach(link => {
        link.addEventListener("click", () => {
         //   sidebar.classList.remove("active");
         //   sidebarToggle.textContent = "☰ Stories";
        });
    });

    // Add glow effect on load, then remove it after 2 seconds
    setTimeout(() => {
        sidebarToggle.classList.add("glow-effect");
        setTimeout(() => {
            sidebarToggle.classList.remove("glow-effect");
        }, 2000);
    }, 1000);
});