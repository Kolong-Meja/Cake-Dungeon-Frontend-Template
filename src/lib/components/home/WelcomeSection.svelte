<svelte:options customElement="welcome-section" />

<script>
	import { WelcomeSectionPicture } from '$lib';
</script>

<section class="bg-little-dark-cream font-bodoni min-h-screen">
	<div class="container mx-auto">
		<div class="py-12 px-5 max-w-screen-xl">
			<div class="flex flex-row items-center space-x-10">
				<div class="flex flex-col items-start space-y-7 p-3">
					<h1 class="text-6xl font-bold text-gray-900 uppercase">Welcome to cake dungeon</h1>
					<p class="text-2xl font-normal leading-normal text-gray-900">
						This is your place to gather valuable experience filled with the high taste of cake. You
						will meet thousands of cake monsters who are ready to fill your stomach to the brim.
						Enjoy the adventure and stay full.
					</p>
					<a href="/cakes" class="no-underline bg-dark-cocoa rounded-lg p-3">
                        <span class="font-bodoni text-light-cream text-lg">Start Explore</span>
                    </a>
				</div>
				<img src={WelcomeSectionPicture} alt="cake" class="rounded-lg w-[36rem] h-[36rem]" />
			</div>
		</div>
	</div>
</section>
