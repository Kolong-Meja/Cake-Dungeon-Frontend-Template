<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Section bgColor="bg-lighter-cream" fontFamily="font-bodoni" responsiveDesign>
	<div class="flex flex-col items-center py-12 px-8 space-y-12 w-full">
		<div class="flex flex-col justify-center items-center space-y-3">
			<h1 class="text-gray-900 text-2xl font-bold uppercase text-center md:text-3xl lg:text-4xl">
				Articles
			</h1>
			<p
				class="text-gray-900 text-base text-center font-mulish font-normal leading-relaxed md:text-lg lg:text-xl"
			>
				Browse hundreds of articles that we provide for you to read.
			</p>
		</div>
		<div class="flex flex-col space-y-8 w-full items-start md:space-y-10 lg:space-y-12">
			<h1 class="text-gray-900 text-xl h-5 font-bold uppercase md:text-2xl lg:text-3xl">
				Articles by Topic
			</h1>
			<div class="grid grid-cols-1 grid-flow-row gap-4 w-full sm:grid-cols-2 sm:gap-5 md:gap-6">
				{#each data.categories as category}
					<div
						class="flex flex-col space-y-4 h-full border-b border-b-cream-600 pb-3 sm:border-0 sm:pb-0"
					>
						<h1 class="text-lg font-semibold uppercase text-gray-900 md:text-xl lg:text-2xl">
							{category.name}
						</h1>
						<ul class="space-y-3 text-gray-90 text-base">
							{#each category.articles as article}
								<li class="text-lg">
									<a
										href={'#'}
										class="font-normal underline underline-offset-2 hover:text-cream-800 transition-all duration-300 ease-in-out"
										>{article.title}</a
									>
								</li>
							{/each}
						</ul>
						<div class="flex flex-row space-x-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								class="bi bi-arrow-right-circle-fill w-6 h-6 text-cream-900"
								viewBox="0 0 16 16"
							>
								<path
									d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
								/>
							</svg>
							<a
								href={'#'}
								class="w-full text-base font-normal bg-transparent rounded-full hover:bg-brown-600 transition-all duration-300 ease-in-out"
							>
								<span class="font-bodoni text-gray-900 text-lg text-center"
									>Read more about <span class="font-bold">{category.name}</span></span
								>
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</Section>
