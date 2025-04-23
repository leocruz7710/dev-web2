let trilho = document.getElementById("trilho");
let body = document.querySelector("body");
let header = document.querySelector("header");
let logo = document.querySelector("logoHome");
let footer = document.querySelector("footer");

trilho.addEventListener("click", () => {
  trilho.classList.toggle("dark");
  body.classList.toggle("dark");
  header.classList.toggle("dark");
  logoHome.classList.toggle("dark");
});
