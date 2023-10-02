const navBtn = document.querySelector(".hamburger")
const navSection = document.querySelector(".nav-mobile")

const burgerBtnActive = () => {
	navBtn.classList.toggle("is-active")

	!navSection.classList.contains("active")
		? navSection.classList.add("active")
		: navSection.classList.remove("active")
}

navBtn.addEventListener("click", burgerBtnActive)
