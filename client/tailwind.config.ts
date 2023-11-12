import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                ...defaultTheme.colors,
                primary: {
                    dark: '#071514',
                    DEFAULT: '#071514',
                },
                label: {
                    dark: '#e6effd',
                    DEFAULT: '#ffffff',
                },
            },
        },
    },
    plugins: [],
};
export default config;
