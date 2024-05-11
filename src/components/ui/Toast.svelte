<script>
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	export let toastType = 'success';
	export let dismisableToast = true;
</script>

<article class={toastType} role="alert" transition:fade>
	{#if toastType === 'success'}
		<i class="text-white text-2xl fa-solid fa-circle-check"></i>
	{:else if toastType === 'error'}
		<i class="text-white text-2xl fa-solid fa-circle-exclamation"></i>
	{:else}
		<i class="text-white text-2xl fa-solid fa-circle-info"></i>
	{/if}

	<div class="text text-white">
		<slot />
	</div>

	{#if dismisableToast}
		<button class="close" on:click={() => dispatch('dismiss')}>
			<i class="fa-solid fa-xmark text-white text-xl"></i>
		</button>
	{/if}
</article>

<style lang="postcss">
	article {
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 0.2rem;
		display: flex;
		gap: 0.5rem;
		align-items: center;
		margin: 0 1rem 0.5rem 0;
		width: 25rem;
	}
	.error {
		background: IndianRed;
	}
	.success {
		background: MediumSeaGreen;
	}
	.info {
		background: SkyBlue;
	}
	.text {
		margin-left: 1rem;
	}
	button {
		color: white;
		background: transparent;
		border: 0 none;
		padding: 0;
		margin: 0 0 0 auto;
		line-height: 1;
		font-size: 1rem;
	}
</style>
