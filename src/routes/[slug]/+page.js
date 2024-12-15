import foods from '../../lib/foods.json'

export const prerender = true;

export const load = async ({ params }) => {
	// const markdown = await import(`../../lib/content/${params.slug}.md`);

	let food = foods.find(food => food.title == params.slug)

	return { ...food };
};
