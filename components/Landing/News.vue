<template>
	<div>
		<!-- ======= Testimonials Section ======= -->
		<section id="news" class="testimonials section-bg">
			<div class="container" data-aos="fade-up">
<!-- 
				<pre>
					{{articles}}
				</pre> -->
				
				<div class="section-title">
					<h2>News</h2>
				</div>

<!-- <pre>
	{{articles}}
</pre>
 -->
				<div class="owl-carousel testimonials-carousel" data-aos="zoom-in" data-aos-delay="100">

					<div v-for="article in articles" class="testimonial-item">
						<img :src="require(`~/assets/blog/images/${article.slug}/${article.img}`)" class="testimonial-img rounded" alt="">
						<h3>{{article.title}}</h3>
						<p>by {{ article.author.name }}</p>
						<small>{{formatDate(article.createdAt)}}</small>
						<p>
							<i class="bx bxs-quote-alt-left quote-icon-left"></i>
							{{article.description}}.
							<i class="bx bxs-quote-alt-right quote-icon-right"></i>
						</p>
						<nuxt-link :to="{name: `blog-${article.categories}-slug`, params: {slug: article.slug}}" class="btn btn-primary">Lihat</nuxt-link>
					</div>


				</div>
			

			</div>
		</section><!-- End Testimonials Section -->
	</div>
</template>

<script>
	export default{
		props: ['articles'],
		mounted(){
			this.getTestimonial()
		},

		methods: {
			getTestimonial(){
				// Testimonials carousel (uses the Owl Carousel library)
				$(".testimonials-carousel").owlCarousel({
					autoplay: true,
					dots: true,
					loop: true,
					items: 1
				});
			},
			formatDate(date) {
				const options = { year: 'numeric', month: 'long', day: 'numeric' }
				return new Date(date).toLocaleDateString('en', options)
			},
		}
	}
</script>