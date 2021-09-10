<template>
	<div class="container mt-5">
		<div class="col-lg-12 col-xs-12 col-sm-12">
			<div class="card card-quran">

				<div class="card-header">
					<h3> {{result.surah.name.long}} ({{result.surah.name.transliteration.id}})</h3>
				</div>


				<div class="card-body quran-body">
					<div class="row justify-content-center">
						<div class="ayat">
							<div class="col-12 col-xs-12 col-sm-12 text-center mb-5">
								<h1 class="mb-5"> {{result.surah.preBismillah !== null ? result.surah.preBismillah.text.arab : ''}} </h1>
								<h3 class="mt-2">
									<span class="circle-number">{{result.number.inSurah}}</span> &nbsp;
									{{result.text.arab}}
								</h3>
								<h4 class="mt-5">{{result.text.transliteration.en}}</h4>
								<br/>
								<blockquote class="mb-2 text-success"> - {{result.translation.id}}</blockquote>
								<br/>
								<audio controls>
									<source :src="result.audio.primary" type="audio/mp3">
									</audio>
									<br>
									<a class="tafsir-surah btn btn-success mt-3 mb-5" :data-surah="result.number.inSurah" data-toggle="modal" data-target="#exampleModal">Read Tafsir Surah</a>

									<nav aria-label="Page navigation example">
										<ul class="pagination justify-content-center">
											<li :class="Disabled">
												<a href="#" class="page-link first" :data-surah="NumberSurah" :data-ayat="FirstData" aria-label="Previous">
													<span aria-hidden="true">&laquo;</span>
												</a>
											</li>
											<li :class="Disabled"><a href="#" class="page-link prev" :data-surah="NumberSurah" :data-ayat="PrevData">Previous</a></li>

											<li :class="DisabledNext"><a href="#" class="page-link next" :data-surah="NumberSurah" :data-ayat="NextData" @click="nextAyat">Next</a></li>
											<li :class="DisabledNext">
												<a class="page-link last" aria-label="Next" :data-surah="NumberSurah" :data-ayat="LastData">
													<span aria-hidden="true">&raquo;</span>
												</a>
											</li>
										</ul>
									</nav>

								</div>
							</div>
						</div>
					</div>

				</div>

			</div>
		</div>
	</template>

	<script>
		export default {
			props: ['result', 'NumberSurah', 'TotalAyat', 'activeData', 'Disabled', 'DisabledTab', 'DisabledNext', 'NextData', 'PrevData', 'FirstData', 'LastData'],

			data(){
				return {
					result: {}
				}
			},


			methods: {
				nextAyat(e){
					const surah = e.target.getAttribute('data-surah')
					const ayat = e.target.getAttribute('data-ayat')
					const GetAyat = this.$axios.get(`https://api.quran.sutanlab.id/surah/${surah}/${ayat}`)
					this.result = GetAyat.data.data.data
					console.log(this.result)
				}
			}
		}
	</script>