
<script>

	import HomeComponents from '../components/home/index.vue';

	export default {

		render(h){

			return (<transition name="slide-fade"><home-components></home-components></transition>)
		},
		components:{

			"home-components":HomeComponents
		}
	}

</script>

<style>
	

</style>