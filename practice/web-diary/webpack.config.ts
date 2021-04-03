import * as path from 'path'

export const target = 'node'
export const mode = 'development'
export const entry = './app/index.tsx'
export const output = {
  path: path.resolve(__dirname, 'dist'),
}
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
  ],
}
export const resolve = {
  extensions: ['.ts', '.json', '.tsx', '.js'],
}
