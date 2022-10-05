<script lang="ts">
	import Hero from '../components/hero.svelte';
	import Gallery from '../components/gallery.svelte';
	import Contact from '../components/contact.svelte';
</script>

<section id="hero" class="w-full snap-center">
	<Hero />
</section>
<section id="about" class="grid h-96 w-full snap-start place-items-center bg-neutral-700">
	<div class="text-neutral-50">About Thomas</div>
</section>
<section id="gallery" class="w-full snap-start bg-neutral-300">
	<Gallery />
</section>
<section id="contact" class="grid h-80 w-full snap-start place-items-center bg-neutral-700">
	<Contact />
</section>
