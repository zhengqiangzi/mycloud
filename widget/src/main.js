import Vue from 'vue';


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
				var dialogBox = api.require('dialogBox');
				dialogBox.alert({
				    texts: {
				        title: '确认',
				        content: '送你一个超级礼包，内有超值福利，先到先得，点击领取 >>',
				        leftBtnTitle: '取消',
				        rightBtnTitle: '确认'
				    },
				    styles: {
				        bg: '#fff',
				        w: 300,
				        title: {
				            marginT: 20,
				            icon: 'widget://res/gou.png',
				            iconSize: 40,
				            titleSize: 14,
				            titleColor: '#000'
				        },
				        content: {
				            color: '#000',
				            size: 14
				        },
				        left: {
				            marginB: 7,
				            marginL: 20,
				            w: 130,
				            h: 35,
				            corner: 2,
				            bg: '#e0e',
				            size: 12
				        },
				        right: {
				            marginB: 7,
				            marginL: 10,
				            w: 130,
				            h: 35,
				            corner: 2,
				            bg: '#e0e',
				            size: 12
				        }
				    }
				}, function(ret) {
				    if (ret.eventType == 'left') {
				        var dialogBox = api.require('dialogBox');
				        dialogBox.close({
				            dialogName: 'alert'
				        });
				    }
				});



		})
	}

})

