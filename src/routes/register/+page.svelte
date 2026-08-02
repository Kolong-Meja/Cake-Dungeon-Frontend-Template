<script lang="ts">
	import { Cakes, CakeDungeonLogo } from '$lib';
	let showPassword = $state(false);

	function togglePasswordVisibility(): void {
		showPassword = !showPassword;
	}
</script>

<section class="relative w-full max-w-full min-h-screen overflow-hidden bg-lighter-cream font-lato">
	<div
		class="absolute w-64 h-64 rounded-full pointer-events-none -left-20 -top-20 bg-cream-300/40 blur-3xl"
		aria-hidden="true"
	></div>
	<div
		class="absolute rounded-full pointer-events-none -bottom-24 -right-16 h-72 w-72 bg-brown-200/30 blur-3xl"
		aria-hidden="true"
	></div>

	<div class="flex flex-col md:flex-row">
		<div class="w-full md:w-1/2">
			<div
				class="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-b-[3rem] bg-cover bg-center sm:h-64 md:sticky md:top-0 md:h-screen md:rounded-b-none md:rounded-r-[6rem]"
				style="background-image: url({Cakes});"
			>
				<div
					class="absolute inset-0 pointer-events-none bg-gradient-to-t from-brown-900/75 via-brown-900/15 to-transparent"
					aria-hidden="true"
				></div>
				<div class="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
					<a href={'/'} title="Cake Dungeon Online Store">
						<img
							src={CakeDungeonLogo}
							alt="Cake Dungeon logo"
							class="w-20 h-20 border-4 rounded-full shadow-lg border-lighter-cream sm:h-24 sm:w-24 md:h-40 md:w-40"
						/>
					</a>
					<p class="hidden text-lg italic font-bodoni text-cream-50 md:block md:text-xl">
						Join our sweet family and start ordering.
					</p>
				</div>
			</div>
		</div>

		<!-- Form panel -->
		<div
			class="flex flex-col justify-center w-full min-h-screen px-6 py-10 sm:px-10 md:w-1/2 md:overflow-y-auto md:py-16"
		>
			<div class="flex flex-col w-full max-w-md mx-auto space-y-6 animate-fadeIn">
				<div class="flex flex-col items-center space-y-2 text-center">
					<span
						class="flex items-center justify-center w-12 h-12 rounded-full shadow-inner bg-cream-200 text-brown-700"
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
					<h1 class="text-2xl font-semibold font-bodoni text-brown-900 sm:text-3xl">
						Register your account
					</h1>
					<p class="text-base text-brown-700 sm:text-lg">
						Already have an account?
						<a
							href={'/login'}
							class="font-semibold underline transition-colors duration-300 text-brown-900 decoration-cream-500 decoration-2 underline-offset-2 hover:text-cream-900"
							>Sign in</a
						>
					</p>
				</div>

				<form class="flex flex-col space-y-4">
					<div class="flex flex-col gap-1.5">
						<label for="fullname" class="sr-only">Full name</label>
						<div
							class="flex items-center gap-2 rounded-2xl border-2 border-cream-300 bg-white/70 p-2.5 shadow-sm transition-all duration-300 focus-within:border-brown-400 focus-within:shadow-md"
						>
							<span
								class="flex items-center justify-center w-8 h-8 rounded-full shrink-0 bg-cream-100 text-brown-700"
								aria-hidden="true"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-5 h-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
										clip-rule="evenodd"
									/>
								</svg>
							</span>
							<input
								id="fullname"
								name="fullname"
								type="text"
								placeholder="Full name"
								autocomplete="name"
								class="w-full text-base bg-transparent border-none outline-none text-brown-900 placeholder-brown-400"
							/>
						</div>
					</div>

					<div class="flex flex-col gap-1.5">
						<label for="phone-number" class="sr-only">Phone Number</label>
						<div
							class="flex items-center gap-2 rounded-2xl border-2 border-cream-300 bg-white/70 p-2.5 shadow-sm transition-all duration-300 focus-within:border-brown-400 focus-within:shadow-md"
						>
							<span
								class="flex items-center justify-center w-8 h-8 rounded-full shrink-0 bg-cream-100 text-brown-700"
								aria-hidden="true"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									class="w-5 h-5"
									viewBox="0 0 16 16"
								>
									<path
										d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
									/>
								</svg>
							</span>
							<input
								id="phone-number"
								name="phone-number"
								type="tel"
								placeholder="Phone Number"
								autocomplete="tel"
								class="w-full text-base bg-transparent border-none outline-none text-brown-900 placeholder-brown-400"
							/>
						</div>
					</div>

					<div class="flex flex-col gap-1.5">
						<label for="email" class="sr-only">Email Address</label>
						<div
							class="flex items-center gap-2 rounded-2xl border-2 border-cream-300 bg-white/70 p-2.5 shadow-sm transition-all duration-300 focus-within:border-brown-400 focus-within:shadow-md"
						>
							<span
								class="flex items-center justify-center w-8 h-8 rounded-full shrink-0 bg-cream-100 text-brown-700"
								aria-hidden="true"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-5 h-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
									/>
								</svg>
							</span>
							<input
								id="email"
								name="email"
								type="email"
								placeholder="Email Address"
								autocomplete="email"
								class="w-full text-base bg-transparent border-none outline-none text-brown-900 placeholder-brown-400"
							/>
						</div>
					</div>

					<div class="flex flex-col gap-1.5">
						<label for="password" class="sr-only">Password</label>
						<div
							class="flex items-center gap-2 rounded-2xl border-2 border-cream-300 bg-white/70 p-2.5 shadow-sm transition-all duration-300 focus-within:border-brown-400 focus-within:shadow-md"
						>
							<span
								class="flex items-center justify-center w-8 h-8 rounded-full shrink-0 bg-cream-100 text-brown-700"
								aria-hidden="true"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-5 h-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
										clip-rule="evenodd"
									/>
								</svg>
							</span>
							<input
								id="password"
								name="password"
								type={showPassword ? 'text' : 'password'}
								placeholder="Password"
								autocomplete="new-password"
								class="w-full text-base bg-transparent border-none outline-none text-brown-900 placeholder-brown-400"
							/>
							<button
								type="button"
								onclick={togglePasswordVisibility}
								aria-label={showPassword ? 'Hide password' : 'Show password'}
								aria-pressed={showPassword}
								class="shrink-0 rounded-full p-1.5 text-brown-400 transition-colors duration-300 hover:text-brown-700"
							>
								{#if showPassword}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="w-5 h-5"
										aria-hidden="true"
									>
										<path d="M3 3l18 18" />
										<path
											d="M10.6 5.1A10.9 10.9 0 0 1 12 5c7 0 10.5 7 10.5 7a13.4 13.4 0 0 1-3.1 4.1M6.3 6.3C3.4 8.2 1.5 12 1.5 12S5 19 12 19a10.6 10.6 0 0 0 4.2-.9"
										/>
										<path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
									</svg>
								{:else}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="w-5 h-5"
										aria-hidden="true"
									>
										<path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z" />
										<circle cx="12" cy="12" r="3" />
									</svg>
								{/if}
							</button>
						</div>
					</div>

					<button
						type="submit"
						class="w-full p-3 text-base font-semibold transition-all duration-300 ease-in-out shadow-md rounded-2xl bg-gradient-to-r from-brown-700 to-brown-900 text-cream-50 hover:from-brown-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-cream-300"
					>
						Register Account
					</button>
				</form>

				<div class="flex items-center gap-3" aria-hidden="true">
					<span class="flex-1 h-px bg-cream-300"></span>
					<span class="text-sm font-medium text-brown-500">or</span>
					<span class="flex-1 h-px bg-cream-300"></span>
				</div>

				<div class="flex flex-col space-y-3">
					<button
						type="button"
						class="flex flex-row items-center justify-center w-full gap-2 p-3 transition-all duration-300 border-2 shadow-sm rounded-2xl border-cream-300 bg-white/70 text-brown-900 hover:border-brown-400 hover:bg-white focus:outline-none focus:ring-4 focus:ring-cream-300"
					>
						<svg
							class="w-5 h-5"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							viewBox="-0.5 0 48 48"
							version="1.1"
						>
							<g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g id="Color-" transform="translate(-401.000000, -860.000000)">
									<g id="Google" transform="translate(401.000000, 860.000000)">
										<path
											d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
											id="Fill-1"
											fill="#FBBC05"
										></path>
										<path
											d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
											id="Fill-2"
											fill="#EB4335"
										></path>
										<path
											d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
											id="Fill-3"
											fill="#34A853"
										></path>
										<path
											d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
											id="Fill-4"
											fill="#4285F4"
										></path>
									</g>
								</g>
							</g>
						</svg>
						<span class="text-base font-normal md:text-lg">Continue with Google</span>
					</button>
					<button
						type="button"
						class="flex flex-row items-center justify-center w-full gap-2 p-3 transition-all duration-300 border-2 shadow-sm rounded-2xl border-cream-300 bg-white/70 text-brown-900 hover:border-brown-400 hover:bg-white focus:outline-none focus:ring-4 focus:ring-cream-300"
					>
						<svg
							class="w-5 h-5"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							viewBox="0 0 48 48"
							version="1.1"
						>
							<g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#4460A0">
									<path
										d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
										id="Facebook"
									></path>
								</g>
							</g>
						</svg>
						<span class="text-base font-normal md:text-lg">Continue with Facebook</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</section>
