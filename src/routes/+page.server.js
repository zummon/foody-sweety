import food from '../lib/food.json'

export const prerender = true;

export async function load({ parent, }) {
	
	let foods = []

	let { title, desc } = await parent()

	for (let slug in food) {
		let mater = food[slug]
		foods.push({ 
			...mater, 
			tags: [mater.tags[0]],
			slug, 
		})
	}

	return { title, desc, foods: foods.slice(0, 6), };
};
