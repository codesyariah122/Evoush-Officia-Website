<template>
	<div class="container">
		<div class="row justify-content-center">
			<!-- <img :src="require(`~/assets/blog/images/${article.slug}/${article.img}`)" class="cover img-fluid img-responsive mb-5"> -->
			<div class="col-lg-12 col-xs-12 col-sm-12 mt-2">
				<nuxt-content :document="article" style="text-align: justify; font-size: 18px;"/>
			</div>
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
export default {
	layout: 'article',
	head(){
		return{
			title: `Evoush::News | ${this.article.title}`
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
		// .where({categories: 'article'})
		.surround(params.slug)
		.fetch()
		return {
			article,
			tags,
			prev,
			next
		}
	},

	methods: {
		formatDate(date) {
			const options = { year: 'numeric', month: 'long', day: 'numeric' }
			return new Date(date).toLocaleDateString('en', options)
		},
	}
}
</script>

<style scoped>
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
		font-size: 41px;
		text-align: center;
		margin-bottom: 5rem;
	}
	.nuxt-content p {
		margin-bottom: 30px;
		font-size: 16px;
		text-align: justify;
	}
</style>

