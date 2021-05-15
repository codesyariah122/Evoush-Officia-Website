<template>
	<div>
		<div id="intents">
			<div class="container mt-5">
				<div v-for="panel in panels" >
					<div v-if="panel.id % 2 == 1">
						<div class="row">
							<div class="col-md-4">
								<div data-aos="zoom-out-right" data-aos-easing="ease-out-sine" data-aos-duration="1500">
									<h1 v-html="panel.context.header"></h1>
									<p v-html="panel.context.paragraph"></p>
								</div>
							</div>
							<div class="col-md-6 col-xs-6 col-sm-6">
								<div data-aos="zoom-out-left" data-aos-easing="ease-in-sine" data-aos-duration="1500">
									<img :src="panel.vector" class="img-responsive intents-img">
								</div>
							</div>
						</div>
					</div>
					<div v-else>
						<div class="row">
							<div class="col-md-6 col-xs-6 col-sm-6">
								<div data-aos="zoom-out-left" data-aos-easing="ease-in-sine" data-aos-duration="1500">
									<img :src="panel.vector" class="img-responsive intents-img">
								</div>
							</div>
							<div class="col-md-4">
								<div data-aos="zoom-out-right" data-aos-easing="ease-in-sine" data-aos-duration="1500">
									<h1 v-html="panel.context.header"></h1>
									<p class="mt-5" v-html="panel.context.paragraph"></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	import ImgPanelSatu from '~/assets/images/animated/anim32.gif'
	import ImgPanelDua	from '~/assets/images/animated/anim33.gif'
	export default {
		data(){
			return {
				panels: [
					{
						id:1,
						context: {
							header: `Tunjukan <span style="font-family: 'SpringSakura'; color: tomato;"> Strategimu </span> agar Anda dikenal`,
							paragraph: `<b><u>Dedikasikan Diri anda</u></b> dengan seluruh kemampuan anda, dan buat orang lain tertarik untuk mencoba <i class="fas fa-air-freshener" style="font-size: 18px;"></i> produk kita. Setiap hasil kerja kerasmu akan dihargai dengan nilai kepuasan oleh pengguna.<i class="far fa-calendar-check text-success"></i>.`
						},
						vector: ImgPanelSatu,
					},
					{
						id: 2,
						context: {
							header: `Bergabung  dan bersinarlah bersama <span style="font-family: 'Walkway'; font-size: 37px; color: red; margin-left: 1rem;">Evoush`,
							paragraph: `Berbisnis di Evoush merupakan sebuah investasi yang menjanjikan . Setelah anda bergabung  <i class="fas fa-mobile-alt"></i>, anda akan menjadi bagian dalam bisnis Bersama kami.Bersama kami merupakan  pilihan yang tepat. Karena, anda akan memiliki pengalaman baru yang mengesankan dalam dunia bisnis. <br/> Evoush dengan rangkaian produk kesehatan dan kecantikan yang merupakan sebuah modal lengkap bagi diri dan bisnis anda .`
						},
						vector: ImgPanelDua,
					}
				]
			}
		}
	}
</script>


<style>
@media only screen and (max-device-width: 812px) {
	#intents{
		width: 100%!important;
		margin-top: -1rem;
	}
	#intents h1{
		margin-left: 1rem;
		text-align: center;
	}
	#intents p{
		text-indent: 21px;
		text-align: justify;
		margin-top: 1rem;
		margin-left: 1rem;
		text-transform: capitalize;
	}
	.intents-img{
		width: 320px !important;
		margin-left: -.1rem;
	}

}
/* DESKTOP VERSION */
  @media (min-width: 992px) { 
  	#intents{
  		width: 100%!important;
  	}
	#intents p{
		font-family: 'Poiret One';
		font-size: 21px;
		margin-top: 1rem!important;
		margin-left: 1.3rem;
		text-align: justify;
		text-indent: 18px;
		text-transform: capitalize;
	}
	.intents-img{
		width: 800px !important;
		margin-left: -.1rem;
	}
}
</style>