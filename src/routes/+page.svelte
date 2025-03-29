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

<section class="min-h-[60vh] md:min-h-[80vh] flex flex-wrap xl:flex-nowrap justify-center items-center text-center">
	<div class="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8 px-6 pb-6 pt-8 xl:order-last">
		<div>
			<img class="object-cover rounded-xl w-64 h-32 sm:h-64 md:h-80 lg:h-96 transform -rotate-2 shadow-lg shadow-orange-200 dark:shadow-yellow-950" src={data.foods[0].image} alt="">
		</div>
		<div>
			<img class="object-cover rounded-xl w-64 h-32 sm:h-64 md:h-80 lg:h-96 transform -translate-y-4 rotate-2 sm:rotate-1 shadow-lg shadow-orange-200 dark:shadow-yellow-950" src={data.foods[3].image} alt="">
		</div>
		<div class="col-span-2 sm:col-span-1">
			<img class="mx-auto sm:mx-0 object-cover rounded-xl w-64 h-32 sm:h-64 md:h-80 lg:h-96 transform sm:translate-y-8 -rotate-1 sm:rotate-6 shadow-lg shadow-orange-200 dark:shadow-yellow-950" src={data.foods[1].image} alt="">
		</div>
	</div>
	<div class="pt-0 sm:pt-8 pb-16 px-8 rounded-lg">
		<h2 class="text-4xl md:text-6xl font-serif font-bold mb-4 text-yellow-950 dark:text-yellow-100">{data.title}</h2>
		<p class="text-lg md:text-xl mb-8 max-w-lg">{data.desc}</p>
		<a href="/content" class="text-yellow-950 hover:text-yellow-100 bg-yellow-500 py-3 px-6 rounded-md text-lg transition duration-300 font-semibold hover:bg-yellow-600 shadow-md shadow-orange-200 dark:shadow-yellow-800">View Menu</a>
	</div>
</section>

<section class="md:grid grid-cols-2 gap-6 lg:gap-12" id="about">
	<div class="mb-6 md:mb-0">
		<img src="https://i.imgur.com/lEylU9L.jpeg" alt="About Us" class="rounded-lg object-cover object-top w-[480px] max-w-full max-h-80 md:max-h-[480px] mx-auto md:ml-auto md:mr-0">
	</div>
	<div class="md:pt-16 pb-8 sm:pb-20 pl-4 lg:pl-8 pr-8 text-lg">
		<h2 class="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-yellow-600 dark:text-yellow-500 md:text-left">About Us</h2>
		<div class="max-w-md mr-auto ml-auto lg:mr-auto lg:ml-0">
			<p class="mb-4 ">We are a unique dining experience offering a modern take on classic cuisine in an elegant and dimly lit setting. Our focus is on fresh, seasonal ingredients and impeccable service.</p>
			<p class="">Our passion for culinary excellence is reflected in every dish we create. We invite you to join us for an unforgettable evening.</p>
		</div>
	</div>
</section>

<section class="py-16 sm:px-8 md:px-16 lg:px-24 xl:px-8">
	<h2 class="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-yellow-950 dark:text-yellow-100">Our Signature Dishes</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-6">
		{#each data.foods as food, index (index)}
			<div class="dark:bg-zinc-800 bg-white rounded-lg shadow-md shadow-orange-200 dark:shadow-yellow-950">
				<img class="w-full h-48 xl:h-52 object-cover rounded-md mb-4" src={food.image} alt={food.slug}>
				<div class="px-6 py-4">
					<h3 class="text-xl font-bold mb-2 truncate">{food.title}</h3>
					<p class="line-clamp-2">
						{#each food.tags as tag, tagIndex (`${index}-${tagIndex}`)}
							<span class="ml-2 first:ml-0 text-orange-600 dark:text-orange-300">{tag}</span>
						{/each}
						{food.desc}
					</p>
					<div class="flex justify-end items-center">
						<p class="mt-2 text-yellow-600 dark:text-yellow-500 font-bold">{food.price}</p>
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
