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
			<!-- <pre>
				{{ results.data.result.data.length }}
			</pre> -->
			<div v-if="resultIndex < results.data.result.data.length" v-for="resultIndex in showToResults" class="col-md-4 col-xs-12 col-sm-12 mb-5">
				<div class="card" style="width: 18rem;">
					<div class="card-body card-asmaulhusna">
						<div class="ayat">
							<h5 class="card-title">
								<span class="circle-number">{{ results.data.result.data[resultIndex-1].id }}</span>. {{ results.data.result.data[resultIndex-1].arabic }}
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

			<div v-if="showToResults < results.data.result.data.length || results.data.result.data.length > showToResults" class="col-lg-12 col-xs-12 col-sm-12 mt-5">
				<div class="d-grid gap-2">
					<button @click="showToResults += 3" class="btn btn-outline-primary btn-load-more btn-lg btn-block">Load More</button>
				</div>
			</div>

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
			const showToResults = 9
			const totalResults = 1

			return {
				results,
				showToResults,
				totalResults
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
	.btn-load-more {
		background: linear-gradient(to right, #42A5F5, #5C6BC0);
		border: 2px solid #fff;
		color: #fff;
		border-radius: 10px;
		filter: drop-shadow(15px 13px 18px black);
		margin-bottom: 15rem;
		margin-top: 5rem;
	}
	.btn-load-more:hover{
		background: linear-gradient(to left, salmon, lightsalmon);
		transform: translateY(-10%);
	}

</style>