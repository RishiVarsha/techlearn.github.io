/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ["./public/**/*.html"],
    content: ["*"],
    theme: {
        extend: {
            animation: {
                border: 'border 4s ease infinite',
            },
            keyframes: {
                border: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                background: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
        },
    },
    plugins: [],
}
