<template>
	<div>
		<!-- ======= Portfolio Section ======= -->
		<section id="products" class="portfolio section-bg">
			<div class="container" data-aos="fade-up">
				<div class="section-title">

					<h2>Article</h2>

				</div>

				<div class="col-lg-12 col-xs-12 col-sm-12 mb-5">
					<small class="text-danger">
						(* Klik foto / design gambar article untuk melihat detail article yang ingin anda baca secara keseluruhan.)
					</small>
				</div>

			<div
			class="row portfolio-container"
			data-aos="fade-up"
			data-aos-delay="200"
			>

			<div v-for="article in articles" class="col-lg-4 col-md-6 portfolio-item">
				<div class="portfolio-wrap">
					<div class="wrap-article">
						<img
						:src="require(`~/assets/blog/images/${article.slug}/${article.img}`)"
						class="img-fluid img-articles"
						alt=""
						/>
					</div>
					<div class="portfolio-info">
						<h4>{{article.title}}</h4>
						<p>{{article.categories}}</p>
						<div class="portfolio-links mt-3">
							<a
							:href="require(`~/assets/blog/images/${article.slug}/${article.img}`)"
							data-gall="productGallery"
							class="venobox btn btn-sm btn-primary text-white"
							:title="article.title"
							><i class="bx bx-plus"></i
								>
							</a>
									<nuxt-link
										:to="{name: `blog-${article.categories}-slug`, params: {categories: article.categories, slug: article.slug}}"
										data-gall="portfolioDetailsGallery"
										data-vbtype="iframe"
										class="venobox btn btn-sm btn-success text-white lihat"
										:title="`Detail ${article.title}`"
										><i class='bx bx-window-open'></i> Baca
									</nuxt-link>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
		<!-- End Portfolio Section -->
	</div>
</template>

<script>
	export default{
		layout: 'blog',
		head(){
			return {
				title: "Evoush::Blog",
				link: [
					{hid: 'canonical', rel: 'canonical', href: 'https://evoush.com/blog'}
				],
				meta: [
					// { hid: 'description', name: 'Evoush Indonesia', content: 'Your Eternal Future' },
					// { hid: 'description', name: 'description', content: 'Bisnis Evoush Indonesia'},
					// { hid: 'keywords', name: 'keywords', content: 'Bisnis Evoush Bisnis Menjanjikan'},
					{ hid: 'description', name: 'description', content: 'Evoush::Official | Article::Page'},
					{ hid: 'keywords', name: 'keywords', content: 'Article-article menarik, seputar product, bisnis evoush dan juga tips and trick untuk kalian para evousher'},
					{ hid: 'author', name: 'author' , content: 'Evoush::Article | Blog::Evoush'},
					{ hid: 'og:type', property: 'og:type', content: 'website'},
					{ hid: 'og:url', property: 'og:url', content: 'https://evoush.com/blog'},
					{ hid: 'og:title', property: 'og:title', content: 'Evoush Indonesia'},
					{ hid: 'og:site_name', property: 'og:site_name', content: 'Evoush::Official | Evoush::Website'},
					{ hid: 'og:description', property: 'og:description', content: 'Your Eternal Future'},
					{ hid: 'og:image', property: 'og:image', content: 'https://raw.githubusercontent.com/evoush12/bahan-evoush/main/images/banner/jumbotron5.jpg'},
					{ hid: 'og:image:width', property: 'og:image:width', content: '600'},
					{ hid: 'og:image:height', property: 'og:image:height', content: '598'}
				],
			}
		},

		async asyncData({ $content, params }) {
			const articles = await $content('Blog', params.slug)
			.only(['title', 'description', 'img', 'slug', 'categories', 'createdAt', 'author'])
			.sortBy('createdAt', 'desc')
			.fetch();
			return {
				articles
			}
		}
	}
</script>


<style>
@media (min-width: 992px) {
	.img-articles{
		height:300px;
		width: 400px;
	}
	.wrap-article{
		margin-bottom: -1rem;
	}
}
</style>