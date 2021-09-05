<template>
	<div>

		<div class="container">

			<!-- <div class="row justify-content-center">
				<div class="col-lg-12 col-12 col-xs-12 col-sm-12">
					<img src="https://raw.githubusercontent.com/evoush12/bahan_evoush/main/news/new-news.jpeg" class="img-fluid img-responsive">
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
				<div class="col-12 col-lg-12 col-xs-12 col-sm-12">
					<div class="float-right">
						<ColorModePicker/>
					</div>
				</div>

				<div class="col-lg-12 col-xs-12 col-sm-12">
					<center>
						<AddToHome/>
					</center>
				</div>

			</div>

		</div>


		<Product :products="results"/>

		<!-- <h1 class="underline" style="margin-top: 5rem;"></h1> -->


		<!-- <SendSms/> -->

		<!-- <CheckOngkir/> -->
		<h1 class="underline" style="margin-top: 5rem;"></h1>


		<div class="col-lg-12 col-xs-12 col-sm-12">
			<Branding />
		</div>

		<Members :members="members"/>

		<h1 class="underline" style="margin-top: 5rem;"></h1>

		<News :articles="articles"/>

		<h1 class="underline" style="margin-bottom: 5rem;"></h1>

		<Pages/>

		<h1 class="underline" style="margin-bottom: 3rem;"></h1>

		<YoutubeChannel class="mt-5 mb-5" :channels="channels" :latests="latestVideos" :playlists="playlistVideos"/>

		<h1 class="underline" style="margin-bottom: 3rem;"></h1>

		<NewMember/>

		<h1 class="underline" style="margin-top: 5rem;"></h1>


		<Contact/>

	</div>
</template>

<script>
	import Product from '@/components/Landing/Product'
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
	// import RegisterEvent from '@/components/Landing/RegisterEventButton'
	export default {
		layout: 'default',
		components: {
			Product,
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
			YoutubeChannel
		},
		async asyncData({$content, params, $axios, $config}){
			const channel_id = 'UCIzNgeNDD58z8XNppkopwzw'
			const playlist_id = 'PLblvVtAgjh4DwLORfIHawwIVvaosP-YCA'
			const channels = await $axios.$get(`/evoush/youtube/${channel_id}`)
			const latestVideos = await $axios.$get(`/evoush/youtube/latest-video/${channel_id}/5/date`)
			const playlistVideos = await $axios.$get(`/evoush/youtube/playlist-video/${channel_id}/5/${playlist_id}`)
			const results = await $axios.$get('/product/all')
			const members = await $axios.$get('/evoush/member-list')
			const articles = await $content('Blog', params.slug)
			.only(['title', 'description', 'img', 'slug', 'categories', 'createdAt', 'author'])
			.sortBy('createdAt', 'desc')
			.where({categories: 'news'})
			.fetch();
			return { results, members, articles, channels, latestVideos, playlistVideos}
		},
		data(){
			return {
				env: process.env.config_production,
				deferredPrompt: '',
				colorMode: localStorage.getItem('nuxt-color-mode')
			}
		},
		head(){
			return {
				title: "Evoush::Official",
				link: [
				{hid: 'canonical', rel: 'canonical', href: 'https://evoush.com/'}
				],
				meta: [
					// { hid: 'description', name: 'Evoush Indonesia', content: 'Your Eternal Future' },
					// { hid: 'description', name: 'description', content: 'Bisnis Evoush Indonesia'},
					// { hid: 'keywords', name: 'keywords', content: 'Bisnis Evoush Bisnis Menjanjikan'},
					{ hid: 'description', name: 'description', content: 'Evoush::Official | Home::Page'},
					{ hid: 'keywords', name: 'keywords', content: 'Bisnis Network Marketing Zaman Now Ya Evoush Indonesia'},
					{ hid: 'author', name: 'author' , content: 'Evoush::Indonesia | Official::Website'},
					{ hid: 'og:type', property: 'og:type', content: 'website'},
					{ hid: 'og:url', property: 'og:url', content: 'https://evoush.com/'},
					{ hid: 'og:title', property: 'og:title', content: 'Evoush Indonesia'},
					{ hid: 'og:site_name', property: 'og:site_name', content: 'Evoush::Official | Evoush::Website'},
					{ hid: 'og:description', property: 'og:description', content: 'Your Eternal Future'},
					{ hid: 'og:image', property: 'og:image', content: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/banner/about/3.jpg'},
					{ hid: 'og:image:width', property: 'og:image:width', content: '600'},
					{ hid: 'og:image:height', property: 'og:image:height', content: '598'}
				],
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
		// methods: {
		// 	async dismiss() {
		// 		this.deferredPrompt = null;
		// 	},
		// 	async install() {
		// 		this.deferredPrompt.prompt();
		// 	}
		// }
		mounted(){
			// OneSignal.log.setLevel('trace');
			this.$axios.get('http://localhost:8000/api/test-data')
			.then(res => {
				console.log(res)
			})
		}
	}
</script>
