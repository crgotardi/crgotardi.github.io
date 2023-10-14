/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			 height: {
				'128': 'calc(100vh - 150px)',
			},
			fontSize: {
				h1: ['3rem', { lineHeight: '2.5rem' }],
				h2: ['2.5rem', { lineHeight: '2rem' }],
				h3: ['2rem', { lineHeight: '1.75rem' }],
				h4: ['1.5rem', { lineHeight: '1.5rem' }],
				h5: ['1.25rem', { lineHeight: '1.25rem' }],
				h6: ['1rem', { lineHeight: '1rem' }],
			},
		},
	},
	plugins: [],
}
