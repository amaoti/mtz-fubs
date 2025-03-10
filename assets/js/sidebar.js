document.addEventListener("DOMContentLoaded", function () {
    let sidebar = document.querySelector(".sidebar");
    let sidebarToggle = document.querySelector(".sidebar-toggle");
    let sidebarLinks = document.querySelectorAll(".sidebar a");

    function toggleSidebar() {
        sidebar.classList.toggle("active");
        sidebarToggle.classList.toggle("hidden"); 
    }

    sidebarToggle.addEventListener("click", toggleSidebar);

    sidebarLinks.forEach(link => {
        link.addEventListener("click", () => {
            sidebar.classList.remove("active");
            sidebarToggle.classList.remove("hidden"); 
        });
    });

    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
            sidebar.classList.remove("active");
            sidebarToggle.classList.remove("hidden");
        }
    });
});
