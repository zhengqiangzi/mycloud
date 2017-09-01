import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

window.apiready = function(){
	 var vm=new Vue({
	    el: '#main',
		data:{	

			delItem:null,

			glist:(function(){
				var a=[]

				var _list=(function(){

					for(var i=0;i<=100;i++){

						a.push({id:i+1,name:"name"+i})
					}

				})()

				return a;

			})()

		},
		computed:{
			list:function(){

				if(this.delItem) {
					this.glist=this.glist.filter((item)=>{
						return item.id!=this.delItem.id
					})
				}

				
				return this.glist;
				
			}

		},
		methods:{

			clickHandler:function(item){
				this.delItem=item;
			}
		},
		mounted:function(){
			this.$nextTick(()=>{

				this.axios.get("http://vcenter-shop.com/menu.json").then((response) => {
					 alert(response.data)
				})

			
			})
		}
	})

}
    


