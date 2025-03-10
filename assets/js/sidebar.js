document.addEventListener("DOMContentLoaded", function () {
    let sidebar = document.querySelector(".sidebar");
    let sidebarToggle = document.querySelector(".sidebar-toggle");
    let startOffset = sidebar.offsetTop;
    let marginTop = 20;
    let isSidebarOpen = false;

    function toggleSidebar() {
        sidebar.classList.toggle("active");
        isSidebarOpen = !isSidebarOpen;
    }

    sidebarToggle.addEventListener("click", toggleSidebar);

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;

        if (!isSidebarOpen) {
            if (scrollTop > startOffset - marginTop) {
                sidebar.style.position = "fixed";
                sidebar.style.top = marginTop + "px";
            } else {
                sidebar.style.position = "absolute";
                sidebar.style.top = startOffset + "px";
            }
        }
    });
});
