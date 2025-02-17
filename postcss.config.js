module.exports = {
  plugins: [
    // 'postcss-remove-dsfr-font-face',
    [
      'cssnano',
      {
        preset: [
          'default',
          {
            discardComments: { removeAll: true },
          },
        ],
      },
    ],
    'postcss-flexbugs-fixes',
    ['postcss-preset-env', {}],
    [
      '@fullhuman/postcss-purgecss',
      {
        css: ['frontend/style/dsfr.min.css'],
        content: [
          './pages/**/*.{js,jsx,ts,tsx}',
          './app/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}',
          './components-ui/**/*.{js,jsx,ts,tsx}',
        ],
        safelist: ['html', 'body', 'anchor-link'],
        fontFace: true,
      },
    ],
  ],
};
