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

					<div v-for="article in articlesSlice" class="col-lg-4 col-md-6 portfolio-item">
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

			<div class="row justify-content-center">
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<Pagination :prevPage="pageNo > 1" :nextPage="nextPage" :pageNo="pageNo" urlPrefix="/blog"/>
				</div>
			</div>

		</div>
	</section>
</div>
</template>

<script>
import Pagination from '@/components/molecules/Pagination'

export default {
	layout: 'blog',
	components:{
		Pagination
	},
	async asyncData({ $content, params, error }) {
		const pageNo = parseInt(params.number)
		const articles = await $content('Blog', params.slug)
		.only(['title', 'description', 'img', 'slug', 'categories', 'createdAt', 'author'])
		.limit(10)
		.skip(8 * (pageNo - 1))
		.sortBy('createdAt', 'desc')
		.fetch();

		if (!articles.length) {
			return error({ statusCode: 404, message: 'No articles found!' })
		}

		const nextPage = articles.length === 10
		const articlesSlice = nextPage ? articles.slice(0, -1) : articles

		return {
			articlesSlice,
			nextPage,
			pageNo
		}
	},
}
</script>