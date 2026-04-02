module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--brand-primary)',
          secondary: 'var(--brand-secondary)',
        }
      },
      borderRadius: {
        'brand': 'var(--button-radius)',
      }
    }
  },
  // We can also bake in standard plugins
  plugins: [
    require('@tailwindcss/typography'),
  ],
}