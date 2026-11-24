const filterButtons = document.querySelectorAll(".filter");
const petCards = document.querySelectorAll(".pet-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    petCards.forEach((card) => {
      card.classList.toggle(
        "hidden",
        filter !== "all" && card.dataset.type !== filter
      );
    });
  });
});

document.querySelectorAll(".favorite").forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.classList.toggle("selected");
    button.textContent = selected ? "♥" : "♡";
    button.setAttribute(
      "aria-label",
      selected ? "Удалить из избранного" : "Добавить в избранное"
    );
  });
});

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
