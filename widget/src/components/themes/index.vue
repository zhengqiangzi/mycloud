<script>
	export default {

		render(h){

			return (<div>{this.product}</div>)
		},
		computed:{
			
			product:function(){

				return this.$route.params.tid
			}


		}

	}

</script>