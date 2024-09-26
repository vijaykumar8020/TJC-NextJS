module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = false;
    }
    return config;
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      margin: {
        'custom-m': '5rem',
      },
      padding: {
        'custom-p': '10rem',
      },
      colors: {
        primary: '#1E40AF',
        secondary: '#1C7C54',
      },
    },
  },
  plugins: [],
};
