var path = require('path');

module.exports = {
	entry: {
		App: "./app/assets/scripts/app.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	},
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"),		
		//webpack requires an absolute path, not a relative path
		//__dirname creates an absolute path to the current folder on our computer
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,	/*tells webpack to babel-ize only .js files*/
				exclude: /node_modules/
			}
		]
	}
};