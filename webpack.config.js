var webpack = require('webpack')
// importing plugins that do not come by default in webpack
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports={

	entry:"./widget/src/main.js",
	output:{
		path:"./widget/script",
		filename:"[name].js"
	},
	resolve: {

		alias: {
			'vue$': 'vue/dist/vue.min.js'
		},
		// "root": __dirname,
		// extensions: ['', '.js', '.css', '.scss', '.hbs'],
		extensions: [".js",".vue"],
		// 模块查找路径设置
		modules: ['.', 'node_modules'],
	},
	plugins:[
		new ExtractTextPlugin({
    		allChunks: true,
			filename:"build.css"
		}),
	
		 new webpack.DefinePlugin({
		      'process.env': {
		        NODE_ENV: JSON.stringify('develop')
		      }
		 })

	],
	module: {
			rules: [
					{
						test:/\.js$/,
						use:[{loader:"babel-loader"}],
					},
					{
						test:/\.json$/,
						use:[{loader:"json-loader"}],
					},
					{
						test: /\.vue$/,
						use:[{loader:'babel-loader'},{loader:'vue-loader'}]
					}, 
					{
						test:/\.css$/,
						use:ExtractTextPlugin.extract({loader:"css-loader"})
					},
					{
						test: /\.scss\??.*$/i,
						use:[{loader:"sass-loader"}]
					},
					{
				        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
				        loader: 'file-loader'
					},
					{
				        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
				        loader: 'file-loader',
				        query: {
				          name: '[name].[ext]?[hash]'}
					}
				]
		}
}