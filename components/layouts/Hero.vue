<template>
	<div>
		<!-- ======= Hero Section ======= -->
		<section id="hero" class="d-flex flex-column justify-content-center">
			<div class="container content-hero" data-aos="zoom-in" data-aos-delay="100">
				<div class="row justify-content-center mt-5">
					<div class="col-lg-8 col-xs-12 col-sm-12">
						<Logo />
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
								<img :src="imgBox" class="img-fluid">
							</div>
						</div>

							<div class="col-md-2 box-sachet">
								<ul class="sachet" style="list-style: none;">
									<li v-for="(image, index) in images">
										<img id="sachet" :src="image.src" :data-id="image.id" :key="image.id" class="img-fluid" @click="ClickMe(boxes[index].src, boxes[index].name, boxes[index].description)">
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
				images: [
					{
						id:1,
						src: 'https://raw.githubusercontent.com/evoush-products/evoush-products.github.io/main/assets/img/products/material/evost_material.png'
					},
					{
						id:2,
						src: 'https://raw.githubusercontent.com/evoush-products/evoush-products.github.io/main/assets/img/products/material/kileon_material.png'
					},
					{
						id:3,
						src: 'https://raw.githubusercontent.com/evoush-products/evoush-products.github.io/main/assets/img/products/material/gilcam_material.png'
					},
					{
						id:4,
						src: 'https://raw.githubusercontent.com/evoush-products/evoush-products.github.io/main/assets/img/products/material/eikana_material.png'
					}
				],
				boxes: [
					{
						id:1,
						name: 'Evost 5000 Collagen',
						description: 'Mengandung 500mg Collagen per sajian, menambah produksi kolagen di dalam tubuh, menjadikan booster bagi kesehatan kulit kita.',
						src: 'https://raw.githubusercontent.com/evoush-products/evoush-products.github.io/main/assets/img/products/sachet.png'
					},
					{
						id:2,
						name: 'Kileon',
						description: 'Kandungan Collagen pada KILEON bermanfaat untuk membantu memelihara kesehatan kulit, meningkatkan masa otot, memperlambat penuaan dini mengurangi keriput serta meningkatkan elastisitas kulit, mencegah kerusakan tulang rawan sendi, menguatkan tulang dan gigi, serta mengatasi kerontokan rambut.',
						src: 'https://raw.githubusercontent.com/evoush-products/evoush-products.github.io/main/assets/img/products/kileon_product.png'
					},
					{
						id:3,
						name: 'Gilcam Propolis',
						description: 'Gilcam Propolis kami di produksi dengan kualitas yang terjaga dan tentunya kaya manfaat bagi kesehatan anda.',
						src: 'https://raw.githubusercontent.com/evoush-products/evoush-products.github.io/main/assets/img/products/gilcam2.png'
					},
					{
						id:4,
						name: 'Eikana',
						description: 'Fish Oil pada EIKANA bermanfaat untuk membantu meperlancar peredaran darah dan mengurangi tekanan darah tinggi, menangkal radikal bebas, menjaga kesehatan kulit, mencegah kerusakan sel hati, meningkatkan fungsi kognitif, serta membantu mengontrol berat badan.',
						src: 'https://raw.githubusercontent.com/evoush-products/evoush-products.github.io/main/assets/img/products/eikana_box.png'
					}
				],
				imgBox: ''
			}
		},
		mounted(){
			this.typedHero(),
			this.getHeroCarousel(),
			this.ClickMe(this.boxes[0].src, this.boxes[0].name, '')
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
				this.ShowBox = true
				this.imgBox = imgBox
				this.$swal({
					title: nameBox,
					text: descBox,
					imageUrl: imgBox,
					imageWidth: 500,
					imageHeight: 400,
					imageAlt: 'Custom image',
				})
				// this.$toast(nameBox)
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
		max-width: 250px;
		margin-bottom: 2rem;
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
		margin-top: 2.5rem;
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

	@media (min-width: 992px) {
		.interactive-product img{
			max-width: 800px;
			margin-top: -7rem;
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
			filter: drop-shadow(15px 13px 18px black);
			margin: 0 -20px;
			max-width: 250px;
			cursor: pointer;
		}
	}
</style>