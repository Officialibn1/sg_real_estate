<script>
	import Toast from './Toast.svelte';

	import { dismissToast, toasts } from '../../store/toast';
</script>

{#if $toasts}
	<section>
		{#each $toasts as toast (toast.id)}
			<Toast
				toastType={toast.toastType}
				dismisableToast={toast.dismisableToast}
				on:dismiss={() => dismissToast(toast.id)}
				>Successfully subscribed to our <br /> newsletter using {toast.email}</Toast
			>
		{/each}
	</section>
{/if}

<style lang="postcss">
	section {
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-top: 1rem;
		justify-content: flex-end;
		align-items: flex-end;
		z-index: 1000;
	}
</style>
