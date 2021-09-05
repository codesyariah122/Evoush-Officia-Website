<template>
	<div>
		<main>
			<Header/>
			<Nuxt/>
			<Footer/>

			<CookieBox/>

			<a href="#" class="back-to-top"><i class="bx bx-up-arrow-alt"></i></a>
			<!-- <div id="preloader"></div> -->

		</main>
	</div>
</template>


<script>
	import Header from '~/components/layouts/Header'
	import Footer from '~/components/layouts/Footer'

	export default {
		components: {
			Header,
			Footer
		},

		mounted(){
			this.getNewContentUpdate()
			this.$OneSignal.push(() => {
				this.$OneSignal.isPushNotificationsEnabled((isEnabled) => {
					if (isEnabled) {
						console.log('Push notifications are enabled!')
					} else {
						console.log('Push notifications are not enabled yet.')
					}
				})
			})

			window.OneSignal = window.OneSignal || [];
			OneSignal.push(function() {
				OneSignal.init({
					appId: "15dc915b-fe30-4b1b-b635-63ab40fc8361",
				});
			});
		},

		methods: {
			async getNewContentUpdate(){
				const workbox = await window.$workbox;
				if (workbox) {
					workbox.addEventListener('installed', (event) => {
						if (event.isUpdate) {
				            // whatever you want to do to let the user know there's an update available
				            console.log("Update content ready, push reloaded browser")
				            this.$swal({
				            	position: 'top-end',
				            	icon: 'success',
				            	title: 'Evoush::Official New Updated Build',
				            	showConfirmButton: false,
				            	timer: 1500
				            })
				        }
				    });
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