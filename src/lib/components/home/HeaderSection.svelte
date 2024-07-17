<svelte:options customElement="header-section" />

<script lang="ts">
	import { CakeDungeonLogo, HeaderBgPicture } from '$lib';
	import { onMount } from 'svelte';

	onMount(() => {
		const header = document.getElementById('header');

		if (header) {
			header.style.backgroundImage = `url(${HeaderBgPicture})`;
		}
	});
</script>

<header id="header" class="bg-cover bg-fixed bg-center font-bodoni min-h-screen">
	<div class="container mx-auto">
		<div class="py-24 px-20 max-w-screen-xl">
			<div class="flex flex-col items-center space-y-20">
				<img
					id="logo"
					src={CakeDungeonLogo}
					alt="cake"
					class="rounded-full w-[200px] h-[200px]"
				/>
				<div class="flex flex-col items-center space-y-2">
					<h1 class=" text-8xl font-bold text-light-cream self-center">Cake Dungeon</h1>
					<p class="text-3xl font-semibold text-light-cream self-center">󠁐#Explore all cakes flavors</p>
				</div>
			</div>
		</div>
	</div>
</header>
