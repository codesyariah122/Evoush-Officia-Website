<template>
	<div>
		<div id="fb-root"></div>
		<main>
<!--
			<pre>
				ie event
				<h1>{{event}}</h1>
			</pre> -->

			<div class="container">
				<div class="row justify-content-center mt-5">
					<div class="col-12 col-lg-12 col-xs-12 col-sm-12">
						<div class="float-right">
							<ColorModePicker/>
						</div>
					</div>
				</div>

				<div class="row justify-content-center">
					<div class="col-lg-12 col-xs-12 col-sm-12">
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
		data(){
			return {
				event: ($nuxt.$router.path === '/event/anniversary' ? false : true)
			}
		},
		components: {
			ColorModePicker
		},

		mounted(){
			this.getChat()
		},

		methods:{
			getChat(){
				const path = window.location.pathname.split('/')
				const users = localStorage.getItem('consults') ? JSON.parse(localStorage.getItem('consults')) : ''


				if(path[1] !== "halo-dokter" || !users.username){
					$crisp.push(['do', 'chat:hide'])
				}else{
					$crisp.push(['do', 'chat:show'])
				}
			}
		}

	}
</script>


<style>
	:root {
		--primary-color: #fff;
	}
</style>