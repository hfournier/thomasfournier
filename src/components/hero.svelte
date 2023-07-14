<script lang="ts">
	let slides = [
		{ id: 1, justifyText: 'left' },
		{ id: 2, justifyText: 'right' },
		{ id: 3, justifyText: 'left' }
	];

	let activeSlide = 0;
	let skipInterval = false;
	let carousel;

	function previousSlide() {
		if (carousel) {
			--activeSlide;
			carousel.scroll(carousel.clientWidth * activeSlide, 0);
			skipInterval = true;
		}
	}

	function nextSlide() {
		// console.log(carousel);
		if (carousel) {
			++activeSlide;
			carousel.scroll(carousel.clientWidth * activeSlide, 0);
			skipInterval = true;
		}
	}

	function gotoSlide(slide) {
		if (carousel) {
			activeSlide = slide;
			carousel.scroll(carousel.clientWidth * activeSlide, 0);
			skipInterval = true;
		}
	}

	function setActiveSlide(e) {
		// console.log(e.target.scrollLeft);
		activeSlide = Math.floor(e.target.scrollLeft / carousel.clientWidth);
		skipInterval = true;
	}

	setInterval(() => {
		if (skipInterval) {
			skipInterval = false;
		} else {
			if (carousel) {
				if (activeSlide === slides.length - 1) {
					activeSlide = 0;
					carousel.scroll(0, 0);
				} else {
					nextSlide();
				}
			}
		}
	}, 5000);
</script>

<svelte:head><title>Thomas Fournier - Actor | Performer | Writer</title></svelte:head>

<div class="group grid grid-cols-[auto_minmax(0,_1fr)_auto]">
	<div
		class="carousel col-start-1 col-end-4 row-start-1 flex touch-auto snap-x overflow-x-auto scroll-smooth"
		on:scroll={setActiveSlide}
		bind:this={carousel}
	>
		{#each slides as slide}
			<div class="grid max-h-fit max-w-fit flex-shrink-0 snap-center transition duration-[600ms]">
				<picture class="col-start-1 row-start-1">
					<source
						class="aspect-16/9"
						srcset={`/images/hero/thomas-fournier-1280x720-${slide.id}.jpg 1280w, /images/hero/thomas-fournier-1024x576-${slide.id}.jpg 1024w, /images/hero/thomas-fournier-768x432-${slide.id}.jpg 768w`}
						media="(min-width: 640px)"
					/>
					<img
						class="aspect-4/6"
						srcset={`/images/hero/thomas-fournier-640x960-${slide.id}.jpg 640w, /images/hero/thomas-fournier-414x621-${slide.id}.jpg 414w`}
						src={`/images/hero/thomas-fournier-640x960-${slide.id}.jpg`}
						alt="Thomas Fournier headshot"
						sizes="100vw"
					/>
				</picture>
				<div
					class="col-start-1 row-start-1 h-4/6 self-end bg-gradient-to-t from-neutral-900 to-transparent sm:hidden"
				/>
				<div
					class="col-start-1 row-start-1 mb-16 grid place-items-center content-end justify-center gap-2 sm:mb-0 sm:content-center lg:gap-4 xl:gap-6 {slide.justifyText ===
					'right'
						? 'sm:mr-20 md:mr-32 lg:mr-40 sm:justify-end sm:place-items-end'
						: 'sm:ml-20 md:ml-32 lg:ml-44 sm:justify-start sm:place-items-start'}"
				>
					<h1
						class="font-josefin text-3xl text-neutral-100 sm:text-2xl sm:font-medium md:text-3xl md:font-semibold lg:text-4xl lg:font-bold xl:text-5xl"
					>
						Thomas Fournier
					</h1>
					<h2
						class="font-josefin text-neutral-50 md:text-lg md:font-medium lg:text-xl xl:text-2xl {slide.justifyText ===
						'right'
							? 'sm:text-right'
							: ''}"
					>
						Actor | Performer | Writer
					</h2>
					<div class="mt-4 {slide.justifyText === 'right' ? 'sm:text-right' : ''}">
						<a
							class="max-w-fit rounded border border-neutral-100 px-4 py-2 text-neutral-50 hover:bg-neutral-300 hover:text-neutral-900 hover:shadow-lg hover:shadow-neutral-300/30 md:font-medium lg:text-lg xl:text-xl"
							href="#contact">Contact Me</a
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
	{#if activeSlide > 0}
		<button
			type="button"
			aria-label="Go to previous slide"
			class="z-10 col-start-1 row-start-1 flex w-16 place-content-center place-items-center text-transparent group-hover:bg-neutral-900/30 group-hover:text-neutral-400 sm:w-20 md:w-24 lg:w-28"
			on:click={previousSlide}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-12 w-12"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
		</button>
	{:else}
		<div class="col-start-1 row-start-1 w-16 sm:w-20 md:w-24 lg:w-28" />
	{/if}
	{#if activeSlide < slides.length - 1}
		<button
			type="button"
			aria-label="Go to next slide"
			class="z-10 col-start-3 row-start-1 flex w-16 place-content-center place-items-center text-transparent group-hover:bg-neutral-900/30 group-hover:text-neutral-400 sm:w-20 md:w-24 lg:w-28"
			on:click={nextSlide}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-12 w-12"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
			</svg>
		</button>
	{:else}
		<div class="col-start-3 row-start-1 w-16 sm:w-20 md:w-24 lg:w-28" />
	{/if}
	<div class="col-start-2 row-start-1 mb-4 flex justify-center self-end">
		{#each slides as slide, i}
			<button
				aria-label="Go to slide {i + 1}"
				class="z-10 mx-4 h-6 w-12 border-b-2 {activeSlide === i
					? 'border-neutral-200'
					: 'border-neutral-400'}"
				on:click={() => gotoSlide(i)}
			/>
		{/each}
	</div>
</div>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.carousel::-webkit-scrollbar {
		display: none;
	}
	/* Hide scrollbar for IE, Edge and Firefox */
	.carousel {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
