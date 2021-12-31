const button = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const links = document.querySelectorAll(".navbar__menu__item");

button.addEventListener("click", () => {
	menu.classList.toggle("active");
});

links.forEach((link) => {
	link.addEventListener("click", () => {
		menu.classList.remove("active");
	});
});
