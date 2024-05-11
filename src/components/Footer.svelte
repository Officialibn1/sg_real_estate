<script>
	import { addToast } from '../store/toast';

	let email = '';

	$: message = `Successfully subscribed to our newsletter using ${email}`;

	let emailError;

	let dismisableToast = true;

	let toastType = 'success';

	let toastTimeout = 3000;

	let submitEmailButtonDisabled = true;

	let emailFormat =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

	const handleSubscribeInputChange = () => {
		if (!emailFormat.test(email)) {
			emailError = `Your email ${email} is not a valid email!`;
			submitEmailButtonDisabled = true;
		} else {
			emailError = null;
			submitEmailButtonDisabled = false;
		}
	};

	const handleSubscribeSubmit = () => {
		if (emailFormat.test(email)) {
			addToast({ message, dismisableToast, toastTimeout, toastType });

			emailError = null;
			submitEmailButtonDisabled = true;

			email = '';
		}
	};
</script>

<footer>
	<div class="section_container">
		<div class="flex flex-col sm:flex-row flex-wrap gap-8 lg:justify-between lg:items-start w-full">
			<div class="flex flex-col gap-5 lg:flex-1">
				<div class="flex gap-3 items-center">
					<i class="fa fa-home text-4xl lg:text-7xl font-bold" aria-hidden="true"></i>

					<span class="text-2xl lg:text-4xl font-light"> S&G Estate. </span>
				</div>

				<p class="text-sm font-light leading-relaxed">
					S&G Estate is passionate about creating exceptional living spaces in Nigeria. Founded in
					2021, we've established ourselves as a leading real estate developer, transforming Jabi,
					Wuse, and other sought-after neighborhoods with over 50 completed projects and boasting
					over 100 houses and estates currently in our portfolio.
				</p>

				<div class="flex gap-6 item-center">
					<span>
						<i class="fa-brands text-2xl fa-facebook text-[#1877F2]"></i>
					</span>

					<span>
						<i class="fa-brands text-2xl fa-instagram text-[#1DA1F2]"></i>
					</span>

					<span>
						<i class="fa-brands text-2xl fa-x-twitter text-[#EC3397]"></i>
					</span>

					<span>
						<i class="fa-brands text-2xl fa-tiktok text-[#110229]"></i>
					</span>
				</div>

				<span class="text-sm font-medium opacity-50 text-[#110229]"
					>© 2024 . All rights reserved.</span
				>
			</div>

			<div class="flex gap-8 lg:flex-1 lg:justify-center">
				<ul class="flex flex-col gap-4 capitalize">
					<li><h1 class="mb-6 font-bold text-lg">Take a tour</h1></li>

					<li class="relative group w-fit">
						<span
							class="hidden lg:flex lg:group-hover:w-full w-0 h-[2px] bg-gradient-to-r from-[#110229] to-[#8F90A6] ease-in-out duration-200 absolute -bottom-[2px] left-0"
						></span>
						<a href="/properties">Projects</a>
					</li>
					<li class="relative group w-fit">
						<span
							class="hidden lg:flex lg:group-hover:w-full w-0 h-[2px] bg-gradient-to-r from-[#110229] to-[#8F90A6] ease-in-out duration-200 absolute -bottom-[2px] left-0"
						></span>
						<a href="/">Partners</a>
					</li>

					<li class="relative group w-fit">
						<span
							class="hidden lg:flex lg:group-hover:w-full w-0 h-[2px] bg-gradient-to-r from-[#110229] to-[#8F90A6] ease-in-out duration-200 absolute -bottom-[2px] left-0"
						></span>
						<a href="/contactus">Support</a>
					</li>
				</ul>

				<ul class="flex flex-col gap-4 capitalize">
					<li><h1 class="mb-6 font-bold text-lg">Our company</h1></li>

					<li class="relative group w-fit">
						<span
							class="hidden lg:flex lg:group-hover:w-full w-0 h-[2px] bg-gradient-to-r from-[#110229] to-[#8F90A6] ease-in-out duration-200 absolute -bottom-[2px] left-0"
						></span>
						<a href="/about">about us</a>
					</li>

					<li class="relative group w-fit">
						<span
							class="hidden lg:flex lg:group-hover:w-full w-0 h-[2px] bg-gradient-to-r from-[#110229] to-[#8F90A6] ease-in-out duration-200 absolute -bottom-[2px] left-0"
						></span>
						<a href="/">media</a>
					</li>

					<li class="relative group w-fit">
						<span
							class="hidden lg:flex lg:group-hover:w-full w-0 h-[2px] bg-gradient-to-r from-[#110229] to-[#8F90A6] ease-in-out duration-200 absolute -bottom-[2px] left-0"
						></span>
						<a href="/contactus">contact us </a>
					</li>
				</ul>
			</div>

			<div class="flex flex-col gap-4 min-w-[300px]">
				<h1 class=" font-bold text-lg capitalize">subscribe</h1>

				<p class="text-sm font-light leading-relaxed">
					Subscribe to get latest property, blog news from us.
				</p>

				<form
					on:submit|preventDefault
					class="flex relative rounded-xl input_border overflow-hidden items-center"
				>
					<input
						on:input={handleSubscribeInputChange}
						bind:value={email}
						class="outline-none p-4 w-full active:outline-none focus:outline-none"
						type="email"
						name="email"
						placeholder="Email Address"
					/>

					<button
						type="submit"
						on:click={() => handleSubscribeSubmit()}
						disabled={submitEmailButtonDisabled}
						class="absolute flex items-center rounded-full p-2 w-10 h-10 aspect-square right-2 bg-[#1DAEFF] disabled:bg-slate-300 disabled:cursor-not-allowed"
					>
						<span class="flex items-center justify-center h-full w-full">
							<i class="fa fa-chevron-right text-xl text-white" aria-hidden="true"></i>
						</span>
					</button>
				</form>

				{#if emailError}
					<p class="text-sm font-light text-red-300">
						{emailError}
					</p>
				{/if}
			</div>
		</div>
	</div>
</footer>

<style>
	.input_border {
		border: 1.5px solid #8f90a6;
	}
</style>
