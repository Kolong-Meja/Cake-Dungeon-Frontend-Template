<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { Button, Dropdown, DropdownItem, Input } from 'flowbite-svelte';
	import { ChevronDownOutline, SearchOutline } from 'flowbite-svelte-icons';
	import type { PageData } from './$types';

	export let data: PageData;

	// Single source of truth for the grid/list toggle. The three classes below
	// are derived reactively from it, so there is no imperative DOM
	// manipulation left anywhere in this file.
	let view: 'grid' | 'list' = 'grid';

	$: itemsClass =
		view === 'grid'
			? 'grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
			: 'grid w-full grid-cols-1 gap-4';

	$: cardClass =
		view === 'grid'
			? 'group flex flex-col overflow-hidden rounded-2xl bg-brown-50 shadow-sm ring-1 ring-brown-100 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl'
			: 'group flex flex-row items-center gap-4 overflow-hidden rounded-2xl bg-brown-50 shadow-sm ring-1 ring-brown-100 transition-all duration-300 ease-in-out hover:shadow-xl';

	$: cardImageClass =
		view === 'grid'
			? 'h-56 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
			: 'm-3 h-24 w-24 shrink-0 rounded-xl object-cover sm:h-32 sm:w-32 md:h-40 md:w-40';
</script>

<Section bgColor="bg-lighter-cream" fontFamily="font-lato" responsiveDesign>
	<div class="relative px-6 py-10 overflow-hidden sm:px-8 sm:py-12">
		<div
			class="absolute w-64 h-64 rounded-full pointer-events-none -left-16 -top-10 bg-cream-300/40 blur-3xl"
			aria-hidden="true"
		></div>
		<div
			class="absolute rounded-full pointer-events-none -bottom-16 -right-16 h-72 w-72 bg-brown-200/30 blur-3xl"
			aria-hidden="true"
		></div>

		<div class="relative flex flex-col items-center space-y-10 sm:space-y-12">
			<div class="flex flex-col items-center justify-center space-y-3 text-center">
				<span
					class="flex items-center justify-center w-12 h-12 rounded-full bg-cream-200 text-brown-700"
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
				<h1 class="text-2xl font-bold uppercase text-brown-900 md:text-3xl lg:text-4xl">
					All Products in our Shop
				</h1>
				<p
					class="text-base font-normal leading-relaxed font-mulish text-brown-900 md:text-lg lg:text-xl"
				>
					We provide hundreds of the most delicious cake variants that will make you happy.
				</p>
			</div>

			<div class="flex flex-col items-center justify-between w-full gap-4 md:flex-row md:gap-0">
				<div class="flex flex-col w-full gap-4 md:w-auto md:flex-row md:items-center">
					<form action="/search" role="search" class="flex-1 w-full md:w-96">
						<div class="relative">
							<div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
								<SearchOutline class="w-4 h-4 text-brown-400" />
							</div>
							<Input
								id="search-navbar"
								name="q"
								type="search"
								color="base"
								class="w-full pl-10 rounded-full border-cream-300 bg-white/70 text-brown-900 placeholder-brown-400 focus:border-brown-400 focus:ring-brown-400"
								placeholder="Search cake..."
							/>
						</div>
					</form>
					<Button
						color="primary"
						class="w-full rounded-full border-2 border-cream-300 bg-white/70 px-4 py-2.5 text-base font-semibold text-brown-900 shadow-sm transition-all duration-300 ease-in-out hover:border-brown-400 hover:bg-white focus:outline-none focus:ring-4 focus:ring-cream-300 md:w-auto"
					>
						Sort By
						<ChevronDownOutline size="lg" class="ms-2 text-brown-700" />
					</Button>
					<Dropdown
						class="py-2 overflow-y-auto bg-white border shadow-lg w-52 max-h-64 rounded-xl border-cream-200"
					>
						<DropdownItem
							class="flex items-center gap-2 text-base font-normal text-brown-900 hover:bg-cream-100"
						>
							<span>Featured</span>
						</DropdownItem>
						<DropdownItem
							class="flex items-center gap-2 text-base font-normal text-brown-900 hover:bg-cream-100"
						>
							<span>Newest Arrivals</span>
						</DropdownItem>
						<DropdownItem
							class="flex items-center gap-2 text-base font-normal text-brown-900 hover:bg-cream-100"
						>
							<span>Lower Price</span>
						</DropdownItem>
						<DropdownItem
							class="flex items-center gap-2 text-base font-normal text-brown-900 hover:bg-cream-100"
						>
							<span>Highest Price</span>
						</DropdownItem>
						<DropdownItem
							class="flex items-center gap-2 text-base font-normal text-brown-900 hover:bg-cream-100"
						>
							<span>Best Selling</span>
						</DropdownItem>
						<DropdownItem
							class="flex items-center gap-2 text-base font-normal text-brown-900 hover:bg-cream-100"
						>
							<span>Alphabetically, A-Z</span>
						</DropdownItem>
						<DropdownItem
							class="flex items-center gap-2 text-base font-normal text-brown-900 hover:bg-cream-100"
						>
							<span>Alphabetically, Z-A</span>
						</DropdownItem>
					</Dropdown>
				</div>

				<div class="flex flex-row items-center gap-3">
					<span class="text-base font-semibold text-brown-900">View As</span>
					<div class="flex flex-row gap-2">
						<button
							type="button"
							on:click={() => (view = 'list')}
							aria-label="View as list"
							aria-pressed={view === 'list'}
							class={`rounded-full p-2 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brown-300 ${
								view === 'list'
									? 'bg-brown-400 text-cream-50'
									: 'text-brown-300 hover:text-brown-600'
							}`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								class="w-6 h-6"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
								/>
							</svg>
						</button>
						<button
							type="button"
							on:click={() => (view = 'grid')}
							aria-label="View as grid"
							aria-pressed={view === 'grid'}
							class={`rounded-full p-2 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brown-300 ${
								view === 'grid'
									? 'bg-brown-400 text-cream-50'
									: 'text-brown-300 hover:text-brown-600'
							}`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								class="w-6 h-6"
								viewBox="0 0 16 16"
							>
								<path
									d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			<div class={itemsClass}>
				{#each data.cakes as cake}
					<div class={cardClass}>
						<img src={cake.image} alt={cake.name} class={cardImageClass} loading="lazy" />
						<div class="flex flex-col flex-1 w-full gap-3 p-4">
							<div class="flex flex-col gap-1">
								<a
									href={'#'}
									class="transition-colors duration-300 ease-in-out hover:text-brown-600"
								>
									<p class="text-lg font-semibold tracking-tight text-brown-900">
										{cake.name}
									</p>
								</a>
								<p class="text-xl font-bold text-brown-900">
									{new Intl.NumberFormat('id-ID', {
										style: 'currency',
										currency: 'IDR'
									}).format(cake.price)}
								</p>
							</div>
							<button
								type="button"
								class="flex items-center justify-center w-full gap-2 p-2 mt-auto text-base font-bold transition-all duration-300 ease-in-out rounded-lg shadow-sm bg-gradient-to-r from-brown-700 to-brown-900 text-cream-50 hover:from-brown-800 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-cream-300"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="w-4 h-4"
								>
									<circle cx="9" cy="21" r="1" />
									<circle cx="20" cy="21" r="1" />
									<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
								</svg>
								Add to Cart
							</button>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</Section>
