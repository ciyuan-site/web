const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    common: './app/assets/common/index.jsx',
    index: './app/assets/index/index.jsx',
  },
  output: {
    path: __dirname + '/app/public',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: ['babel-loader', 'migi-loader'],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.less$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                autoprefixer(),
              ]
            }
          },
          'less-loader'
        ],
      },
      {
        test: /(\.jpg)|(\.jpeg)|(\.gif)|(\.png)|(\.ico)|(\.webp)$/,
        loader: 'url-loader?limit=1024&name=[hash].[ext]'
      },
      {
        test: /\.(html?)|(\.mp\d)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};