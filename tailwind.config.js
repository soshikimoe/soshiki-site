/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./{src,app}/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#2c3e50",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
