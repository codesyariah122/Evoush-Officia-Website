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
						<nuxt-link class="btn btn-danger mt-3 mb-5" to="/blog"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
					</div>
				</div>
			</div>

			<Nuxt/>

			<a href="#" class="back-to-top"><i class="bx bx-up-arrow-alt"></i></a>
			<!-- <div id="preloader"></div> -->

			<Footer class="mt-5"/>

		</main>
	</div>
</template>


<script>
	import ColorModePicker from '@/components/molecules/ColorModePicker'
	import Footer from '~/components/layouts/Footer'

	export default {
		components: {
			ColorModePicker,
			Footer
		},
		data(){
			return {
				status: localStorage.getItem('consults') ? JSON.parse(localStorage.getItem('consults')) : ''
			}
		},

		mounted(){
			// $crisp.push(['do', 'chat:hide'])
			this.getChat(this.status)
		},
		methods: {
			getChat(status){
				console.log(status)
				// $crisp.push(['do', 'chat:hide'])
				if(status === ""){
					document.querySelector('.chatwith').style.visibility="hidden"
					// $crisp.push(['do', 'chat:hide'])
				}else{
					if(status === "ACTIVE"){
						document.querySelector('.chatwith').style.visibility="visible"
						// $crisp.push(['do', 'chat:show'])
						// $crisp.push(['do', 'chat:open'])
					}else{
						document.querySelector('.chatwith').style.visibility="hidden"
					}
				}
			},
		}
	}
</script>


<style>
	:root {
		--primary-color: #fff;
	}
</style>