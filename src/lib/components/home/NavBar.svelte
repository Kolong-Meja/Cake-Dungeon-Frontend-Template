<svelte:options customElement="navbar-component" />

<script lang="ts">
	import { CakeDungeonLogo } from '$lib';
	import { navigationScrollTransition } from '$lib/services/animation';
	import { onMount } from 'svelte';
	import { serverData } from '$lib/services/pages-data';

	onMount(() => {
		const navbar = document.querySelector('#navbar');

		navigationScrollTransition(navbar as Element);
	});
</script>

<nav id="navbar" class="hidden bg-cream z-10 w-full">
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
		<ul class="flex space-x-6">
			{#each serverData.data as d}
				<li class="hidden list-none self-center lg:block">
					<a href={`/${d.link}`} class="link">
						<span class="nav-text font-bodoni font-semibold text-md text-lighter-cream hover:text-dark-cocoa transition-all duration-300 ease-in-out" title={d.title}>{d.title}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
