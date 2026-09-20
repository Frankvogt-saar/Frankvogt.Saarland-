document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".navlinks");
  if (menu && nav) menu.addEventListener("click", () => nav.classList.toggle("open"));

  const buttons = [...document.querySelectorAll(".tile")];
  const box = document.querySelector(".lightbox");
  if (!box || !buttons.length) return;
  const image = box.querySelector("img");
  let current = 0;

  function show(i) {
    current = (i + buttons.length) % buttons.length;
    image.src = buttons[current].dataset.src;
    image.alt = buttons[current].dataset.alt || "";
    box.classList.add("open");
  }
  buttons.forEach((b,i) => b.addEventListener("click", () => show(i)));
  box.querySelector(".close").addEventListener("click", () => box.classList.remove("open"));
  box.querySelector(".prev").addEventListener("click", () => show(current-1));
  box.querySelector(".next").addEventListener("click", () => show(current+1));
  box.addEventListener("click", e => { if (e.target === box) box.classList.remove("open"); });
  document.addEventListener("keydown", e => {
    if (!box.classList.contains("open")) return;
    if (e.key === "Escape") box.classList.remove("open");
    if (e.key === "ArrowLeft") show(current-1);
    if (e.key === "ArrowRight") show(current+1);
  });
});