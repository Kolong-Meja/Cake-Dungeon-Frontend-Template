<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { CakeDungeonLogo } from '$lib';
</script>

<Section bgColor="bg-lighter-cream" fontFamily="font-bodoni">
	<div class="py-12 px-8 max-w-screen-xl">
		<div class="flex flex-row items-center space-x-10">
			<div class="flex flex-col items-start space-y-6 p-3">
				<p class="text-lg text-brown-900 font-normal uppercase">
					#Taste Better, Heart More Comfortable
				</p>
				<h1 class="text-5xl text-brown-900 font-bold">About Cake Dungeon Online Store</h1>
				<p class="text-xl text-brown-900 font-normal leading-relaxed">
					The Cake Dungeon Online Store, established in 2024, is a fusion of advanced technology and
					user-friendly accessibility, designed to cater to the diverse tastes of cake and dessert
					enthusiasts. Our innovation lies in our meticulously curated online platform, offering a
					wide array of unique and delectable cakes and desserts, accessible to everyone. Committed
					to excellence, we provide top-notch quality and competitive prices for all our offerings.
					In addition to our delightful products, our platform features a collection of insightful
					articles on cake and dessert making. These guides empower you to recreate your favorite
					treats from our shop in the comfort of your home. Indulge in the exquisite flavors of our
					cakes and desserts, and experience our unwavering dedication to providing you with the
					finest service. Join us at Cake Dungeon Online Store, where every bite is a journey of
					taste and quality.
				</p>
			</div>
			<img
				src={CakeDungeonLogo}
				alt="logo"
				class="rounded-lg w-[28rem] h-[28rem] shadow-xl"
				loading="lazy"
			/>
		</div>
	</div>
</Section>
