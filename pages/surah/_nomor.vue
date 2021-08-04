<template>
	<div>
		<div class="container mt-5">
			<div class="col-lg-12 col-xs-12 col-sm-12">
				<div class="card text-center">
					<div class="card-header">
						{{surah.data.name.transliteration.id}}
					</div>
					<div class="card-body">
						<h3 class="card-title">{{surah.data.name.long}}</h3>
						
						<h1>
							{{surah.data.verses[0].text.arab}} ({{surah.data.verses[0].number.inSurah}})
						</h1>
						<br>
							<small class="text-muted mt-3">
								<strong>{{surah.data.verses[0].text.transliteration.en}}</strong>
							</small>
						<br>

						<blockquote class="blockquote-footer">
							{{surah.data.verses[0].tafsir.id.short}}
						</blockquote>


						<b-button v-b-modal.modal-1 class="btn btn-primary mb-5">Tafsir lengkap</b-button>


						<nav aria-label="Page navigation example">
							<ul class="pagination justify-content-center">
								<li class="page-item disabled">
									<a class="page-link" href="#" tabindex="-1">Previous</a>
								</li>
								<li>
									<a class="page-link" href="#">Next</a>
								</li>
							</ul>
						</nav>

						<b-modal id="modal-1" title="Tafsir Surah">
							<blockquote>
								{{surah.data.verses[0].tafsir.id.long}}
							</blockquote>
						</b-modal>

					</div>
					<div class="card-footer text-muted">
						2 days ago
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
			return{
				title: "Evoush::Salaam"
			} 
		},
		async asyncData({$axios, params}){
			const nomor = params.nomor
			const surah = await $axios.$get(`https://api.quran.sutanlab.id/surah/${nomor}`)
			console.log(surah)
			return{
				surah
			}
		}
	}
</script>


<style scoped>
	.card-body .card-title h6{
		font-family: 'quran';
		font-weight: 700;
	}
	.card-body h1{
		font-family: 'quran';
		font-weight: 700;
	}
</style>