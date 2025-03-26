module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        primary: '#8bc34a',
        secondary: '#111111',
        body: '#f8f6f3',
        accent: '#6a9739',
        body_neutral: '#153333',
      },
    },
  },
  plugins: [require('daisyui')],
};
