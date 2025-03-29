import food from '../../lib/food.json'

export const prerender = true;

export async function load({ parent, }) {
	
	let tags = new Set()
	let foods = []

	let { title, desc } = await parent()

	for (let slug in food) {
		let mater = food[slug]
		for (let tag of mater.tags) {
			tags.add(tag)
		}
		foods.push({ 
			...mater, 
			desc: mater.desc.length > 200 ? (mater.desc.substring(0, 200) + '...') : mater.desc,
			slug,
		})
	}

	return { title, desc, foods, tags };
};
