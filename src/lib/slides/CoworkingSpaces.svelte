<script lang="ts">
	import { fade } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';

	const data = [
		3, 30, 75, 160, 310, 600, 1130, 2070, 3400, 5780, 8900, 12100, 15500, 18700, 22400, 26300
	];

	function scaleY(node: SVGElement | HTMLElement, { duration = 100, delay }) {
		return {
			delay,
			duration,
			css: (t: number) =>
				`transform-origin: 0 100%; transform: scaleY(${quadInOut(t)}); opacity: ${t};`
		};
	}

	$: max = Math.max(...data);
	$: dp = data.map((v, i) => {
		return {
			height: (v * 100) / max,
			x: (100 / data.length) * i
		};
	});
</script>

<div absolute>
	<h1 transition:fade>Anzahl der Coworking Spaces bis 2020</h1>
	<p>
		Deskmag. "Anzahl der Coworking Spaces weltweit von 2005 bis 2018 und Prognose bis 2020." <br />
		23. Mai, 2019. Statista. Zugegriffen am 17. November 2021.
	</p>
</div>

<div center>
	<svg viewBox="0 0 100 100">
		{#each dp as { x, height }, i}
			<rect
				class:prognose={i > 13}
				transition:scaleY={{ delay: i * 50, duration: 300 }}
				{x}
				y={100 - height}
				width={100 / data.length}
				{height}
			/>
			<text transition:fade={{ delay: i * 50 }} x={x + 100 / data.length / 2} y={102}
				>{2005 + i}</text
			>
		{/each}
	</svg>
</div>

<style>
	svg {
		height: 80vh;
		width: 80vw;
		overflow: visible;
	}
	rect {
		fill: white;
	}

	rect.prognose {
		fill: rgba(255, 255, 255, 0.5) !important;
		stroke: white;
		stroke-alignment: inner;
		transform: scale(0.998);
		stroke-width: 0.5px;
	}

	text {
		text-anchor: middle;
		font-size: 2px;
		fill: white;
	}
</style>
