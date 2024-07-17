<svelte:options customElement="cake-section" />

<script lang="ts">
	import SectionTemplate from '../SectionTemplate.svelte';
	import {
		ChocolateCakeAnotherPicture,
		CheeseCakePicture,
		CarrotCakePicture,
		MousseCakePicture,
		RedVelvetCakePicture,
		SpongeCakePicture
	} from '$lib';
	import { carouselSlider } from '$lib/services/animation';
	import { onMount } from 'svelte';

	onMount(() => {
		const carousels = document.querySelectorAll('.carousel');

		carouselSlider(carousels);
	});
</script>

<SectionTemplate fontFamily="font-lato">
	<div class="py-12 px-8 max-w-screen-xl carousel">
		<div class="flex flex-col mx-auto space-y-10">
			<div class="flex justify-center">
				<h1 class="text-dark-cocoa font-bodoni font-bold text-5xl uppercase self-center">
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
					<div
						class="w-4/12 gap-4 flex-col p-9 items-center flex-shrink-0 flex justify-center text-center"
					>
						<img src={ChocolateCakeAnotherPicture} alt="chocolate" class="w-64 h-64 rounded-full" />
						<span class="text-2xl font-bold text-dark-cocoa">Chocolate Cake</span>
						<span class="text-xl font-normal text-dark-cocoa">Rp. 315.000,00</span>
					</div>
					<div
						class="w-4/12 gap-4 flex-col p-9 items-center flex-shrink-0 flex justify-center text-center"
					>
						<img src={CarrotCakePicture} alt="carrot" class="w-64 h-64 rounded-full" />
						<span class="text-2xl font-bold text-dark-cocoa">Carrot Cake</span>
						<span class="text-xl font-normal text-dark-cocoa">Rp. 285.000,00</span>
					</div>
					<div
						class="w-4/12 gap-4 flex-col p-9 items-center flex-shrink-0 flex justify-center text-center"
					>
						<img src={CheeseCakePicture} alt="cheese" class="w-64 h-64 rounded-full" />
						<span class="text-2xl font-bold text-dark-cocoa">Blueberry Cheesecake</span>
						<span class="text-xl font-normal text-dark-cocoa">Rp. 340.000,00</span>
					</div>
					<div
						class="w-4/12 gap-4 flex-col p-9 items-center flex-shrink-0 flex justify-center text-center"
					>
						<img src={MousseCakePicture} alt="mousse" class="w-64 h-64 rounded-full" />
						<span class="text-2xl font-bold text-dark-cocoa">Mousse Cake</span>
						<span class="text-xl font-normal text-dark-cocoa">Rp. 290.000,00</span>
					</div>
					<div
						class="w-4/12 gap-4 flex-col p-9 items-center flex-shrink-0 flex justify-center text-center"
					>
						<img src={RedVelvetCakePicture} alt="velvet" class="w-64 h-64 rounded-full" />
						<span class="text-2xl font-bold text-dark-cocoa">Red Velvet Cake</span>
						<span class="text-xl font-normal text-dark-cocoa">Rp. 350.000,00</span>
					</div>
					<div
						class="w-4/12 gap-4 flex-col p-9 items-center flex-shrink-0 flex justify-center text-center"
					>
						<img src={SpongeCakePicture} alt="sponge" class="w-64 h-64 rounded-full" />
						<span class="text-2xl font-bold text-dark-cocoa">Sponge Cake</span>
						<span class="text-xl">Rp. 280.000,00</span>
					</div>
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
</SectionTemplate>
