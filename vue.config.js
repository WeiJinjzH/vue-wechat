const path = require('path')

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,

  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('@assets', path.resolve(__dirname, 'src/assets'))
      .set('@components', path.resolve(__dirname, 'src/components'))

    // 图片处理
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }))
    
    config.module
        .rule('fonts')
        .test(/\.(woff|woff2|eot|ttf|otf|svg)$/)
        .use('url-loader')
        .loader('url-loader')
        .tap(options => Object.assign(options, { limit: 10240, name: 'fonts/[name].[hash:8].[ext]' }))
    },
}
