<template>
	<div>
		<div class="container">
			<div class="row justify-content-center mt-5">
				<div class="col-12 col-lg-12 col-xs-12 col-sm-12">
					<div class="float-right">
						<ColorModePicker/>
					</div>
				</div>
			</div>
		</div>

		<Product :products="results"/>

		

		<Members :members="members"/>

		<h1 class="underline" style="margin-top: 5rem;"></h1>

		<News :articles="articles"/>

		<h1 class="underline" style="margin-bottom: 5rem;"></h1>

		<Pages/>

		<h1 class="underline" style="margin-bottom: 15rem;"></h1>

		<Contact/>

	</div>
</template>

<script>
	import Product from '@/components/Landing/Product'
	import Members from '@/components/Landing/Members'
	import News from '@/components/Landing/News'
	import Pages from '@/components/Landing/Pages'
	import Contact from '@/components/Landing/Contact'
	import ColorModePicker from '@/components/molecules/ColorModePicker'

	export default {
		async asyncData({$content, params, $axios, $config}){
			const results = await $axios.$get('/product/all')
			const members = await $axios.$get('/evoush/member-list')
			const articles = await $content('Blog', params.slug)
			.only(['title', 'description', 'img', 'slug', 'categories', 'createdAt', 'author'])
			.sortBy('createdAt', 'asc')
			.where({categories: 'news'})
			.fetch();
			return { results, members, articles }
		},
		components: {
			Product,
			Members,
			News,
			Pages,
			Contact,
			ColorModePicker
		},
		layout: 'default',
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

		mounted(){
			// this.$nextTick(() => {
			// 	this.$nuxt.$loading.start()
			// 	setTimeout(() => this.$nuxt.$loading.finish(), 2000)
			// })
		}
	}
</script>


<style scoped>
.underline:after{
	content: '';
	display: block;
	margin: auto;
	margin-top: 15px;
	position: relative;
	margin-bottom:2rem;
	width: 100px;
	height: 2px;
	background:rgb(255, 99, 78);
}


</style>
