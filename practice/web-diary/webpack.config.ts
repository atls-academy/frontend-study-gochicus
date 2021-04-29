import * as path from 'path'
import webpack   from 'webpack'

export const target = 'node'
export const mode = 'development'
export const entry = './app/index.tsx'
export const output = {
  path: path.resolve(__dirname, 'public/dist'),
}
export const plugins = [new webpack.HotModuleReplacementPlugin({})]
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
  contentBase: path.join(__dirname, 'public'),
  compress: true,
  port: 9000,
  hot: true,
}
