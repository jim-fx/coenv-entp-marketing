<script lang="ts">
	import { slideIndex, slideTitle } from '$lib/stores';
</script>

{#if $slideTitle.length}
	<h2 absolute bottom-2 left-2 m-0>{$slideTitle.replace('%I', $slideIndex + 1 + ' |')}</h2>
{/if}
