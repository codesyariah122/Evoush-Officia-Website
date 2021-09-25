<template>
	<div>
		<div id="fb-root"></div>
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
			this.getChat(),
			this.getFacebookSDK(document, 'script', 'facebook-jssdk'),
			this.getNewContentUpdate(),
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
			},

			getFacebookSDK(d, s, id){
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) return;
				js = d.createElement(s); js.id = id;
				js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
				fjs.parentNode.insertBefore(js, fjs);
			},

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