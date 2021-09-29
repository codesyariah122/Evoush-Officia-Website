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
				<div class="row justify-content-end mt-2 mb-3">
					<div class="col-lg-1 col-xs-6 col-sm-6">
						<nuxt-link class="btn btn-danger mt-3 mb-5" to="/#news"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
					</div>
				</div>


				<div class="row justify-content-center">
					<div class="col-lg-12 col-xs-12 col-sm-12">
						<SocialSharing :socials="socials"/>
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