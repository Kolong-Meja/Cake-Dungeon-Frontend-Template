<svelte:options customElement="welcome-section" />

<script lang="ts">
	import { WelcomeSectionPicture } from '$lib';
	import SectionTemplate from '../SectionTemplate.svelte';

	export let useTransition = true;
</script>

<SectionTemplate>
	<div class="py-12 px-8 max-w-screen-xl">
		<div class="flex flex-row items-center space-x-10">
			<div class="flex flex-col items-start space-y-7 p-3">
				<h1 class="text-6xl font-bold text-gray-900 uppercase">Welcome to cake dungeon</h1>
				<p class="text-2xl font-normal leading-normal text-gray-900">
					This is your place to gather valuable experience filled with the high taste of cake. You
					will meet thousands of cake monsters who are ready to fill your stomach to the brim. Enjoy
					the adventure and stay full.
				</p>
				<a href="/cakes" class={!useTransition
					? 'inline-flex items-center p-3 text-sm font-medium text-center text-white bg-dark-cocoa rounded-lg hover:bg-cocoa focus:ring-4 focus:outline-none focus:ring-blue-300'
					: 'inline-flex items-center p-3 text-sm font-medium text-center text-white bg-dark-cocoa rounded-lg hover:bg-cocoa focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-300 ease-in-out'}>
					<span class="font-bodoni text-light-cream text-lg">Start Explore</span>
				</a>
			</div>
			<img src={WelcomeSectionPicture} alt="cake" class="rounded-lg w-[36rem] h-[36rem]" />
		</div>
	</div>
</SectionTemplate>
