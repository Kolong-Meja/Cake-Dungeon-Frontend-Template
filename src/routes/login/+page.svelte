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

	<div class="grid h-full grid-cols-1 md:grid-cols-2">
		<div
			class="relative flex h-64 items-center justify-center overflow-hidden rounded-b-[3rem] bg-cover bg-center sm:h-80 md:h-auto md:min-h-screen md:rounded-b-none md:rounded-r-[6rem]"
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
						class="w-24 h-24 border-4 rounded-full shadow-lg border-lighter-cream sm:h-28 sm:w-28 md:h-40 md:w-40"
					/>
				</a>
				<p class="hidden text-lg italic font-bodoni text-cream-50 md:block md:text-xl">
					Freshly baked happiness, one login away.
				</p>
			</div>
		</div>

		<!-- Form panel -->
		<div class="flex flex-col justify-center w-full px-6 py-10 sm:px-10 md:min-h-screen md:py-16">
			<form class="flex flex-col w-full max-w-md mx-auto space-y-5 animate-fadeIn">
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
						Sign In to your account
					</h1>
					<p class="text-base text-brown-700 sm:text-lg">
						Or
						<a
							href={'/register'}
							class="font-semibold underline transition-colors duration-300 text-brown-900 decoration-cream-500 decoration-2 underline-offset-2 hover:text-cream-900"
							>create an account</a
						>
					</p>
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
							required
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
							autocomplete="current-password"
							required
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
					Login
				</button>

				<div class="flex justify-center">
					<a
						href={'#'}
						class="text-sm underline transition-colors duration-300 text-brown-700 decoration-cream-400 underline-offset-2 hover:text-brown-900 sm:text-base"
					>
						Forgot Password?
					</a>
				</div>
			</form>
		</div>
	</div>
</section>
