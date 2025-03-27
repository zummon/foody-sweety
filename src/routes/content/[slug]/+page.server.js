import { marked } from 'marked'
import { dataUrl } from '../../../lib/data.js'

export const prerender = true;
export const ssr = true;
export const csr = false;

const renderer = {
  heading({ tokens, depth }) {
    const text = this.parser.parseInline(tokens);

    return `<h${depth} class="">
			${text}
		</h${depth}>`;
  },
	image({ href }) {

		return `<img class="rounded-xl object-contain mx-auto max-h-96 max-w-full" src="${href}" alt="">`
	},
	paragraph({tokens}) {
    const text = this.parser.parseInline(tokens);

		return `<p class="">${text}</p>`
	},
};

marked.use({ renderer });

export async function load({ params, fetch }) {
	let res = await fetch(dataUrl + '?slug=' + params.slug)
	let json = await res.json()

	let food = json.food
	let html = marked.parse(json.md)

	return { ...food, content: html, slug: params.slug };
};
