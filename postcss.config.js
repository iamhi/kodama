export default {
  plugins: {
    'postcss-nesting': {},
    'postcss-preset-env': { stage: 2 },
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};
