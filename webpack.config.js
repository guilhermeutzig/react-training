const { resolve } = require('path');
const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './src/javascripts/app.jsx',
	output: {
		path: __dirname + '/dist/',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		port: 3001,
		contentBase: './dist/',
		historyApiFallback: true
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.scss'],
		modules: [resolve(__dirname, './')],
		alias: {
			javascripts: path.resolve(__dirname, 'src/javascripts'),
			styles: path.resolve(__dirname, 'src/styles'),
			assets: path.resolve(__dirname, 'src/assets')
		}
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react'],
					plugins: ['transform-object-rest-spread']
				}
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: 'file-loader'
			}
		]
	}
};
