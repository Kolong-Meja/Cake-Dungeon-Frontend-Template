<svelte:options customElement="category-section" />

<script>
	import { onMount } from 'svelte';
	import SectionTemplate from '../SectionTemplate.svelte';
	import { ChocolateCakePicture, CookiesPicture, IceCreamPicture } from '$lib';

	const categories = ['cakes', 'cookies', 'ice cream'];

	export let useTransition = true;

	onMount(() => {});
</script>

<SectionTemplate>
	<div class="py-12 px-8 max-w-screen-xl">
		<div class="flex flex-col items-center space-y-16">
			<h1 class="text-light-cream font-bold text-5xl uppercase">Categories choices</h1>
			<div class="flex flex-row items-center space-x-10">
				{#each categories as category}
					<div class="max-w-xs h-full bg-light-cream bg-center border-0 rounded-lg">
						{#if category === 'cakes'}
							<img src={ChocolateCakePicture} alt={category} />
							<div class="p-5">
								<a href={'#'}>
									<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 uppercase">
										Cakes
									</h5>
								</a>
								<p class="mb-3 font-normal text-gray-700">
									Cake Dungeon offers <span class="font-bold underline">Cake</span> variants that are
									unique and delicious to your taste buds. What are you waiting for? Come on, order now!
								</p>
								<a
									href={'#'}
									class={!useTransition
										? 'inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-dark-cocoa rounded-lg hover:bg-cocoa focus:ring-4 focus:outline-none focus:ring-blue-300'
										: 'inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-dark-cocoa rounded-lg hover:bg-cocoa focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-300 ease-in-out'}
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
						{/if}
						{#if category === 'cookies'}
							<img src={CookiesPicture} alt={category} />
							<div class="p-5">
								<a href={'#'}>
									<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 uppercase">
										Cookies
									</h5>
								</a>
								<p class="mb-3 font-normal text-gray-700">
									Cake Dungeon offers <span class="font-bold underline">Cookie</span> variants that are
									unique and delicious to your taste buds. What are you waiting for? Come on, order now!
								</p>
								<a
									href={'#'}
									class={!useTransition
										? 'inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-dark-cocoa rounded-lg hover:bg-cocoa focus:ring-4 focus:outline-none focus:ring-blue-300'
										: 'inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-dark-cocoa rounded-lg hover:bg-cocoa focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-300 ease-in-out'}
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
						{/if}
						{#if category === 'ice cream'}
							<img src={IceCreamPicture} alt={category} />
							<div class="p-5">
								<a href={'#'}>
									<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 uppercase">
										Ice Creams
									</h5>
								</a>
								<p class="mb-3 font-normal text-gray-700">
									Cake Dungeon offers <span class="font-bold underline">Ice Cream</span> variants that
									are unique and delicious to your taste buds. What are you waiting for? Come on, order
									now!
								</p>
								<a
									href={'#'}
									class={!useTransition
										? 'inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-dark-cocoa rounded-lg hover:bg-cocoa focus:ring-4 focus:outline-none focus:ring-blue-300'
										: 'inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-dark-cocoa rounded-lg hover:bg-cocoa focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-300 ease-in-out'}
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
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</SectionTemplate>
