import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)
require("./sass/index.css")

/*import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);*/
import {route_config} from './router'
import categroy_data from './mock_data/filter.json';

import store from './store'

import Menu from "./components/menu";


var router=new VueRouter({

	routes:route_config
})


new Vue({
	router,
	store,
	data:{
	},
	mounted:function(){

		this.$store.commit("init_category_data",categroy_data)

	},
	components:{

		"oy-menu":Menu
	}
}).$mount("#main")


/*window.apiready = function(){
	api.setScreenOrientation({
	    orientation: 'landscape_left'
	});
}
*/