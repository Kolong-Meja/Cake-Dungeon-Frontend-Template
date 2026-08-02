<svelte:options customElement="navbar-component" />

<script lang="ts">
	import { CakeDungeonLogo } from '$lib';
	import { navigationScrollTransition } from '$lib/services/handler';
	import { onMount } from 'svelte';
	import { pages } from '$lib/services/nav-links';

	onMount(() => {
		const mobileMenuBtn = document.getElementById('mobile-menu-button');
		const mobileMenu = document.getElementById('mobile-menu');
		const navbar = document.querySelector('#navbar');

		navigationScrollTransition(navbar as Element);

		mobileMenuBtn?.addEventListener('click', function () {
			mobileMenu?.classList.toggle('hidden');
		});
	});
</script>

<nav
	id="navbar"
	class="z-50 w-full shadow-md bg-gradient-to-r from-brown-900 via-brown-800 to-brown-900"
>
	<div class="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="flex flex-row items-center space-x-3">
			<a href={'/'} class="shrink-0">
				<img
					id="logo"
					src={CakeDungeonLogo}
					alt="Cake Dungeon logo"
					title="Cake Dungeon Online Store"
					class="w-10 h-10 transition-transform duration-300 ease-in-out rounded-full ring-2 ring-cream-300/70 hover:rotate-3 hover:scale-105"
				/>
			</a>
			<p class="text-lg italic font-semibold font-bodoni text-cream-50 sm:text-2xl">Cake Dungeon</p>
		</div>

		<!-- Mobile menu button -->
		<div class="self-center block lg:hidden">
			<button
				id="mobile-menu-button"
				aria-label="Toggle navigation menu"
				class="p-2 transition-colors duration-300 ease-in-out rounded-full text-cream-50 hover:bg-brown-700/60 focus:outline-none focus:ring-2 focus:ring-cream-300"
			>
				<svg
					class="w-6 h-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16m-7 6h7"
					/>
				</svg>
			</button>
		</div>

		<ul class="hidden lg:flex lg:items-center lg:space-x-8">
			{#each pages.links as link}
				<li class="list-none">
					<a href={`${link.url}`} class="link">
						<span
							class="nav-text bg-gradient-to-r from-cream-300 to-cream-300 bg-left-bottom bg-[length:0%_2px] bg-no-repeat pb-1 font-mulish text-base font-semibold text-cream-50 transition-[background-size,color] duration-300 ease-in-out hover:bg-[length:100%_2px] hover:text-cream-200"
							title={link.title}>{link.title}</span
						>
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<!-- Mobile menu -->
	<div id="mobile-menu" class="hidden border-t border-brown-700/60 lg:hidden">
		<ul class="flex flex-col px-4 py-4 space-y-1">
			{#each pages.links as link}
				<li class="list-none">
					<a href={`${link.url}`} class="block link">
						<span
							class="nav-text block rounded-xl px-3 py-2.5 font-mulish text-base font-semibold text-cream-50 transition-colors duration-300 ease-in-out hover:bg-brown-700/60 hover:text-cream-200"
							title={link.title}>{link.title}</span
						>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
