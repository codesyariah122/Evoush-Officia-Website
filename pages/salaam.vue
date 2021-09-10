<template>
	<div>
		<div class="container">
			<div class="row justify-content-end mt-2 mb-5">
				<div class="col-lg-1 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#pages"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
				</div>
			</div>

			<div class="row justify-content-center mt-5 mb-5">
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<h5>Filter Quran berdasarkan nama surah</h5>
				</div>

				<div class="col-lg-12 col-xs-12 col-sm-12">
					<div class="form-group">
						<select class="form-control" id="exampleFormControlSelect1" @change="changeSurah">
							<option value="">-pilih surah-</option>
							<option v-for="surah in surahLists.data" v-bind:value="surah.number">{{surah.name.transliteration.id}}</option>
						</select>
					</div>
				</div>

			</div>

			<div class="row justify-content-center">

				<div v-if="showLists" class="col-lg-6 col-xs-12 col-sm-12">
					<!-- <h3 class="mt-2 mb-5">{{select.name.transliteration.id}}</h3> -->
					<SurahCard :select="select"/>
				</div>

				<div v-else v-for="surah in surahLists.data" class="col-lg-4 col-xs-4 col-sm-4 mb-3">
					<div class="card card-quran">
						<div class="card-body">
							<h5 class="card-title">{{surah.name.transliteration.id}} ({{surah.name.translation.id}})</h5>
							<h6 class="card-subtitle mb-2 text-muted">{{surah.name.long}}</h6>
							<p class="card-text">
								<ul style="list-style: none;">
									<li>Surah ke : {{surah.number}}</li>
									<li>Jumlah Ayat : {{surah.numberOfVerses}}</li>
								</ul>
								<blockquote class="blockquote-footer">
									{{surah.tafsir.id}}
								</blockquote>
							</p>
							<nuxt-link :to="{name: 'surah-nomor', params: {nomor: surah.number}}" class="card-link btn btn-outline-primary btn-block">Baca Surah</nuxt-link>
							<!-- <a href="#" class="card-link">Another link</a> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import SurahCard from '@/components/Salaam/surahcard'

	export default {
		layout: 'pages',
		components: {
			SurahCard
		},
		data(){
			return {
				showLists: false,
				select: {}
			}
		},

		head(){
			return {
				title: 'Evoush::Salaam | Quran::Online'
			}
		},

		async asyncData({$axios, $config}){
			const surahLists = await $axios.$get('https://api.quran.sutanlab.id/surah')

			return {
				surahLists
			}
		},

		mounted(){
			localStorage.removeItem('nomor-ayat')
		},

		methods: {
			changeSurah(e){
				this.showLists = true
				const number = e.target.value
				if(number !== ""){
					this.$axios.get(`https://api.quran.sutanlab.id/surah/${number}`)
					.then(res => {
						this.select = res.data.data
						console.log(this.select)
					})
					.catch(error => {
						console.log( (error.response || {}).data );
						// return false;
					})
				}else{
					this.showLists = false
				}
			}
		}
	}
</script>


<style scoped>
.quran-text{
	font-family: 'quran';
}
.card-body .card-subtitle h6{
	font-family: 'quran';
	font-weight: 700;
}

.circle-number {
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
</style>