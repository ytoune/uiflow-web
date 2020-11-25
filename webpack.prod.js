const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
			{
				test: /\.jsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							plugins: ['@babel/plugin-syntax-object-rest-spread'],
							presets: [
								[
									'@babel/preset-env',
									{
										targets: '> 0.25%, not dead',
										useBuiltIns: 'entry',
										modules: false,
										corejs: 3,
									},
								],
							],
						},
					},
				],
			},
			{
				test: /\.sass$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
							sassOptions: {
								fiber: require('fibers'),
							},
						},
					},
				],
			},
		],
	},
	node: false,
	resolve: {
		alias: {
			'spawn-stream': 'node-libs-browser/mock/empty',
		},
		fallback: {
			fs: 'node-libs-browser/mock/empty',
			child_process: 'node-libs-browser/mock/empty',
			stream: require.resolve('stream-browserify'),
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src/index.html'),
		}),
		new MiniCssExtractPlugin({ filename: 'style.css' }),
	],
}
