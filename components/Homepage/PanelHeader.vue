<template>
	<div>
		<!-- introd -->
		<div id="introduction" v-for="panel in panels">
			<div data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1500">
				<div class="panel panel-default">
					<div class="panel-body">
						<div class="row">
							<div data-aos="fade-left">
								<div class="col-md-3">
									<img :src="panel.vector.first" class="img-responsive anim">
								</div>
							</div>

							<div class="col-md-6">
								<h2 class="ml-1" v-html="panel.context.header"> </h2>
								<p class="mt-3" v-html="panel.context.paragraph"></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- end intro -->
	</div>
</template>

<script>
	import ImgPanelSatu from '~/assets/images/animated/anim31.gif'

	export default {
		data(){
			return {
				panels: [
					{
						id:1,
						context: {
							header: `Buat Rencana Besar Bersama <span style="font-family: 'Reey Regular'; color: tomato;">Evoush</span>`,
							paragraph: `Mulailah berkembang bersama <b><u></u>Evoush</b>.  Buat kejutan dengan menentukan rencana <i class="fas fa-tags text-info"></i> penjualan anda diawal, jual produk, kreativitas dan kemampuan anda bersama team terhebat anda di Evoush. <b><u>Tunjukkan Pada Dunia</u></b> , bahwa anda mampu menciptakan sesuatu yang dapat membantu orang lain.`
						},
						vector: {
							first: ImgPanelSatu
						}
					}
				]
			}
		}
	}

	
</script>

<style>
.panel{
	margin-left: 8rem;
}
.panel-body{
	margin-left: 2rem;
	margin-top: 2rem;
}
.panel-body img{
	margin-left: -.3rem!important;
}
.panel-body h2 p{
	margin-left: 2rem!important;
}
/*mobile*/
@media only screen and (max-device-width: 812px) {
	.panel{
		width: 91%;
		height: 95vh;
		margin-left: 1rem;
	}
	.panel-body img{
		margin-left: -1.1rem!important;
		width: 280px!important;
		margin-top: -1.3rem;
	}
}
</style>