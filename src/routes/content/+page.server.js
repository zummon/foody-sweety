import { dataUrl } from '../../lib/data.js'

export const prerender = true;

export const load = async ({ parent, fetch }) => {
	let res = await fetch(dataUrl)
	let json = await res.json()
	
	let tags = new Set()
	let foods = []

	let { title, desc } = await parent()

	for (let slug in json.foods) {
		for (let tag of json.foods[slug].tags) {
			tags.add(tag)
		}
		foods.push({ ...json.foods[slug], slug })
	}

	return { title, desc, foods, tags };
};