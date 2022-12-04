/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "rich-black": "#0A0908",
                'white': '#ffffff',
                "dark-green": "#22333B",
                "light-beige": "#A9927D",
                "dark-beige": "#5E503F",
            },
            fontFamily: {
                "Caveat": "Caveat, sans-serif"
            }
        },
    },
    plugins: [],
}