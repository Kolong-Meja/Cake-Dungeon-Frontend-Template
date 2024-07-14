<svelte:options customElement="section-template" />

<script>
	export let mainSectionBgColor = 'bg-little-dark-cream';
	export let mainSectionFont = 'font-bodoni';
</script>

<section class={`${mainSectionBgColor} ${mainSectionFont} min-h-screen`}>
	<div class="container mx-auto">
		<slot />
	</div>
</section>
