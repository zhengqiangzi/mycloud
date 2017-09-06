<script>
	export default {

		render(h){

			return (

				<div class="product">
					
					<div class="product-left">
						<ul class="product-left-ul">
							
							{
								this.category_list.map((item)=>{

									return <li>{item.title}</li>

								})
							}
						
						</ul>
					</div>


					<div class="product-right">
						
						{
							this.proudct_list.map(( item )=>{

								return <div><img src={item.path}/></div>

							})
						}
					</div>


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

					a.push({id:i+1,path:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4029196617,2881337927&fm=11&gp=0.jpg"})
				}
				return a
			},
			category_list:function(){

				var pid = this.$route.params.pid||0
				var p=[]
				for(var i=0;i<=10;i++){

					p.push({id:i+1,title:pid+"分类"+i})

				}
				return p;

			}
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