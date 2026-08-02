<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { CakeDungeonLogo } from '$lib';
</script>

<Section bgColor="bg-lighter-cream" fontFamily="font-bodoni">
	<div class="relative px-6 py-10 overflow-hidden md:px-8 md:py-12">
		<!-- Decorative blurred glows -->
		<div
			class="absolute w-64 h-64 rounded-full pointer-events-none -left-16 -top-10 bg-cream-300/40 blur-3xl"
			aria-hidden="true"
		></div>
		<div
			class="absolute rounded-full pointer-events-none -bottom-16 -right-16 h-72 w-72 bg-brown-200/30 blur-3xl"
			aria-hidden="true"
		></div>

		<div class="relative flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
			<!-- Image: visible at every breakpoint now, image-first on mobile/tablet, flips to the
			     end (right side) once the layout goes side-by-side at lg -->
			<div class="relative order-first shrink-0 lg:order-last">
				<img
					src={CakeDungeonLogo}
					alt="Cake Dungeon logo"
					loading="lazy"
					class="h-48 w-48 rounded-full shadow-lg ring-4 ring-cream-50/70 sm:h-60 sm:w-60 lg:h-96 lg:w-96 lg:rounded-[2.5rem] lg:shadow-xl"
				/>
				<span
					class="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brown-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream-50 shadow-md sm:text-sm lg:-bottom-4 lg:left-6 lg:translate-x-0"
				>
					Est. 2024
				</span>
			</div>

			<!-- Text -->
			<div
				class="flex flex-col items-center space-y-6 text-center lg:max-w-xl lg:items-start lg:text-start"
			>
				<p class="text-base font-normal tracking-wide uppercase text-brown-700 md:text-lg">
					#Taste Better, Heart More Comfortable
				</p>
				<h1 class="text-3xl font-bold text-brown-900 md:text-4xl lg:text-5xl">
					About Cake Dungeon Online Store
				</h1>
				<div
					class="space-y-4 text-lg font-normal leading-relaxed font-mulish text-brown-900 md:text-xl"
				>
					<p>
						The Cake Dungeon Online Store, established in 2024, is a fusion of advanced technology
						and user-friendly accessibility, designed to cater to the diverse tastes of cake and
						dessert enthusiasts. Our innovation lies in our meticulously curated online platform,
						offering a wide array of unique and delectable cakes and desserts, accessible to
						everyone. Committed to excellence, we provide top-notch quality and competitive prices
						for all our offerings.
					</p>
					<p>
						In addition to our delightful products, our platform features a collection of insightful
						articles on cake and dessert making. These guides empower you to recreate your favorite
						treats from our shop in the comfort of your home. Indulge in the exquisite flavors of
						our cakes and desserts, and experience our unwavering dedication to providing you with
						the finest service. Join us at Cake Dungeon Online Store, where every bite is a journey
						of taste and quality.
					</p>
				</div>

				<!-- Highlight chips: short visual summary of themes already in the paragraph above -->
				<div class="grid w-full grid-cols-2 gap-4 pt-2 sm:grid-cols-4">
					<div class="flex flex-col items-center gap-2 text-center lg:items-start lg:text-start">
						<span
							class="flex items-center justify-center w-10 h-10 rounded-full bg-brown-100 text-brown-700"
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
								<rect x="3" y="3" width="7" height="7" rx="1.5" />
								<rect x="14" y="3" width="7" height="7" rx="1.5" />
								<rect x="3" y="14" width="7" height="7" rx="1.5" />
								<rect x="14" y="14" width="7" height="7" rx="1.5" />
							</svg>
						</span>
						<span class="text-sm font-semibold text-brown-900">Curated Selection</span>
					</div>
					<div class="flex flex-col items-center gap-2 text-center lg:items-start lg:text-start">
						<span
							class="flex items-center justify-center w-10 h-10 rounded-full bg-brown-100 text-brown-700"
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
								<path
									d="M12 2.5l2.9 6.1 6.6.7-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.1 1.3-6.6-4.9-4.6 6.6-.7Z"
								/>
							</svg>
						</span>
						<span class="text-sm font-semibold text-brown-900">Top-Notch Quality</span>
					</div>
					<div class="flex flex-col items-center gap-2 text-center lg:items-start lg:text-start">
						<span
							class="flex items-center justify-center w-10 h-10 rounded-full bg-brown-100 text-brown-700"
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
						<span class="text-sm font-semibold text-brown-900">Helpful Guides</span>
					</div>
					<div class="flex flex-col items-center gap-2 text-center lg:items-start lg:text-start">
						<span
							class="flex items-center justify-center w-10 h-10 rounded-full bg-brown-100 text-brown-700"
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
								<path
									d="M12 20.5S3.5 15 3.5 9a4.5 4.5 0 0 1 8.5-2 4.5 4.5 0 0 1 8.5 2c0 6-8.5 11.5-8.5 11.5Z"
								/>
							</svg>
						</span>
						<span class="text-sm font-semibold text-brown-900">Dedicated Service</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</Section>
