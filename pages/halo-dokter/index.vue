<template>
	<div>
		<div class="container">
			<div class="row justify-content-end mt-2 mb-5">
				<div class="col-lg-1 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#pages"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
				</div>
			</div>
		</div>



		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<!-- <pre>
						{{ location }}
					</pre> -->
				</div>
			</div>


			<div class="row justify-content-center">
				<evoush-healthy :provinces="provinces" :location="location"/>
			</div>
		</div>

	</div>
</template>

<script>
	import EvoushHealthy from '@/components/HaloDokter/index'

	export default{
		layout: 'pages',
		components: {
			EvoushHealthy
		},

		async asyncData({$axios}){
			const provinces = await $axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi/')
			const ip = await $axios.$get('http://ip-api.com/json/')
			// console.log(ip)
			const location = await $axios.$get(`https://ipapi.co/${ip.query}/json/`)

			return {
				ip,
				provinces,
				location
			}
		},

		data(){
			return {
				socials: [
					{
						id: 1,
						icon: 'bx bxl-twitter bx-lg',
						network: 'twitter',
						url: 'https://evoush.com/halo-dokter',
						title: 'Evoush::Official | HaloDokter::Page',
						description: 'Di halaman ini anda bisa berkonsultasi pada dokter terpercaya yang telah kami siapkan',
						quote: 'Raih kegemilangan berbisnis network marketing bersama kami, banyak reward yang kami siapkan untuk semangat yang gigih meraih pencapaian tertinggi.',
						image: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/banner/about/3.jpg',
						hashtags: 'Your Eternal Future',
						twitterUser: 'EvoushOfficial'
					},
					{
						id: 2,
						icon: 'bx bxl-facebook-circle bx-lg',
						network: 'facebook',
						url: 'https://evoush.com/halo-dokter',
						title: 'Evoush::Official | HaloDokter::Page',
						description: 'Di halaman ini anda bisa berkonsultasi pada dokter terpercaya yang telah kami siapkan',
						quote: 'Raih kegemilangan berbisnis network marketing bersama kami, banyak reward yang kami siapkan untuk semangat yang gigih meraih pencapaian tertinggi.',
						image: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/banner/about/3.jpg',
						hashtags: 'Your Eternal Future',
					},
					{
						id: 3,
						icon: 'bx bxl-whatsapp bx-lg',
						network: 'whatsapp',
						url: 'https://evoush.com/halo-dokter',
						title: 'Evoush::Official | HaloDokter::Page',
						description: 'Di halaman ini anda bisa berkonsultasi pada dokter terpercaya yang telah kami siapkan',
						quote: 'Raih kegemilangan berbisnis network marketing bersama kami, banyak reward yang kami siapkan untuk semangat yang gigih meraih pencapaian tertinggi.',
						image: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/banner/about/3.jpg',
						hashtags: 'Your Eternal Future',
					}
				]
			}
		}
	}
</script>