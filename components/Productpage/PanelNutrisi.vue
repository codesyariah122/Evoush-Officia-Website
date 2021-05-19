<template>
	<div>
		<div id="intents-nutrisi">
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
							<div class="col-md-8 col-xs-8 col-sm-8">
								<div data-aos="zoom-out-left" data-aos-easing="ease-in-sine" data-aos-duration="1500">
									<div v-if="panel.iframe" class="embed-responsive embed-responsive-1by1">
										<iframe v-if="panel.iframe" :src="panel.iframe"  width="560" height="397" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
									</div>
									<div v-else>
										<img :src="panel.vector" class="img-responsive intents-nutrisi-img">
									</div>
								</div>
							</div>
						</div>
					</div>
					<div v-else>
						<div class="row genap-nutrisi">
							<div class="col-md-6 col-xs-6 col-sm-6">
								<div data-aos="zoom-out-left" data-aos-easing="ease-in-sine" data-aos-duration="1500">
									<img :src="panel.vector" class="img-responsive intents-nutrisi-img">
								</div>
							</div>
							<div class="col-md-6 col-xs-6 col-sm-6">
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
	import ImgPanelSatu from '~/assets/images/product/nutrisi/vector/nutrisi3.jpg'
	import ImgPanelDua	from '~/assets/images/product/nutrisi/anim/nutrisi_anim3.gif'

	export default {
		data(){
			return {
				panels: [
					{
						id:1,
						context: {
							header: `Healthy <span style="font-family: 'Walkway'; color: tomato;"> Evoush</span>`,
							paragraph: `<b><u>Product Nutrisi Evoush</u></b> merupakan hasil karya dari bahan pilihan di proses dengan kualitas terbaik, tidak hanya <i class="fas fa-air-freshener" style="font-size: 18px;"></i>, akan menjadi sebuah faktor unggul bagi <span style="font-family:Reey Regular; color:#ff3b40;"> Bisnis  </span> Anda di <span style="font-family: Walkway; color:#ff3b40; font-weight: 900;"><b>Evoush</b></span>, namun produk nutrisi evoush kaya akan manfaat. <i class="far fa-calendar-check text-success"></i>.`
						},
						vector: '',
						iframe: "https://www.facebook.com/plugins/video.php?height=397&href=https%3A%2F%2Fwww.facebook.com%2Fmynik.evoush%2Fvideos%2F3086367111463377%2F&show_text=false&width=560"
					},
					{
						id:2,
						context: {
							header: `Ilustrasi <span style="font-family: 'SpringSakura'; color: tomato;"> Prolog </span> Kesatu`,
							paragraph: `<b><u>Dedikasikan Diri anda</u></b> dengan seluruh kemampuan anda, dan buat orang lain tertarik untuk mencoba <i class="fas fa-air-freshener" style="font-size: 18px;"></i> produk kita. Setiap hasil kerja kerasmu akan dihargai dengan nilai kepuasan oleh pengguna.<i class="far fa-calendar-check text-success"></i>.`
						},
						vector: ImgPanelSatu,
					},
					{
						id: 3,
						context: {
							header: `Ilustrasi <span style="font-family: 'SpringSakura'; color: tomato;"> Prolog </span> Kedua`,
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
	#intents-nutrisi{
		width: 100%!important;
		margin-top: -1rem;
	}
	#intents-nutrisi h1{
		margin-left: 1rem;
		text-align: center;
	}
	#intents-nutrisi p{
		text-indent: 21px;
		text-align: justify;
		margin-top: 1rem;
		margin-left: 1rem;
		text-transform: capitalize;
	}
	.intents-nutrisi-img{
		width: 320px !important;
		margin-left: -.1rem;
	}

}
/* DESKTOP VERSION */
  @media (min-width: 992px) { 
  	#intents-nutrisi{
  		width: 100%!important;
  		margin-top: 10rem;
  	}
	#intents-nutrisi p{
		font-family: 'Poiret One';
		font-size: 21px;
		margin-top: 1rem!important;
		margin-left: 1.3rem;
		text-align: justify;
		text-indent: 18px;
		text-transform: capitalize;
	}
	.intents-nutrisi-img{
		width: 800px !important;
		margin-left: 1rem;
	}
	.genap-nutrisi {
		margin-top: 1rem;
		margin-bottom: 3rem;
	}
	.genap-nutrisi h1,p {
		margin-top: 5rem;
		margin-left: 2rem;
	}
	.genap-nutrisi img{
		width: 500px !important;
		margin-left: -1rem;
	}
}
</style>