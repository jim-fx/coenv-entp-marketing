<script lang="ts">
	import { Hexagon } from '.';
</script>

<div relative center>
	<h1
		text-center
		w-full
		absolute
		text-black
		text-8xl
		font-bolder
		style="top: 50%; transform: translateY(-50%); z-index: 2;"
	>
		CoEnv
	</h1>
	<div absolute w-full h-full style="transform:scale(1.1)">
		<Hexagon --fill="none" --stroke="white" --stroke-width="5px" />
	</div>
	<div absolute w-full h-full>
		<Hexagon --fill="white" --stroke="none" --stroke-width="5px" />
	</div>
</div>
