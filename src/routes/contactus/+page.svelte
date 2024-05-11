<script>
	import { addToast } from '../../store/toast';

	let email = '';

	let name = '';

	let whoAreYou = '';

	let propertyNeeded = '';

	let propertyLocation = '';

	$: message = `Thank you ${name} for contacting us, we will reply to you soon using ${email}`;

	let dismisableToast = true;

	let toastType = 'success';

	let toastTimeout = 6000;

	let submitEmailButtonDisabled = true;

	let formError;

	let emailError;

	let emailFormat =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

	const handleConatctFormChange = () => {
		if (
			!emailFormat.test(email) ||
			name.length < 10 ||
			!whoAreYou ||
			!propertyNeeded ||
			!propertyLocation
		) {
			formError = `All fields are required`;
			submitEmailButtonDisabled = true;
		} else {
			formError = null;
			submitEmailButtonDisabled = false;
		}
	};

	const handleSubscribeSubmit = () => {
		if (
			!emailFormat.test(email) ||
			name.length < 10 ||
			!whoAreYou ||
			!propertyNeeded ||
			!propertyLocation
		) {
			formError = `All fields are required`;
			submitEmailButtonDisabled = true;

			return;
		} else {
			addToast({ message, dismisableToast, toastTimeout, toastType });

			emailError = null;
			submitEmailButtonDisabled = true;

			email = '';

			name = '';

			whoAreYou = '';

			propertyNeeded = '';

			propertyLocation = '';

			return;
		}
	};
</script>

<div class="section_container">
	<div class="flex w-full flex-col gap-8">
		<div
			class="flex flex-col sm:flex-row justify-between bg-gradient-to-b from-[#C3DFED] to-[#DFF0F7] rounded-lg w-full py-20"
		>
			<h1 class="text-5xl font-medium text-center w-full">
				<i class="fa-regular fa-address-book"></i> Contact Us
			</h1>
		</div>

		<div class="flex flex-col gap-8 w-full md:max-w-[700px] md:mx-auto">
			<h1 class="about_us_title">Have a Question or Ready to Get Started?</h1>

			<p class="about_us_paragraph">
				We're here to help! Whether you have a question about a specific property, want to discuss
				financing options, or are ready to schedule a viewing, feel free to reach out to us using
				the form below.
			</p>

			<p class="about_us_paragraph">
				Our friendly and knowledgeable team is eager to assist you in finding your dream home in
				Abuja.
			</p>

			<p class="about_us_paragraph_bold">We look forward to hearing from you!</p>

			<hr />

			<p class="about_us_title">Kindly fill the form below.</p>
			<form
				on:submit|preventDefault={handleSubscribeSubmit}
				on:change={handleConatctFormChange}
				class="flex flex-col gap-5 w-full mb-16"
			>
				<label class="flex flex-col gap-3">
					<span class="text-sm font-semibold">Full Name*</span>

					<input
						class="input_border px-4 py-3 rounded-md focus:outline-blue-300"
						type="text"
						name="Full Name"
						id="full_name"
						required
						bind:value={name}
						placeholder="Enter Your Full Name"
					/>
				</label>

				<label class="flex flex-col gap-3">
					<span class="text-sm font-semibold">Email*</span>

					<input
						class="input_border px-4 py-3 rounded-md focus:outline-blue-300"
						type="email"
						name="Email"
						id="email"
						bind:value={email}
						required
						placeholder="Enter Your Email Address"
					/>
				</label>

				<div class="flex flex-col gap-2">
					<span class="text-sm font-semibold">Who are you?*</span>

					<div class="flex justify-between gap-8">
						<label
							class="flex gap-3 radio_input_border px-4 py-2 rounded-md flex-1 justify-between duration-300 ease-in-out group"
						>
							<span class="text-sm font-semibold">Individaul</span>

							<input
								class=" px-4 py-3 rounded-md group-hover:outline-blue-300"
								type="radio"
								name="who_are_you"
								id="Individaul"
								value="Individaul"
								required
								bind:group={whoAreYou}
							/>
						</label>

						<label
							class="flex gap-3 radio_input_border px-4 py-2 rounded-md flex-1 justify-between duration-300 ease-in-out group"
						>
							<span class="text-sm font-semibold">Company</span>

							<input
								class="px-4 py-3 rounded-md group-hover:outline-blue-300"
								type="radio"
								name="who_are_you"
								id="Company"
								value="Company"
								required
								bind:group={whoAreYou}
							/>
						</label>
					</div>
				</div>

				<label class="flex flex-col gap-3">
					<span class="text-sm font-semibold">Property Needed*</span>

					<select
						class="input_border px-4 py-3 rounded-md focus:outline-blue-300"
						name="Property Needed"
						id="property_needed"
						bind:value={propertyNeeded}
						required
					>
						<option value="" selected disabled>Select Property Type</option>

						<option value="Residential Home">Residential Home</option>
						<option value="Commercial Building">Commercial Building</option>
						<option value="Estate Site">Estate Site</option>
					</select>
				</label>

				<label class="flex flex-col gap-3">
					<span class="text-sm font-semibold">Property Location State*</span>

					<select
						class="input_border px-4 py-3 rounded-md focus:outline-blue-300"
						name="Property Location"
						id="property_location"
						bind:value={propertyLocation}
						required
					>
						<option value="" selected disabled>Select Property Location</option>
						<option value="Abuja">Abuja</option>
						<option value="Lagos">Lagos</option>
						<option value="Kano">Kano</option>
						<option value="Kaduna">Kaduna</option>
					</select>
				</label>

				{#if formError}
					<span class="text-sm font-semibold text-red-400">{formError}</span>
				{/if}

				<div class="flex w-full justify-end mt-5">
					<button
						disabled={submitEmailButtonDisabled}
						aria-disabled={submitEmailButtonDisabled}
						class="bg-[#1DAEFF] text-white px-8 py-3 rounded-md font-medium disabled:bg-slate-300 disabled:cursor-not-allowed"
						type="submit">Send Request</button
					>
				</div>
			</form>
		</div>
	</div>
</div>

<style>
	.about_us_title {
		@apply text-2xl lg:text-3xl font-medium mt-12;
	}

	.about_us_paragraph {
		@apply text-lg font-light text-justify;
	}

	.about_us_paragraph_bold {
		@apply text-lg font-medium text-justify;
	}

	.input_border {
		border: 1.5px solid #8f90a6;
	}

	.radio_input_border {
		border: 1.5px solid #8f90a6;
		cursor: pointer;
	}

	.radio_input_border:hover {
		border-color: #93c5fd;
	}
</style>
