/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"rc-yellow": "#F9DC5C",
				"rc-darkblue": "#011936",
				"rc-lightblue": "#6C91C2",
				"rc-black": "#050F0C",
				"rc-white": "#FFFFFF",
			},
		},
	},
	plugins: [],
};
