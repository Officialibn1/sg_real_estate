<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';

	import { fade, scale } from 'svelte/transition';

	let y;

	$: outerHeight = 0;
</script>

<Navbar />

{#if y > outerHeight}
	<div in:scale out:fade={{ duration: 400 }} class="fixed top-0 left-0 z-20 w-full shadow-lg">
		<Navbar />
	</div>
{/if}

<slot />

<Footer />

<svelte:window bind:scrollY={y} bind:outerHeight />
