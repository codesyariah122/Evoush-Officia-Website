<template>
	<div>

		<div class="container">

			<!-- <div class="row justify-content-center">
				<div class="col-lg-12 col-12 col-xs-12 col-sm-12">
					<ScreenAnim/>
				</div>
			</div> -->

			<!-- <div class="container-fluid mt-5">
				<div class="row justify-content-center">
					<div class="col-lg-12 col-xs-12 col-sm-12">
						<Updated/>
					</div>
				</div>
			</div> -->

			<div class="row justify-content-center mt-5">

				<!-- <ToDo/> -->

				<!-- <div class="col-lg-12 col-xs-12 col-sm-12">
					<center>
						<div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="" data-layout="standard" data-action="like" data-size="small"></div>
					</center>
				</div> -->

				<div class="col-12 col-lg-12 col-xs-12 col-sm-12">
					<div class="float-right">
						<ColorModePicker/>
					</div>
				</div>

				<div class="col-lg-12 col-xs-12 col-sm-12">
					<SocialSharing :socials="socials"/>
				</div>

				<div class="col-lg-12 col-xs-12 col-sm-12 mb-5">
					<center>
						<AddToHome/>
					</center>
				</div>

				<!-- test vuex -->
				<!-- <div class="col-lg-12">
					test : {{ tester }}
				</div> -->


				<!-- <div class="col-lg-12 col-xs-12 col-sm-12 mt-5">
					<BirthdayMember/>
					<center>
						<ScreenAnim/>
					</center>
				</div> -->
				<!-- <h1 class="underline" style="margin-top: 5rem;"></h1> -->

			</div>

		</div>

		<div class="col-lg-12 col-xs-12 col-sm-12">
			<News :articles="articles"/>
		</div>

		<h1 class="underline" style="margin-top: 5rem;"></h1>

		<CheckResi/>

		<br>

		<h1 class="underline" style="margin-top: 5rem;"></h1>
		<!-- <Product :products="results"/> -->
		<NewProduct :allproducts="products" :nutritions="nutritions" :cosmetics="cosmetics"/>

		<hr>

		<CheckOngkir/>

		<!-- <SendSms/> -->
		<h1 class="underline" style="margin-top: 5rem;"></h1>

		<Members :members="members"/>

		<h1 class="underline" style="margin-bottom: 3rem;"></h1>

		<VideoCom/>

		<h1 class="underline" style="margin-top: 5rem;"></h1>

		<Pages/>

		<h1 class="underline" style="margin-bottom: 3rem;"></h1>


		<!-- <pre>
			{{ channels }}
		</pre> -->

		<div v-if="channels.data.error"  class="col-lg-12 col-xs-12 col-sm-12">
			<center>
				<div class="alert alert-success">
					<small class="text-primary mb-3">
						{{ channels.message }}
					</small> <br>
					<small class="text-danger">Error {{ channels.data.error.code }}</small> {{ channels.data.error.message }}
				</div>
			</center>
		</div>

		<div v-else>
			<YoutubeChannel class="mt-5 mb-5" :channels="channels" :latests="latestVideos" :playlists="playlistVideos"/>
		</div>

		<h1 class="underline" style="margin-bottom: 3rem;"></h1>

		<!-- <NewMember/> -->

		<Contact/>

	</div>
</template>

<style>
	.fb-like{
		margin-left: 5rem;
	}
</style>

<script>
	import Product from '@/components/Landing/Product'
	import NewProduct from '@/components/Landing/NewProductComponent'
	import Members from '@/components/Landing/Members'
	import NewMember from '@/components/Landing/NewMember'
	import News from '@/components/Landing/News'
	import Pages from '@/components/Landing/Pages'
	import Contact from '@/components/Landing/Contact'
	import ColorModePicker from '@/components/molecules/ColorModePicker'
	import Branding from '@/components/Landing/Branding'
	import AddToHome from '@/components/Landing/addToHomeBtn'
	import ScreenAnim from '@/components/Landing/ScreenAnim'
	import CheckOngkir from '@/components/Landing/CheckOngkir'
	import Updated from '@/components/Landing/Updated'
	import SendSms from '@/components/Landing/SendSms'
	import YoutubeChannel from '@/components/Landing/YoutubeChannel'
	import CheckResi from '@/components/Landing/CheckResi'
	import SocialSharing from '@/components/global/socialsharing'
	import BirthdayMember from '@/components/Landing/BirthdayMember'
	import ToDo from '@/components/Landing/Todo'
	import VideoCom from '@/components/Landing/VideoCom'
	// import RegisterEvent from '@/components/Landing/RegisterEventButton'
	export default {
		layout: 'default',
		components: {
			Product,
			NewProduct,
			Members,
			NewMember,
			News,
			Pages,
			Contact,
			ColorModePicker,
			Branding,
			AddToHome,
			ScreenAnim,
			CheckOngkir,
			Updated,
			SendSms,
			YoutubeChannel,
			CheckResi,
			SocialSharing,
			BirthdayMember,
			ToDo,
			VideoCom
		},

		async asyncData({$commerce, $content, params, $axios, $config}){
			const {data: products} = await $commerce.products.list()
			const cosmetics = products.filter(d => d.categories[0].name === "Cosmetics")
			const nutritions = products.filter(d => d.categories[0].name === "Nutrisi")

			// console.log(nutritions)

			const channel_id = 'UCIzNgeNDD58z8XNppkopwzw'
			const playlist_id = 'PLblvVtAgjh4DwLORfIHawwIVvaosP-YCA'
			const channels = await $axios.$get(`https://evoush-landing-api.herokuapp.com/api/data/youtube/channel/${channel_id}`)
			const latestVideos = await $axios.$get(`https://evoush-landing-api.herokuapp.com/api/data/youtube/latest/${channel_id}/5/date`)
			const playlistVideos = await $axios.$get(`https://evoush-landing-api.herokuapp.com/api/data/youtube/playlist/${channel_id}/5/${playlist_id}`)
			const results = await $axios.$get('/product/all')
			const members = await $axios.$get('/evoush/member-list')
			const articles = await $content('Blog', params.slug)
			.only(['title', 'description', 'img', 'slug', 'categories', 'createdAt', 'author'])
			.sortBy('createdAt', 'desc')
			.where({categories: 'news'})
			.fetch();


			return { results, products, cosmetics, nutritions, members, articles, channels, latestVideos, playlistVideos}
		},
		data(){
			return {
				env: process.env.config_production,
				deferredPrompt: '',
				colorMode: this.color,
				image: {
					type: String,
					default: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/banner/about/3.jpg'
				},
				socials: [
					{
						id: 1,
						icon: 'bx bxl-twitter bx-lg',
						network: 'twitter',
						url: 'https://evoush.com/',
						title: 'Evoush::Official',
						description: 'Evoush Official Website.',
						quote: 'Sukses berbisnis network marketing di era pandemi.',
						image: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/banner/about/3.jpg',
						hashtags: 'Your Eternal Future',
						twitterUser: 'EvoushOfficial'
					},
					{
						id: 2,
						icon: 'bx bxl-facebook-circle bx-lg',
						network: 'facebook',
						url: 'https://evoush.com/',
						title: 'Evoush::Official',
						description: 'Evoush Official Website.',
						quote: 'Sukses berbisnis network marketing di era pandemi.',
						image: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/banner/about/3.jpg',
						hashtags: 'Your Eternal Future'
					},
					{
						id: 3,
						icon: 'bx bxl-whatsapp bx-lg',
						network: 'whatsapp',
						url: 'https://evoush.com/event',
						title: 'Evoush::Official',
						description: 'Evoush Official Website.',
						quote: 'Sukses berbisnis network marketing di era pandemi.',
						image: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/banner/about/3.jpg',
						hashtags: 'Your Eternal Future'
					}
				]
			}
		},
		head(){
			return {
				title: "Evoush::Official",
				meta: [
					{ property: "og:site_name", content: "Evoush Official" },
					{ hid: "og:type", property: "og:type", content: "website" },
					{
						hid: "og:url",
						property: "og:url",
						content: "https://evoush.com",
					},
					{
						hid: "og:title",
						property: "og:title",
						content: "Evoush::Official | Home::Page",
					},
					{
						hid: "og:description",
						property: "og:description",
						content: "Your Eternal Future.",
					},
					{
						hid: "og:image",
						property: "og:image",
						content: this.image
					},
					{ property: "og:image:width", content: "740" },
					{ property: "og:image:height", content: "300" },
				]
			}
		},


		// created(){
		// 	window.addEventListener("beforeinstallprompt", e => {
		// 			e.preventDefault();
		// 		      // Stash the event so it can be triggered later.
		// 		      this.deferredPrompt = e;
		// 	  	});window.addEventListener("appinstalled", () => {
		// 	  		this.deferredPrompt = null;
		//   	});
		// },
		mounted(){
			// OneSignal.log.setLevel('trace')
			// this.isPushNotificationsEnabledVerbose()
		},
		methods: {
			async dismiss() {
				this.deferredPrompt = null;
			},
			async install() {
				this.deferredPrompt.prompt();
			},
			isPushNotificationsEnabledVerbose() {
				console.log('isPushNotificationsEnabledVerbose()');
				Promise.all([
					OneSignal.isPushNotificationsEnabled(),
					OneSignal.getUserId(),
					OneSignal.getRegistrationId(),
					OneSignal.getNotificationPermission(),
					OneSignal.isOptedOut(),
					OneSignal.context.serviceWorkerManager.getActiveState()
					])
				.then(([isSubscribed, userId, registrationId, notificationPermission, optedOut, serviceWorkerActive]) => {
					console.log('Is Completely Subscribed:', isSubscribed);
					console.log('');
					console.log('What is our OneSignal user ID?', userId);
					console.log('What is our push subscription token?', registrationId);
					console.log('What is the notification permission status?', notificationPermission);
					console.log('Are you manually opted out?', optedOut);
					console.log("Is a service worker registered and active? (should be false on Safari, otherwise should be 'Worker A (Main)')?", serviceWorkerActive);
					console.log('What is the current URL of this page?', location.href);
					console.log("What environment does OneSignal think it's in?", OneSignal.sdkEnvironment.getWindowEnv());
				})
				.catch(e => {
					console.error("Issue determining whether push is enabled:", e);
				});
			}
		}

	}
</script>
