<template>
	<div>
		<div class="container">
			<div class="row justify-content-end mt-2 mb-5">
				<div class="col-lg-1 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/salaam"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
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

			<div v-if="showLists" class="row justify-content-center">
				<div class="col-lg-6 col-xs-12 col-sm-12">
					<!-- <h3 class="mt-2 mb-5">{{select.name.transliteration.id}}</h3> -->
					<SurahCard :select="select"/>
					<br>
					<br>
				</div>
			</div>

			<div v-else class="row justify-content-center">

				<div v-if="surahIndex < surahLists.data.length" v-for="surahIndex in surahToShow" class="col-lg-4 col-xs-4 col-sm-4 mb-3">
					<!-- {{ surahLists[surahIndex].name.transliteration.id }}
					<br> -->
					<!-- {{ surahIndex }} -->

					<div class="card card-quran">
						<div class="card-body">
							<h5 class="card-title">{{surahDatas[surahIndex-1].name.transliteration.id}} ({{surahDatas[surahIndex-1].name.translation.id}})</h5>
							<h6 class="card-subtitle mb-2 text-muted">{{surahDatas[surahIndex-1].name.long}}</h6>
							<p class="card-text">
								<ul style="list-style: none;">
									<li>Surah ke : {{surahDatas[surahIndex-1].number}}</li>
									<li>Jumlah Ayat : {{surahDatas[surahIndex-1].numberOfVerses}}</li>
								</ul>
								<blockquote class="blockquote-footer">
									{{surahDatas[surahIndex-1].tafsir.id}}
								</blockquote>
							</p>
							<nuxt-link :to="{name: 'salaam-quran-surah-nomor', params: {nomor: surahDatas[surahIndex-1].number}}" class="card-link btn btn-outline-primary btn-block">Baca Surah</nuxt-link>
							<!-- <a href="#" class="card-link">Another link</a> -->
						</div>
					</div>
				</div>

				<div v-if="surahToShow < surahDatas.length || surahDatas.length > surahToShow" class="col-lg-12 col-xs-12 col-sm-12">
					<div class="d-grid gap-2">
						<button @click="surahToShow += 3" class="btn btn-outline-primary btn-load-more btn-lg btn-block">Show More</button>
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
				select: {},
				surahDatas: [],
				surahToShow: 6,
				totalSurah: 1
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
			localStorage.removeItem('nomor-ayat'),
			this.$axios.get('https://api.quran.sutanlab.id/surah')
			.then(res => {
				this.surahDatas = res.data.data
				console.log(this.surahDatas)
			})
			.catch(err => console.log(err.response))
		},

		methods: {
			changeSurah(e){
				this.showLists = true
				const number = e.target.value
				if(number !== ""){
					this.$axios.get(`https://api.quran.sutanlab.id/surah/${number}`)
					.then(res => {
						this.select = res.data.data
						// console.log(this.select)
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