/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"brand-color": "var(--brand-color)",
				"action-color": "var(--action-color)",
				"secondary-black": "var(--secondary-black)",
				"white-color": "var(--white-color)",
				"secondary-color": "var(--secondary-color)",
			},
		},
	},
	plugins: [require("daisyui")],
};

