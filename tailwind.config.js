/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html, jsx, js}", "./src/**/*"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				"platzi-primary-background": "#13161c",
				"platzi-primary-green": "#0ae98a",
				"platzi-primary-purple": "#4d1bd1",
			}
		},
	},
	plugins: [],
};
