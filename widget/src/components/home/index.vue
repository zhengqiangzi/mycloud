<script>
	export default {
		render(h){
			return (
				<div class='home'>
					{
						this.$store.getters.category.map( ( item ) => {
							return <router-link tag="div" to={"product/"+item.id} class='home-item'>{item.title}</router-link>
						})
					}
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