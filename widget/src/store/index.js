import Vue from 'vue'
import Vuex from 'vuex'
import findIndex from 'lodash/findIndex';

Vue.use(Vuex)


let store=new Vuex.Store({

	state:{
		categroy_origin_source:null,
		category_type:null,
		filter_id:null,
		filter_list:new Set([]),
		fav_list:[],
		product_list:[
						{	id:1,
							path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3198575405,2185682170&fm=27&gp=0.jpg",
							description:"this is a test for me",
							from:"china",
							size:"100 x 200 (cm)",
							price:100.21
						},
						{
							id:2,
							path:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1000933127,2103670909&fm=27&gp=0.jpg",
							description:"this is a test for me2",
							from:"china",
							size:"102 x 300 (cm)",
							price:130.21

					},
						{
							id:3,
							path:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2677656148,2062240084&fm=27&gp=0.jpg",
							description:"this is a test for me3",
							from:"japan",
							size:"300 x 200 (cm)",
							price:600.21
						},
						{
							id:4,
							path:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4245808288,1512216040&fm=27&gp=0.jpg",
							description:"this is a test for me4",
							from:"china",
							size:"103 x 210 (cm)",
							price:20.21
						},
						{
							id:5,
							path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3322654560,564977921&fm=27&gp=0.jpg",
							description:"this is a test for me5",
							from:"china",
							size:"1700 x 2020 (cm)",
							price:300.21
						},
						{
							id:6,
							path:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1489986495,3573925209&fm=27&gp=0.jpg",
							description:"this is a test for me6",
							from:"china",
							size:"1020 x 2020 (cm)",
							price:130.21
						},
						{
							id:7,
							path:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3903427179,3197162369&fm=27&gp=0.jpg",
							description:"this is a test for me7",
							from:"china",
							size:"1002 x 2020 (cm)",
							price:1030.21
						}
					],
		tid:null
	},
	getters:{
		//获取分类信息。用于首页
		category:(state)=>{
			var p=[]
			for(var prop in state.categroy_origin_source){

				p.push(state.categroy_origin_source[prop].info)
			}
			return p;
		},
		category_list:(state)=>{
			let g;
			for(var prop in state.categroy_origin_source){
				if(state.categroy_origin_source[prop].info.id==state.category_type){
					g=state.categroy_origin_source[prop].filter_list
				}
			}
			return g
		},

		filter_list_by_category:(state)=>{
			var _index =  findIndex(store.getters.category_list,{id:parseInt(state.filter_id)});
			return _index < 0 ? [] : store.getters.category_list[_index].child || [{title:store.getters.category_list[_index].title,id:store.getters.category_list[_index].id}]
		},

		get_filter_list:(state)=>{

			return state.filter_list

		},
		get_product_list:(state)=>{
			return state.product_list
		},
		get_one_product:(state)=>{

			var g= state.product_list.filter((item)=>{

				return item.id == state.tid

			})

			return g[0] || null

		},
		fav:(state)=>{
			return state.fav_list || []
		}
	},
	mutations:{

		init_category_data:(state,_data)=>{

			state.categroy_origin_source=_data

		},
		categorytype:(state,_data)=>{

			state.category_type=_data
		},
		filter_id:(state,_data)=>{

			state.filter_id=_data
		},
		addFilter:(state,_data)=>{
			state.filter_list.add(_data)
		},
		make_product:(state,_data)=>{
			state.product_list=_data
		},
		themes_product:(state,_data)=>{

			state.tid=_data

		},

		addFav:(state,_data)=>{

			state.fav_list.push(_data)

		}



	}
})

export default store;