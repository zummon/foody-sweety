<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.desc} />
</svelte:head>

<div class="dark:bg-zinc-800 bg-zinc-50 max-w-(--breakpoint-md) rounded-xl mx-auto my-8 shadow-lg shadow-pink-200 dark:shadow-pink-950">
	<p>
		<a
			href="/"
			class="text-pink-500 px-6 py-4 rounded-tl-xl inline-block font-bold"
		>
			<!-- reply -->
			<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="currentColor" d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"/></svg>
		</a>
	</p>

	<div
		class="prose dark:prose-invert prose-img:rounded-xl prose-img:mx-auto prose-img:object-contain prose-img:max-h-96 prose-img:max-w-full max-w-none px-4 sm:px-8 mb-8 text-center"
	>
		<h1>{data.title}</h1>
		<p>
			{#each data.tags as tag, index (`tag-${index}`)}
				<span class="ml-2 first:ml-0 text-blue-600 dark:text-blue-300">{tag}</span>
			{/each}
		</p>
		<p>
			<a href={data.image} target="_blank">
				<img src={data.image} alt={data.slug} />
			</a>
		</p>
		<p>{data.desc}</p>
		<p class="text-blue-600 dark:text-blue-300">
			{data.price}
		</p>
	</div>

	<div
		class="prose dark:prose-invert prose-img:rounded-xl prose-img:mx-auto prose-img:object-contain prose-img:max-h-96 prose-img:max-w-full max-w-none px-4 sm:px-8 mb-8"
	>
		{@html data.content}
	</div>

	<p class="flex items-center justify-end">
		<a
			href="/"
			class="text-pink-500 px-6 py-4 rounded-br-xl font-bold"
		>
			<!-- share  -->
			<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="currentColor" d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/></svg>
		</a>
	</p>
</div>
