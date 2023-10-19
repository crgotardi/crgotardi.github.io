/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
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
			colors: {
				background: {
					dark: "#13151A",
					light: "#FCFCFC",
				},
				text: {
					dark: '#ACC4DB',
					light: '#59636D'
				},
				primary: {
					dark: '#BAE6FD',
					light: '#5AA0B6'
				},
				secondary: {
					dark: '#C7D2FE',
					light: '#73808D'
				},
				action: {
					dark: '#60A5FA',
					light: '#0284C7'
				},
				icon: {
					dark: '#E0F2FE',
					light: '#73808D'
				},
				blur: {
					dark: 'rgba(90, 211, 249, 0.7)',
					light: 'rgba(90, 211, 249, 0.7)'
				},
				gradient: {
					start: {
						dark: '#7DD3FC',
						light: '#5AA0B6'
					},
					end: {
						dark: '#0C4A6E',
						light: '#113844'
					}
				}
			},
		},
		screens: {
			xs: '500px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			xxl: '1440px',
			'2xl': '1920px'
		},
	},
	plugins: [],
}
