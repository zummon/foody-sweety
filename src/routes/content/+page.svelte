<script>
	import { onMount } from "svelte";

	let { data } = $props();

	let tags = $state([...data.tags])
	let foods = $derived.by(() => {
		return data.foods.filter(food => {
			let show = false
			for (let tag of food.tags) {
				if (tags.includes(tag)) {
					show = true
					break
				}
			}
			return show
		})
	})

	onMount(async () => {
	})
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.desc} />
</svelte:head>

<div class="flex flex-wrap justify-center gap-4 max-w-lg mx-auto text-lg font-medium">
	{#each data.tags as tag, index (`tag-${index}`)}
		<button class="py-0.5 px-2 rounded-full transition duration-300 cursor-pointer {tags.includes(tag) ? 'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900' : 'text-black bg-zinc-200 dark:bg-zinc-400'}" onclick={() => {
			if (tags.includes(tag)) {
				tags.splice(tags.indexOf(tag), 1)
			} else {
				tags.push(tag)
			}
		}}>{tag}</button>
	{/each}
</div>

<div class="xl:columns-2">
{#each foods as food, index (index)}
	<div
		class="dark:bg-zinc-800 bg-zinc-50 max-w-2xl rounded-xl mx-auto my-8 shadow-lg shadow-orange-200 dark:shadow-yellow-950 sm:flex flex-wrap"
	>
		<div class="flex-1">
			<img
				class="min-h-full w-full h-56 sm:h-72 md:h-96 object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none"
				src={food.image}
				alt={food.slug}
			/>
		</div>
		<div class="flex-1 flex flex-col">
			<h3 class="text-4xl p-4 sm:p-8">{food.title}</h3>
			<div class="px-4 sm:px-8">
				{#each food.tags as tag, tagIndex (`${index}-${tagIndex}`)}
					<span class="ml-2 first:ml-0 text-orange-600 dark:text-orange-300">{tag}</span>
				{/each}
			</div>
			<p class="p-4 sm:p-8 leading-8">
				{food.desc}
			</p>
			<div class="flex items-center justify-end mt-auto">
				<span class="text-orange-600 dark:text-orange-300">
					{food.price}
				</span>
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
