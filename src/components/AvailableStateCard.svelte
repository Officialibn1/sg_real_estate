<script>
	export let rest;
</script>

<div
	class="group w-full h-full rounded-3xl relative overflow-hidden cursor-pointer lg:hover:shadow-lg duration-300 ease-in-out"
>
	<div class="p-4 py-6 lg:py-8 absolute top-0 left-0 flex w-full group-hover:hidden">
		<h1 class="text-2xl sm:text-3xl font-medium text-center w-full">
			{rest.title}
		</h1>
	</div>

	<img class="w-full" src={rest.svgPath} alt={rest.description} />

	<div
		class="flex p-4 py-6 lg:py-8 absolute -bottom-full left-0 w-full h-full group-hover:bottom-0 bg-[#ecf1f8]/50 duration-300 ease-in-out"
	>
		<h1 class="text-2xl sm:text-3xl font-medium text-center w-full">
			{rest.title}
		</h1>
	</div>
</div>
