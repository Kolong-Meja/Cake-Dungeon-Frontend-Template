<script lang="ts">
	import { CakeDungeonLogo, Cakes, Cake, Footer, NavBar } from '$lib';
	import Section from '$lib/components/Section.svelte';
	import { carouselSlider, fadeInScrollAnimation } from '$lib/services/handler';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		const carousels = document.querySelectorAll('.carousel');
		const targets = document.querySelectorAll('.show-on-scroll');

		carouselSlider(carousels);
		fadeInScrollAnimation(targets, 'animate-fadeIn');
	});
</script>

<!-- Navigation Bar -->
<NavBar />

<!-- Header Section -->
<header
	id="header"
	class="relative flex flex-col max-w-full min-h-screen overflow-hidden font-bodoni"
>
	<!-- Background photo -->
	<div
		class="absolute inset-0 bg-center bg-cover"
		style="background-image: url({Cakes});"
		aria-hidden="true"
	></div>

	<!-- Dark scrim so the logo/text stay legible over any part of the photo -->
	<div
		class="absolute inset-0 pointer-events-none bg-gradient-to-b from-brown-900/70 via-brown-900/50 to-brown-900/80"
		aria-hidden="true"
	></div>

	<!-- Decorative "sprinkle dots" strip along the bottom edge, echoes the Footer -->
	<div
		class="pointer-events-none absolute inset-x-0 bottom-0 h-2 bg-[radial-gradient(circle,#EAD8C0_1.5px,transparent_1.5px)] bg-[length:16px_16px]"
		aria-hidden="true"
	></div>

	<div class="container relative z-10 flex items-center justify-center flex-1 mx-auto">
		<div
			class="flex flex-col items-center justify-center px-6 space-y-8 py-14 sm:space-y-12 md:space-y-20 md:py-24 md:px-20"
		>
			<img
				id="logo"
				src={CakeDungeonLogo}
				alt="Cake Dungeon logo"
				fetchpriority="high"
				class="h-24 w-24 animate-fadeInDown rounded-full shadow-lg ring-4 ring-cream-50/30 sm:h-32 sm:w-32 md:h-[14rem] md:w-[14rem]"
			/>
			<div
				class="flex animate-fadeInDown flex-col items-center justify-center space-y-4 [animation-delay:150ms]"
			>
				<h1
					class="text-4xl font-bold text-center text-cream-50 drop-shadow-lg sm:text-5xl md:text-7xl lg:text-8xl"
				>
					Cake Dungeon
				</h1>
				<p
					class="text-lg font-semibold text-center font-mulish text-cream-100 drop-shadow-md sm:text-xl md:text-2xl lg:text-3xl"
				>
					#Explore all cakes flavors
				</p>
			</div>
		</div>
	</div>

	<!-- Scroll cue, reuses the #categories anchor the "Start Explore" button below already targets -->
	<a
		href={'#categories'}
		aria-label="Scroll to categories"
		class="relative z-10 flex justify-center mb-8 transition-colors duration-300 ease-in-out animate-bounce text-cream-50 hover:text-cream-200"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="w-8 h-8"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 14l-7 7m0 0l-7-7m7 7V3"
			/>
		</svg>
	</a>
</header>
<!-- End of Header Section -->

<!-- Welcome Section -->
<Section bgColor="bg-lighter-cream" responsiveDesign>
	<div class="relative px-6 py-10 overflow-hidden md:px-8 md:py-12">
		<div
			class="absolute w-64 h-64 rounded-full pointer-events-none -left-16 -top-10 bg-cream-300/40 blur-3xl"
			aria-hidden="true"
		></div>
		<div
			class="absolute rounded-full pointer-events-none -bottom-16 -right-16 h-72 w-72 bg-brown-200/30 blur-3xl"
			aria-hidden="true"
		></div>

		<div
			class="relative flex flex-col items-center justify-center gap-10 show-on-scroll md:flex-row lg:gap-16"
		>
			<div
				class="flex flex-col items-center p-2 space-y-6 text-center lg:items-start lg:text-start"
			>
				<h2 class="text-3xl font-bold uppercase text-brown-900 md:text-4xl lg:text-5xl">
					Welcome to Cake Dungeon
				</h2>
				<p class="text-xl font-light leading-relaxed font-mulish text-brown-900 md:text-2xl">
					Indulge in a delightful journey where every bite is an experience to savor. Welcome to a
					haven for cake enthusiasts, where exquisite flavors and delectable treats await you. Meet
					a community of fellow cake lovers, eager to share in the joy of every mouthful. Embark on
					this sweet adventure and let your taste buds revel in the richness of our creations. Enjoy
					the journey and stay blissfully satisfied.
				</p>
				<a
					href={'#categories'}
					class="group inline-flex items-center rounded-full bg-brown-400 p-2.5 text-sm font-normal text-white transition-all duration-300 ease-in-out hover:bg-brown-600 focus:outline-none focus:ring-4 focus:ring-brown-400 md:rounded-lg md:p-3 md:text-base"
				>
					Start Explore
					<svg
						class="rtl:rotate-180 ms-2 h-3.5 w-3.5 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
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

			<div class="relative shrink-0">
				<img
					src={Cake}
					alt="Cake Dungeon signature cake"
					loading="lazy"
					class="h-56 w-56 rounded-2xl object-cover shadow-lg ring-4 ring-white/60 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-96 lg:w-96 xl:h-[26rem] xl:w-[26rem]"
				/>
				<span
					class="absolute flex items-center justify-center rounded-full shadow-md -bottom-3 -right-3 h-14 w-14 bg-brown-900 text-cream-50"
					aria-hidden="true"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="w-6 h-6"
					>
						<path d="M4 12h16v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7Z" />
						<path d="M4 12c0-2 2-3 2-5s-1-2-1-3" />
						<path d="M12 12c0-2 2-3 2-5s-1-2-1-3" />
						<path d="M20 12c0-2-2-3-2-5s1-2 1-3" />
						<path d="M2 16h20" />
					</svg>
				</span>
			</div>
		</div>
	</div>
</Section>
<!-- End of Welcome Section -->

<!-- Categories Section -->
<Section bgColor="bg-lighter-cream" responsiveDesign>
	<div
		id="categories"
		class="relative flex flex-col items-center justify-center gap-8 px-6 py-10 show-on-scroll md:gap-12 md:px-8 md:py-12 lg:gap-16"
	>
		<div class="flex flex-col items-center gap-3 text-center">
			<h2 class="text-3xl font-bold uppercase text-brown-900 md:text-4xl lg:text-5xl">
				Categories choices
			</h2>
			<span class="w-16 h-1 rounded-full bg-brown-400" aria-hidden="true"></span>
		</div>

		<div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
			{#each data.categories as category}
				<div
					class="flex flex-col h-full overflow-hidden transition-all duration-300 ease-in-out shadow-sm group rounded-2xl bg-brown-50 ring-1 ring-brown-100 hover:-translate-y-1 hover:shadow-xl"
				>
					<div class="overflow-hidden">
						<img
							src={category.image}
							alt={category.name}
							loading="lazy"
							class="object-cover w-full h-48 transition-transform duration-500 ease-in-out group-hover:scale-105"
						/>
					</div>
					<div class="flex flex-col flex-1 p-5">
						<a href={'#'}>
							<h3
								class="mb-2 text-lg font-bold tracking-tight uppercase transition-colors duration-300 ease-in-out text-brown-900 hover:text-brown-600 md:text-xl lg:text-2xl"
							>
								{category.title}
							</h3>
						</a>
						<p class="mb-4 font-normal font-mulish text-brown-900">
							Cake Dungeon offers <span class="font-bold underline">{category.title}</span> variants that
							are unique and delicious to your taste buds. What are you waiting for? Come on, order now!
						</p>
						<a
							href={'#'}
							class="inline-flex items-center px-3 py-2 mt-auto text-sm font-medium text-center transition-all duration-300 ease-in-out rounded-lg group/btn w-fit bg-brown-400 text-brown-50 hover:bg-brown-600 focus:outline-none focus:ring-4 focus:ring-brown-400"
						>
							Order Now
							<svg
								class="rtl:rotate-180 ms-2 h-3.5 w-3.5 transition-transform duration-300 ease-in-out group-hover/btn:translate-x-1"
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
</Section>
<!-- End of Categories Section -->

<!-- Best Cakes Section -->
<Section bgColor="bg-lighter-cream" fontFamily="font-lato" responsiveDesign>
	<div
		class="relative flex flex-col justify-center px-6 py-10 mx-auto space-y-6 show-on-scroll carousel md:space-y-10 md:px-8 md:py-12"
	>
		<div
			class="absolute w-64 h-64 rounded-full pointer-events-none -right-16 -top-10 bg-cream-300/40 blur-3xl"
			aria-hidden="true"
		></div>

		<div class="relative flex flex-col items-center gap-3">
			<h2
				class="text-3xl font-bold text-center uppercase font-bodoni text-brown-900 md:text-4xl lg:text-5xl"
			>
				Our Best Cakes
			</h2>
			<span class="w-16 h-1 rounded-full bg-brown-400" aria-hidden="true"></span>
		</div>

		<div class="relative flex flex-row items-center justify-center gap-2 md:gap-4">
			<button
				type="button"
				aria-label="Previous cakes"
				class="p-1 transition-all duration-300 ease-in-out rounded-full carousel-left-btn shrink-0 text-brown-400 hover:text-brown-600 focus:outline-none focus:ring-4 focus:ring-brown-300"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					class="bi bi-arrow-left-circle-fill h-[2rem] w-[2rem] md:h-[2.5rem] md:w-[2.5rem] lg:h-[3rem] lg:w-[3rem]"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
					/>
				</svg>
			</button>

			<div class="flex flex-row h-full max-w-full overflow-x-hidden carousel-viewport rounded-2xl">
				{#each data.cakes as cake}
					<div
						class="flex flex-col items-center w-full gap-2 p-2 text-center shrink-0 md:w-6/12 md:gap-3 md:p-3 lg:w-4/12 lg:gap-4 lg:p-4"
					>
						<div
							class="flex flex-col items-center w-full h-full gap-3 p-5 transition-all duration-300 ease-in-out shadow-sm rounded-2xl bg-brown-50 ring-1 ring-brown-100 hover:-translate-y-1 hover:shadow-xl"
						>
							<img
								src={cake.image}
								alt={cake.name}
								loading="lazy"
								class="object-cover w-48 h-48 rounded-full shadow-md ring-4 ring-white/70 sm:h-56 sm:w-56 md:h-64 md:w-64"
							/>
							<span class="text-lg font-bold text-brown-900 md:text-xl lg:text-xl">{cake.name}</span
							>
							<span
								class="px-4 py-1 text-lg font-semibold rounded-full bg-brown-900 text-cream-50 md:text-xl lg:text-xl"
							>
								{new Intl.NumberFormat('id-ID', {
									style: 'currency',
									currency: 'IDR'
								}).format(cake.price)}
							</span>
						</div>
					</div>
				{/each}
			</div>

			<button
				type="button"
				aria-label="Next cakes"
				class="p-1 transition-all duration-300 ease-in-out rounded-full carousel-right-btn shrink-0 text-brown-400 hover:text-brown-600 focus:outline-none focus:ring-4 focus:ring-brown-300"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					class="bi bi-arrow-right-circle-fill h-[2rem] w-[2rem] md:h-[2.5rem] md:w-[2.5rem] lg:h-[3rem] lg:w-[3rem]"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
					/>
				</svg>
			</button>
		</div>
	</div>
</Section>
<!-- End of Best Cakes Section -->

<!-- Footer Section -->
<Footer />
<!-- End of Footer Section -->
