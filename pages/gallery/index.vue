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

					<!-- <pre>
						{{ firsts.data.data }}
					</pre> -->

					<Gilcam :reverse="reverse"/>

					<BeautySoap :reverseSeconds="reverseSeconds"/>

					<Evost :thirds="thirds.data.data"/>

					<DayCream :fourths="fourths.data.data"/>

					<BodySerum :fifths="fifths.data.data"/>

					<Peeling :sixths="sixths.data.data"/>

					<SkinCare :sevenths="sevenths.data.data"/>

					<Klev :eights="eights.data.data"/>

					<h1 class="underline mt-5" style="margin-bottom: 15rem;"></h1>

				</div>
			</div>
		</section>
	</div>
</template>


<script>
	import {Gilcam, Evost, BeautySoap, DayCream, BodySerum, Peeling, SkinCare, Klev} from '@/components/Testimony'

	export default{
		layout: 'pages',

		components:{
			Gilcam,
			Evost,
			BeautySoap,
			DayCream,
			BodySerum,
			Peeling,
			SkinCare,
			Klev
		},

		head(){
			return {
				title: 'Evoush::Gallery'
			}
		},

		async asyncData({$axios}){
			const firsts = await $axios.get('https://evoush-landing-api.herokuapp.com/api/data/gallery/testimony/first')
			const seconds = await $axios.get('https://evoush-landing-api.herokuapp.com/api/data/gallery/testimony/second')
			const thirds = await $axios.get('https://evoush-landing-api.herokuapp.com/api/data/gallery/testimony/third')
			const fourths = await $axios.get('https://evoush-landing-api.herokuapp.com/api/data/gallery/testimony/fourth')
			const fifths = await $axios.get('https://evoush-landing-api.herokuapp.com/api/data/gallery/testimony/fifth')
			const sixths = await $axios.get('https://evoush-landing-api.herokuapp.com/api/data/gallery/testimony/sixth')
			const sevenths = await $axios.get('https://evoush-landing-api.herokuapp.com/api/data/gallery/testimony/seventh')
			const eights = await $axios.get('https://evoush-landing-api.herokuapp.com/api/data/gallery/testimony/eight')

			return {
				firsts,
				seconds,
				thirds,
				fourths,
				fifths,
				sixths,
				sevenths,
				eights
			}
		},

		computed: {
			reverse(){
				return this.firsts.data.data.slice().reverse()
			},
			reverseSeconds(){
				return this.seconds.data.data.slice().reverse()
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