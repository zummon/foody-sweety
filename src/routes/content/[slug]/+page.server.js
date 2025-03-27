import { marked } from 'marked'
import data from '../../../lib/food.json'

export const prerender = true;

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

export async function load({ params, }) {

	let food = data[params.slug]
	let md = await import(`../../../lib/content/${params.slug}.md?raw`)
	let html = marked.parse(md.default)

	return { ...food, content: html, slug: params.slug };
};
