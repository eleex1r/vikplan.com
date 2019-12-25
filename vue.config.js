const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return;

    config.plugin('html').tap(args => {
      args[0].minify.collapseWhitespace = false;
      return args;
    });
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return;

    return {
      plugins: [
        new PrerenderSpaPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          [
            '/',
            '/equip',
            '/research',
            '/research/economy',
            '/research/warfare',
            '/research/spy',
            '/research/training',
            '/research/invaders',
            '/research/hero',
            '/research/tier5',
            '/research/tier6',
            '/research/tier7',
            '/research/shaman',
            '/help/research',
            '/buildings'
          ],
          {
            postProcess(renderedRoute) {
              renderedRoute.html = renderedRoute.html.replace(
                /'page_path': '\/'/g,
                "'page_path': '" + renderedRoute.route + "'"
              );
              //     .replace(/<script (.*?)>/g, '<script $1 defer>')
              //     .replace('id="app"', 'id="app" data-server-rendered="true"');

              return renderedRoute;
            },
            renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
              maxConcurrentRoutes: 2
              //renderAfterTime: 5000,
              //devtools: true,
              //headless: false
            })
          }
        )
      ]
    };
  }
};
