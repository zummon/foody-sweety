export const prerender = true;

export async function load({ url }) {
	let title = "Foody Sweety";
	let desc = "Satisfy your cravings at Foody Sweety. Our menu features a wide variety of mouthwatering dishes, expertly crafted by our talented chefs.";

	return { title, desc, pathname: url.pathname }
}