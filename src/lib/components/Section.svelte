<script lang="ts">
	export let bgColor = 'bg-cream-200';
	export let fontFamily = 'font-bodoni';
</script>

<section class={`${bgColor} ${fontFamily} h-auto max-w-full md:min-h-screen`}>
	<div class="container mx-auto">
		<slot />
	</div>
</section>
