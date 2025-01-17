export function changeThemeToggle(): void {
	const switchThemeBtn = document.querySelector('#switch-theme-btn');
	const sunIcon = document.querySelector('#sun-icon');
	const moonIcon = document.querySelector('#moon-icon');

	const navText = document.querySelectorAll('.nav-text');

	// change light -> dark | dark -> light icon.
	if (switchThemeBtn) {
		sunIcon?.classList.toggle('hidden');
		moonIcon?.classList.toggle('hidden');
	}

	if (navText) {
		for (const text of navText) {
			if (text.classList.contains('text-gray-950')) {
				text.classList.remove('text-gray-950');
				text.classList.add('text-gray-50');
			} else {
				text.classList.remove('text-gray-50');
				text.classList.add('text-gray-950');
			}
		}
	}
}

export function navigationScrollTransition(navbar: Element | null, axisY: number = 100): void {
	window.addEventListener('scroll', () => {
		if (navbar) {
			if (window.scrollY > axisY) {
				navbar.classList.add('animate-slideInDown');
				navbar.classList.remove('hidden');
				navbar.classList.add('fixed');
				navbar.classList.remove('animate-slideOutUp');
			} else if (window.scrollY === 0) {
				navbar.classList.add('animate-slideOutUp');
			}
		}
	});
}

export function carouselSlider(carousels: NodeListOf<Element>): void {
	carousels.forEach((ele) => {
		const carouselViewPort = ele.querySelector('.carousel-viewport') as HTMLElement | null;
		const carouselRightBtn = ele.querySelector('.carousel-right-btn') as HTMLButtonElement | null;
		const carouselLeftBtn = ele.querySelector('.carousel-left-btn') as HTMLButtonElement | null;

		if (carouselViewPort && carouselRightBtn && carouselLeftBtn) {
			const carouselWidth = carouselViewPort.clientWidth;

			carouselRightBtn.addEventListener('click', () => {
				const currentScroll = carouselViewPort.scrollLeft;
				let nextScroll = currentScroll + carouselWidth;

				if (nextScroll >= carouselViewPort.scrollWidth) {
					nextScroll = 0;
				}

				carouselViewPort.scrollTo({
					left: nextScroll,
					behavior: 'smooth'
				});
			});

			carouselLeftBtn.addEventListener('click', () => {
				const currentScroll = carouselViewPort.scrollLeft;
				let nextScroll = currentScroll - carouselWidth;

				if (nextScroll < 0) {
					nextScroll = carouselViewPort.scrollWidth - carouselWidth;
				} else if (nextScroll >= carouselViewPort.scrollWidth) {
					nextScroll = carouselViewPort.scrollWidth - carouselWidth;
				}

				carouselViewPort.scrollTo({
					left: nextScroll,
					behavior: 'smooth'
				});
			});
		}
	});
}

export function fadeInScrollAnimation(targets: NodeListOf<Element>, animation: string) {
	const callback = function (entries: Array<IntersectionObserverEntry>) {
		entries.forEach((entry) => {
			console.log(entry);

			if (entry.isIntersecting) {
				entry.target.classList.add(animation);
			} else {
				entry.target.classList.remove(animation);
			}
		});
	};

	const observer = new IntersectionObserver(callback);

	targets.forEach(function (target) {
		target.classList.add('opacity-0');
		observer.observe(target);
	});
}

export function truncateAtLastSpace(text: string, length: number, ending: string = '...') {
	if (text.length <= length) return text;
	const trimmedString = text.slice(0, length + 1);
	return (
		trimmedString.slice(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))) + ending
	);
}
