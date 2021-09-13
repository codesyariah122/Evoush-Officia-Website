<template>
	<div>
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
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<form>
						<div class="form-group">
							<select class='form-control' @change="ChangeDoa">
								<option value="">-Pilih Doa-</option>
								<option v-for="(option, index) in options.data.result.data" :value="option.title">
									{{ option.title }}
								</option>
							</select>
						</div>
					</form>
				</div>

				<div class="col-lg-12 col-xs-12 col-sm-12">

					<div v-if="loading">
						<img src="https://cfr.lps.go.id/images/Animation/Progressbar.gif" class="img-fluid">
					</div>

					<div v-if="success" class="card mt-5 mb-5">
						<div class="card-body">
							<h5 class="card-title">{{ pray.title }}</h5>
							<div class="ayat mt-3 mb-5">
								<h4>
									{{ pray.arabic }}
								</h4>
							</div>
							<small class="text-success">
								{{ pray.latin }}
							</small>
							<blockquote class="blockquote-footer">
								{{ pray.translation }}
							</blockquote>
						</div>
					</div>
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
				title: 'Kumpulan Doa Harian',
				pray: {},
				loading: null,
				success: false
			}
		},

		mounted(){
		},

		async asyncData({$axios}){
			const options = await $axios.get('https://islamic-api-indonesia.herokuapp.com/api/data/json/doaharian')

			return {
				options
			}
		},

		methods:{
			ChangeDoa(e){
				this.loading = true
				const key = e.target.value
				this.$axios.get('https://islamic-api-indonesia.herokuapp.com/api/data/json/doaharian')
				.then(res => {
					this.success = true
					this.loading = false
					const results = res.data.result.data
					const find = results.find(({title}) => title === key)
					this.pray = find
					console.log(this.pray)
				})
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

	.ayat h4{
		font-family: 'quran';
		font-weight: 700;
		font-size: 41px;
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