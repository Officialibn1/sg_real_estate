<script>
	import { showNav } from '../store';
	import { fade, scale } from 'svelte/transition';

	const toggleNav = (href) => {
		$showNav = false;
	};
</script>

<nav>
	<div class="section_container bg-white">
		<div class="flex justify-between items-center w-full">
			<div class="flex gap-3 items-center">
				<i class="fa fa-home text-2xl lg:text-5xl font-bold" aria-hidden="true"></i>

				<span class="text-lg lg:text-2xl font-light"> S&G Estate. </span>
			</div>

			<ul class="hidden lg:flex gap-8 items-center uppercase font-light text-lg lg:text-xl">
				<li class="relative group">
					<span
						class="group-hover:w-full w-0 h-[2px] bg-gradient-to-r from-[#110229] to-[#8F90A6] ease-in-out duration-200 absolute -bottom-[2px] left-0"
					></span>
					<a href="/">Home</a>
				</li>
				<li class="relative group">
					<span
						class="group-hover:w-full w-0 h-[2px] bg-gradient-to-r from-[#110229] to-[#8F90A6] ease-in-out duration-200 absolute -bottom-[2px] left-0"
					></span>
					<a href="/properties">Properties</a>
				</li>

				<li class="relative group">
					<span
						class="group-hover:w-full w-0 h-[2px] bg-gradient-to-r from-[#110229] to-[#8F90A6] ease-in-out duration-200 absolute -bottom-[2px] left-0"
					></span>
					<a href="/about">About Us</a>
				</li>

				<li class="relative group">
					<span
						class="group-hover:w-full w-0 h-[2px] bg-gradient-to-r from-[#110229] to-[#8F90A6] ease-in-out duration-200 absolute -bottom-[2px] left-0"
					></span>
					<a href="/contactus">Contact Us</a>
				</li>
			</ul>

			<button class="flex lg:hidden px-2" on:click={() => ($showNav = true)}>
				<i class="fa fa-bars text-2xl" aria-hidden="true"></i>
			</button>

			{#if $showNav}
				<div
					transition:scale
					class={'w-full  fixed right-0 top-0  h-full z-30 bg-white flex flex-col gap-8 p-8 lg:hidden'}
				>
					<div class="flex">
						<button class=" px-2" on:click={() => ($showNav = false)}>
							<i class="fa fa-x text-2xl" aria-hidden="true"></i>
						</button>
					</div>
					<ul class="w-full flex flex-col lg:hidden gap-10 items-end uppercase font-light text-lg">
						<li class="">
							<a href="/" on:click={() => toggleNav()}>Home</a>
						</li>
						<li class="">
							<a href="/properties" on:click={() => toggleNav()}>Properties</a>
						</li>

						<li class="">
							<a href="/about" on:click={() => toggleNav()}>About Us</a>
						</li>

						<li class="">
							<a href="/contactus" on:click={() => toggleNav()}>Contact Us</a>
						</li>
					</ul>
				</div>
			{/if}
		</div>
	</div>
</nav>

<!-- <style>
	.show_nav_animation {
		animation-name: animate_nav;
		animation-duration: 500ms;
	}

	@keyframes animate_nav {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style> -->
