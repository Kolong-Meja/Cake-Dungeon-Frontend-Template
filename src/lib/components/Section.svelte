<script lang="ts">
	export let bgColor = 'bg-cream-200';
	export let fontFamily = 'font-bodoni';
	export let responsiveDesign = false;

	let componentClass = responsiveDesign
		? `${bgColor} ${fontFamily} min-h-screen max-w-full`
		: `${bgColor} ${fontFamily}`;
</script>

<section class={componentClass}>
	<div class="container mx-auto">
		<slot />
	</div>
</section>
