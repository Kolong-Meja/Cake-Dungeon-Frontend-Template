<script lang="ts">
	import { CakeDungeonLogo } from '$lib';
	import Section from './Section.svelte';
</script>

<Section
	bgColor="bg-gradient-to-b from-brown-800 to-brown-900"
	fontFamily="font-bodoni"
	responsiveDesign
>
	<div class="relative overflow-hidden">
		<!-- Decorative "sprinkle dots" strip — pure CSS, zero extra network requests -->   
		<div
			class="h-2 w-full bg-[radial-gradient(circle,#EAD8C0_1.5px,transparent_1.5px)] bg-[length:16px_16px]"
			aria-hidden="true"
		></div>

		<!-- Decorative blurred glows -->
		<div
			class="absolute w-64 h-64 rounded-full pointer-events-none -left-16 top-10 bg-cream-300/10 blur-3xl"
			aria-hidden="true"
		></div>
		<div
			class="absolute bottom-0 rounded-full pointer-events-none -right-20 h-72 w-72 bg-cream-200/10 blur-3xl"
			aria-hidden="true"
		></div>

		<div class="relative flex flex-col px-6 py-10 md:px-8 md:py-12">
			<!-- Logo + tagline -->
			<div
				class="flex flex-col items-center justify-center p-2 space-y-6 md:flex-row md:justify-between"
			>
				<a href={'/'} class="shrink-0">
					<img
						id="logo"
						src={CakeDungeonLogo}
						alt="Cake Dungeon logo"
						title="Cake Dungeon Online Store"
						class="w-16 h-16 rounded-full ring-4 ring-cream-50/20 sm:h-20 sm:w-20"
					/>
				</a>
				<h2
					class="text-2xl italic font-semibold text-center font-bodoni text-cream-50 md:text-end md:text-3xl lg:text-4xl"
				>
					#Taste Better, Heart More Comfortable
				</h2>
			</div>

			<!-- Link columns -->
			<div
				class="grid grid-cols-1 gap-10 p-3 mt-10 md:mt-12 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-12"
			>
				<div class="flex flex-col space-y-6 font-lato">
					<div>
						<h3 class="text-lg font-semibold tracking-wide uppercase text-cream-50 md:text-xl">
							Social Media
						</h3>
						<span class="mt-2 block h-0.5 w-10 bg-cream-300/70" aria-hidden="true"></span>
					</div>
					<div class="flex space-x-3">
						<a
							href={'#'}
							aria-label="Instagram"
							class="flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-cream-50/20 hover:text-cream-200"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								class="w-5 h-5"
								viewBox="0 0 16 16"
							>
								<path
									d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
								/>
							</svg>
						</a>
						<a
							href={'#'}
							aria-label="Threads"
							class="flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-cream-50/20 hover:text-cream-200"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								class="w-5 h-5"
								viewBox="0 0 16 16"
							>
								<path
									d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"
								/>
							</svg>
						</a>
						<a
							href={'#'}
							aria-label="Facebook"
							class="flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-cream-50/20 hover:text-cream-200"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								class="w-5 h-5"
								viewBox="0 0 16 16"
							>
								<path
									d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
								/>
							</svg>
						</a>
						<a
							href={'#'}
							aria-label="X (formerly Twitter)"
							class="flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-cream-50/20 hover:text-cream-200"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								class="w-5 h-5"
								viewBox="0 0 16 16"
							>
								<path
									d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
								/>
							</svg>
						</a>
					</div>
				</div>

				<div class="flex flex-col space-y-4 font-lato md:space-y-6">
					<div>
						<h3 class="text-lg font-semibold tracking-wide uppercase text-cream-50 md:text-xl">
							Marketplace
						</h3>
						<span class="mt-2 block h-0.5 w-10 bg-cream-300/70" aria-hidden="true"></span>
					</div>
					<ul class="space-y-2.5 text-cream-50">
						<li>
							<a
								href={'#'}
								class="inline-block text-base font-normal transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-cream-200"
								>Tokopedia</a
							>
						</li>
						<li>
							<a
								href={'#'}
								class="inline-block text-base font-normal transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-cream-200"
								>GoFood</a
							>
						</li>
						<li>
							<a
								href={'#'}
								class="inline-block text-base font-normal transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-cream-200"
								>Grab Food</a
							>
						</li>
						<li>
							<a
								href={'#'}
								class="inline-block text-base font-normal transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-cream-200"
								>Whatsapp</a
							>
						</li>
					</ul>
				</div>

				<div class="flex flex-col space-y-4 font-lato md:space-y-6">
					<div>
						<h3 class="text-lg font-semibold tracking-wide uppercase text-cream-50 md:text-xl">
							Informations
						</h3>
						<span class="mt-2 block h-0.5 w-10 bg-cream-300/70" aria-hidden="true"></span>
					</div>
					<ul class="space-y-2.5 text-cream-50">
						<li>
							<a
								href={'#'}
								class="inline-block text-base font-normal transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-cream-200"
								>Terms &amp; Condition</a
							>
						</li>
						<li>
							<a
								href={'#'}
								class="inline-block text-base font-normal transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-cream-200"
								>FAQ &amp; Help</a
							>
						</li>
						<li>
							<a
								href={'#'}
								class="inline-block text-base font-normal transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-cream-200"
								>Privacy Policy</a
							>
						</li>
						<li>
							<a
								href={'#'}
								class="inline-block text-base font-normal transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-cream-200"
								>About Us</a
							>
						</li>
					</ul>
				</div>

				<div class="flex flex-col space-y-4 font-lato md:space-y-6">
					<div>
						<h3 class="text-lg font-semibold tracking-wide uppercase text-cream-50 md:text-xl">
							Operational Hours
						</h3>
						<span class="mt-2 block h-0.5 w-10 bg-cream-300/70" aria-hidden="true"></span>
					</div>
					<ul class="space-y-2.5 text-cream-50">
						<li class="text-base font-normal">Monday - Friday: 07:30 - 21:30 (GMT+7)</li>
						<li class="text-base font-normal">Saturday - Sunday: 08:00 - 21:00 (GMT+7)</li>
					</ul>
				</div>
			</div>

			<!-- Bottom bar -->
			<div
				class="flex flex-col items-center justify-between gap-4 p-3 pt-6 mt-10 border-t border-cream-50/10 font-lato md:mt-12 md:flex-row"
			>
				<p class="text-sm text-center text-cream-50/80 md:text-base md:text-start">
					© {new Date().getFullYear()} Cake Dungeon. All rights reserved.
				</p>
				<div class="flex space-x-5">
					<a
						href={'#'}
						class="text-sm font-normal transition-colors duration-300 ease-in-out text-cream-50/80 hover:text-cream-200 md:text-base"
						>Privacy Policy</a
					>
					<a
						href={'#'}
						class="text-sm font-normal transition-colors duration-300 ease-in-out text-cream-50/80 hover:text-cream-200 md:text-base"
						>Terms of Use</a
					>
				</div>
			</div>
		</div>
	</div>
</Section>
