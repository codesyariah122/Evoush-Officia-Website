<template>
	<div class="container">
		<div class="row justify-content-center">

			<!-- <img :src="require(`~/assets/blog/images/${article.slug}/${article.img}`)" class="cover img-fluid img-responsive mb-5"> -->
			<div class="col-lg-12 col-xs-12 col-sm-12">
				<SocialSharing :socials="socials"/>
			</div>
			<div class="col-lg-12 col-xs-12 col-sm-12 mt-2">

				<article>
					<nuxt-content :document="article"/>
				</article>
			</div>

			<!-- ShareThis BEGIN -->
			<div class="sharethis-inline-reaction-buttons"></div>
			<!-- ShareThis END -->

			<div class="col-lg-12 col-xs-12 col-sm-12 mt-2 mb-5">
				<Disqus />
			</div>
			<div class="col-lg-6 col-xs-6 col-sm-6 info mt-5">
				<ul>
					<li><small class="text-secondary"><strong>Create at : {{formatDate(article.createdAt)}}</strong></small></li>
					<li class="mt-3">
						<author :author="article.author" />
					</li>
					<li class="mt-5">
						<PrevNext :prev="prev" :next="next"  />
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import SocialSharing from '@/components/global/socialsharing'
	export default {
		layout: 'blog',
		components: {
			SocialSharing
		},
		data(){
			return {
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
				title: `Evoush::News | ${this.article.title}`,
				meta: [
				{ property: "og:site_name", content: `Evoush::Official - ${this.article.title}` },
				{ hid: "og:type", property: "og:type", content: "website" },
				{
					hid: "apple-mobile-web-app-title",
					name: "apple-mobile-web-app-title",
					content: `Evoush::News | ${this.article.title}`
				},
				{
					hid: 'description',
					name: 'description',
					content: 'Your Eternal Future'
				},
				{
					hid: "og:site_name",
					name: "og:site_name",
					property: "og:site_name",
					content: `Evoush::News | ${this.article.categories} - ${this.article.title}`
				},
				{
					hid: "og:url",
					property: "og:url",
					content: `https://evoush.com/blog/${this.article.categories}/${this.article.title}`,
				},
				{
					hid: "og:title",
					property: "og:title",
					content: `Evoush::News | ${this.article.title}`,
				},
				{
					hid: "og:description",
					property: "og:description",
					content: "Your Eternal Future",
				},
				{
					hid: "og:image",
					property: "og:image",
					content: require(`~/assets/blog/images/${this.article.slug}/${this.article.img}`),
				},
				{ property: "og:image:width", content: "740" },
				{ property: "og:image:height", content: "300" },
				]
			}
		},
		async asyncData({ $content, params }) {
			const article = await $content('Blog', params.slug).fetch();
			const tagsList = await $content('tags')
			.only(['name', 'slug'])
			.where({ name: { $containsAny: article.tags } })
			.fetch()
			const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
			const [prev, next] = await $content('Blog')
			.only(['title', 'slug', 'categories'])
			.sortBy('createdAt', 'asc')
			.surround(params.slug)
			.fetch()
			return {
				article,
				tags,
				prev,
				next
			}
		},

		computed:{
			likes(){
				return this.$store.getters.getLike
			}
		},


		methods: {
			formatDate(date) {
				const options = { year: 'numeric', month: 'long', day: 'numeric' }
				return new Date(date).toLocaleDateString('en', options)
			},

			getLikes(){
				this.$store.commit('likes')
			}
		},

	}
</script>

<style>
.cover {
	width: 100%;
}
ul li{
	list-style: none;
	display: flex;
	flex-wrap: nowrap;
}

.nuxt-content h2 {
	font-weight: bold;
	font-size: 45px;
	text-align: center;
	margin-bottom: 5rem;
}
.nuxt-content h4 {
	font-weight: bold;
	font-size: 37px;
	margin-top:2rem;
	margin-bottom:2rem;
}
.nuxt-content h5 {
	font-weight: bold;
	font-size: 30px;
}
.nuxt-content p {
	margin-bottom: 30px;
	font-size: 18px;
	text-align: justify;
}


</style>

