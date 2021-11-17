<script lang="ts">
	import { Slide, SlideTitle } from '$lib/components';
	import { HexagonBackground, Logo } from '$lib/elements';
	import { CoEnvComponents, CoworkingSpaces } from '$lib/slides';
	import { nextSlide, previousSlide, slideTitle } from '$lib/stores';
	import { scale, fade } from 'svelte/transition';

	function handleKeyDown({ key }: KeyboardEvent) {
		if (key === 'ArrowRight') {
			nextSlide();
		}
		if (key === 'ArrowLeft') {
			previousSlide();
		}
	}
</script>

<svelte:window on:keydown={handleKeyDown} />

<svelte:head>
	<title>{$slideTitle}</title>
</svelte:head>

<Slide>
	<div center>
		<div class="half" transition:scale>
			<Logo />
		</div>
	</div>
</Slide>

<Slide title="%I What is CoEnv?">
	<div center box-border style="padding: 0px 20vh" transition:fade>
		<h1>CoEnv is an exploratory, open, modular ecosystem for shared environments,</h1>
		<h2 italic>with a focus on the individual user's needs and boundaries</h2>
	</div>
</Slide>

<Slide steps={4} let:step let:title>
	<div center>
		<CoEnvComponents {step} {title} />
	</div>
</Slide>

<Slide>
	<CoworkingSpaces />
</Slide>

<div opacity-20 absolute style="z-index: -1;">
	<HexagonBackground />
</div>

<SlideTitle />

<style>
	.half {
		width: 50vh;
		height: 50vh;
	}
</style>
