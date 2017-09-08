
<script>

	import ProductComponents from '../components/product/index.vue';

	export default {

		render(h){

			return (
				<transition name="slide-fade"><product-components></product-components></transition>
			)
		},
		components:{

			"product-components":ProductComponents
		}

		
	}

</script>

<style>
	

</style>