import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Lazyload from "vue-lazyload-img"
Vue.use(Lazyload)
Vue.use(VueAxios, axios)
var vm=new Vue({
 data:{
	 delItem:null,
	 glist:[]
 },
 computed:{
	 list:function(){
		 return this.glist;
	 }
 },
 methods:{
	 clickHandler:function(item){
		 this.delItem=item;
	 },
	 closePp:function(){
			 this.delItem=null
	 }
 },
 mounted:function(){
	 this.$nextTick(()=>{

		 setTimeout(()=>{
				 this.axios.get("./menu.json").then((data)=>{
					 this.glist=data.data
				 })
		 },0)


	 })
 }
})



		window.apiready = function(){

			api.setScreenOrientation({
			    orientation: 'landscape_left'
			});

		}
		vm.$mount("#main")
