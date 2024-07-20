<svelte:options customElement="navbar-component" />

<script lang="ts">
	import { CakeDungeonLogo } from '$lib';
	import { navigationScrollTransition } from '$lib/services/animation';
	import { onMount } from 'svelte';
	import { pages } from '$lib/services/link-pages';

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

<nav id="navbar" class="bg-cream-500 z-10 w-full">
	<div class="flex justify-between p-5 mx-3">
		<a href="/">
			<img
				id="logo"
				src={CakeDungeonLogo}
				alt="Faisal Logo"
				title="Cake Dungeon Online Store"
				class="rounded-full w-10 h-10"
			/>
		</a>
		<!-- Mobile menu button -->
		<div class="block self-center lg:hidden">
			<button
				id="mobile-menu-button"
				class="text-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-50"
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
		<ul class="hidden lg:flex space-x-6">
			{#each pages.links as link}
				<li class="list-none self-center">
					<a href={`/${link.url}`} class="link">
						<span
							class="nav-text font-bodoni font-semibold text-md text-gray-50 hover:text-brown-700 transition-all duration-300 ease-in-out"
							title={link.title}>{link.title}</span
						>
					</a>
				</li>
			{/each}
		</ul>
	</div>
	<!-- Mobile menu -->
	<div id="mobile-menu" class="lg:hidden">
		<ul class="flex flex-col space-y-4 p-5">
			{#each pages.links as link}
				<li class="list-none">
					<a href={`/${link.url}`} class="link">
						<span
							class="nav-text font-bodoni font-semibold text-md text-gray-50 hover:text-brown-700 transition-all duration-300 ease-in-out"
							title={link.title}>{link.title}</span
						>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
