import { marked } from 'marked'
import { dataUrl } from '../../../lib/data.js'

export const prerender = true;
export const ssr = true;
export const csr = false;

export async function load({ params, fetch }) {
	let res = await fetch(dataUrl + '?slug=' + params.slug)
	let json = await res.json()

	let food = json.food
	let html = marked.parse(json.md)

	return { ...food, content: html, slug: params.slug };
};
