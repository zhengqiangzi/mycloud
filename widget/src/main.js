import Vue from 'vue';

import VueRouter from 'vue-router'
Vue.use(VueRouter)

/*import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);*/

import {route_config} from './router'

var router=new VueRouter({
	routes:route_config
})


new Vue({
	router,
	data:{
	},
}).$mount("#main")


/*window.apiready = function(){
	api.setScreenOrientation({
	    orientation: 'landscape_left'
	});
}
*/