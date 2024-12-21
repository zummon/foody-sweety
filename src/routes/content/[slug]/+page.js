import { marked } from 'marked'
import food from '../../../lib/food.json'

export const prerender = true;

export async function load({ params }) {
	let pick = food[params.slug]
	let content = await import(`../../../lib/content/${params.slug}.md?raw`);
	let html = marked.parse(content.default)

	return { ...pick, content: html, slug: params.slug };
};
