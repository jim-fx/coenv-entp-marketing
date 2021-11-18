<script lang="ts">
	import { SlideChanger, SlideProgress, SlideTitle } from '$lib/components';
	import { HexagonBackground } from '$lib/elements';
	import { showBackground } from '$lib/stores';
	import { fade } from 'svelte/transition';
	import 'uno.css';
	import './global.scss';
</script>

<main w-screen h-screen overflow-hidden>
	<slot />
	{#if $showBackground}
		<div opacity-20 absolute transition:fade style="z-index: -1;">
			<HexagonBackground />
		</div>
	{/if}

	<SlideProgress />

	<SlideTitle />
	<SlideChanger />
</main>
