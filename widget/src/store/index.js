import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash';

Vue.use(Vuex)


let store=new Vuex.Store({

	state:{
		categroy_origin_source:null,
		category_type:null,
		filter_id:null,
		filter_list:new Set([]),
		product_list:[]
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
			var _index =  _.findIndex(store.getters.category_list,{id:parseInt(state.filter_id)});
			return _index < 0 ? [] : store.getters.category_list[_index].child || [{title:store.getters.category_list[_index].title,id:store.getters.category_list[_index].id}]
		},

		get_filter_list:(state)=>{

			return state.filter_list

		},
		get_product_list:(state)=>{
			return state.product_list
		},
		get_one_product:(state)=>{


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

			//console.log(state.filter_list)
		

		},
		make_product:(state,_data)=>{

			state.product_list=_data

		}



	}
})

export default store;