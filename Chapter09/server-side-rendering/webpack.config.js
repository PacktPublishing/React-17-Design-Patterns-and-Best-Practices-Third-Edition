
const nodeExternals = require('webpack-node-externals')
const path = require('path')

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

const rules = [{
  test: /\.(tsx|ts)$/,
  use: 'ts-loader',
  exclude: /node_modules/
}]

const client = {
  mode,
  entry: './src/client.tsx',
  output: {
    path: path.resolve(__dirname, './dist/public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
}

const server = {
  mode,
  entry: './src/server.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
    rules
  },
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
}

module.exports = [client, server]