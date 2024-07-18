<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="bg-light-cream font-lato min-h-screen">
	<div class="flex h-screen justify-center items-center">
		<div class="flex flex-col space-y-4">
			{#if $page.status === 404}
				<h1 class="text-dark-cocoa text-5xl font-bold">{$page.status} {$page.error?.message}</h1>
				<p class="text-dark-cocoa text-lg font-normal">
					<span class="underline underline-offset-2 font-semibold">{$page.url.pathname}</span> path is
					not exist.
				</p>
			{/if}

			{#if $page.status === 500}
				<h1 class="text-dark-cocoa text-5xl font-bold">{$page.status} {$page.error?.message}</h1>
				<p class="text-dark-cocoa text-lg font-normal">
					There's an issue with our server. Please wait until we fix it.
				</p>
			{/if}
		</div>
	</div>
</div>
