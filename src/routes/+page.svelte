<script>
	export let data;

	let tags = [...data.tags]
	let blogs = []

	$: {
		blogs = data.blogs.filter((blog) => {
			let detect = false 
			for (const tag of blog.tags) {
				if (!detect) {
					detect = tags.includes(tag)
				}
			}
			return detect
		})
	}
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.excerpt} />
</svelte:head>

<div class="flex flex-wrap justify-center gap-4 max-w-screen-lg mx-auto">
	{#each data.tags as tag, index (`t-${index}`)}
		<button class="py-0.5 px-1 sm:px-2 rounded-full text-lg transition duration-500 {tags.includes(tag) ? 'text-pink-400 bg-pink-900/50' : 'text-blue-400 bg-blue-900/50'}" on:click={() => {
			if (!tags.includes(tag)) {
				tags = [...tags, tag]
			} else {
				tags.splice(tags.indexOf(tag), 1)
				tags = tags
			}
		}}>{tag}</button>
	{/each}
</div>

{#each blogs as blog, index (index)}
	<div
		class="dark:bg-gray-900 bg-gray-50 max-w-screen-md rounded-xl mx-auto my-8 shadow-2xl sm:flex flex-wrap"
	>
		<div class="flex-1">
			<img
				class="min-h-full w-full h-56 sm:h-72 md:h-96 object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none"
				src={blog.image.src}
				alt={blog.image.alt}
			/>
		</div>
		<div class="flex-1 flex flex-col">
			<h1 class="text-4xl p-4 sm:p-8">{blog.title}</h1>
			<div class="px-4 sm:px-8">
				{#each blog.tags as tag, tagIndex (`${index}-${tagIndex}`)}
					<button class="transition duration-500 ml-2 first:ml-0 {tags.includes(tag) ? 'text-pink-400' : 'text-blue-400'}" on:click={() => {
						if (!tags.includes(tag)) {
							tags = [...tags, tag]
						} else {
							tags.splice(tags.indexOf(tag), 1)
							tags = tags
						}
					}}>{tag}</button>
				{/each}
			</div>
			<p class="p-4 sm:p-8 leading-8">
				{blog.excerpt}
			</p>
			<div class="flex items-center justify-end mt-auto">
				<span class="">
					{new Date(blog.date).toLocaleDateString(undefined, {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</span>
				<a
					href="/{blog.slug}"
					class="transition duration-500 hover:text-pink-500 px-6 py-4 ml-2 rounded-br-xl"
				>
					<!-- share  -->
					<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="currentColor" d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/></svg>
				</a>
			</div>
		</div>
	</div>
{/each}
