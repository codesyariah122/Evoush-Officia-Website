<template>
	<div>
		<div class="container">
			<div class="row justify-content-end mt-2 mb-5">
				<div class="col-lg-1 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#pages"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
				</div>
			</div>
			<div class="row justify-content-center">
				<div v-for="surah in surahListsSatu.data" class="col-lg-4 col-xs-4 col-sm-4 mb-3">
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
	export default {
		layout: 'pages',
		head(){
			return {
				title: 'Evoush::Salaam | Quran::Online'
			}
		},
		async asyncData({$axios, $config}){
			const surahListsSatu = await $axios.$get('https://api.quran.sutanlab.id/surah')
			console.log(surahListsSatu.data)
			return {
				surahListsSatu
			}
		}
	}
</script>


<style scoped>
	.card-body .card-subtitle h6{
		font-family: 'quran';
		font-weight: 700;
	}
</style>