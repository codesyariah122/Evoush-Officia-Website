<template>
	<div>
		<div class="container-fluid">
			<div class="row justify-content-center mt-5">
				<div class="col-12 col-lg-12 col-xs-12 col-sm-12">
					<div class="float-right">
						<ColorModePicker/>
					</div>
				</div>

				<div class="row justify-content-end mt-3 mb-3">
					<div class="col-lg-12 col-xs-6 col-sm-6">
						<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#pages"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
					</div>
				</div>

				<div class="col-lg-12 col-xs-12 col-sm-12 mt-5">
					<SocialSharing :socials="socials"/>
				</div>
			</div>
		</div>


		<!-- Main -->
		<div class="row no-gutters mb-5">
			<div class="col-md-6 no-gutters">
				<div class="leftside d-flex justify-content-center align-items-center" :style="`background-image: url(${poster})`">
				</div>
			</div>

			<div class="col-md-6 no-gutters">
				<div class="rightside  justify-content-center align-items-center">
					<div class="container mt-5">
						<div class="row">
							<div class="col-lg-12 col-xs-12 col-sm-12">
								<div class="section-title">
									<h2 class="portfolio-title">Anniversary Party</h2>
								</div>
								<p class="blockquote-footer">
									Daftarkan segera data diri kalian untuk mengikuti beberapa lomba yang akan kami laksanakan dalam event anniversary party.<br>
								</p>
							</div>
							<div class="col-lg-12 col-xs-12 col-sm-12">
								<FormEvent/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- End Main -->




	</div>
</template>

<script>
	import FormEvent from '@/components/event/formRegisterEvent'
	import SocialSharing from '@/components/global/socialsharing'

	export default {
		components: {FormEvent, SocialSharing},
		layout: 'pages',

		data(){
			return {
				img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/assets/img/bg/wave.png',
				poster: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/event/anniversary.jpeg',
				socials: [
				{
					id: 1,
					icon: 'bx bxl-twitter bx-lg',
					network: 'twitter',
					url: 'https://evoush.com/',
					title: 'Evoush::Official | HomePage',
					description: 'Bisnis Network Marketing Zaman Now Ya Evoush Indonesia. yaa Evoush',
					quote: 'Raih kegemilangan berbisnis network marketing bersama kami, banyak reward yang kami siapkan untuk semangat yang gigih meraih pencapaian tertinggi.',
					image: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/banner/about/3.jpg',
					hashtags: 'Your Eternal Future',
					twitterUser: 'EvoushOfficial'
				},
				{
					id: 2,
					icon: 'bx bxl-facebook-circle bx-lg',
					network: 'facebook',
					url: 'https://evoush.com/',
					title: 'Evoush::Official | HomePage',
					description: 'Bisnis Network Marketing Zaman Now Ya Evoush Indonesia. yaa Evoush',
					quote: 'Raih kegemilangan berbisnis network marketing bersama kami, banyak reward yang kami siapkan untuk semangat yang gigih meraih pencapaian tertinggi.',
					image: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/banner/about/3.jpg',
					hashtags: 'Your Eternal Future'
				},
				{
					id: 3,
					icon: 'bx bxl-whatsapp bx-lg',
					network: 'whatsapp',
					url: 'https://evoush.com/',
					title: 'Evoush::Official | HomePage',
					description: 'Bisnis Network Marketing Zaman Now Ya Evoush Indonesia. yaa Evoush',
					quote: 'Raih kegemilangan berbisnis network marketing bersama kami, banyak reward yang kami siapkan untuk semangat yang gigih meraih pencapaian tertinggi.',
					image: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/banner/about/3.jpg',
					hashtags: 'Your Eternal Future'
				}
				]
			}
		}
	}
</script>


<style scoped>
.leftside, .rightside{
	height: 100vh;
	width: 100%;
}


/*@media screen and(min-width: 768px){
	.leftside, .rightside{
		height: 100vh;
	}

}*/

.leftside{
	/*background: red;*/
	margin-bottom: -5rem;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: 85% 70vh;
	background-repeat: no-repeat;
	background-position: center center;

}

.rightside{
	float: left;
	/*background: blue;*/
	width: 100%;
	margin-bottom: 5rem;
}

.rightside p{
	font-size: 31px;
}

@media (min-width: 992px) {
.leftside{
		background-size: 70% 80vh;
	}
}

</style>