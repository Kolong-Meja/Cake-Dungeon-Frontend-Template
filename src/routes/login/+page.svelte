<script lang="ts">
	import { HeaderBgPicture, CakeDungeonLogo } from '$lib';
	import { onMount } from 'svelte';

	onMount(() => {
		const sidePicture = document.getElementById('side-picture');

		if (sidePicture) {
			sidePicture.style.backgroundImage = `url(${HeaderBgPicture})`;
		}
	});
</script>

<section class="bg-lighter-cream font-lato min-h-screen">
	<div class="flex flex-row h-screen overflow-y-hidden">
		<div
			id="side-picture"
			class="bg-cover bg-center bg-fixed flex w-full justify-center items-center"
		>
			<div>
				<a href={'/'} title="Cake Dungeon Online Store">
					<img
						id="logo"
						src={CakeDungeonLogo}
						alt="cake"
						class="rounded-full w-[14rem] h-[14rem]"
					/>
				</a>
			</div>
		</div>
		<div class="bg-lighter-cream py-12 px-8 w-full self-center">
			<form class="flex flex-col space-y-6">
				<div class="flex flex-col space-y-2 items-center">
					<h1 class="text-dark-cocoa font-bold text-4xl">Sign In to your account</h1>
					<p class="text-dark-cocoa font-normal text-xl">
						Or <span class="text-blue-400"><a href="/register">create an account</a></span>
					</p>
				</div>
				<div class="flex items-center border-2 p-2.5 rounded-2xl mb-4">
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
						class="w-full bg-transparent outline-none border-none px-2"
						type="text"
						name="email"
						id="email"
						placeholder="Email Address"
					/>
				</div>
				<div class="flex items-center border-2 p-2.5 rounded-2xl">
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
						class="w-full bg-transparent outline-none border-none px-2"
						type="text"
						name="password"
						id="password"
						placeholder="Password"
					/>
				</div>
				<button
					type="submit"
					class="w-full bg-cream p-2 rounded-2xl text-gray-50 text-lg font-semibold hover:bg-dark-cream transition-all duration-300 ease-in-out"
					>Login</button
				>
				<div class="flex flex-row">
					<p
						class="text-base text-dark-cocoa hover:text-blue-500 underline transition-all duration-300 ease-in-out self-start"
					>
						<a href={'#'}> Forgot Password ? </a>
					</p>
				</div>
			</form>
		</div>
	</div>
</section>
