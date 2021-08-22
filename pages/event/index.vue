<template>
	<div>
		<div class="container">
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

				<div class="col-lg-12 col-xs-12 col-sm-12">
					<SocialSharing :socials="socials"/>
				</div>
			</div>

			<Event/>

		</div>
	</div>
</template>

<script>
	import SocialSharing from '@/components/global/socialsharing'
	import Event from '@/components/event/index'

	export default {
		layout: 'pages',
		components: {
			SocialSharing,
			Event
		},

		data(){
			return {
				socials: [
					{
						id: 1,
						icon: 'bx bxl-twitter bx-lg',
						network: 'twitter',
						url: 'https://evoush.com/event',
						title: 'Evoush::Official | Event::Evoush',
						description: 'Dokumentasi perhelatan event evoush yang telah berlangsung beberapa waktu dan kami kumpulkan di dalam page event ini.',
						quote: 'Raih kegemilangan berbisnis network marketing bersama kami, banyak reward yang kami siapkan untuk semangat yang gigih meraih pencapaian tertinggi.',
						image: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/banner/event/1.jpg',
						hashtags: 'Your Eternal Future',
						twitterUser: 'EvoushOfficial'
					},
					{
						id: 2,
						icon: 'bx bxl-facebook-circle bx-lg',
						network: 'facebook',
						url: 'https://evoush.com/event',
						title: 'Evoush::Official | Event::Evoush',
						description: 'Dokumentasi perhelatan event evoush yang telah berlangsung beberapa waktu dan kami kumpulkan di dalam page event ini.',
						quote: 'Raih kegemilangan berbisnis network marketing bersama kami, banyak reward yang kami siapkan untuk semangat yang gigih meraih pencapaian tertinggi.',
						image: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/banner/event/1.jpg',
						hashtags: 'Your Eternal Future'
					},
					{
						id: 3,
						icon: 'bx bxl-whatsapp bx-lg',
						network: 'whatsapp',
						url: 'https://evoush.com/event',
						title: 'Evoush::Official | Event::Evoush',
						description: 'Dokumentasi perhelatan event evoush yang telah berlangsung beberapa waktu dan kami kumpulkan di dalam page event ini.',
						quote: 'Raih kegemilangan berbisnis network marketing bersama kami, banyak reward yang kami siapkan untuk semangat yang gigih meraih pencapaian tertinggi.',
						image: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/banner/event/1.jpg',
						hashtags: 'Your Eternal Future'
					}
				]
			}
		}

	}
</script>