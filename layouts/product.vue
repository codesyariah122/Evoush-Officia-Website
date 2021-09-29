<template>
	<div>
		<div id="fb-root"></div>
		<main>
			<div class="container">
				<div class="row justify-content-center mt-5">
					<div class="col-12 col-lg-12 col-xs-12 col-sm-12">
						<div class="float-right">
							<ColorModePicker/>
						</div>
					</div>
				</div>
			</div>

			<Nuxt/>
		</main>
	</div>
</template>


<script>
	import ColorModePicker from '@/components/molecules/ColorModePicker'

	export default {
		components: {
			ColorModePicker
		},
		mounted(){
			$crisp.push(['do', 'chat:hide'])
		}
	}
</script>


<style>
	:root {
		--primary-color: #fff;
	}
</style>