const path = require('node:path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.tsx'
  },
  module: {
    rules: [
      // parse ts
      {
        test: /\.(jsx|tsx)$/,
        use: 'ts-loader',
        exclude: /(node_modules|tests)/
      },
      // parse css
      {
        test: /\.css$/i,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'postcss-loader'}
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'css'],
    // alias:
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 6324,
    hot: true
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
