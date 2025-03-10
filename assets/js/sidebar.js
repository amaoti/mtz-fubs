document.addEventListener("DOMContentLoaded", function () {
    let sidebar = document.getElementById("sidebar");
    let sidebarToggle = document.querySelector(".sidebar-toggle");

    function toggleSidebar() {
        sidebar.classList.toggle("active");
        sidebarToggle.textContent = sidebar.classList.contains("active") ? "✖ Close" : "☰ Stories";
    }

    sidebarToggle.addEventListener("click", toggleSidebar);
});
