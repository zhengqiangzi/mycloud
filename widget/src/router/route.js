import Home from "../page/home.vue"
import Product from "../page/product.vue"
import Themes from "../page/themes.vue"
import Filter from "../components/filter"

export let route=[
	{ path:"/",redirect:"/home" },
	{ path:"/home",component:Home },
	{ path:"/themes",component:Themes },
	{ path:"/product/:pid",component:Product,
	  children:[

	  		{path:"filter/:fid",component:Filter}

	  ]
	},
	{ path:"*",redirect:"/home" }

]

