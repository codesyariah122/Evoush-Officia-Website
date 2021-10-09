<template>
	<div>
		<!-- ======= Footer ======= -->
		<footer id="footer">
			<div class="container">
				<h3>PT. Pineleng Indah Cemerlang</h3>
				<p>Dengan bangga mempersembahkan merk dagang yang di usungnya yaitu <span style="color:#ff3b40;">evoush</span> dengan keunggulan pada kualitas product-product nya, sesuai dengan tagline yang kami usung yaitu <strong class="text-primary">Your Eternal Future</strong>.</p>
				<div class="social-links">
					<a href="https://twitter.com/EvoushOfficial" class="twitter"><i class="bx bxl-twitter"></i></a>
					<a href="https://www.facebook.com/evoush.evoush.12" class="facebook"><i class="bx bxl-facebook"></i></a>
					<a href="https://www.instagram.com/evoush.official" class="instagram"><i class="bx bxl-instagram"></i></a>
					<a href="https://www.youtube.com/channel/UCIzNgeNDD58z8XNppkopwzw" class="linkedin"><i class="bx bxl-youtube"></i></a>
					<!-- <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a> -->
				</div>
				<div class="copyright">
					&copy; Copyright@{{date}} | <strong><span style="color:#ff3b40;">evoush</span></strong>. All Rights Reserved
				</div>
				<div class="credits">
					<!-- All the links in the footer should remain intact. -->
					<!-- You can delete the links only if you purchased the pro version. -->
					<!-- Licensing information: [license-url] -->
					<!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/ -->
					Hak cipta di lindungi <a href="https://evoush.com/privacy-policy">Oleh PT. Pineleng Indah Cemerlang</a>
				</div>
				<div class="mt-5 col-lg-12 col-xs-12 col-sm-12">
					<img :src="require('~/assets/qrcode/qrcode_evoush.com.png')" class="img-fluid" width="100">
				</div>

				<SiteMap/>

			</div>
		</footer><!-- End Footer -->
	</div>
</template>

<script>
	import SiteMap from '@/components/molecules/SiteMap'

	export default{
		components: {
			SiteMap
		},
		data(){
			return {
				date: new Date().getFullYear()
			}
		},



	}
</script>

