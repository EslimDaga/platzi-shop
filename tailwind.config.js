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
				"platzi-secondary-background": "#20252f",
				"platzi-terciary-background": "#2D3543",
				"platzi-primary-green": "#0ae98a",
				"platzi-primary-purple": "#4d1bd1",
				"platzi-secondary-purple": "#511de1",
			}
		},
	},
	plugins: [],
};
