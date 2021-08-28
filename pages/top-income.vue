<template>
	<div>
		<div class="container">
			<div class="row justify-content-end mt-3 mb-3">
				<div class="col-lg-1 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#pages"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col-lg-12 col-xs-12 col-sm-12 text-center">
					<div class="section-title">
						<h2 class="portfolio-title">Top Income</h2>
					</div>
				</div>
				<!-- <div class="col-lg-12 col-xs-12 col-sm-12 mt-2 mb-5">
					<div class="embed-responsive embed-responsive-16by9">
						<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/2EGfDiGcK-E" allowfullscreen></iframe>
					</div>
				</div> -->
			</div>

			<!-- <h1 class="underline" style="margin-bottom: 5rem;"></h1> -->

			<div class="row justify-content-center">
				<div class="col-lg-12 col-xs-12 col-sm-12 mt-2">
					<p class="blockquote-footer">Berikut daftar member <strong>10 Besar</strong> peraih <strong>top income</strong> yang kami berikan pada para member yang meraih pencapian terbaik dalam kurun periode yang telah kami tentukan.</p>
				</div>
				<!-- <TopIncome /> -->
			</div>

		</div>
	</div>
</template>

<script>
	export default{
		layout: 'pages',
		head(){
			return {
				title: 'Evoush::Official | Evoush::TopIncomePage'
			}
		},

		data(){
			return {
			}
		},

		mounted(){
		},

		methods: {

		}
	}
</script>


