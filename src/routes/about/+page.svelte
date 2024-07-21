<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { CakeDungeonLogo } from '$lib';
</script>

<Section bgColor="bg-lighter-cream" fontFamily="font-bodoni">
	<div class="flex flex-col justify-center items-center py-12 px-8 lg:flex-row lg:space-x-12">
		<div
			class="flex flex-col order-1 items-start space-y-6 p-2 mt-0 md:items-center md:p-3 md:mt-4 md:order-last lg:order-1 lg:p-4 lg:mt-0 lg:items-start"
		>
			<p class="text-base text-brown-900 font-normal uppercase md:text-lg">
				#Taste Better, Heart More Comfortable
			</p>
			<h1 class="text-3xl text-brown-900 font-bold md:text-4xl lg:text-5xl">
				About Cake Dungeon Online Store
			</h1>
			<p
				class="text-lg text-brown-900 font-normal leading-relaxed text-start md:text-xl md:text-center lg:text-start"
			>
				The Cake Dungeon Online Store, established in 2024, is a fusion of advanced technology and
				user-friendly accessibility, designed to cater to the diverse tastes of cake and dessert
				enthusiasts. Our innovation lies in our meticulously curated online platform, offering a
				wide array of unique and delectable cakes and desserts, accessible to everyone. Committed to
				excellence, we provide top-notch quality and competitive prices for all our offerings. In
				addition to our delightful products, our platform features a collection of insightful
				articles on cake and dessert making. These guides empower you to recreate your favorite
				treats from our shop in the comfort of your home. Indulge in the exquisite flavors of our
				cakes and desserts, and experience our unwavering dedication to providing you with the
				finest service. Join us at Cake Dungeon Online Store, where every bite is a journey of taste
				and quality.
			</p>
		</div>
		<img
			src={CakeDungeonLogo}
			alt="logo"
			class="hidden rounded-full w-56 h-56 shadow-lg md:block md:order-1 lg:order-last lg:rounded-lg lg:w-96 lg:h-96 lg:shadow-xl"
			loading="lazy"
		/>
	</div>
</Section>
