const sections = document.querySelectorAll(".section");

function showSection(id) {
  sections.forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

document.getElementById("link-home").addEventListener("click", () => {
  showSection("home");
});

document.getElementById("link-about").addEventListener("click", () => {
  showSection("about");
});

document.getElementById("link-games").addEventListener("click", () => {
  showSection("games");
});

/* Bouton accueil */
const button = document.getElementById("btn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "Bienvenue dans le site de jeux 🎮";
});

/* MODE SOMBRE */
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
