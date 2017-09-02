import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import {Loading } from 'element-ui'
Vue.use(Loading)
Vue.use(VueAxios, axios)
var vm=new Vue({
 data:{
	 delItem:null,
	 glist:[
	 		{id:1,path:"./image/temp.png"},
	 		{id:2,path:"./image/temp.png"},
	 		{id:3,path:"./image/temp.png"},
	 		{id:4,path:"./image/temp.png"},
	 		{id:5,path:"./image/temp.png"},
	 		{id:6,path:"./image/temp.png"},
	 		{id:7,path:"./image/temp.png"},
	 		{id:8,path:"./image/temp.png"},
	 		{id:9,path:"./image/temp.png"},

	 ]
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

		 var loading=this.$loading();
		 setTimeout(()=>{
			 this.axios.get("./menu.json").then((data)=>{
				this.glist=data.data
				loading.close()
			 })
		 })


	 })
 }
})

window.apiready = function(){
	api.setScreenOrientation({
	    orientation: 'landscape_left'
	});
	vm.$mount("#main")
}
