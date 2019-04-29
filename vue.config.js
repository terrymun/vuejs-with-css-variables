const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~@/styles/_variables.scss";
          @import "~@/styles/_mixins.scss";
        `,
      },
    },
  },
  chainWebpack: (config) => {
    // Configure default SVG loader to ignore icons, as they'll be handled by vue-svg-loader
    config.module
      .rule('svg')
      .exclude
        .add(path.resolve(__dirname, 'src/assets/icons'));

    // Create new loader for SVG icons that uses vue-svg-loader
    config.module
      .rule('svgIcon')
      .test(/\.svg$/)
      .include
        .add(path.resolve(__dirname, 'src/assets/icons'))
        .end()
      .use('vue-svg-loader')
        .loader('vue-svg-loader')
        .options({
          svgo: {
            plugins: [
              {
                removeDimensions: true
              },
              {
                removeViewBox: false
              },
            ],
          },
        })
        .end();
  },
};
