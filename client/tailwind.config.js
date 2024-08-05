import daisyUIThemes from "daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem", 
        },
        screens: {
            xs: "480px",
            ss: "620px",
            sm: "769px",
            xsm: "850px",
            md: "1061px",
            lg: "1200px",
            'mlg': '1400px',
            xl: "1700px",

        },
        extend: {
            transitionDuration: {
                '3000': '3000ms', 
                '5000': '5000ms',

            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                kanit: ["Kanit", "sans-serif"],
                syncopate: ["Syncopate","sans-serif"],
                playwrite: ["Playwrite AU VIC", "sans-serif"],
                embed:["Nunito", "sans-serif"]
            },
            colors: {
                primary_backup: '#33343E',
                primary: "#040A1F",
                secondary: '#181818',
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        require('daisyui'),
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ],
    daisyui: {
        themes: [
            "light",
            {
                black: {
                    ...daisyUIThemes["black"],
                    primary: "rgb(51, 52, 62)",
                    secondary: "rgb(24, 24, 24)",
                },
            },
        ],
    },
}
