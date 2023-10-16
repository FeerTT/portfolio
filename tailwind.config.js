 /** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/imagenes/backimg.jpg')",
      },
      backgroundRepeat: {
        'no-repeat': 'no-repeat',
      },
      backgroundSize: {
        'cover': 'cover',
      },
    },
  },
  plugins: [],
};
