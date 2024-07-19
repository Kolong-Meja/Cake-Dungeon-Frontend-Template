<script lang="ts">
	import { CakeDungeonLogo, HeaderBgPicture, WelcomeSectionPicture, Footer, NavBar } from '$lib';
	import Section from '$lib/components/Section.svelte';
	import { carouselSlider } from '$lib/services/animation';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		const header = document.getElementById('header');
		const carousels = document.querySelectorAll('.carousel');

		if (header) {
			header.style.backgroundImage = `url(${HeaderBgPicture})`;
		}

		carouselSlider(carousels);
	});
</script>

<!-- Navigation Bar -->
<NavBar />

<!-- Header Section -->
<header id="header" class="bg-cover bg-fixed bg-center font-bodoni min-h-screen">
	<div class="container mx-auto">
		<div class="py-24 px-20 max-w-screen-xl">
			<div class="flex flex-col items-center space-y-20">
				<img
					id="logo"
					src={CakeDungeonLogo}
					alt="cake"
					class="rounded-full w-[14rem] h-[14rem]"
					loading="lazy"
				/>
				<div class="flex flex-col items-center space-y-2">
					<h1 class=" text-8xl font-bold text-gray-50 self-center">Cake Dungeon</h1>
					<p class="text-3xl font-semibold text-gray-50 self-center">󠁐#Explore all cakes flavors</p>
				</div>
			</div>
		</div>
	</div>
</header>
<!-- End of Header Section -->

<!-- Welcome Section -->
<Section>
	<div class="py-12 px-8 max-w-screen-xl">
		<div class="flex flex-row items-center space-x-10">
			<div class="flex flex-col items-start space-y-7 p-3">
				<h1 class="text-6xl font-bold text-brown-900 uppercase">Welcome to cake dungeon</h1>
				<p class="text-2xl font-normal leading-normal text-brown-900">
					This is your place to gather valuable experience filled with the high taste of cake. You
					will meet thousands of cake monsters who are ready to fill your stomach to the brim. Enjoy
					the adventure and stay full.
				</p>
				<a
					href="/cakes"
					class="inline-flex items-center p-3 text-sm font-medium text-center text-white bg-brown-900 rounded-lg hover:bg-cocoa focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-300 ease-in-out"
				>
					<span class="font-bodoni text-gray-50 text-lg">Start Explore</span>
				</a>
			</div>
			<img
				src={WelcomeSectionPicture}
				alt="cake"
				class="rounded-lg w-[36rem] h-[36rem]"
				loading="lazy"
			/>
		</div>
	</div>
</Section>
<!-- End of Welcome Section -->

<!-- Categories Section -->
<Section>
	<div class="py-12 px-8 max-w-screen-xl">
		<div class="flex flex-col items-center space-y-16">
			<h1 class="text-brown-900 font-bold text-5xl uppercase">Categories choices</h1>
			<div class="flex flex-row items-center space-x-10">
				{#each data.categories as category}
					<div class="max-w-xs h-full bg-brown-50 bg-center border-0 rounded-lg">
						<img src={category.image} alt={category.name} loading="lazy" />
						<div class="p-5">
							<a href={'#'}>
								<h5 class="mb-2 text-2xl font-bold tracking-tight text-brown-900 uppercase">
									{category.title}
								</h5>
							</a>
							<p class="mb-3 font-normal text-brown-900">
								Cake Dungeon offers <span class="font-bold underline">{category.title}</span> variants
								that are unique and delicious to your taste buds. What are you waiting for? Come on,
								order now!
							</p>
							<a
								href={'#'}
								class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-brown-50 bg-brown-900 rounded-lg hover:bg-cocoa focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-300 ease-in-out"
							>
								Order Now
								<svg
									class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 10"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M1 5h12m0 0L9 1m4 4L9 9"
									/>
								</svg>
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</Section>
<!-- End of Categories Section -->

<!-- Best Cakes Section -->
<Section fontFamily="font-lato">
	<div class="py-12 px-8 max-w-screen-xl carousel">
		<div class="flex flex-col mx-auto space-y-10">
			<div class="flex justify-center">
				<h1 class="text-brown-900 font-bodoni font-bold text-5xl uppercase self-center">
					Our Best Cakes
				</h1>
			</div>

			<div class="flex items-center flex-row justify-center gap-4">
				<div class="cursor-pointer carousel-left-btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="bi bi-arrow-left-circle-fill w-[3rem] h-[3rem] text-light-cream"
						viewBox="0 0 16 16"
					>
						<path
							d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
						/>
					</svg>
				</div>
				<div class="flex flex-row max-w-full h-full overflow-x-hidden carousel-viewport">
					{#each data.cakes as cake}
						<div
							class="w-4/12 gap-4 flex-col p-9 items-center flex-shrink-0 flex justify-center text-center"
						>
							<img src={cake.image} alt="chocolate" class="w-64 h-64 rounded-full" loading="lazy" />
							<span class="text-lg font-bold text-brown-900">{cake.name}</span>
							<span class="text-2xl font-normal text-brown-900"
								>{new Intl.NumberFormat('id-ID', {
									style: 'currency',
									currency: 'IDR'
								}).format(cake.price)}</span
							>
						</div>
					{/each}
				</div>
				<div class="cursor-pointer carousel-right-btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="bi bi-arrow-right-circle-fill w-[3rem] h-[3rem] text-light-cream"
						viewBox="0 0 16 16"
					>
						<path
							d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
						/>
					</svg>
				</div>
			</div>
		</div>
	</div>
</Section>
<!-- End of Best Cakes Section -->

<!-- Footer Section -->
<Footer />
<!-- End of Footer Section -->
