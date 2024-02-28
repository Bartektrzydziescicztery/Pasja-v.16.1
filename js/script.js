document.addEventListener("DOMContentLoaded", function () {
	let nav = document.querySelector(".navbar");
	let navToggler = document.querySelector(".navbar-toggler");
	let allNavItems = document.querySelectorAll("a.nav-link");
	let mobileNavbar = document.querySelector(".navbar-collapse");

	//nadaje cień na hamburger po scrollu

	function addShadowButton() {
		if (window.scrollY >= 100) {
			navToggler.classList.add("shadow-btn");
		}
		if (window.scrollY < 100) {
			navToggler.classList.remove("shadow-btn");
		}
	}
	window.addEventListener("scroll", addShadowButton);

	// zamyka menu hamburgerowe po kliknięciu w jakiś link
	function navbarCollapse() {
		mobileNavbar.classList.remove("show");
	}
	allNavItems.forEach(item => item.addEventListener("click", navbarCollapse));

	// nadaje cień na menu po kliknięciu w hamburger
	function addShadowToggler() {
		nav.classList.add("shadow-bg");
	}
	navToggler.addEventListener("click", addShadowToggler);

	// zabiera cień z nawigacji po zamknięciu menu
	function removeShadowWhenColosed() {
		const isMobileWidth = window.innerWidth < 992;
		let navbarIsClosed = !mobileNavbar.classList.contains("show");
		let shadowIsOnNavbar = nav.classList.contains("shadow-bg");

		if (navbarIsClosed && shadowIsOnNavbar && isMobileWidth) {
			nav.classList.remove("shadow-bg");
		}
	}
	window.addEventListener("click", function () {
		// Ustawienie opóźnienia na 0.4 sekundy
		setTimeout(removeShadowWhenColosed, 400);
	});

	// zmienia cień na menu zależnie od stanu
	function shadowWhenResized() {
		const isDesktop = window.innerWidth >= 992;
		const isScrolled = window.scrollY >= 100;
		const isMobileMenuOpen = mobileNavbar.classList.contains("show");

		if (isDesktop && isScrolled) {
			nav.classList.add("shadow-bg");
		} else if (!isDesktop && isMobileMenuOpen) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	}
	window.addEventListener("load", shadowWhenResized);
	window.addEventListener("resize", shadowWhenResized);
	window.addEventListener("scroll", shadowWhenResized);
	// --------------------------------------
});
