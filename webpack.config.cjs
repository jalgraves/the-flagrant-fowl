const path = require('path')
const webpack = require('webpack')
const package_json = require('./package.json')

module.exports = env => {
  return {
    plugins: [
      new webpack.DefinePlugin({
        "process.env.ENV": JSON.stringify(process.env.NODE_ENV),
        "process.env.GIT_HASH": JSON.stringify(process.env.GIT_HASH),
        "process.env.VERSION": JSON.stringify(process.env.VERSION),
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      }),
      new webpack.BannerPlugin({
        banner: () => {
          return `Jalgraves version: ${package_json.version}`;
        }
      }),
    ],
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist/public/js'),
    },
    node: {
      global: true,
      __filename: true,
      __dirname: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|cjs)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
};
