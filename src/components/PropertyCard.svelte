<script>
	export let property;

	import formatCurrency from '../lib/currencyformatter';
</script>

<div
	class="card_border p-3 lg:p-5 rounded-2xl flex gap-3 duration-300 ease-in-out hover:shadow-xl cursor-pointer"
>
	<div class="flex w-[208px] aspect-square rounded-[20px] overflow-hidden">
		<img class="w-full h-full" src={property.image[0]} alt={property.name} />
	</div>

	<div class="flex flex-col gap-3 lg:justify-center">
		<h1 class="text-lg lg:text-xl xl:text-2xl font-medium">
			{property.name}
		</h1>

		<div class="flex items-center justify-between">
			<p class="text-xs lg:text-base font-light text-[#8F90A6]">
				{`${property.rooms} Bedroom`}
			</p>

			<p class="text-xs lg:text-base font-light text-[#8F90A6]">
				{`${property.land_size}M`}
			</p>

			<p class="text-xs lg:text-base font-light text-[#8F90A6]">
				{`${property.type}`}
			</p>
		</div>

		<div class="flex flex-col gap-2">
			<span class="text-xs lg:text-base font-light text-[#8F90A6]">
				{`By: ${property.agent}`}
			</span>

			<div class="flex items-center">
				<p class="text-sm lg:text-base font-light text-[#8F90A6]">Price:</p>

				<div class="p-1 bg-[#8F90A6] rounded-lg w-fit ml-auto">
					<p class="text-white text-sm lg:text-lg">
						{`${formatCurrency(property.price)}`}
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.card_border {
		border: 1px solid #dcdceb;
	}

	.card_border:hover {
		border-color: #1daeff;
	}
</style>
