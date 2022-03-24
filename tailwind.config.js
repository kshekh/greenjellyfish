const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
module.exports = {

    content: [

        'src/*.{html,js,jsx}',
        'src/**/*.{html,js,jsx}',

    ],

    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Fieldwork Geo"', ...defaultTheme.fontFamily.sans],
                'fieldwork-hum': ['"fieldwork-hum"', ...defaultTheme.fontFamily.sans],
                roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans]
            },

            colors: {

                // Primary
                green: {
                    DEFAULT: '#34c636',
                    '1': '#33c435', // hero seection
                    '2': '#1eb931',
                },
                // Secondary
                navy: {
                    DEFAULT: '#182ebb',
                    '1': '#1c34cf', //button hover
                    '2': '#111a45', //text headings
                    '3': '#0f219c', // making claim BG

                },
                // Tertiary
                blue: {
                    DEFAULT: '#0f8af9',
                    '1': '#0a7ee6', //button hover
                    '2': '#0090ff',
                },

                orange: {
                    DEFAULT: '#ff9600',
                    '1': '#fd991b',
                },
                red: {
                    DEFAULT: '#ff3333',
                },
                purple: {
                    DEFAULT: '#ab25d4',
                },
                gray: {
                    DEFAULT: '#70788f',
                    '1': '#252525', // Footer bg color
                },


            },


            spacing: {
                '15': '3.75rem',
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '30': '7.5rem',
                '34': '8.5rem',
                '38': '9.5rem',
                '42': '10.5rem',
                '46': '11.5rem',
                '50': '12.5rem',
                '54': '13.5rem',
                '58': '14.5rem',
                '62': '15.5rem',
                '66': '16.5rem',
                '70': '17.5rem',
                '74': '18.5rem',
                '78': '19.5rem',
                '82': '20.5rem',
                '86': '21.5rem',
                '90': '22.5rem',
                '94': '23.5rem',
                '98': '24.5rem',
                '102': '25.5rem',
                '106': '26.5rem',
                '110': '27.5rem',
                'xs': '28rem',
                'sm': '32rem',
                'md': '36rem',
                'ml': '40rem',
                'mxg': '44rem',
                'mlg': '48rem',
                'lg': '52rem',
                'xl': '60rem',
                '2xl': '72rem',
                '3xl': '80rem',
                '4xl': '96rem',
            },

            minWidth: (theme) => ({
                ...theme('spacing'),
            }),

            minHeight: (theme) => ({
                ...theme('spacing'),
            }),


            boxShadow: {
                '1': '0 0 25px rgb(0 0 0 / 0.07)', // Slider Arrows
                '2': '0 11px 25px rgb(0 0 0 / 0.07)', // Get in Touch
                '3': '0 3px 7px rgb(0 0 0 / 0.03)', // navigation selected
                '4': '0 11px 22px rgb(0 0 0 / 0.07)', // navigation dropdown
                '5': '0 5px 11px rgb(0 0 0 / 0.11)', // slider buttons 
            },

            backgroundImage:{
                'gradiant-1':'linear-gradient(to right, #34c636 0%,#0f8af9 100%)',
            },


            borderWidth: {
                '3': '3px',
                '5': '5px',
                '6': '6px',
                '7': '7px',
                '8': '8px',
            },
            fontSize: {
                mi: '.65rem',
                md: '.9375rem',
                '2.5xl': '1.75rem',
                '3.5xl': '2rem',
                '4.5xl': '2.5rem',
                '5.5xl': '3.5rem',
                '6.5xl': ['4rem', '1.10'],
                '7.5xl': '5rem',
            },


        },





        screens: {
            'mv': '360px',
            // => @media (min-width: 480px) { ... }

            'xs': '480px',
            // => @media (min-width: 480px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'ml': '992px', // Medium Large
            // => @media (min-width: 992px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'sl': '1199px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }    

            '3xl': '1920px',
            // => @media (min-width: 1920px) { ... }    

            'wrap': '1350px',
            // => @media (min-width: 1350px) { ... }  

        },
    },

    variants: {
        extend: {},
    },
    plugins: [
        plugin(function ({ addBase, components, theme }) {
            addBase({})
        }),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
    ],
}