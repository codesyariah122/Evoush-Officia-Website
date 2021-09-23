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
								<h2>Gallery Testimoni</h2>
								<p>
									Gallery evoush merupakan kumpulan dokumentasi berupa, testimoni product, dan dokumentasi lainnya.
								</p>
							</div>
						</div>
					</div>

					<Gilcam :reverse="reverse"/>

					<Evost :thirds="thirds"/>

					<BeautySoap :reverseSeconds="reverseSeconds"/>

					<DayCream :fourths="fourths"/>

					<h1 class="underline mt-5" style="margin-bottom: 15rem;"></h1>

				</div>
			</div>
		</section>
	</div>
</template>


<script>
	import {Gilcam, Evost, BeautySoap, DayCream} from '@/components/Testimony'

	export default{
		layout: 'pages',

		components:{
			Gilcam,
			Evost,
			BeautySoap,
			DayCream
		},

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
					{id:13, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/propolis/propolis13.jpeg'},
					{id:14, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/propolis/propolis14.jpeg'},
					{id:15, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/propolis/propolis15.jpeg'},
					{id:16, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/propolis/propolis16.jpeg'},
					{id:17, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/propolis/WhatsApp%20Image%202021-09-20%20at%2012.23.29.jpeg'},
					{id:18, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/propolis/WhatsApp%20Image%202021-09-21%20at%2011.25.37%20(1).jpeg'},
					{id:19, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/propolis/WhatsApp%20Image%202021-09-21%20at%2011.25.37.jpeg'}
				],

				seconds: [
					{id:1, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/beautysoap/beautysoap1.jpeg'},
					{id:2, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/beautysoap/beautysoap2.jpeg'},
					{id:3, img: 'https://raw.githubusercontent.com/evoush-products/bahan_evoush/main/bahan_gallery/image/beautysoap/beautysoap3.jpeg'}
				],

				thirds: [
					{id: 1, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/new_products/639ee5eb-264b-433a-8924-b3622c7e2390.jpg'},

					{id: 2, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/new_products/WhatsApp%20Image%202021-09-21%20at%2011.25.38.jpeg'},

					{id: 3, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/new_products/WhatsApp%20Image%202021-08-02%20at%2016.48.28.jpeg'}

				],

				fourths: [
					{id:1, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/daycreamevoush/WhatsApp%20Image%202021-07-28%20at%2015.58.58.jpeg'}
				]
			}
		},

		computed: {
			reverse(){
				return this.firsts.slice().reverse()
			},
			reverseSeconds(){
				return this.seconds.slice().reverse()
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