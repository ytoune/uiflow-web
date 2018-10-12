const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: 'production',
	entry: {
		app: ['@babel/polyfill', path.resolve(__dirname, 'src/index.js')],
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
						plugins: [
							'@babel/plugin-syntax-object-rest-spread',
						],
						presets: [
							['@babel/preset-env', {
								targets: '> 0.25%, not dead',
								useBuiltIns: 'entry',
								modules: false,
							}],
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
		],
	},
	node: {
		fs: 'empty',
		child_process: 'empty',
	},
	resolve: {
		alias: {
			'spawn-stream': 'node-libs-browser/mock/empty',
		},
	},
	plugins: [
		new MiniCssExtractPlugin({filename: 'style.css'}),
	],
}
