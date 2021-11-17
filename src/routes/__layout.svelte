<script lang="ts">
	import { SlideChanger } from '$lib/components';
	import 'uno.css';
	import './global.scss';
</script>

<main w-screen h-screen overflow-hidden>
	<slot />

	<SlideChanger />
</main>
