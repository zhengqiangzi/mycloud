import Vue from 'vue';


var vm=new Vue({
    el: '#main',
	data:{	



	},
	computed:{
		list:function(){
			var a=[]
			var _list=(function(){
				for(var i=0;i<=100;i++){
					a.push({id:i+1,name:"name"+i})
				}
			})()
			return a;
		}

	}

})

