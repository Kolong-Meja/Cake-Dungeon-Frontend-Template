<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Section bgColor="bg-lighter-cream" fontFamily="font-bodoni" responsiveDesign>
	<div class="relative px-6 py-10 overflow-hidden md:px-8 md:py-12">
		<div
			class="absolute w-64 h-64 rounded-full pointer-events-none -left-16 -top-10 bg-cream-300/40 blur-3xl"
			aria-hidden="true"
		></div>
		<div
			class="absolute rounded-full pointer-events-none -bottom-16 -right-16 h-72 w-72 bg-brown-200/30 blur-3xl"
			aria-hidden="true"
		></div>

		<div class="relative flex flex-col items-center w-full space-y-12">
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
						<path d="M4 5.5c2-1 5-1 8 .5v13c-3-1.5-6-1.5-8-.5Z" />
						<path d="M20 5.5c-2-1-5-1-8 .5v13c3-1.5 6-1.5 8-.5Z" />
					</svg>
				</span>
				<p class="text-sm font-normal tracking-wide uppercase text-brown-700 md:text-base">
					#Taste Better, Heart More Comfortable
				</p>
				<h1 class="text-2xl font-bold text-center uppercase text-brown-900 md:text-3xl lg:text-4xl">
					Articles
				</h1>
				<p
					class="text-base font-normal leading-relaxed text-center font-mulish text-brown-900 md:text-lg lg:text-xl"
				>
					Browse hundreds of articles that we provide for you to read.
				</p>
			</div>

			<div class="flex flex-col items-start w-full space-y-8 md:space-y-10 lg:space-y-12">
				<div class="flex flex-col gap-2">
					<h2 class="text-xl font-bold uppercase text-brown-900 md:text-2xl lg:text-3xl">
						Articles by Topic
					</h2>
					<span class="w-16 h-1 rounded-full bg-brown-400" aria-hidden="true"></span>
				</div>

				<div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each data.categories as category}
						<div
							class="flex flex-col h-full gap-4 p-5 transition-all duration-300 ease-in-out shadow-sm group rounded-2xl bg-brown-50 ring-1 ring-brown-100 hover:-translate-y-1 hover:shadow-xl sm:p-6"
						>
							<div class="flex items-center gap-3">
								<span
									class="flex items-center justify-center w-10 h-10 rounded-full shrink-0 bg-cream-200 text-brown-700"
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
										class="w-5 h-5"
									>
										<path d="M4 5.5c2-1 5-1 8 .5v13c-3-1.5-6-1.5-8-.5Z" />
										<path d="M20 5.5c-2-1-5-1-8 .5v13c3-1.5 6-1.5 8-.5Z" />
									</svg>
								</span>
								<h3 class="text-lg font-semibold uppercase text-brown-900 md:text-xl lg:text-2xl">
									{category.name}
								</h3>
							</div>

							<ul class="space-y-2.5">
								{#each category.articles as article}
									<li>
										<a
											href={'#'}
											class="inline-flex items-start gap-2 text-base transition-colors duration-300 ease-in-out group/link text-brown-800 hover:text-brown-600"
										>
											<span
												class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brown-400 transition-colors duration-300 ease-in-out group-hover/link:bg-brown-600"
												aria-hidden="true"
											></span>
											<span
												class="underline transition-colors duration-300 ease-in-out decoration-brown-300 decoration-1 underline-offset-2 group-hover/link:decoration-brown-600"
											>
												{article.title}
											</span>
										</a>
									</li>
								{/each}
							</ul>

							<a
								href={'#'}
								class="inline-flex items-center gap-2 px-4 py-2 mt-auto text-sm font-semibold transition-all duration-300 ease-in-out rounded-full group/btn w-fit bg-brown-400 text-brown-50 hover:bg-brown-600 focus:outline-none focus:ring-4 focus:ring-brown-300"
							>
								Read more about {category.name}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									class="w-4 h-4 transition-transform duration-300 ease-in-out bi bi-arrow-right-circle-fill group-hover/btn:translate-x-1"
									viewBox="0 0 16 16"
								>
									<path
										d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
									/>
								</svg>
							</a>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</Section>
