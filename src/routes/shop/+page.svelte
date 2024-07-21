<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { Button, Dropdown, DropdownItem, Input, Badge } from 'flowbite-svelte';
	import { ChevronDownOutline, SearchOutline } from 'flowbite-svelte-icons';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Section bgColor="bg-lighter-cream" fontFamily="font-lato" responsiveDesign>
	<div class="flex flex-col items-center py-12 px-8 space-y-12">
		<div class="flex flex-col justify-center items-center space-y-3">
			<h1 class="text-brown-900 text-2xl font-bold uppercase text-center md:text-3xl lg:text-4xl">
				All Products in our Shop
			</h1>
			<p
				class="text-brown-900 text-base text-center font-normal leading-relaxed md:text-lg lg:text-xl"
			>
				Integer cursus molestie neque vel commodo. Maecenas a pulvinar erat, nec dictum mi. Cras
				sed dolor finibus, imperdiet odio sed, molestie nunc. Morbi vel tincidunt magna, a congue
				lorem. Phasellus accumsan turpis vitae mi rutrum lobortis. Mauris faucibus fringilla enim
			</p>
		</div>
		<div
			class="w-full flex flex-col justify-between items-center space-y-4 md:flex-row md:space-y-0"
		>
			<div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 w-full md:w-auto">
				<form action="/search" class="flex-1 w-full md:w-96">
					<div class="relative">
						<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
							<SearchOutline class="w-4 h-4" />
						</div>
						<Input
							id="search-navbar"
							color="base"
							class="pl-10 w-full"
							placeholder="Search cake..."
						/>
					</div>
				</form>
				<Button color="primary" class="text-base font-bold text-gray-50">
					Sort By<ChevronDownOutline class="pl-2 text-gray-50" size="lg" />
				</Button>
				<Dropdown class="w-48 overflow-y-auto py-1 h-48">
					<DropdownItem class="flex items-center text-base font-normal gap-2">
						<span>Featured</span>
					</DropdownItem>
					<DropdownItem class="flex items-center text-base font-normal gap-2">
						<span>Newest Arrivals</span>
					</DropdownItem>
					<DropdownItem class="flex items-center text-base font-normal gap-2">
						<span>Lower Price</span>
					</DropdownItem>
					<DropdownItem class="flex items-center text-base font-normal gap-2">
						<span>Highest Price</span>
					</DropdownItem>
					<DropdownItem class="flex items-center text-base font-normal gap-2">
						<span>Best Selling</span>
					</DropdownItem>
					<DropdownItem class="flex items-center text-base font-normal gap-2">
						<span>Alphabetically, A-Z</span>
					</DropdownItem>
					<DropdownItem class="flex items-center text-base font-normal gap-2">
						<span>Alphabetically, Z-A</span>
					</DropdownItem>
				</Dropdown>
			</div>
			<div class="hidden md:flex md:flex-row md:space-x-4">
				<span class="text-gray-900 text-base font-semibold">View As</span>
				<button class="active:bg-cream-700 focus:outline-none focus:ring focus:ring-cream-300">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="bi bi-list-ul w-6 h-6 self-center text-gray-400"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
						/>
					</svg>
				</button>
				<button class="active:bg-cream-700 focus:outline-none focus:ring focus:ring-cream-300">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="bi bi-grid w-6 h-6 self-center text-gray-400"
						viewBox="0 0 16 16"
					>
						<path
							d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"
						/>
					</svg>
				</button>
			</div>
		</div>
		<div class="grid grid-cols-1 grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
			{#each data.cakes as cake}
				<div class="max-w-full h-full border bg-gray-50 bg-center p-5">
					<img src={cake.image} alt={cake.name} class="w-full h-64 object-cover" loading="lazy" />
					<div class="flex flex-col space-y-4 items-start py-2">
						<div class="flex flex-col space-y-2">
							<a href={'#'}>
								<p class="text-lg font-normal tracking-tight text-brown-900">
									{cake.name}
								</p>
							</a>
							<p class="text-brown-900 text-xl font-bold">
								{new Intl.NumberFormat('id-ID', {
									style: 'currency',
									currency: 'IDR'
								}).format(cake.price)}
							</p>
						</div>
						<Button color="primary" class="text-base font-bold text-gray-50">Add to Cart</Button>
					</div>
				</div>
			{/each}
		</div>
	</div>
</Section>
