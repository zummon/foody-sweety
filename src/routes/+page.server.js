import food from '../lib/food.json'

export const prerender = true;

export async function load({ parent, }) {
	
	let foods = []

	let { title, desc } = await parent()

	for (let slug in food) {
		foods.push({ ...food[slug], slug, tags: [food[slug].tags[0]] })
	}

	return { title, desc, foods: foods.slice(0, 6), };
};
