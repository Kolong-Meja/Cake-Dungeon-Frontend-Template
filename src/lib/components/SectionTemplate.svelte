<svelte:options customElement="section-template" />

<script lang="ts">
	export let bgColor = 'bg-cream';
	export let fontFamily = 'font-bodoni';
</script>

<section class={`${bgColor} ${fontFamily} min-h-screen`}>
	<div class="container mx-auto">
		<slot />
	</div>
</section>
