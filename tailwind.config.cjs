/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"rc-black": "#0a0a0a",
				"rc-dark": "#111111",
				"rc-darker": "#0d0d0d",
				"rc-white": "#ffffff",
				"rc-gray": "#1a1a1a",
				"rc-light-gray": "#2a2a2a",
				"rc-sea-green": "#089ca6",
				"rc-sea-green-dark": "#067a82",
				"rc-sea-green-light": "#2bb3bd",
				"rc-accent": "#089ca6",
				"rc-text": "#e5e5e5",
				"rc-text-secondary": "#a0a0a0",
			},
			fontFamily: {
				'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
				'sans': ['Inter', 'system-ui', 'sans-serif'],
			},
			animation: {
				'glow': 'glow 2s ease-in-out infinite alternate',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'gradient': 'gradient 8s linear infinite',
			},
			keyframes: {
				glow: {
					'0%': { boxShadow: '0 0 0px #089ca6, 0 0 0px #089ca6, 0 0 0px #089ca6' },
					'50%': { boxShadow: '0 0 4px #089ca6, 0 0 8px #089ca6, 0 0 12px #089ca6' },
					'100%': { boxShadow: '0 0 0px #089ca6, 0 0 0px #089ca6, 0 0 0px #089ca6' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				gradient: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			}
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
