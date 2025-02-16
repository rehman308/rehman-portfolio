module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            screens: {
                sm: "250px",
                // => @media (min-width: 640px) { ... }

                md: "768px",
                // => @media (min-width: 768px) { ... }

                lg: "1024px",
                // => @media (min-width: 1024px) { ... }

                xl: "1280px",
                // => @media (min-width: 1280px) { ... }

                "2xl": "1536px",
                // => @media (min-width: 1536px) { ... }
            },
            backgroundImage: {
                "hero-pattern": `url(/herobg.png)`,
            },
            animation: {
                "bounce-low": "bounce-low 1s infinite",
                "bounce-high": "bounce-high 1s infinite",
                "heartBeat": 'heartBeat 1s infinite',
                "jello": 'jello 1s infinite',
            },
            keyframes: {
                "bounce-low": {
                    "0%, 100%": {
                        transform: "translateY(-15px)",
                        animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
                    },
                    "50%": {
                        transform: "translateY(0)",
                        animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
                    },
                },
                "bounce-high": {
                    "0%, 100%": {
                        transform: "translateY(-30px)",
                        animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
                    },
                    "50%": {
                        transform: "translateY(0)",
                        animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
                    },
                },                
                heartBeat: {
                    '0%': {transform: 'scale(1);'},
                    '14%': {transform: 'scale(1.2);'},
                    '28%': {transform: 'scale(1);'},
                    '42%': {transform: 'scale(1.2);'},
                    '70%': {transform: 'scale(1);'},
                },
                jello: {
                    'from, 11.1%,to': {
                        transform: 'translate3d(0, 0, 0)',
                    },

                    '44.4%': {
                        transform: 'skewX(-3.125deg) skewY(-3.125deg)',
                    },

                    '55.5%': {
                        transform: 'skewX(1.5625deg) skewY(1.5625deg)',
                    },

                    '66.6%': {
                        transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
                    },

                    '77.7%': {
                        transform: 'skewX(0.390625deg) skewY(0.390625deg)',
                    },

                    '88.8%': {
                        transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
                    },
                },
            },
        },
    },
    plugins: [],
};