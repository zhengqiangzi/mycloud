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
	module: {

		rules: [
				{
					test:/\.js$/,
					use:[
						{loader:"babel-loader"},

					],
				},
				{
					test:/\.json$/,
					use:[
						{loader:"json-loader"},

					],
				},
				{
					test: /\.vue$/,
					use:[
						{loader:'babel-loader'},
						{loader:'vue-loader'},
					]
				}, 
				{
					test: /\.(s?css)\??.*$/i,
					use:[{loader:"sass-loader"}]
				}
			]
	}	
}