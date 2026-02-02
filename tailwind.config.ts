import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/content/**/*.{ts,tsx}", "./src/styles/**/*.{ts,tsx}"],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
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
  			ink: {
  				'100': '#e4edf7',
  				'200': '#c4d2e6',
  				'300': '#9bb2cf',
  				'400': '#6f8cb3',
  				'500': '#4a6386',
  				'600': '#33455f',
  				'700': '#253245',
  				'800': '#18212e',
  				'900': '#101720',
  				'950': '#0b0f14'
  			},
  			sand: {
  				'50': '#f8f5f0',
  				'100': '#efe7dc',
  				'200': '#e5d6c2',
  				'300': '#d8bf9b',
  				'400': '#c8a475',
  				'500': '#b08956'
  			},
  			ember: {
  				'500': '#e0662b',
  				'600': '#c5521d',
  				'700': '#a04316'
  			},
  			jade: {
  				'500': '#1f8a70',
  				'600': '#18735e'
  			}
  		},
  		fontFamily: {
  			display: ["Outfit", "sans-serif"],
  			body: ["Sora", "sans-serif"]
  		},
  		boxShadow: {
  			glow: '0 0 0 1px rgba(255,255,255,0.08), 0 18px 40px rgba(11,15,20,0.2)'
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
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
