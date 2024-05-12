<script>
	import ContactUsBanner from '../../components/ContactUsBanner.svelte';
	import Hero from '../../components/Hero.svelte';
	import RecentlyAdded from '../../components/RecentlyAdded.svelte';
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

<RecentlyAdded />

<ContactUsBanner />
