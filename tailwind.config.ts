import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontSize: {
			hero: ['58px', {
				fontWeight: 'bold',
				lineHeight: '70px',
			}],
			h1: ['48px', {
				fontWeight: 'bold',
				lineHeight: '1.5',
			}],
			subhead: ['32px', {
				fontWeight: '400',
				lineHeight: '1.5',
			}],

			xxxs: ['6px', '1.5'],
			xxs: ['8px', '1.5'],
			xs: ['12px', '1.5'],
			sm: ['14px', '1.5'],
			default: ['16px', '1.5'],
			lg: ['20px', '1.5'],
			xl: ['24px', '1.5'],
			xxl: ['32px', '1.5'],
			xxxl: ['40px', '1.5'],
			xxxxl: ['48px', '1.5'],
		},
		spacing: {
			0: '0',
			0.5: '2px',
			1: '4px',
			1.5: '6px',
			2: '8px',
			2.5: '10px',
			3: '12px',
			3.5: '14px',
			4: '16px',
			5: '20px',
			6: '24px',
			7: '28px',
			8: '32px',
			9: '36px',
			10: '40px',
			11: '44px',
			12: '48px',
			14: '56px',
			15: '60px',
			16: '64px',
			20: '80px',
			24: '96px',
			28: '112px',
			32: '128px',
			36: '144px',
			40: '160px',
			44: '176px',
			48: '192px',
		},
		extend: {
			lineHeight: {
				default: '150%',
			},
			colors: {
				background: "var(--color-background)",
				content: "var(--color-content)",
				nav: "var(--color-text-nav)",
				heading: "var(--color-solid-heading)",
				green: "var(--color-green)",
				success: "var(--color-success)",
				primary1: "var(--color-primary-1)",
				primary2: "var(--color-primary-2)",
			},
		},
	},
	plugins: [],
};
export default config;
