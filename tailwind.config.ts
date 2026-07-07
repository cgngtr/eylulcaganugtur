
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Roboto Condensed', 'system-ui', 'sans-serif'],
				mono: ['Fira Code', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				green: {
					DEFAULT: '#4ADE80',
				},
				purple: {
					light: '#b2a7fb',
					DEFAULT: '#8b5cf6',
					dark: '#7c3aed',
				},
				terminal: {
					bg: {
						dark: 'hsl(var(--terminal-bg-dark))',
						medium: 'hsl(var(--terminal-bg-medium))',
						light: 'hsl(var(--terminal-bg-light))',
					},
					prompt: 'hsl(var(--terminal-prompt))',
					directory: 'hsl(var(--terminal-directory))',
					command: 'hsl(var(--terminal-command))',
					output: 'hsl(var(--terminal-output))',
					muted: 'hsl(var(--terminal-muted))',
					keyword: 'hsl(var(--terminal-keyword))',
					constant: 'hsl(var(--terminal-constant))',
					border: 'hsl(var(--terminal-border))',
					selection: 'hsl(var(--terminal-selection))',
					error: 'hsl(var(--terminal-error))',
					warning: 'hsl(var(--terminal-warning))',
					info: 'hsl(var(--terminal-info))',
					success: 'hsl(var(--terminal-success))',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'cursor-blink': {
					'0%, 50%': { opacity: '1' },
					'51%, 100%': { opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'cursor-blink': 'cursor-blink 1s step-end infinite'
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
