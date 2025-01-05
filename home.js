
document.addEventListener("DOMContentLoaded", () => {
    const aboutLink = document.querySelector("#right-menu svg:nth-child(1)");
    const aboutSection = document.querySelector("#about-section");

    aboutLink.addEventListener("click", () => {
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});
