<template>
	<div>
		<section id="products" class="portfolio section-bg">
			<div class="container" data-aos="fade-up">
				<div class="container">
					<div class="row justify-content-end mt-3 mb-3">
						<div class="col-lg-1 col-xs-6 col-sm-6">
							<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#pages"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
						</div>
					</div>

					<div class="row justify-content-center">
						<div class="col-lg-12 col-xs-12 col-sm-12">
							<div class="section-title">
								<h2>New Product</h2>
								<blockquote class="blockquote-footer">
									our newest product which is rich in benefits
								</blockquote>
							</div>
						</div>
					</div>

					<div class="row justify-content-center mb-5">
						<div class="col-lg-12 col-xs-12">
							<div
								class="row portfolio-container"
								data-aos="fade-up"
								data-aos-delay="200">
									<div v-for="third in thirds" class="col-lg-4 col-md-6 portfolio-item">
										<div class="portfolio-wrap">
											<img
											:src="third.img"
											class="img-fluid"
											alt=""
											/>
											<div class="portfolio-info">
												<h4>Our New Product</h4>
												<p>Its Recomended</p>
												<div class="portfolio-links mt-3">
													<a
													:href="third.img"
													data-gall="productGallery"
													class="venobox btn btn-sm btn-primary text-white"
													title="Gilcam Propolis Testimoni"
													><i class="bx bx-plus"></i
														>
													</a>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>

					<h1 class="underline mt-5" style="margin-bottom: 15rem;"></h1>

					<div class="row justify-content-center">
						<div class="col-lg-12 col-xs-12 col-sm-12">
							<div class="section-title">
								<h2>Gallery Testimoni</h2>
								<p>
									Gallery evoush merupakan kumpulan dokumentasi berupa, testimoni product, dan dokumentasi lainnya.
								</p>
							</div>
						</div>
					</div>

					<div class="row justify-content-center">
						<div class="col-lg-12 col-xs-12 col-sm-12">

							<h2><u>Gilcam Propolis</u></h2>

							<div
								class="row portfolio-container"
								data-aos="fade-up"
								data-aos-delay="200">
									<div v-for="first in firsts" class="col-lg-4 col-md-6 portfolio-item">
										<div class="portfolio-wrap">
											<img
											:src="first.img"
											class="img-fluid"
											alt=""
											/>
											<div class="portfolio-info">
												<h4>Testimoni Product</h4>
												<p>Gilcam Propolis</p>
												<div class="portfolio-links mt-3">
													<a
													:href="first.img"
													data-gall="productGallery"
													class="venobox btn btn-sm btn-primary text-white"
													title="Gilcam Propolis Testimoni"
													><i class="bx bx-plus"></i
														>
													</a>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>

						<div class="col-lg-12 col-xs-12 col-sm-12 mt-5">
							<h2><u>Beauty Soap</u></h2>

							<div
								class="row portfolio-container"
								data-aos="fade-up"
								data-aos-delay="200">
									<div v-for="second in seconds" class="col-lg-4 col-md-6 portfolio-item">
										<div class="portfolio-wrap">
											<img
											:src="second.img"
											class="img-fluid"
											alt=""
											/>
											<div class="portfolio-info">
												<p>Beauty Soap</p>
												<div class="portfolio-links mt-3">
													<a
													:href="second.img"
													data-gall="productGallery"
													class="venobox btn btn-sm btn-primary text-white"
													title="Gilcam Propolis Testimoni"
													><i class="bx bx-plus"></i
														>
													</a>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>

						<div class="col-lg-12 col-xs-12 col-sm-12 mt-5">
							<h2><u>Daycream evoush</u></h2>

							<div
								class="row portfolio-container"
								data-aos="fade-up"
								data-aos-delay="200">
									<div v-for="fourth in fourths" class="col-lg-4 col-md-6 portfolio-item">
										<div class="portfolio-wrap">
											<img
											:src="fourth.img"
											class="img-fluid"
											alt=""
											/>
											<div class="portfolio-info">
												<p>Evoush Daycream</p>
												<div class="portfolio-links mt-3">
													<a
													:href="fourth.img"
													data-gall="productGallery"
													class="venobox btn btn-sm btn-primary text-white"
													title="Gilcam Propolis Testimoni"
													><i class="bx bx-plus"></i
														>
													</a>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>

					</div>

					<h1 class="underline mt-5" style="margin-bottom: 15rem;"></h1>

				</div>
			</div>
		</section>
	</div>
</template>


<script>
	export default{
		layout: 'pages',
		head(){
			return {
				title: 'Evoush::Gallery'
			}
		},
		data(){
			return{
				firsts: [
					{id:1, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/propolis/propolis1.jpeg'},
					{id:2, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/propolis/propolis2.jpeg'},
					{id:3, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/propolis/propolis3.jpeg'},
					{id:4, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/propolis/propolis4.jpeg'},
					{id:5, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/propolis/propolis5.jpeg'},
					{id:6, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/propolis/propolis6.jpeg'},
					{id:7, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/propolis/propolis7.jpeg'},
					{id:8, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/propolis/propolis8.jpeg'},
					{id:9, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/propolis/propolis9.jpeg'},
					{id:10, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/propolis/propolis10.jpeg'},
					{id:11, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/propolis/propolis11.jpeg'},
					{id:12, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/propolis/propolis12.jpeg'},
					{id:13, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/propolis/propolis13.jpeg'}
				],

				seconds: [
					{id:1, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/beautysoap/beautysoap1.jpeg'},
					{id:2, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/beautysoap/beautysoap2.jpeg'}
				],

				thirds: [
					{id: 1, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/new_products/639ee5eb-264b-433a-8924-b3622c7e2390.jpg'},
					{id: 2, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/new_products/4.jpg'},
					{id: 3, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/new_products/WhatsApp%20Image%202021-08-02%20at%2016.48.28.jpeg'},
					{id: 4, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/new_products/WhatsApp%20Image%202021-08-09%20at%2014.42.32%20(1).jpeg'},
					{id: 5, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/new_products/WhatsApp%20Image%202021-08-09%20at%2014.42.32.jpeg'}
				],

				fourths: [
					{id:1, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/daycreamevoush/WhatsApp%20Image%202021-07-28%20at%2015.58.58.jpeg'}
				]
			}
		},

		mounted(){
					     // Porfolio isotope and filter
					     $(window).on('load', function() {
					     	var portfolioIsotope = $('.portfolio-container').isotope({
					     		itemSelector: '.portfolio-item'
					     	});

					     	$('#portfolio-flters li').on('click', function() {
					     		$("#portfolio-flters li").removeClass('filter-active');
					     		$(this).addClass('filter-active');

					     		portfolioIsotope.isotope({
					     			filter: $(this).data('filter')
					     		});
					     		aos_init();
					     	});

		        // Initiate venobox (lightbox feature used in portofilo)
		        $('.venobox').venobox({
		        	'share': false
		        });

		        // Initiate aos_init() function
		        aos_init();

		    });
		}
	}
</script>