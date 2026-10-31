// Replace this value with the shop's Instagram username when the account is ready.
const INSTAGRAM_USERNAME = "YOUR_INSTAGRAM_USERNAME";
const instagramUrl = INSTAGRAM_USERNAME === "YOUR_INSTAGRAM_USERNAME"
  ? "https://www.instagram.com/"
  : `https://www.instagram.com/${INSTAGRAM_USERNAME.replace(/^@/, "")}/`;

document.querySelectorAll(".instagram-link").forEach((link) => {
  link.href = instagramUrl;
});

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach((item) => {
      item.classList.toggle("active", item === button);
    });
    document.querySelectorAll(".product-card").forEach((card) => {
      card.hidden = selected !== "all" && card.dataset.category !== selected;
    });
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();