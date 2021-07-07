const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshTypeScript = require('react-refresh-typescript')

const isDevelopment = process.env.NODE_ENV !== 'production'

const resolve = path.resolve.bind(__dirname)

const PATH = {
	root: resolve('./'),
	components: resolve('./src/components'),
	dist: resolve('./dist'),
	i18n: resolve('./src/i18n'),
	lib: resolve('./src/lib'),
	nodeModules: resolve('./node_modules'),
	public: resolve('./public'),
	src: resolve('./src'),
	utilities: resolve('./src/lib/utilities'),
}

const tsConfig = {
  test: /\.tsx?$/,
  include: PATH.src,
  exclude: PATH.nodeModules,
  use: [
    isDevelopment && {
      loader: require.resolve('babel-loader'),
      options: { 
        plugins: [
          isDevelopment && require.resolve('react-refresh/babel'),
        ] },
    },
    {
      loader: require.resolve('ts-loader'),
      options: {
        getCustomTransformers: () => ({
          before: isDevelopment ? [ReactRefreshTypeScript()] : [],
        }),
      },
    }
  ].filter(Boolean),
}

const htmlConfig = {
	test: /\.html$/,
	use: [
		{
			loader: 'html-loader',
			options: {
				minimize: true
			}
		}
	]
}

const cssConfig = {
  test: /\.css$/i,
	use: [
    'style-loader',
    'css-loader',
    'postcss-loader',
	]
}

const minifyConfig = {
  removeComments: true,
  collapseWhitespace: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeStyleLinkTypeAttributes: true,
  keepClosingSlash: true,
  minifyJS: true,
  minifyCSS: true,
  minifyURLs: true
}

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: ['./src/index.tsx'],
  output: {
    path: PATH.dist,
    filename: isDevelopment ? '[name].js' : '[name].[chunkhash].bundle.js',
    sourceMapFilename: isDevelopment ? '[name].bundle.map' : '[name].[chunkhash].bundle.map',
    chunkFilename: isDevelopment ? '[name].chunk.js' : '[name].[chunkhash].chunk.js',
    publicPath: '/'
  },
  module: {
    rules: [tsConfig, htmlConfig, cssConfig],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './public/index.html',
      inject: true,
      ...(isDevelopment ? {} : { minify: minifyConfig })
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(isDevelopment ? 'development' : 'production')
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/',
          to: 'public/'
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    }),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin()
  ].filter(Boolean),
  cache: true,
  bail: false,
  devtool: isDevelopment ? 'eval-source-map' : false,
  devServer: {
    hot: true,
    noInfo: false,
    contentBase: './dist',
    historyApiFallback: true
  },
  target: 'web',
  stats: 'errors-only',
  performance: {
    hints: false
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': PATH.root,
      '@components': PATH.components,
      '@i18n': PATH.i18n,
      '@lib': PATH.lib,
      '@public': PATH.public,
      '@src': PATH.src,
      '@utilities': PATH.utilities,
      },
    modules: ['src', 'node_modules']
  },
}