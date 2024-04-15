export const prerender = true;

export const load = async ({ parent }) => {
	let blogs = [];
	let tags = new Set()
	const markdowns = import.meta.glob('../lib/blogs/*.md');

	for (const path in markdowns) {
		await markdowns[path]().then((markdown) => {
			let content = markdown.default;
			let metadata = markdown.metadata;
			let slug = path.split('/').pop().slice(0, -3);

			metadata.tags.forEach(tag => {
				tags.add(tag)
			});

			blogs.push({
				...metadata,
				content,
				slug,
			});
		});
	}

	let { title, excerpt } = await parent()

	return { blogs, title, excerpt, tags: Array.from(tags) };
};
