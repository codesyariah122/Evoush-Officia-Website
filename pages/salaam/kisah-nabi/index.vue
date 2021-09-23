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
			</div>

			<div class="row justify-content-center">
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<div class="form-group">
						<select class="form-control" name="prophets" @change="ChangeProphet">
							<option calue="">-Pilih Nama Nabi-</option>
							<option v-for="prophet in prophets.data.result" :value="prophet.name">
								{{ prophet.name }}
							</option>
						</select>
					</div>
				</div>
				<!-- <pre>
					{{ shalats.data.result }}
				</pre> -->
				<div v-if="show" class="col-md-12 col-xs-12 col-sm-12 mb-5">
					<div class="card mb-3">
						<img :src="prophet.image_url" class="card-img-top" :alt="prophet.name">
						<div class="card-body card-asmaulhusna">
							<h5 class="card-title">{{ prophet.name }}</h5>
							<p class="card-text mb-5"><small class="text-muted">Lahir : {{ prophet.thn_kelahiran }}</small></p>
							<p class="card-text" v-html="prophet.description" style="text-align: justify;">
							</p>
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
			return {
				title: 'Kisah Nabi',
				prophet: {},
				show: false
			}
		},

		mounted(){
			console.log(this.prophets)
		},

		async asyncData({$axios}){
			const prophets = await $axios.get('https://islamic-api-indonesia.herokuapp.com/api/data/json/kisahnabi')
			return {
				prophets
			}
		},

		methods: {
			ChangeProphet(e){
				let change_name = e.target.value
				this.$axios.get('https://islamic-api-indonesia.herokuapp.com/api/data/json/kisahnabi')
				.then(res => {
					this.show = true
					console.log(res.data.result)
					const find = res.data.result.find(({name}) => name == change_name)
					this.prophet = find
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