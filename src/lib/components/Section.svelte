<script lang="ts">
	export let bgColor = 'bg-cream-200';
	export let fontFamily = 'font-bodoni';
</script>

<section class={`${bgColor} ${fontFamily} min-h-screen max-w-full`}>
	<div class="container mx-auto">
		<slot />
	</div>
</section>
