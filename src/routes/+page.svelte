<script>
	import { onMount } from "svelte";

	let { data } = $props();

	onMount(async () => {
	})
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.desc} />
</svelte:head>

<section class="h-[60vh] md:h-[80vh] bg-cover bg-center flex flex-col justify-center items-center text-center">
	<div class="py-8 px-12 rounded-lg">
		<h2 class="text-4xl md:text-6xl font-serif font-bold mb-4">{data.title}</h2>
		<p class="text-lg md:text-xl mb-8 max-w-lg">{data.desc}</p>
		<a href="/content" class="bg-yellow-500 text-zinc-900 py-3 px-6 rounded-md text-lg transition duration-300 font-semibold hover:bg-yellow-600 shadow-md shadow-yellow-300 dark:shadow-yellow-800">View Menu</a>
	</div>
</section>

<section class="py-16 px-8 md:px-16 lg:px-24" id="about">
	<div class="md:grid grid-cols-2 gap-12">
		<div class="mb-6 md:mb-0">
			<img src="https://i.imgur.com/lEylU9L.jpeg" alt="About Us" class="rounded-lg shadow-lg object-cover md:object-contain max-h-80 md:max-h-[480px] mx-auto md:ml-auto md:mr-0">
		</div>
		<div class="text-lg">
			<h2 class="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-yellow-500 md:text-left">About Us</h2>
			<div class="max-w-md mx-auto md:mr-auto md:ml-0">
				<p class="mb-4 ">We are a unique dining experience offering a modern take on classic cuisine in an elegant and dimly lit setting. Our focus is on fresh, seasonal ingredients and impeccable service.</p>
				<p class="">Our passion for culinary excellence is reflected in every dish we create. We invite you to join us for an unforgettable evening.</p>
			</div>
		</div>
	</div>
</section>

<section class="py-16 sm:px-8 md:px-16 lg:px-24">
	<h2 class="text-3xl md:text-4xl font-serif font-bold text-center mb-8">Our Signature Dishes</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each data.foods as food, index (index)}
			<div class="dark:bg-zinc-800 bg-white rounded-lg shadow-md shadow-yellow-200 dark:shadow-yellow-950">
				<img class="w-full h-48 object-cover rounded-md mb-4" src={food.image} alt={food.slug}>
				<div class="px-6 py-4">
					<h3 class="text-xl font-bold mb-2 truncate">{food.title}</h3>
					<p class="line-clamp-2">
						{#each food.tags as tag, tagIndex (`${index}-${tagIndex}`)}
							<span class="ml-2 first:ml-0 text-orange-600 dark:text-orange-300">{tag}</span>
						{/each}
						{food.desc}
					</p>
					<div class="flex justify-end items-center">
						<p class="mt-2 text-yellow-500 font-bold">{food.price}</p>
						<a
							href="/content/{food.slug}"
							class="text-orange-500 hover:text-orange-600 transition duration-300 px-6 py-4 ml-2 rounded-br-xl"
						>
							<!-- share  -->
							<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="currentColor" d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/></svg>
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
