<script>
	export default {

		render(h){
			return (
				<div class="product">
					<div class="product-left">

						<ul class="product-left-ul">
							{
								this.category_list.map((item)=>{
									return <li>
									<router-link tag="a" to={"/product/"+this.$route.params.pid+"/filter/"+item.id}>
									{item.title}
									</router-link></li>
								})
							}
						</ul>
					</div>

					{
						this.$route.params.fid ? null:
							<div class="product-right">
								{
									this.proudct_list.map(( item )=>{
										return <router-link tag="div" to="/themes"><img src={item.path}/></router-link>
									})
								}
							</div>
					}

					<router-view></router-view>
				</div>
			)
		},

		data:function(){
			return {

			}
		},
		computed:{
			proudct_list:function(){
				var a=[]
				for(var i=0;i<=100;i++){
					a.push({
						id:i+1,
						path:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4029196617,2881337927&fm=11&gp=0.jpg",
						price:Math.ceil(Math.random()*100)
					})
				}
				return a
			},
			category_list:function(){
				return this.$store.getters.category_list || [];
			}
		},
		

		mounted:function(){

			this.$store.commit("categorytype",this.$route.params.pid)
		}


	}
</script>

<style scoped>
	
	.product{

		width:100%;
		overflow:hidden;
		position:relative;
		min-height:100%;

	}
	.product-left{
		position:fixed;
		left:0;
		top:0;
		height:100%;
		width:20%;
		background-color:rgba(220,220,220,.3);
		overflow-y:auto;
	}
	.product-left-ul{
		width:100%;

	}
	.product-left-ul>li{
		width:100%;
		min-height:60px;
		display:flex;
		align-items:center;
		justify-content:center;
		border-bottom:1px dashed rgba(200,200,200,.7);

	}
	.product-left-ul>li>a{
		text-decoration:none;
		color:rgba(0,0,0,.8);
	}
	.product-right{
		width:calc( 80% - 10px );
		float:right;
		min-height:100%;
	}
	.product-right>div{

		width:calc( 20% - 10px );
		float:left;
		border:1px solid rgba(120,120,120,.5);
		height:100px;
		margin-bottom:10px;
		margin-right:10px;
		overflow:hidden;
	}
	.product-right>div img{
		max-width:100%;
		height:auto;
	}


</style>