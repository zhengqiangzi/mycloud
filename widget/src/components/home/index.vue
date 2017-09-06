<script>
	export default {
		render(h){
			return (
				<div class='home'>
					<router-link tag="div" to="product/1" class='home-item'>壁纸</router-link>
					<router-link tag="div" to="product/2" class='home-item'>窗帘</router-link>
					<router-link tag="div" to="product/3" class='home-item'>饰品</router-link>
				</div>
			)
		}
	}
</script>

<style scoped>
		.home{
			position:absolute;
			left:0;
			right:0;
			bottom:0;
			top:0;
			display:flex;
		}
		
		.home-item{
			border-right:1px solid rgba(123,123,123,0.5);
			flex:1;
			display:flex;
			align-items:center;
			justify-content:center;
			font-size:30px;

		}
		.home-item:last-child{
			border-right:0;
		}

</style>