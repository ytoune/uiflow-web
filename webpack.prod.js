const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: 'production',
	entry: {
		app: path.resolve(__dirname, 'src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
	module: {
		rules: [
			{test: /\.jsx?$/, use: [
				{
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', {
								targets: '> 0.25%, not dead,'
								useBuiltIns: 'entry',
								modules: false,
							}],
							'@babel/plugin-syntax-object-rest-spread',
						],
					},
				}
			]},
			{test: /\.sass$/, use: [
				MiniCssExtractPlugin.loader,
				'css-loader',
				'sass-loader',
			]},
			{test: /\.html$/, use: [
				{loader: 'file-loader', options: {name: '[name].[ext]'}},
				'extract-loader',
				{loader: 'html-loader', options: {minimize: true}},
			]},
		]
	},
	plugins: [
		new MiniCssExtractPlugin({filename: 'style.css'}),
	],
}
