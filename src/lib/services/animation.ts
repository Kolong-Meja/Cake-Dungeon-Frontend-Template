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
