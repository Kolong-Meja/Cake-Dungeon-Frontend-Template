<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import {
		CakeDungeonLogo,
		OnlineDeliveryPicture,
		FreeArticlePicture,
		CookBookPicture
	} from '$lib';
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
					Cake Dungeon Online Store was formed in 2024 by combining sophisticated technological
					elements that are easily accessible to the general public. We innovated by creating an
					online shop site that sells various kinds of cakes and desserts that are unique and can be
					consumed by all levels of society. We also provide the best quality and prices for you for
					the cakes and desserts that we provide. Not only that, we also provide several articles on
					how to make cakes and desserts easily which we provide on this platform, for example if
					you want to make one of your favorite cakes or desserts from our online shop from home.
					So, what are you waiting for, enjoy our cakes and desserts while we develop and provide
					the best service to you.
				</p>
			</div>
			<img src={CakeDungeonLogo} alt="logo" class="rounded-lg w-[28rem] h-[28rem] shadow-xl" loading="lazy" />
		</div>
	</div>
</Section>

<Section bgColor="bg-lighter-cream" fontFamily="font-bodoni">
	<div class="py-12 px-8 w-full">
		<div class="flex flex-col items-center space-y-12">
			<div class="flex flex-col items-center space-y-6 p-3">
				<h1 class="text-5xl text-brown-900 font-bold">Our Services</h1>
				<p class="text-lg text-brown-900 font-normal leading-relaxed px-24 text-center">
					Cake Dungeon Online Store always helps you and other customers' needs with the various
					services we provide, such as Fast Delivery Service, Free Article Service, Free Delivery
					Service for the first purchase, and Free Cook Book service for the first purchase.
				</p>
			</div>
			<div class="flex flex-row items-center space-x-10">
				<img src={OnlineDeliveryPicture} alt="logo" class="rounded-lg w-[24rem] object-contain" loading="lazy" />
				<img src={FreeArticlePicture} alt="logo" class="rounded-lg w-[24rem] object-contain" loading="lazy" />
				<img src={CookBookPicture} alt="logo" class="rounded-lg w-[24rem] object-contain" loading="lazy" />
			</div>
			<p class="text-xl font-semibold text-brown-900 self-start uppercase">#Choose what you like</p>
		</div>
	</div>
</Section>
