<script>
	import "../app.css";
	import { onMount } from "svelte";
	import { goto } from '$app/navigation'

	let { data, children } = $props()

	let navs = [
		{href:'/content', content: 'Menu'},
		{href:'/#about', content: 'About'},
		{href:'https://github.com/zummon/', content: 'Contact', target: '_blank'},
	]

	let isdark = $state(true)

	onMount(async () => {
		if (data.pathname != '/') {
			goto(data.pathname)
		}
		let dark = localStorage.getItem('dark')
		if (dark === null) {
			isdark = matchMedia("(prefers-color-scheme: dark)").matches;
		} else {
			isdark = Boolean(dark)
		}
		document.documentElement.classList.toggle("dark", isdark);
	});
</script>

<nav class="py-6 px-8 md:px-16 lg:px-24 flex flex-wrap gap-4 md:gap-6 lg:gap-10 justify-between items-center">
	<h1 class="text-nowrap">
		<a class="text-xl md:text-2xl font-serif font-medium hover:text-yellow-600 transition duration-300" href="/">Sweet Dark</a>
		<button class="text-yellow-500 hover:text-yellow-600 transition duration-300 cursor-pointer"
			onclick={() => {
				isdark = !isdark;
				localStorage.setItem('dark', isdark)
				document.documentElement.classList.toggle("dark", isdark);
			}}
		>
			<!-- moon -->
			<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="currentColor" d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
		</button>
	</h1>
	<ul class="flex flex-wrap items-center gap-4 md:gap-6 lg:gap-10 text-lg">
		{#each navs as nav}
			<li><a href={nav.href} class="transition duration-300 {data.pathname == nav.href ? 'font-semibold text-yellow-600' : 'hover:text-yellow-600'}" target={nav.target}>{nav.content}</a></li>
		{/each}
		<li><a href="https://docs.google.com/spreadsheets/d/1v2mkIQHDAdIEwVG8umuEegq8J-X50ca9IkAphrq4qns/edit?usp=sharing" class="text-yellow-950 hover:text-yellow-100 bg-yellow-500 py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-300 font-semibold hover:bg-yellow-600 shadow-md shadow-orange-200 dark:shadow-yellow-800" target="_blank">Reserve</a></li>
	</ul>
</nav>

<div class="">
	{@render children()}
</div>

<div class="py-8 px-8 md:px-16 lg:px-24 text-center">
	<p>&copy; 2024 Sweet Dark Restaurant. Website template.</p>
	<p class="text-xl my-6">
		<span class="inline-block p-2">
			Made by Teerapat Anantarattanachai
		</span>
		<span class="inline-block p-2">
			Something breaks, needs upgrade. Let me know
		</span>
	</p>
	<p class="text-xl">
		<a class="inline-block p-2 hover:text-yellow-500 transition duration-300" target="_blank" href="https://www.facebook.com/zummonSpace/">
			<!-- facebook-f -->
			<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="currentColor" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
		</a>
		<a class="inline-block p-2 hover:text-yellow-500 transition duration-300" target="_blank" href="https://github.com/zummon/">
			<!-- github-alt -->
			<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg>
		</a>
		<a class="inline-block p-2 hover:text-yellow-500 transition duration-300" target="_blank" href="https://x.com/zummonSpace/">
			<!-- x-twitter -->
			<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
		</a>
		<a class="inline-block p-2 hover:text-yellow-500 transition duration-300" target="_blank" href="https://www.youtube.com/@zummon">
			<!-- youtube -->
			<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="currentColor" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
		</a>
	</p>
</div>
