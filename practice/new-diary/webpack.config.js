const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const IntlPlugin = require('intl-webpack-plugin')
const { transform } = require('@babel/core')

module.exports = {
  entry: './app-launcher/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              getCustomTransformers() {
                return {
                  before: [
                    transform({
                      overrideIdFn: '[sha512:contenthash:base64:6]',
                    }),
                  ],
                }
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.(intl|i18n|yml|yaml)$/i, use: [IntlPlugin.loader(), 'intl-loader'] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
