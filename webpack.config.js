const path = require('path');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),

    new WebpackPwaManifest({
      name: 'Gevolg Market',
      short_name: 'Gevolg Market',
      description: 'Aplicativo para ornaizar e gerenciar de listas de compras.',
      background_color: '#9B7BFF',
      theme_color: '#9B7BFF',
      start_url: '/',
      icons: [
        {
          src: path.resolve('./src/assets/favicon-gevolg.svg'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('assets'),
        },
      ],
    }),
  ],
};
