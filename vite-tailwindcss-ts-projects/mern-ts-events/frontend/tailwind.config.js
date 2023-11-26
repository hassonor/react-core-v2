module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                title: ['"Pacifico"', 'cursive'],
            },
            keyframes: {
                rotate3d: {
                    '0%': {
                        transform: 'rotate3d(1, 1, 1, 0deg)',
                    },
                    '100%': {
                        transform: 'rotate3d(1, 1, 1, 360deg)',
                    },
                },
                blowUpModal: {
                    '0%': { transform: 'scale(0)' },
                    '100%': { transform: 'scale(1)' },
                },
                blowUpModalOut: {
                    '0%': { transform: 'scale(1)', opacity: 1 },
                    '100%': { transform: 'scale(0)', opacity: 0 },
                },
            },
            animation: {
                blowUpIn: 'blowUpModal 0.2s ease-out forwards',
                blowUpOut: 'blowUpModalOut 0.2s ease-out forwards',
                rotate3d: 'rotate3d 5s linear infinite',
            },
        },
    },
    plugins: [],
}
