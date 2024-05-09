<script>
	import { properties } from '$lib/property_data';
	import PropertyCard from './PropertyCard.svelte';
</script>

<div class="section_container mt-10 lg:mt-16">
	<div class="flex flex-col gap-5 w-full lg:max-w-[1200px] lg:mx-auto">
		<div class="w-full flex items-center justify-between">
			<h1 class="text-xl font-light">Recently Added</h1>

			<a href="/" class="underline text-lg font-light text-blue-400">See all</a>
		</div>

		<div class="grid grid-cols-1 gap-8 w-full sm:grid-cols-2 lg:gap-12">
			{#each properties as property (property.id)}
				<PropertyCard {property} />
			{/each}
		</div>
	</div>
</div>
