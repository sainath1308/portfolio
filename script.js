// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const navList = document.getElementById("nav-list");

if (toggle && navList) {
  toggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}
