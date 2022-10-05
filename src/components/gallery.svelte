<script lang="ts">
	import Lightbox from './lightbox.svelte';

	let modal;
</script>

<div
	class="grid grid-flow-row-dense auto-rows-[198px] grid-cols-[repeat(auto-fit,_minmax(296px,_1fr))] gap-4 p-4 md:auto-rows-[174px] md:grid-cols-[repeat(auto-fit,_minmax(348px,_1fr))] md:gap-6 md:p-6 lg:auto-rows-[154px] lg:grid-cols-[repeat(auto-fit,_minmax(309px,_1fr))] xl:auto-rows-[195px] xl:grid-cols-[repeat(auto-fit,_minmax(290px,_1fr))]"
>
	<button
		class="col-start-auto row-span-3 row-start-auto hover:outline-double hover:outline-2 hover:outline-offset-2 hover:outline-neutral-500 lg:col-start-1 lg:row-start-1"
		type="button"
		on:click={() => {
			modal.show({
				url: '/images/gallery/pancrazio-from-the-venetian-twins-607w.jpg',
				role: 'Pancrazio',
				play: 'The Venetian Twins',
				author: 'Carlo Goldoni'
			});
		}}
	>
		<img
			class="h-full w-full object-cover object-center"
			srcset="/images/gallery/pancrazio-from-the-venetian-twins-310w.jpg 310w,
			/images/gallery/pancrazio-from-the-venetian-twins-476w.jpg 476w,
			/images/gallery/pancrazio-from-the-venetian-twins-607w.jpg 607w"
			src="/images/gallery/pancrazio-from-the-venetian-twins-607w.jpg"
			alt="Pancrazio from The Venetian Twins by Carlo Goldoni"
			sizes="(min-width: 1280px) 290px,
			(min-width: 1024px) calc((100vw - (2 * 24px) - (2 * 24px)) / 3),
			(min-width: 768px) calc((100vw - 24px - (2 * 24px)) / 2),
			(min-width: 640px) calc((100vw - 16px - (2 * 16px)) / 2),
			calc(100vw - (2 * 16px))"
		/>
	</button>
	<button
		class="col-start-auto row-span-2 row-start-auto hover:outline-double hover:outline-2 hover:outline-offset-2 hover:outline-neutral-500 lg:col-start-2 lg:row-start-1 xl:row-span-1"
		type="button"
		on:click={() => {
			modal.show({
				url: '/images/gallery/faraway-cabaret-607w.jpg',
				role: 'Performer',
				play: 'Dream Weaver Cabaret',
				author: 'Faraway Theatre'
			});
		}}
	>
		<img
			class="h-full w-full object-cover object-left xl:object-center"
			srcset="/images/gallery/faraway-cabaret-310w.jpg 310w,
			/images/gallery/faraway-cabaret-476w.jpg 476w,
			/images/gallery/faraway-cabaret-607w.jpg 607w"
			src="/images/gallery/faraway-cabaret-607w.jpg"
			alt="Dream Weaver Cabaret put on by Faraway Theatre"
			sizes="(min-width: 1280px) 290px,
			(min-width: 1024px) calc((100vw - (2 * 24px) - (2 * 24px)) / 3),
			(min-width: 768px) calc((100vw - 24px - (2 * 24px)) / 2),
			(min-width: 640px) calc((100vw - 16px - (2 * 16px)) / 2),
			calc(100vw - (2 * 16px))"
		/>
	</button>
	<button
		class="col-start-auto row-span-3 row-start-auto hover:outline-double hover:outline-2 hover:outline-offset-2 hover:outline-neutral-500 lg:col-start-3 xl:col-start-4 xl:row-start-1"
		type="button"
		on:click={() => {
			modal.show({
				url: '/images/gallery/jesus-of-nazareth-from-the-last-days-of-judas-iscariot-607w.jpg',
				role: 'Jesus of Nazareth',
				play: 'The Last Days of Judas Iscariot',
				author: 'Stephen Adly Guirgis'
			});
		}}
	>
		<img
			class="h-full w-full object-cover object-center"
			srcset="/images/gallery/jesus-of-nazareth-from-the-last-days-of-judas-iscariot-310w.jpg 310w,
			/images/gallery/jesus-of-nazareth-from-the-last-days-of-judas-iscariot-476w.jpg 476w,
			/images/gallery/jesus-of-nazareth-from-the-last-days-of-judas-iscariot-607w.jpg 607w"
			src="/images/gallery/jesus-of-nazareth-from-the-last-days-of-judas-iscariot-607w.jpg"
			alt="Jesus of Nazareth from The Last Days of Judas Iscariot by Stephen Adly Guirgis"
			sizes="(min-width: 1280px) 290px,
			(min-width: 1024px) calc((100vw - (2 * 24px) - (2 * 24px)) / 3),
			(min-width: 768px) calc((100vw - 24px - (2 * 24px)) / 2),
			(min-width: 640px) calc((100vw - 16px - (2 * 16px)) / 2),
			calc(100vw - (2 * 16px))"
		/>
	</button>
	<button
		class="col-start-auto row-span-2 row-start-auto hover:outline-double hover:outline-2 hover:outline-offset-2 hover:outline-neutral-500 lg:col-start-2 lg:row-start-3 xl:col-start-3 xl:row-start-1"
		type="button"
		on:click={() => {
			modal.show({
				url: '/images/gallery/hedwig-from-hedwig-and-the-angry-inch-1-607w.jpg',
				role: 'Hedwig',
				play: 'Hedwig and the Angry Inch',
				author: 'John Cameron Mitchell and Stephen Trask'
			});
		}}
	>
		<img
			class="h-full w-full object-cover object-right"
			srcset="/images/gallery/hedwig-from-hedwig-and-the-angry-inch-1-310w.jpg 310w,
			/images/gallery/hedwig-from-hedwig-and-the-angry-inch-1-476w.jpg 476w,
			/images/gallery/hedwig-from-hedwig-and-the-angry-inch-1-607w.jpg 607w"
			src="/images/gallery/hedwig-from-hedwig-and-the-angry-inch-1-607w.jpg"
			alt="Hedwig from Hedwig and the Angry Inch by John Cameron Mitchell and Stephen Trask"
			sizes="(min-width: 1280px) 290px,
			(min-width: 1024px) calc((100vw - (2 * 24px) - (2 * 24px)) / 3),
			(min-width: 768px) calc((100vw - 24px - (2 * 24px)) / 2),
			(min-width: 640px) calc((100vw - 16px - (2 * 16px)) / 2),
			calc(100vw - (2 * 16px))"
		/>
	</button>
	<button
		class="col-start-auto row-span-3 row-start-auto hover:outline-double hover:outline-2 hover:outline-offset-2 hover:outline-neutral-500 lg:col-start-3 lg:row-start-4 xl:row-span-2 xl:row-start-3"
		type="button"
		on:click={() => {
			modal.show({
				url: '/images/gallery/peer-gynt-from-peer-gynt-607w.jpg',
				role: 'Peer Gynt',
				play: 'Peer Gynt',
				author: 'Henrik Ibsen'
			});
		}}
	>
		<img
			class="h-full w-full object-cover object-top md:object-center"
			srcset="/images/gallery/peer-gynt-from-peer-gynt-310w.jpg 310w,
			/images/gallery/peer-gynt-from-peer-gynt-476w.jpg 476w,
			/images/gallery/peer-gynt-from-peer-gynt-607w.jpg 607w"
			src="/images/gallery/peer-gynt-from-peer-gynt-607w.jpg"
			alt="Peer Gynt from Peer Gynt by Henrik Ibsen"
			sizes="(min-width: 1280px) 290px,
			(min-width: 1024px) calc((100vw - (2 * 24px) - (2 * 24px)) / 3),
			(min-width: 768px) calc((100vw - 24px - (2 * 24px)) / 2),
			(min-width: 640px) calc((100vw - 16px - (2 * 16px)) / 2),
			calc(100vw - (2 * 16px))"
		/>
	</button>
	<button
		class="col-start-auto row-span-2 row-start-auto hover:outline-double hover:outline-2 hover:outline-offset-2 hover:outline-neutral-500 lg:col-start-1 lg:row-start-4 xl:col-start-2 xl:row-start-2"
		type="button"
		on:click={() => {
			modal.show({
				url: '/images/gallery/fleshcreep-from-jack-and-the-beanstalk-pantomime-607w.jpg',
				role: 'Fleshcreep',
				play: 'Jack and the Beanstalk Pantomime',
				author: ''
			});
		}}
	>
		<img
			class="h-full w-full object-cover object-top xl:object-center"
			srcset="/images/gallery/fleshcreep-from-jack-and-the-beanstalk-pantomime-310w.jpg 310w,
			/images/gallery/fleshcreep-from-jack-and-the-beanstalk-pantomime-476w.jpg 476w,
			/images/gallery/fleshcreep-from-jack-and-the-beanstalk-pantomime-607w.jpg 607w"
			src="/images/gallery/fleshcreep-from-jack-and-the-beanstalk-pantomime-607w.jpg"
			alt="Fleshcreep from Jack and the Beanstalk Pantomime"
			sizes="(min-width: 1280px) 290px,
			(min-width: 1024px) calc((100vw - (2 * 24px) - (2 * 24px)) / 3),
			(min-width: 768px) calc((100vw - 24px - (2 * 24px)) / 2),
			(min-width: 640px) calc((100vw - 16px - (2 * 16px)) / 2),
			calc(100vw - (2 * 16px))"
		/>
	</button>
	<button
		class="col-start-auto row-span-2 row-start-auto hover:outline-double hover:outline-2 hover:outline-offset-2 hover:outline-neutral-500 lg:col-start-2 lg:row-start-5 xl:col-start-1 xl:row-span-1 xl:row-start-4"
		type="button"
		on:click={() => {
			modal.show({
				url: '/images/gallery/willmore-from-the-rover-607w.jpg',
				role: 'Willmore',
				play: 'The Rover',
				author: 'Aphra Behn'
			});
		}}
	>
		<img
			class="h-full w-full object-cover object-top"
			srcset="/images/gallery/willmore-from-the-rover-310w.jpg 310w,
			/images/gallery/willmore-from-the-rover-476w.jpg 476w,
			/images/gallery/willmore-from-the-rover-607w.jpg 607w"
			src="/images/gallery/willmore-from-the-rover-607w.jpg"
			alt="Willmore from The Rover by Aphra Behn"
			sizes="(min-width: 1280px) 290px,
			(min-width: 1024px) calc((100vw - (2 * 24px) - (2 * 24px)) / 3),
			(min-width: 768px) calc((100vw - 24px - (2 * 24px)) / 2),
			(min-width: 640px) calc((100vw - 16px - (2 * 16px)) / 2),
			calc(100vw - (2 * 16px))"
		/>
	</button>
	<button
		class="col-start-auto row-start-auto hover:outline-double hover:outline-2 hover:outline-offset-2 hover:outline-neutral-500 lg:col-start-1 lg:row-start-6 xl:col-start-2 xl:row-start-4"
		type="button"
		on:click={() => {
			modal.show({
				url: '/images/gallery/jamie-from-the-last-five-years-607w.jpg',
				role: 'Jamie',
				play: 'The Last Five Years',
				author: 'Jason Robert Brown'
			});
		}}
	>
		<img
			class="h-full w-full object-cover object-top xl:object-center"
			srcset="/images/gallery/jamie-from-the-last-five-years-310w.jpg 310w,
			/images/gallery/jamie-from-the-last-five-years-476w.jpg 476w,
			/images/gallery/jamie-from-the-last-five-years-607w.jpg 607w"
			src="/images/gallery/jamie-from-the-last-five-years-607w.jpg"
			alt="Jamie from The Last Five Years by Jason Robert Brown"
			sizes="(min-width: 1280px) 290px,
			(min-width: 1024px) calc((100vw - (2 * 24px) - (2 * 24px)) / 3),
			(min-width: 768px) calc((100vw - 24px - (2 * 24px)) / 2),
			(min-width: 640px) calc((100vw - 16px - (2 * 16px)) / 2),
			calc(100vw - (2 * 16px))"
		/>
	</button>
	<button
		class="col-start-auto row-span-2 row-start-auto hover:outline-double hover:outline-2 hover:outline-offset-2 hover:outline-neutral-500 lg:col-start-1 lg:row-start-7 xl:col-start-4 xl:row-start-4"
		type="button"
		on:click={() => {
			modal.show({
				url: '/images/gallery/adam-from-the-complete-works-of-william-shakespeare-abridged-607w.jpg',
				role: 'Adam',
				play: 'The Complete Works of William Shakespeare [Abridged]',
				author: 'Adam Long, Daniel Singer, and Jess Winfield'
			});
		}}
	>
		<img
			class="h-full w-full object-cover object-top"
			srcset="/images/gallery/adam-from-the-complete-works-of-william-shakespeare-abridged-310w.jpg 310w,
			/images/gallery/adam-from-the-complete-works-of-william-shakespeare-abridged-476w.jpg 476w,
			/images/gallery/adam-from-the-complete-works-of-william-shakespeare-abridged-607w.jpg 607w"
			src="/images/gallery/adam-from-the-complete-works-of-william-shakespeare-abridged-607w.jpg"
			alt="Adam from The Complete Works of William Shakespeare [Abridged] by Adam Long, Daniel Singer, and Jess Winfield"
			sizes="(min-width: 1280px) 290px,
			(min-width: 1024px) calc((100vw - (2 * 24px) - (2 * 24px)) / 3),
			(min-width: 768px) calc((100vw - 24px - (2 * 24px)) / 2),
			(min-width: 640px) calc((100vw - 16px - (2 * 16px)) / 2),
			calc(100vw - (2 * 16px))"
		/>
	</button>
	<button
		class="col-start-auto row-span-2 row-start-auto hover:outline-double hover:outline-2 hover:outline-offset-2 hover:outline-neutral-500 lg:col-span-2 lg:col-start-2 lg:row-start-7 xl:col-span-3 xl:row-span-1 xl:row-start-5"
		type="button"
		on:click={() => {
			modal.show({
				url: '/images/gallery/hedwig-from-hedwig-and-the-angry-inch-2-607w.jpg',
				role: 'Hedwig',
				play: 'Hedwig and the Angry Inch',
				author: 'John Cameron Mitchell and Stephen Trask'
			});
		}}
	>
		<img
			class="h-full w-full object-cover object-center"
			srcset="/images/gallery/hedwig-from-hedwig-and-the-angry-inch-2-310w.jpg 310w,
			/images/gallery/hedwig-from-hedwig-and-the-angry-inch-2-476w.jpg 476w,
			/images/gallery/hedwig-from-hedwig-and-the-angry-inch-2-607w.jpg 607w,
			/images/gallery/hedwig-from-hedwig-and-the-angry-inch-2-643w.jpg 643w,
			/images/gallery/hedwig-from-hedwig-and-the-angry-inch-2-918w.jpg 918w"
			src="/images/gallery/hedwig-from-hedwig-and-the-angry-inch-2-607w.jpg"
			alt="Hedwig from Hedwig and the Angry Inch by John Cameron Mitchell and Stephen Trask"
			sizes="(min-width: 1280px) calc((290px * 3) + (2 * 24px)),
			(min-width: 1024px) calc((100vw - (2 * 24px) - (2 * 24px)) / 3 * 2 + 24px),
			(min-width: 768px) calc((100vw - 24px - (2 * 24px)) / 2),
			(min-width: 640px) calc((100vw - 16px - (2 * 16px)) / 2),
			calc(100vw - (2 * 16px))"
		/>
	</button>
</div>
<Lightbox bind:this={modal} />
