import HTMLWebpackPlugin from 'html-webpack-plugin'
import template          from 'html-webpack-template'
import path              from 'path'

export const target = 'node'
export const mode = 'development'
export const entry = './app/index.tsx'
export const output = {
  path: `${__dirname}/dist`,
}
export const plugins = [
  new HTMLWebpackPlugin({
    inject: false,
    template,
    appMountId: 'root',
    devServer: 'http://localhost:9000',
    title: 'My diary',
    scripts: ['main.js'],
  }),
]

export const module = {
  rules: [
    {
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
      },
    },
    {
      test: /\.(png|jp(e*)g|svg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'images/[hash]-[name].[ext]',
          },
        },
      ],
    },
  ],
}
export const resolve = {
  extensions: ['.ts', '.json', '.tsx', '.js'],
}
export const devServer = {
  contentBase: path.join(__dirname, 'dist'),
  compress: true,
  port: 9000,
  open: true,
}
