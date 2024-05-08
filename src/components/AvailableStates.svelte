<script>
	import AvailableStateCard from './AvailableStateCard.svelte';
	import { states } from '$lib/states_data.js';
</script>

<div class="section_container mt-7 sm:mt-10 lg:mt-20">
	<div class="flex flex-col gap-14 w-full">
		<h1 class="text-2xl sm:text-3xl xl:text-4xl font-semibold text-center leading-relaxed">
			We are available in all parts <br class="hidden sm:block" /> of the country.
		</h1>

		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center w-full lg:max-w-[1200px] lg:mx-auto lg:p-4"
		>
			{#each states as { id, ...rest } (id)}
				<AvailableStateCard {rest} />
			{/each}
		</div>
	</div>
</div>
