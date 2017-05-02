import webpack from 'webpack';
import path from 'path';

export default {
  context: path.join(__dirname, '/source/assets/scripts'),
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, '.dev/assets/scripts'),
    filename: 'evolution-ui.js'
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?presets[]=es2015']
      }
    ]
  }
};
