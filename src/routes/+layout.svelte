<script>
	import Toasts from './../components/ui/Toasts.svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';

	import { fade, scale } from 'svelte/transition';

	let y;

	$: outerHeight = 0;
</script>

<Navbar />

{#if y > outerHeight}
	<div
		in:scale
		out:fade={{ duration: 400 }}
		class="fixed top-0 left-0 z-20 w-full shadow-lg xl:px-14 bg-white"
	>
		<Navbar />
	</div>
{/if}

<slot />

<Footer />

<Toasts />

<svelte:window bind:scrollY={y} bind:outerHeight />
