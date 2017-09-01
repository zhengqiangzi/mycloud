module.exports={

	entry:"./widget/src/main.js",
	output:{
		path:"./widget/script",
		filename:"[name].js"
	},
	resolve: {
	alias: {
		'vue$': 'vue/dist/vue.common.js'
	},
	// "root": __dirname,
	// extensions: ['', '.js', '.css', '.scss', '.hbs'],
	extensions: [".ts", ".tsx", ".js", ".json",".vue"],
	modules: ['.', 'node_modules']
		// 模块查找路径设置

	},

}