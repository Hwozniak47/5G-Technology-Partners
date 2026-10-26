const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(open)
    );

    menuToggle.textContent = open
        ? "Close"
        : "Menu";
});