<template>
	<div class="container">
		<div class="row justify-content-end mt-2 mb-5">
			<div class="col-lg-1 col-xs-6 col-sm-6">
				<nuxt-link class="btn btn-danger ml-3 mt-3" to="/salaam"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
			</div>
		</div>

		<div class="row justify-content-center">
			<div class="col-lg-12 col-xs-12 col-sm-12">
				<div class="section-title">
					<h2>{{ title }}</h2>
				</div>
			</div>
		</div>

		<div class="row justify-content-center">
			<center>
				<div v-for="result in results.data.result.data" class="col-md-4 col-xs-12 col-sm-12 mb-5">
					<div class="card" style="width: 18rem;">
						<div class="card-body">
							<div class="ayat">
								<h5 class="card-title">
									<span class="circle-number">{{ result.id }}</span>. {{ result.arabic }}
								</h5>
							</div>
	<!-- 						<h6 class="card-subtitle mb-2 text-muted">
								{{ result.translation_en }}
							</h6>
							<p class="card-text">
								{{ result.translation_id }}
							</p> -->
						</div>
					</div>
				</div>
			</center>
		</div>
	</div>
</template>

<script>
	export default {
		layout: 'pages',
		data(){
			return{
				title: 'kumpulan wirid',
				loading: null
			}
		},

		mounted(){
			console.log(this.results)
		},

		async asyncData({$axios}){
			const results = await $axios.get('https://islamic-api-indonesia.herokuapp.com/api/data/json/wirid')

			return {
				results
			}
		}
	}
</script>

<style>
	.card-header h3{
		font-family: 'quran';
		font-weight: 700;
	}
	.card-body .card-title h6{
		font-family: 'quran';
		font-weight: 700;
	}

	.ayat h5{
		font-family: 'quran';
		font-weight: 700;
		font-size: 31px;
	}

	.ayat h3{
		font-family: 'quran';
		font-weight: 700;
	}

	.ayat h1{
		font-family: 'quran';
		font-weight: 700;
	}

	.ayat h4{
		font-size: 21px;
	}

	.circle-number  {
		font-family: 'AlQalam';
		background: rgba(0, 0, 0, 0.7);
		font-size: 1.7rem !important;
		border-radius: 0.8em;
		-moz-border-radius: 0.8em;
		-webkit-border-radius: 0.8em;
		color: #ffffff;
		display: inline-block;
		font-weight: bold;
		line-height: 1.5em;
		margin-right: 5px;
		text-align: center;
		width: 1.6em;
	}

	.page-link {
		cursor: pointer;
	}

	.disabled{
		cursor: not-allowed;
	}

</style>