/*							description:"this is a test for me",
							from:"china",
							size:"100 x 200 (cm)",
							price:100.21*/
<script>
	import {Button} from 'element-ui';

	export default {

		render(h){

			return (<div class="themes">
					{
						this.product ? 

						<div class="main-product">
								<div class="img-shower"><img src={this.product.path} /></div>
								<ul  class="product-pro-list">
									
									<li><label>描述：</label><span>{this.product.description}</span></li>
									<li><label>产地：</label><span>{this.product.from}</span></li>
									<li><label>尺寸：</label><span>{this.product.size}</span></li>
									<li><label>价格：</label><span>{this.product.price}</span></li>
									<li><el-button  type="success">收藏 </el-button></li>
								</ul>

						</div>



						 : null
					}

				</div>)
		},
		computed:{
			
			product:function(){
				return this.$store.getters.get_one_product
			}
		},
		mounted:function(){

			this.$store.commit("themes_product",this.$route.params.tid);
		},
		components:{

			[Button.name]:Button
		}

	}

</script>

<style scoped>

	.themes{

		width:98%;
		margin:10px auto 10px auto;
	}
	.main-product{
		display:flex;
	}
	.img-shower{
		flex:1
	}
	.img-shower>img{
		max-width:100%;
		height:auto;
	}
	.product-pro-list{
		flex:1;
		overflow:hidden;
		display:flex;
		flex-direction:column;
		justify-content:flex-end;
		margin-left :10px;
	}
	.product-pro-list>li{
		padding:10px 0px 10px 0px;
	}
	.product-pro-list>li label{
		font-weight:bold;
	}
	
</style>