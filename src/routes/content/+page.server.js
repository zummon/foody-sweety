import food from '../../lib/food.json'

export const prerender = true;

export const load = async ({ parent }) => {
	let tags = new Set()
	let foods = []

	let { title, desc } = await parent()

	for (let slug in food) {
		for (let tag of food[slug].tags) {
			tags.add(tag)
		}
		foods.push({ ...food[slug], slug })
	}

	return { title, desc, foods, tags };
};
