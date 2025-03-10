document.addEventListener("DOMContentLoaded", function () {
    let sidebar = document.querySelector(".sidebar");
    let startOffset = sidebar.offsetTop;
    let marginTop = 20; // Space from the top when scrolling

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;

        if (scrollTop > startOffset - marginTop) {
            sidebar.style.position = "fixed";
            sidebar.style.top = marginTop + "px";
        } else {
            sidebar.style.position = "absolute";
            sidebar.style.top = startOffset + "px";
        }
    });
});
