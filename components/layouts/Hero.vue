<template>
	<div>
		<!-- ======= Hero Section ======= -->
		<section id="hero" class="d-flex flex-column justify-content-center">
			<div class="container content-hero" data-aos="zoom-in" data-aos-delay="100">
				<div class="row justify-content-center">
					<div class="col-lg-8 col-xs-12 col-sm-12">
						<Logo class="logo"/>
						<!-- <WhiteLogo/> -->
					</div>
				</div>
				<div class="row justify-content-start">
					<div class="col-lg-6 col-xs-12 col-sm-12 mt-3 ml-5">
						<h1 style="font-family: 'Walkway';"><span style="font-weight: 800; margin-top:.5rem; font-size: 4rem;" v-html="brand"></span></h1>
						<p>
							<!-- evoush -->
							<span
							class="typed"
							data-typed-items="Agar sukses, Anda harus meletakan hati Anda pada bisnis Anda, dan Bisnis Anda, Di hati Anda"
							></span>
						</p>
						<div class="social-links">
							<a href="https://twitter.com/EvoushOfficial" class="twitter"><i class="bx bxl-twitter"></i></a>
							<a href="https://www.facebook.com/evoush.evoush.12" class="facebook"><i class="bx bxl-facebook"></i></a>
							<a href="https://www.instagram.com/evoush.official" class="instagram"><i class="bx bxl-instagram"></i></a>
							<a href="https://www.youtube.com/channel/UCIzNgeNDD58z8XNppkopwzw" class="linkedin"><i class="bx bxl-youtube"></i></a>
							<!-- <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a> -->
						</div>
					</div>

					<div class="col-lg-4 col-xs-12 col-sm-12">
						<div class="row justify-content-center interactive-product">
							<div class="col-lg-4">
								<!-- {{ imgBox }} -->
								<div v-if="loading">
									<img src="https://cdn.lowgif.com/full/fa958edd71a23366-.gif" class="img-fluid" width="450">
								</div>
								<div v-else>
									<img v-if="showBox" :src="`https://evoush-landing-api.herokuapp.com/${imgBox}`" :class="imgBox === '/images/for-hero/boxes/sachet.png' ? 'img-fluid rotate' : 'img-fluid'">
								</div>
							</div>
						</div>

						<!-- <pre>
							{{ imgBox }}
						</pre> -->

						<div class="col-md-2 box-sachet mb-5">
							<ul class="sachet" style="list-style: none;">
								<li v-if="loading">
									<img src="https://cdn.lowgif.com/full/fa958edd71a23366-.gif" class="img-fluid" width="150">
								</li>
								<li v-else v-for="(image, index) in images">
									<img id="sachet" :src="`https://evoush-landing-api.herokuapp.com/${image.src}`" :data-id="image.id" :key="image.id" class="img-fluid" @click="ClickMe(boxes[index].src, boxes[index].name, boxes[index].description)">
								</li>
							</ul>
						</div>
					</div>

				</div>
			</div>
		</section>
		<!-- End Hero -->
	</div>
</template>



<script>
	import Logo from '~/components/molecules/Logo'

	export default {
		components: {
			Logo
		},
		data(){
			return {
				ShowBox: null,
				ShoBoxAgain: null,
				brand: 'evoush official',
				images: [],
				boxes: [],
				imgBox: '',
				loading: null
			}
		},
		mounted(){
			this.setUpBoxes(),
			this.setUpMaterials(),
			this.typedHero(),
			this.getHeroCarousel()
		},

		methods:{
			getHeroCarousel(){
				// Testimonials carousel (uses the Owl Carousel library)
				$(".hero-carousel").owlCarousel({
					autoplay: true,
					dots: true,
					loop: true,
					items: 1
				});
			},
			typedHero(){
				if ($('.typed').length) {
					var typed_strings = $(".typed").data('typed-items');
					typed_strings = typed_strings.split(',')
					new Typed('.typed', {
						strings: typed_strings,
						loop: true,
						typeSpeed: 100,
						backSpeed: 50,
						backDelay: 2000
					});
				}
			},
			ClickMe(imgBox, nameBox, descBox){
				// this.loading = true
				this.ShowBox = true
				this.imgBox = imgBox
				// this.$swal({
				// 	title: nameBox,
				// 	text: descBox,
				// 	imageUrl: imgBox,
				// 	imageWidth: 500,
				// 	imageHeight: 400,
				// 	imageAlt: 'Custom image',
				// })
				// this.$toast(nameBox)
			},

			setUpMaterials(){
				this.loading = true
				this.$axios.get('https://evoush-landing-api.herokuapp.com/api/data/hero/images/materials')
				.then(res => {
					this.loading = false
					this.images = res.data.data
					// console.log(this.images)
				})
				.catch(err => {
					console.log(err.response)
				})
			},

			setUpBoxes(){
				this.showBox = true
				this.loading = true
				this.$axios.get('https://evoush-landing-api.herokuapp.com/api/data/hero/images/boxes')
				.then(res => {
					this.boxes = res.data.data
					this.ClickMe(this.boxes[0].src, this.boxes[0].name, '')
					this.loading = false
				})
			}
		}
	}
</script>


<style scoped>
	.interactive-product{
		margin-top: 1rem;
	}

	.interactive-product img{
		filter: drop-shadow(25px 15px 21px black);
		max-width: 350px;
		margin-bottom: 1rem;
		transform: translateY(5%);
	}

	.sachet{
		position: absolute;
		left: -1rem;
		bottom: -5rem;
		transform: translateX(-7%);
		display: flex;
	}

	.sachet ul li{
		list-style: none!important;
		display: inline-block;
		cursor: pointer;
	}
	.sachet img{
		filter: drop-shadow(25px 15px 21px black);
		margin: 0 -15px;
		max-width: 100px;
		cursor: pointer;
	}
	.sachet img:hover{
		transform: translateY(5px);
	}
	.interactive-product .rotate{
		transform: rotate(15deg);
	}
	@media (min-width: 992px) {
		.interactive-product img{
			max-width: 800px;
			margin-top: -15rem;
			margin-left: -12rem;
		}
		.interactive-product .rotate{
			transform: rotate(17deg);
		}
		.box-sachet{
			margin-top: 10rem;
			margin-bottom: 5rem;
		}
		.sachet{
			margin-top: -15rem;
			transform: translateX(-10%);
		}
		.sachet img{
			filter: drop-shadow(25px 15px 15px black);
			margin: 0 -20px;
			max-width: 250px;
			cursor: pointer;
			margin-left: -3.5rem;
		}

	}
</style>