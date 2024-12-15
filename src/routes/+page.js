import foods from '../lib/foods.json'

export const prerender = true;

export const load = async ({ parent }) => {
	let tags = new Set()

	let { title, desc } = await parent()

	foods.forEach(food => {
		food.tags.forEach((tag) => {
			tags.add(tag)
		})
	})

	return { title, desc, foods, tags };
};
