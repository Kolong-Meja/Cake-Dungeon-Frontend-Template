<script lang="ts">
	import { Cakes, CakeDungeonLogo } from '$lib';
	import { onMount } from 'svelte';

	onMount(() => {
		const sidePicture = document.getElementById('side-picture');

		if (sidePicture) {
			sidePicture.style.backgroundImage = `url(${Cakes})`;
		}
	});
</script>

<section class="bg-gray-50 font-lato min-h-screen max-w-full">
	<div class="grid grid-cols-1 h-full overflow-x-hidden md:grid-cols-2">
		<div
			id="side-picture"
			class="flex bg-cover bg-center bg-fixed min-h-screen justify-center items-center"
		>
			<div>
				<a href={'/'} title="Cake Dungeon Online Store">
					<img
						id="logo"
						src={CakeDungeonLogo}
						alt="cake"
						class="rounded-full w-48 h-48 md:w-56 md:h-56"
					/>
				</a>
			</div>
		</div>
		<div class="bg-gray-50 min-h-screen py-16 px-8 w-full flex flex-col justify-center">
			<form class="flex flex-col space-y-6 max-w-md mx-auto w-full">
				<div class="flex flex-col space-y-2 items-center">
					<h1 class="text-gray-900 font-semibold text-2xl text-center md:text-3xl">
						Sign In to your account
					</h1>
					<p class="text-gray-900 font-normal text-lg text-center md:text-xl">
						Or <span class="text-blue-400"><a href={'/register'}>create an account</a></span>
					</p>
				</div>
				<div class="flex items-center border-2 p-2 rounded-2xl bg-gray-50 md:p-2.5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-gray-400"
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
					<input
						class="w-full text-base bg-transparent outline-none border-none px-2 ms-2"
						type="email"
						name="email"
						id="email"
						placeholder="Email Address"
						required
					/>
				</div>
				<div class="flex items-center border-2 p-2 rounded-2xl bg-gray-50 md:p-2.5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-gray-400"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
							clip-rule="evenodd"
						/>
					</svg>
					<input
						class="w-full text-base bg-transparent outline-none border-none px-2 ms-2"
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						required
					/>
				</div>
				<button
					type="submit"
					class="w-full bg-cream-500 p-2 rounded-2xl text-gray-50 text-base font-semibold hover:bg-cream-900 transition-all duration-300 ease-in-out"
				>
					Login
				</button>
				<div class="flex flex-row">
					<p
						class="text-base text-brown-900 hover:text-blue-500 underline transition-all duration-300 ease-in-out"
					>
						<a href={'#'}>Forgot Password?</a>
					</p>
				</div>
			</form>
		</div>
	</div>
</section>
