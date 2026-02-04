const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

document.getElementById("link-home").addEventListener("click", () => {
  home.style.display = "block";
  about.style.display = "none";
  contact.style.display = "none";
});

document.getElementById("link-about").addEventListener("click", () => {
  home.style.display = "none";
  about.style.display = "block";
  contact.style.display = "none";
});

document.getElementById("link-contact").addEventListener("click", () => {
  home.style.display = "none";
  about.style.display = "none";
  contact.style.display = "block";
});

const button = document.getElementById("btn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "Bravo 🎉 JavaScript fonctionne !";
});
