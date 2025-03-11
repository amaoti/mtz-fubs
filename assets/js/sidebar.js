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
});
