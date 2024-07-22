// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const header = document.querySelector("header");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    const headerHeight = header.offsetHeight;
    const additionalOffset = 20; // Adjust this value to match the additional padding you added

    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll down
            header.classList.add("header-hidden");
        } else {
            // Scroll up
            header.classList.remove("header-hidden");
        }
        lastScrollTop = scrollTop;

        // Highlight the current section in the navigation
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= headerHeight + additionalOffset && rect.bottom >= headerHeight + additionalOffset) {
                const id = section.getAttribute("id");
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });

    // Smooth scrolling and section highlighting
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            const targetPosition = targetSection.offsetTop - (headerHeight + additionalOffset);

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });

            navLinks.forEach((link) => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
