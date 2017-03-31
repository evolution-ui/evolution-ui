const webpack = require('webpack')
const path = require('path')

module.exports = env => {

  const rules = [
    {
      test: /\.js$/,
      exclude: [/node_modules/],
      use: {
        loader: 'babel-loader',
        options: {presets: ['es2015']}
      }
    }
  ]

  const plugins = [
    new webpack.NamedModulesPlugin(),
    env.prod ? new webpack.optimize.UglifyJsPlugin() : undefined
  ].filter(p => !!p)

  const outputPath = env.prod ? './dist' : './public'

  return {
    context: path.resolve(__dirname, './assets'),
    devtool: env.prod ? false : 'cheap-module-eval-source-map',
    entry: {
      app: './scripts/app.js'
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js',
    },
    module: {
      rules: rules
    },
    plugins: plugins
  }
}

