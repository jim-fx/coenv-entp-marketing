<script lang="ts">
	import { slideAmount, slideIndex, slideTitle } from '$lib/stores';
	import { writable } from 'svelte/store';

	export let steps = 1;

	const mySlideIndex = $slideAmount;
	$slideAmount += steps;
	export let title = '';
	$: visible = $slideIndex >= mySlideIndex && $slideIndex < mySlideIndex + steps;
	const _title = writable(title);
	$: if (visible && $_title) {
		$slideTitle = $_title.replace('%I', $slideIndex);
	}
</script>

{#if visible}
	<div w-screen h-screen absolute id={'slide' + mySlideIndex}>
		<slot index={mySlideIndex} step={$slideIndex - mySlideIndex} title={_title} />
	</div>
{/if}
