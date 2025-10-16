// JavaScript-based parallax scroll
window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset;

    document.querySelectorAll(".parallax-bg").forEach(function (bg) {
        const speed = bg.getAttribute("data-speed");
        const offset = bg.parentElement.offsetTop;
        const height = bg.parentElement.offsetHeight;

        // Only apply effect if in viewport
        if (scrollTop + window.innerHeight >= offset && scrollTop <= offset + height) {
            const yPos = (scrollTop - offset) * speed;
            bg.style.transform = `translateY(${yPos}px)`;
        }
    });
});
