module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
      },
      animation: {
        ripple: 'ripple 2s ease-out infinite',
      },
    },
  },
  plugins: [],
}
