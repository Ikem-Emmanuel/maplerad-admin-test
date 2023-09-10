/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#AEF378",
				secondary: "#1F2937",
				Lighter: "#9CA3AF",
				Light: "#6B7280",
				mpGreen: "#25A254",
				mpGrey100: "#F9FAFB",
				mpGrey200: "#EFF1F3",
				mpGrey300: "#E5E7EB",
				mpGrey400: "#D1D5DB",
				mpGrey500: "#9CA3AF",
				mpBlue: "#476EF9",
			},
			backgroundColor: {
				"custom-shadow": "rgba(255, 0, 0, 0.5)", // Define a custom background color
			},
			transitionDelay: {
				0: "0ms",
				200: "200ms",
				500: "500ms",
				1000: "1000ms",
			},
			screens: {
				sm: "640px", // Small screens and up
				md: "768px", // Medium screens and up
				lg: "1024px", // Large screens and up
				xl: "1280px", // Extra large screens and up
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					md: "3rem",
					lg: "4rem",
					xl: "5rem",
				},
			},
		},
	},
	plugins: [],
};
