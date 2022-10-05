<script lang="ts">
	import { fade } from 'svelte/transition';
	let shown = false;

	interface ModalImage {
		url: string;
		role: string;
		play: string;
		author: string;
	}
	let modalImage: ModalImage;

	export function show(mi: ModalImage) {
		modalImage = mi;
		shown = true;
	}

	export function hide() {
		shown = false;
	}
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.key === 'Escape') {
			hide();
		}
	}}
/>

{#if shown}
	<div
		class="fixed inset-0 z-20 grid h-screen w-screen grid-cols-[minmax(5%,_1fr)_minmax(0,_auto)_minmax(5%,_1fr)] grid-rows-[minmax(5%,_1fr)_minmax(0,_auto)_minmax(5%,_1fr)] place-items-center bg-neutral-900/70"
		transition:fade
		on:click={() => hide()}
	>
		<img
			class="peer col-start-2 row-start-2 h-full w-full object-contain shadow-lg shadow-neutral-100/40"
			src={modalImage.url}
			alt={`${modalImage.role} from ${modalImage.play} by ${modalImage.author}`}
			on:click|stopPropagation
		/>
		<button
			class="col-start-2 row-start-2 -mt-5 -mr-5 self-start justify-self-end"
			type="button"
			on:click={() => hide()}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-10 w-10 rounded-full bg-neutral-900 text-neutral-300"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg></button
		>
		<div
			class="col-start-2 row-start-2 w-full self-end bg-neutral-100/80 p-4 opacity-0 transition-opacity duration-300 hover:opacity-100 peer-hover:opacity-100"
			on:click|stopPropagation
		>
			<div class="text-lg font-semibold text-neutral-900">{modalImage.role}</div>
			<div class="text-neutral-900">
				{modalImage.play}
			</div>
			<div class="text-neutral-900">
				{modalImage.author ? ` by ${modalImage.author}` : ''}
			</div>
		</div>
	</div>
{/if}
