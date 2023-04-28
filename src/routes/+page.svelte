<script>
  let title = 'Foody Sweety';
  let excerpt = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.';
  let image = { src: '' };
  let date;

  export let data

</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={excerpt} />
</svelte:head>

{#each data.blogs as { date, excerpt, image, tags, title, slug },index (index)}

	<div
		class="bg-gray-900 max-w-screen-md rounded-xl mx-auto my-8 shadow-2xl sm:flex flex-wrap"
	>
		<div class="flex-1">
			<img
				class="min-h-full w-full h-56 sm:h-72 md:h-96 object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none"
				src={image.src}
				alt={image.alt}
			/>
		</div>
		<div class="flex-1 grid grid-cols-1">
			<h1 class="text-4xl p-4 sm:p-8">{title}</h1>
			<p class="p-4 sm:p-8 leading-8">
			{#each tags as tag, tagIndex (`${index}-${tagIndex}`)}
				<a
					class={`font-semibold ${tagIndex !== 0 ? 'ml-2' : ''}`}
					href={`#`}
				>
					#{tag}
				</a>
			{/each}
			<br />
			{excerpt}
			</p>
			<p class="flex items-center justify-end mt-auto">
				{date}
				<a
					href={`/${slug}`}
					class="transition duration-500 ease-in-out hover:bg-gray-50 hover:text-gray-900 px-6 py-4 ml-2 rounded-br-xl font-bold"
				>
					 <!-- share-solid icon  -->
					<svg
						class="w-5 h-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<path
							fill="currentColor"
							d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"
						></path>
					</svg>
				</a>
			</p>
		</div>
	</div>
	
{/each}