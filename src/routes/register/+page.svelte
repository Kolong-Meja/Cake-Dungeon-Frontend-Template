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
	<div class="flex flex-row">
		<div
			id="side-picture"
			class="bg-cover bg-center bg-fixed flex h-screen sticky top-0 w-full justify-center items-center"
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
		<div class="bg-lighter-cream w-full self-center overflow-y-auto">
			<div class="flex flex-col py-12 px-8 space-y-4">
				<h1 class="text-dark-cocoa font-bold text-4xl self-center mb-4">Register your account</h1>
				<form class="flex flex-col space-y-4">
					<div class="flex items-center border-2 p-2.5 rounded-2xl">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
								clip-rule="evenodd"
							/>
						</svg>
						<input
							class="w-full bg-transparent outline-none border-none px-2"
							type="text"
							name="fullname"
							id="fullname"
							placeholder="Full name"
						/>
					</div>
					<div class="flex items-center border-2 p-2.5 rounded-2xl">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="bi bi-telephone-fill h-5 w-5 text-gray-400"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
							/>
						</svg>
						<input
							class="w-full bg-transparent outline-none border-none px-2"
							type="text"
							name="phone-number"
							id="phone-number"
							placeholder="Phone Number"
						/>
					</div>
					<div class="flex items-center border-2 p-2.5 rounded-2xl">
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
						>Register Account</button
					>
				</form>
				<span class="text-xl font-normal text-dark-cocoa self-center">Or</span>
				<div class="flex flex-col space-y-2">
					<button
						class="flex flex-row justify-center items-center bg-gray-50 border border-gray-300 rounded-2xl w-full p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-cream"
					>
						<svg
							class="h-6 w-6 mr-2"
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
										>
										</path>
										<path
											d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
											id="Fill-2"
											fill="#EB4335"
										>
										</path>
										<path
											d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
											id="Fill-3"
											fill="#34A853"
										>
										</path>
										<path
											d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
											id="Fill-4"
											fill="#4285F4"
										>
										</path>
									</g>
								</g>
							</g>
						</svg>
						<span class="text-lg text-dark-cocoa font-normal">Login with Google</span>
					</button>
					<button
						class="flex flex-row justify-center items-center bg-gray-50 border border-gray-300 rounded-2xl w-full p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-cream"
					>
						<svg
							class="h-6 w-6 mr-2"
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
									>
									</path>
								</g>
							</g>
						</svg>

						<span class="text-lg text-dark-cocoa font-normal">Login with Facebook</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</section>
