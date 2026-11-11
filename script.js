const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#main-navigation");

if (toggle && menu) {
  document.documentElement.classList.add("js-enabled");
  const setMenuOpen = (isOpen) => {
    menu.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  };
  toggle.addEventListener("click", () => {
    setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
  });
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuOpen(false);
  });
}
