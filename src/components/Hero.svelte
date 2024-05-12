<script>
	import formatCurrency from '../lib/currencyformatter';

	export let title;

	export let description;

	export let showSearch = false;

	let minRange = 10000000;

	let maxRange = 10000000;
</script>

<div class="section_container">
	<div class="relative w-full overflow-hidden rounded-3xl">
		<div
			class={showSearch
				? 'w-full relative bg-[#ecf1f8] lg:hidden h-[750px] sm:h-[800px]'
				: 'w-full relative bg-[#ecf1f8] lg:hidden min-h-[600px] sm:min-h-[780px]'}
		>
			<div class="flex flex-col gap-3 px-7 py-5 md:px-10 md:py-8">
				<h1
					class="text-4xl md:text-6xl font-semibold leading-relaxed md:leading-[1.635] hero_text_font"
				>
					{title}
				</h1>

				<p class="text-lg md:text-2xl font-light leading-relaxed opacity-80">
					{description}
				</p>
			</div>

			<img class="w-full mt-auto" src="/MobileBanner.svg" alt="Hero Banner" />

			{#if showSearch}
				<div class="absolute bottom-5 left-0 z-[5] w-full sm:w-3/4 px-5">
					<form
						on:submit|preventDefault
						class="bg-white/30 backdrop-blur-lg p-5 px-4 xl:px-8 rounded-2xl shadow-lg flex flex-col gap-3"
					>
						<label class="search_input_container flex-1">
							<span class="search_input_label">Property Location</span>
							<select name="location" id="location" class="search_input appearance-none pr-10">
								<option value="" disabled selected>Choose property location</option>
								<option value="Abuja">Abuja</option>
								<option value="Lagos">Lagos</option>
								<option value="Kano">Kano</option>
								<option value="Kaduna">Kaduna</option>
							</select>
							<span class="absolute right-0 bottom-0 pr-1">
								<i class="fa-solid fa-location-dot text-xl"></i>
							</span>
						</label>

						<span class="vertical_line_mobile" />

						<label class="search_input_container flex-1">
							<span class="search_input_label">Property Type</span>
							<select name="location" id="location" class="search_input appearance-none pr-10">
								<option value="" disabled selected>Choose property type</option>
								<option value="Duplex">Duplex</option>
								<option value="Bungalow">Bungalow</option>
								<option value="Detached">Detached</option>
								<option value="Storey">Storey</option>
							</select>
							<span class="absolute right-0 bottom-0 pr-2">
								<i class="fa-solid fa-chevron-down text-xl"></i>
							</span>
						</label>

						<span class="vertical_line_mobile" />

						<label class="search_input_container flex-[1.5]">
							<span class="search_input_label">Price Range </span>

							<input
								class="search_input"
								type="range"
								name="price_range"
								id="price_range"
								min={10000000}
								max={1000000000}
								bind:value={maxRange}
							/>

							<div class="flex justify-between gap-2">
								<span class="text-sm xl:text-lg flex flex-col gap-[2px]"
									><span class="font-semibold">Min:</span>{formatCurrency(minRange)}</span
								>

								<span class="flex-1 items-end flex flex-col gap-[2px] text-sm xl:text-lg"
									><span class="font-semibold">Max:</span>{formatCurrency(maxRange)}</span
								>
							</div>
						</label>

						<button
							type="submit"
							class="py-2 px-3 xl:py-3 xl:px-4 bg-[#1DAEFF] my-auto rounded-xl xl:ml-12 hover:bg-[#1DAEFF]/80 duration-200 ease-in-out group flex items-center justify-center gap-5 mt-8"
						>
							<span class="text-xl font-semibold text-white">Search</span>
							<i
								class="fa-solid fa-magnifying-glass text-2xl text-white group-hover:text-white/80 duration-200 ease-in-out"
							></i>
						</button>
					</form>
				</div>
			{/if}
		</div>

		<div class="w-full relative hidden lg:flex lg:min-h-[470px] xl:min-h-[670px]">
			<div class="absolute top-0 left-0 w-1/2 flex flex-col gap-3 pl-16 py-12">
				<h1
					class="text-4xl xl:text-6xl font-medium leading-relaxed hero_text_font xl:leading-[1.35] xl:mb-8 xl:pt-20 xl:pl-12"
				>
					{title}
				</h1>

				<p class="text-xl xl:text-2xl font-light leading-relaxed opacity-80 xl:pl-12">
					{description}
				</p>
			</div>

			<img class="w-full" src="/RSBanner.svg" alt="Hero Banner" />

			{#if showSearch}
				<div class="absolute xl:pl-16 bottom-20 left-10 z-[5] w-fit">
					<form
						on:submit|preventDefault
						class="bg-white/30 backdrop-blur-lg p-5 px-4 xl:px-8 rounded-2xl h-28 shadow-lg flex gap-3 xl:gap-6"
					>
						<label class="search_input_container flex-1">
							<span class="search_input_label">Location</span>
							<select name="location" id="location" class="search_input appearance-none pr-10">
								<option value="" disabled selected>Property Location</option>
								<option value="Abuja">Abuja</option>
								<option value="Lagos">Lagos</option>
								<option value="Kano">Kano</option>
								<option value="Kaduna">Kaduna</option>
							</select>
							<span class="absolute right-0 bottom-0 pr-1">
								<i class="fa-solid fa-location-dot text-xl"></i>
							</span>
						</label>

						<span class="vertical_line" />

						<label class="search_input_container flex-1">
							<span class="search_input_label">Type</span>
							<select name="location" id="location" class="search_input appearance-none pr-10">
								<option value="" disabled selected>Property Type</option>
								<option value="Duplex">Duplex</option>
								<option value="Bungalow">Bungalow</option>
								<option value="Detached">Detached</option>
								<option value="Storey">Storey</option>
							</select>
							<span class="absolute right-0 bottom-0 pr-2">
								<i class="fa-solid fa-chevron-down text-xl"></i>
							</span>
						</label>

						<span class="vertical_line" />

						<label class="search_input_container flex-[1.5]">
							<span class="search_input_label">Price Range </span>

							<div class="flex items-center gap-3">
								<span class="text-sm xl:text-lg">{formatCurrency(minRange)}</span>
								<input
									class="search_input"
									type="range"
									name="price_range"
									id="price_range"
									min={10000000}
									max={1000000000}
									bind:value={maxRange}
								/>
								<span class="flex-1 flex justify-end text-sm xl:text-lg w-40 xl:w-48"
									>{formatCurrency(maxRange)}</span
								>
							</div>
						</label>

						<button
							type="submit"
							class="py-2 px-3 xl:py-3 xl:px-4 bg-[#1DAEFF] my-auto rounded-xl xl:ml-6 hover:bg-[#1DAEFF]/80 duration-200 ease-in-out group"
							><i
								class="fa-solid fa-magnifying-glass text-2xl text-white group-hover:text-white/80 duration-200 ease-in-out"
							></i></button
						>
					</form>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.hero_text_font {
		font-family: 'Montserrat', sans-serif;
	}

	.search_input_container {
		@apply flex flex-col gap-2  justify-between relative;
	}

	.search_input_label {
		@apply text-lg font-semibold;
	}

	.search_input {
		@apply bg-transparent xl:text-lg text-[#110229]/90 outline-none py-2;
	}

	.vertical_line {
		width: 2px;
		height: 100%;
		background-color: #110229;
		opacity: 0.2;
	}

	.vertical_line_mobile {
		width: 100%;
		height: 1px;
		background-color: #110229;
		opacity: 0.2;
	}
</style>
