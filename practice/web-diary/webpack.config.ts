import * as path from 'path'

module.exports = {
  mode: 'development',
  entry: './launcher/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.json', '.tsx', '.js'],
  },
}
