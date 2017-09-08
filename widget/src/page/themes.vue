<script>
	import ThemesComponents from '../components/themes/index.vue';

	export default {


		render(h){

			return ( <transition name="slide-fade"><themes-components ></themes-components></transition>)

		},
		components:{

			"themes-components":ThemesComponents
		}
	}

</script>

<style>
	

</style>