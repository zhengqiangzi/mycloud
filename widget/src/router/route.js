import Home from "../page/home.vue"
import Product from "../page/product.vue"
import Search from "../page/search.vue"

console.log(Home)
export let route=[
	{ path:"/",redirect:"/home" },
	{ path:"/home",component:Home },
	{ path:"/search",component:Search },
	{ path:"/product/:pid",component:Product },

]

