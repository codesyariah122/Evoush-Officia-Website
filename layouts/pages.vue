<template>
	<div>
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

			<a href="#" class="back-to-top"><i class="bx bx-up-arrow-alt"></i></a>
			<!-- <div id="preloader"></div> -->
			
		</main>
	</div>
</template>


<script>
	import ColorModePicker from '@/components/molecules/ColorModePicker'

	export default {
		components: {
			ColorModePicker
		}
	}
</script>


<style>
	:root {
		--primary-color: #fff;
	}
</style>