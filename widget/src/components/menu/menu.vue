<script>
	import { Button , Input , Select , Option  } from 'element-ui'
	
	export default {

		render( h ){


			return (<ul class="menu">

						<li class="logo"><div><img src="image/logo.png"/></div></li>
						<li class="back-btn"><i class="el-icon-arrow-left"></i></li>
						<li class="back-search">
						  <el-input placeholder="请输入内容"  size="large">
						    <el-button slot="append" icon="search"></el-button>
						  </el-input>
						</li>

						<li class="fav">
 							<el-button type="primary" icon="star-on">收藏 ( 1 )</el-button>
						</li>
				</ul>)

		},
		components:{

			[Button.name]:Button,
			[Input.name]:Input,
			[Select.name]:Select,
			[Option.name]:Option,
		}

	}
</script>


<style scoped>
	
	.menu{
		display:flex;
		width:100%;
		height:100%;
	}	

	.menu>li{
		overflow:hidden;
		flex:1;
		display:flex;
		align-items:center;
		justify-content:center;
	}
	.menu>li.logo{ flex:1;}
	.menu>li.back-btn{
		font-size:30px;
		flex:1;
	}
	.menu>li.back-search{
		flex:3;
	}
	.menu>li.fav{
		flex:2;
		display:flex;
		align-items:center;
		justify-content:flex-end;
		padding-right:10px;
	}
	.menu>li.logo>div{
		width:60px;
	}
	.menu>li.logo>div>img{
		max-width:100%;
		height:auto;
	}
</style>