<script>
	import {Button} from 'element-ui'	

	export default {
		render(h){
			return (
				<div class="filter-cover">
					<div  class="filter-cover-content">
						{
							this.c_list.map( ( item ) =>{
								return <a href='javascript:void(0)' on-click={()=>{this.addFilter(item)}}>{item.title}</a>
							})
						}
						{
							this.c_list.length>0 ?
								<div class="search-btn">
									<el-button type="primary" size="large" on-click={()=>{this.submitHandler()}}>确定</el-button>
		  							<el-button type="warning"  size="large" on-click={()=>{this.cancelHandler()}}>取消</el-button>
								</div>
								:
								null
						}
					</div>
				</div>
			)
		},
		components:{
			[Button.name]:Button
		},
		computed:{
			//二级搜索条件的列表
			c_list:function(){	
				return this.$store.getters.filter_list_by_category;
			}
		},
		methods:{
			addFilter:function(_data){

				this.$store.commit("addFilter",_data.id)
			},
			cancelHandler:function(){
				this.$router.back()
			},
			submitHandler:function(){

				console.log([...this.$store.getters.get_filter_list])

				this.$store.commit("make_product",[
						{id:1,path:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=293359303,167993115&fm=11&gp=0.jpg"},
						{id:2,path:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=144410064,1954803999&fm=27&gp=0.jpg"},
						{id:3,path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3026679141,282136880&fm=200&gp=0.jpg"},
						{id:4,path:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4225776959,1178945115&fm=11&gp=0.jpg"},
						{id:5,path:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3702743486,3953807423&fm=27&gp=0.jpg"},
						{id:6,path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1179180918,539178473&fm=27&gp=0.jpg"},
						{id:7,path:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2942684293,1896168300&fm=27&gp=0.jpg"},
					])

				this.$router.push({ name: 'product', params: { pid: this.$route.params.pid }})

				//
				//this.$router.back()


			}
		},
		mounted:function(){
			this.$store.commit("filter_id",this.$route.params.fid);
			//document.body.style.overflow="hidden";
		},
		watch:{
			$route:function(){
				this.$store.commit("filter_id",this.$route.params.fid);
			}
		}
	}


</script>

<style scoped>
	.filter-cover{

		position:fixed;
		width:80%;
		height:200px;
		background-color:#fff;
		right:0px;
		height:100%;
		padding-top:10px;
		overflow-y:auto;
	}
	.filter-cover-content{
		width:98%;
		margin:auto;
	}
	.filter-cover a{
		text-decoration:none;
		color:#000;
		border:1px solid rgba(0,0,0,.5);
		height:120px;
		display:inline-flex;
		align-items:center;
		justify-content:center;
		width:calc( 20% - 5px );
		margin-bottom:10px;
		margin-right:5px;
		text-align:center;
	}

	.search-btn{
		width:100%;
		margin-top:10px;
	}

	

</style>