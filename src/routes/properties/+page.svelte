<script>
	import { properties } from '$lib/property_data';

	import ContactUsBanner from '../../components/ContactUsBanner.svelte';

	import Hero from '../../components/Hero.svelte';

	import PropertyCard from '../../components/PropertyCard.svelte';
</script>

<div
	class="flex flex-col sm:flex-row justify-between bg-gradient-to-b from-[#C3DFED] to-[#DFF0F7] rounded-lg w-full py-20 px-3"
>
	<h1 class="text-4xl md:text-5xl font-medium text-center w-full leading-relaxed">
		Let's help you find your
		<span class="font-semibold">Dream Home</span> <i class="fa-regular fa-building"></i>
	</h1>
</div>

<div class="section_container flex w-full justify-center">
	<div class="md:w-1/2 mx-auto">
		<p class="text-xl md:text-2xl font-light text-center leading-relaxed">
			Browse our listings of properties or <a
				href="/contactus"
				class="text-blue-300 hover:underline">contact us</a
			>
			today to discuss your needs. Our team of experienced professionals is here to guide you on your
			real estate journey in Nigeria
		</p>
	</div>
</div>

<Hero
	title="Simply search for a
property."
	description="You can search for an available property via,
location, size or rent price."
	showSearch={true}
/>

<div class="section_container mt-10 lg:mt-16">
	<div class="flex flex-col gap-5 w-full lg:max-w-[1200px] lg:mx-auto">
		<div class="w-full flex items-center justify-between">
			<h1 class="text-xl md:text-2xl font-semibold">Properties on sale</h1>

			<div class="relative">
				<select class="sort_component">
					<option value="">Sort By</option>
					<option value="asc">Date (Asc)</option>
					<option value="desc">Date (Desc)</option>
					<option value="high">Price (Highest)</option>
					<option value="low">Price (Lowest)</option>
				</select>
				<span class="absolute right-0 bottom-2 pr-2">
					<i class="fa-solid fa-chevron-down text-lg"></i>
				</span>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-8 w-full sm:grid-cols-2 lg:gap-12">
			{#each properties as property (property.id)}
				<PropertyCard {property} />
			{/each}
		</div>
	</div>
</div>

<div class="section_container mt-10 lg:mt-16 flex flex-col gap-3 text-center">
	<h1 class="text-3xl md:text-4xl font-medium text-center w-full leading-relaxed">
		NOT READY TO PURCHASE A PROPERTY?
	</h1>

	<p class="text-xl md:text-2xl font-light text-center leading-relaxed">
		No worries, here are some vacant properties for rent.
	</p>
</div>

<div class="section_container mt-10 lg:mt-16">
	<div class="flex flex-col gap-5 w-full lg:max-w-[1200px] lg:mx-auto">
		<div class="w-full flex items-center justify-between">
			<h1 class="text-xl md:text-2xl font-semibold">Properties on rent</h1>

			<div class="relative">
				<select class="sort_component">
					<option value="">Sort By</option>
					<option value="asc">Date (Asc)</option>
					<option value="desc">Date (Desc)</option>
					<option value="high">Price (Highest)</option>
					<option value="low">Price (Lowest)</option>
				</select>
				<span class="absolute right-0 bottom-2 pr-2">
					<i class="fa-solid fa-chevron-down text-lg"></i>
				</span>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-8 w-full sm:grid-cols-2 lg:gap-12">
			{#each properties as property (property.id)}
				<PropertyCard {property} />
			{/each}
		</div>
	</div>
</div>

<ContactUsBanner />

<style>
	.sort_component {
		@apply px-3 py-2 rounded-lg focus:outline-blue-300 appearance-none bg-transparent;
		border: 1px solid #dcdceb;
	}
</style>
