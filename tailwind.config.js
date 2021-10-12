module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1024px",
			xl: "1366px",
			"2xl": "1536px",
		},
		container: {
			center: true,
		},
		colors: {
			transparent: "transparent",
			primary: {
				light: "#EC802C",
				DEFAULT: "#EC6E0C",
				dark: "#C65C0A",
			},
			secondary: {
				DEFAULT: "#F49E00",
			},
			gray: {
				lightest: "#F5F5F5",
				light: "#5B5B5F",
				DEFAULT: "#3C393C",
				dark: "#1A171B",
			},
			white: {
				DEFAULT: "#FFFFFF",
			},
			red: {
				light: "#D9003C",
				DEFAULT: "#BB0034",
			},
			citrine: {
				DEFAULT: "#F9EDD3",
			},
		},
		fontFamily: {
			sans: ["Oxygen", "sans-serif"],
		},
		spacing: {
			1: "8px",
			2: "12px",
			3: "16px",
			4: "24px",
			5: "32px",
			6: "48px",
		},
		borderRadius: {
			none: "0",
			sm: "2px",
			DEFAULT: "4px",
			lg: "8px",
			full: "9999px",
		},
		opacity: {
			0: "0",
			10: "0.1",
			40: "0.4",
			70: "0.7",
		},
		extend: {
			typography: {
				sm: {
					css: {
						fontSize: "14px",
					},
				},
				DEFAULT: {
					css: {
						fontSize: "16px",
					},
				},
				lg: {
					css: {
						fontSize: "18px",
					},
				},
				"2lg": {
					css: {
						fontSize: "20px",
					},
				},
				xl: {
					css: {
						fontSize: "24px",
					},
				},
				"2xl": {
					css: {
						fontSize: "36px",
					},
				},
				"3xl": {
					css: {
						fontSize: "48px",
					},
				},
				"4xl": {
					css: {
						fontSize: "60px",
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
};
