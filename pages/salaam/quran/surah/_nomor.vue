<template>
	<div>
		<div class="container">
			<div class="row justify-content-end mt-3 mb-3">
				<div class="col-lg-2 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/salaam/quran"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
				</div>
			</div>
		</div>


		<div v-if="!showNext">
			<!-- {{showNext}} -->
			<div class="container">
				<div class="col-lg-12 col-xs-12 col-sm-12">

					<div class="card card-quran">
						<div  class="card-header text-center">
							<h3> {{result.surah.name.long}} ({{result.surah.name.transliteration.id}})</h3>
						</div>


						<div class="card-body quran-body mb-5">
							<div class="row justify-content-center">
								<div class="ayat">
									<div class="col-12 col-xs-12 col-sm-12 text-center mb-5">
										<h3 class="mb-5"> {{result.surah.preBismillah !== null ? result.surah.preBismillah.text.arab : ''}} </h3>
										<h1 class="mt-2">
											<span class="circle-number">{{result.number.inSurah}}</span> &nbsp;
											{{result.text.arab}}
										</h1>
										<h4 class="mt-5">{{result.text.transliteration.en}}</h4>
										<br/>
										<blockquote class="mb-2 text-success"> - {{result.translation.id}}</blockquote>
										<br/>

										<audio  ref="player" controls>
											<source v-bind:src="audio" type="audio/mp3">
										</audio>

										<!-- <audio ref="player" controls>
											<source v-bind:src="audio" type="audio/mp3">
										</audio> -->

											<br>

										<a class="tafsir-surah btn btn-success mt-3 mb-5" :data-ayat="result.number.inSurah" data-toggle="modal" data-target="#exampleModal1" @click="TafsirQuran">Read Tafsir Surah</a>

										<!-- Modal -->
										<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
											<div class="modal-dialog modal-dialog-centered">
												<div class="modal-content">
													<div class="modal-header">
														<h5 class="modal-title text-dark" id="exampleModalLabel" v-html="tafsir_title"></h5>
														<button type="button" class="close" data-dismiss="modal" aria-label="Close">
															<span aria-hidden="true">&times;</span>
														</button>
													</div>
													<div class="modal-body">
														<div v-html="result_tafsir"></div>
													</div>
													<div class="modal-footer">
														<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
														<button type="button" class="btn btn-primary">Save changes</button>
													</div>
												</div>
											</div>
										</div>

										<!-- <pre>
											{{ changes }}
										</pre> -->
										<div class="form-group">
											<label for="ayat">Filter Ayat</label>
											<br>
											<select class="form-control mt-3 mb-5" @change="ChangeAyat">
												<option value="">-Pilih Ayat-</option>
												<option v-for="change in changes" :value="change.number.inSurah">
													Ayat - {{ change.number.inSurah }}
												</option>
											</select>
										</div>

										<nav aria-label="Page navigation example">
											<ul class="pagination justify-content-center">
												<li :class="Disabled">
													<a class="page-link first" :data-surah="NumberSurah" :data-ayat="FirstData" aria-label="Previous" @click="firstAyat">
														<span aria-hidden="true">&laquo;</span>
													</a>
												</li>
												<li :class="Disabled">
													<a  class="page-link prev" :data-surah="NumberSurah" :data-ayat="PrevData">Previous</a>
												</li>

												<li :class="DisabledNext">
													<a  class="page-link next" :data-surah="NumberSurah" :data-ayat="NextData" @click="nextAyat">Next</a>
												</li>
												<li :class="DisabledNext">
													<a  class="page-link last" aria-label="Next" :data-surah="NumberSurah" :data-ayat="LastData" @click="lastAyat">
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
		</div>

		<div v-else>
			<!-- {{dataAyat.surah.name.transliteration.id}}	 -->
			<div class="container">
				<div class="col-lg-12 col-xs-12 col-sm-12">

					<div class="card card-quran mb-5">
						<div  class="card-header text-center">
							<h3> {{result.surah.name.long}} ({{result.surah.name.transliteration.id}})</h3>
						</div>

						{{ selected }}

						<div class="card-body quran-body">
							<div class="row justify-content-center">
								<div class="ayat">
									<div class="col-12 col-xs-12 col-sm-12 text-center mb-5">

										<div v-html="elemAyat"></div>

											<a class="tafsir-surah btn btn-success mt-3 mb-5" :data-ayat="config.activeData" data-toggle="modal" data-target="#exampleModal2" @click="TafsirQuran">Read Tafsir Surah</a>

											<!-- Modal -->
											<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
												<div class="modal-dialog modal-dialog-centered">
													<div class="modal-content">
														<div class="modal-header">
															<h5 class="modal-title text-dark" id="exampleModalLabel" v-html="tafsir_title"></h5>
															<button type="button" class="close" data-dismiss="modal" aria-label="Close">
																<span aria-hidden="true">&times;</span>
															</button>
														</div>
														<div class="modal-body">
															<div v-html="result_tafsir"></div>
														</div>
														<div class="modal-footer">
															<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
															<button type="button" class="btn btn-primary">Save changes</button>
														</div>
													</div>
												</div>
											</div>


											<div class="form-group">
												<label for="ayat">Filter Ayat</label>
												<br>
												<select class="form-control mt-3 mb-5" @change="ChangeAyat">
													<option value="">-Pilih Ayat-</option>
													<option v-for="change in changes" :value="change.number.inSurah">
														Ayat - {{ change.number.inSurah }}
													</option>
												</select>
											</div>

											<nav aria-label="Page navigation example">
												<ul class="pagination justify-content-center">
													<li :class="config.Disabled">
														<a class="page-link first" :data-surah="config.NumberSurah" :data-ayat="config.FirstData" aria-label="Previous" @click="firstAyat">
															<span aria-hidden="true">&laquo;</span>
														</a>
													</li>
													<li :class="config.Disabled">
														<a class="page-link prev" :data-surah="config.NumberSurah" :data-ayat="config.PrevData"  @click="prevAyat">Previous</a>
													</li>

													<li :class="config.DisabledNext">
														<a class="page-link next" :data-surah="config.NumberSurah" :data-ayat="config.NextData" @click="nextAyat">Next</a>
													</li>
													<li :class="config.DisabledNext">
														<a class="page-link last" aria-label="Next" :data-surah="config.NumberSurah" :data-ayat="config.LastData" @click="lastAyat">
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

		data(){
			return {
				selecting: localStorage.getItem('nomor-ayat'),
				showNext: false,
				dataAyat: {},
				elemAyat:'',
				config: {
					NumberSurah: '',
					TotalAyat: '',
					activeData: '',
					Disabled: '',
					DisabledTab: '',
					DisabledNext: '',
					NextData: '',
					PrevData: '',
					FirstData: '',
					LastData: ''
				},
				surah: {},
				tafsir_title: '',
				result_tafsir:''
			}
		},


		async asyncData({$axios, params}){
			localStorage.setItem('nomor-surah', params.nomor)
			// localStorage.setItem('nomor-ayat', 1)
			// console.log(params.nomor)

			let nomorSurah = localStorage.getItem('nomor-surah')
			let nomorAyat = localStorage.getItem('nomor-ayat') ? localStorage.getItem('nomor-ayat') : 1

			const surahResults = await $axios.get(`https://api.quran.sutanlab.id/surah/${nomorSurah}/${nomorAyat}`)
			const result = surahResults.data.data
			const audio = result.audio.primary
			const NumberSurah = result.surah.number
			const TotalAyat = result.surah.numberOfVerses
			const activeData = result.number.inSurah
			const Disabled = activeData == 1 ? 'page-item disabled' : ''
			const DisabledTab = activeData == 1 ? 'tabindex="-1" aria-disabled="true"' : ''
			const DisabledNext = activeData >= TotalAyat ? 'page-item disabled' : ''
			const NextData = activeData >= TotalAyat ? 1 : activeData + 1
			const PrevData = activeData != 1 ? activeData - 1 : ''
			const FirstData = activeData >= 1 ? (activeData + 1) - activeData : ''
			const LastData = activeData >= 1 ? (activeData - activeData) + TotalAyat : TotalAyat


			const surahchange = await $axios.get(`https://api.quran.sutanlab.id/surah/${NumberSurah}`)
			// console.log(result)
			const changes = surahchange.data.data.verses


			return{
				nomorSurah,
				nomorAyat,
				result,
				audio,
				NumberSurah,
				TotalAyat,
				activeData,
				Disabled,
				DisabledTab,
				DisabledNext,
				NextData,
				PrevData,
				FirstData,
				LastData,
				changes
			}
		},

		mounted(){
			console.log(this.selecting)
			// console.log(this.result)

		},

		methods: {

			ChangeAyat(e){
				const surah = this.config.NumberSurah ? this.config.NumberSurah : this.nomorSurah
				const ayat = e.target.value

				localStorage.setItem('nomor-surah', surah)
				localStorage.setItem('nomor-ayat', ayat)

				this.$axios.get(`https://api.quran.sutanlab.id/surah/${surah}/${ayat}`)
				.then(res => {
					this.showNext = true
					this.dataAyat = res.data.data
					// console.log(this.dataAyat)

					this.config.NumberSurah = this.dataAyat.surah.number
					this.config.TotalAyat = this.dataAyat.surah.numberOfVerses
					this.config.activeData = this.dataAyat.number.inSurah
					this.config.Disabled = this.config.activeData == 1 ? 'page-item disabled' : ''
					this.config.DisabledTab = this.config.activeData == 1 ? 'tabindex="-1" aria-disabled="true"' : ''
					this.config.DisabledNext = this.config.activeData >= this.config.TotalAyat ? 'page-item disabled' : ''
					this.config.NextData = this.config.activeData >= this.config.TotalAyat ? 1 : this.config.activeData + 1
					this.config.PrevData = this.config.activeData != 1 ? this.config.activeData - 1 : ''
					this.config.FirstData = this.config.activeData >= 1 ? (this.config.activeData + 1) - this.config.activeData : ''
					this.config.LastData = this.config.activeData >= 1 ? (this.config.activeData - this.config.activeData) + this.config.TotalAyat : ''
					this.elemAyat = `
						<h3 class="mb-5"> ${this.dataAyat.surah.preBismillah !== null ? this.dataAyat.surah.preBismillah.text.arab : ''} </h3>
						<h1 class="mt-2">
						<span class="circle-number">${this.dataAyat.number.inSurah}</span> &nbsp;
						${this.dataAyat.text.arab}
						</h1>
						<h4 class="mt-5">${this.dataAyat.text.transliteration.en}</h4>
						<br/>
						<blockquote class="mb-2 text-success"> - ${this.dataAyat.translation.id}</blockquote>
						<br/>
						<audio ref="player" controls>
						<source src="${this.dataAyat.audio.primary}" type="audio/mp3">
						</audio>
						<br>
					`

				})
			},

			nextAyat(e){
				const surah = e.target.getAttribute('data-surah')
				const ayat = e.target.getAttribute('data-ayat')
				localStorage.setItem('nomor-ayat', ayat)

				this.$axios.$get(`https://api.quran.sutanlab.id/surah/${surah}/${ayat}`)
				.then( res => {
					this.showNext = true
					this.dataAyat = res.data
					console.log(this.dataAyat)

					this.config.NumberSurah = this.dataAyat.surah.number
					this.config.TotalAyat = this.dataAyat.surah.numberOfVerses
					this.config.activeData = this.dataAyat.number.inSurah
					this.config.Disabled = this.config.activeData == 1 ? 'page-item disabled' : ''
					this.config.DisabledTab = this.config.activeData == 1 ? 'tabindex="-1" aria-disabled="true"' : ''
					this.config.DisabledNext = this.config.activeData >= this.config.TotalAyat ? 'page-item disabled' : ''
					this.config.NextData = this.config.activeData >= this.config.TotalAyat ? 1 : this.config.activeData + 1
					this.config.PrevData = this.config.activeData != 1 ? this.config.activeData - 1 : ''
					this.config.FirstData = this.config.activeData >= 1 ? (this.config.activeData + 1) - this.config.activeData : ''
					this.config.LastData = this.config.activeData >= 1 ? (this.config.activeData - this.config.activeData) + this.config.TotalAyat : ''
					this.elemAyat = `
						<h3 class="mb-5"> ${this.dataAyat.surah.preBismillah !== null ? this.dataAyat.surah.preBismillah.text.arab : ''} </h3>
						<h1 class="mt-2">
						<span class="circle-number">${this.dataAyat.number.inSurah}</span> &nbsp;
						${this.dataAyat.text.arab}
						</h1>
						<h4 class="mt-5">${this.dataAyat.text.transliteration.en}</h4>
						<br/>
						<blockquote class="mb-2 text-success"> - ${this.dataAyat.translation.id}</blockquote>
						<br/>
						<audio ref="player" controls>
						<source src="${this.dataAyat.audio.primary}" type="audio/mp3">
						</audio>
						<br>
					`

				})
				.catch(err => console.log(err.response))
			},

			prevAyat(e){
				const surah = e.target.getAttribute('data-surah')
				const ayat = e.target.getAttribute('data-ayat')
				localStorage.setItem('nomor-ayat', ayat)

				this.$axios.$get(`https://api.quran.sutanlab.id/surah/${surah}/${ayat}`)
				.then( res => {
					this.showNext = true
					this.dataAyat = res.data
					this.config.NumberSurah = this.dataAyat.surah.number
					this.config.TotalAyat = this.dataAyat.surah.numberOfVerses
					this.config.activeData = this.dataAyat.number.inSurah
					this.config.Disabled = this.config.activeData == 1 ? 'page-item disabled' : ''
					this.config.DisabledTab = this.config.activeData == 1 ? 'tabindex="-1" aria-disabled="true"' : ''
					this.config.DisabledNext = this.config.activeData >= this.config.TotalAyat ? 'page-item disabled' : ''
					this.config.NextData = this.config.activeData >= this.config.TotalAyat ? 1 : this.config.activeData + 1
					this.config.PrevData = this.config.activeData != 1 ? this.config.activeData - 1 : ''
					this.config.FirstData = this.config.activeData >= 1 ? (this.config.activeData + 1) - this.config.activeData : ''
					this.config.LastData = this.config.activeData >= 1 ? (this.config.activeData - this.config.activeData) + this.config.TotalAyat : ''

					this.elemAyat = `
						<h3 class="mb-5"> ${this.dataAyat.surah.preBismillah !== null ? this.dataAyat.surah.preBismillah.text.arab : ''}</h3>
						<h1 class="mt-2">
						<span class="circle-number">${this.dataAyat.number.inSurah}</span> &nbsp;
						${this.dataAyat.text.arab}
						</h1>
						<h4 class="mt-5">${this.dataAyat.text.transliteration.en}</h4>
						<br/>
						<blockquote class="mb-2 text-success"> - ${this.dataAyat.translation.id}</blockquote>
						<br/>
						<audio ref="player" controls>
						<source src="${this.dataAyat.audio.primary}" type="audio/mp3">
						</audio>
						<br>
					`

				})
				.catch(err => console.log(err.response))
			},

			lastAyat(e){
				const surah = e.target.getAttribute('data-surah')
				const ayat = e.target.getAttribute('data-ayat')

				// console.log(surah)

				// console.log(surah + ' ayat : '+ ayat)

				this.$axios.$get(`https://api.quran.sutanlab.id/surah/${surah}/${ayat}`)
				.then( res => {
					this.showNext = true
					this.dataAyat = res.data
					this.config.NumberSurah = this.dataAyat.surah.number
					this.config.TotalAyat = this.dataAyat.surah.numberOfVerses
					this.config.activeData = this.dataAyat.number.inSurah
					this.config.Disabled = this.config.activeData == 1 ? 'page-item disabled' : ''
					this.config.DisabledTab = this.config.activeData == 1 ? 'tabindex="-1" aria-disabled="true"' : ''
					this.config.DisabledNext = this.config.activeData >= this.config.TotalAyat ? 'page-item disabled' : ''
					this.config.NextData = this.config.activeData >= this.config.TotalAyat ? 1 : this.config.activeData + 1
					this.config.PrevData = this.config.activeData != 1 ? this.config.activeData - 1 : ''
					this.config.FirstData = this.config.activeData >= 1 ? (this.config.activeData + 1) - this.config.activeData : ''
					this.config.LastData = this.config.activeData >= 1 ? (this.config.activeData - this.config.activeData) + this.config.TotalAyat : ''

					this.elemAyat = `
						<h3 class="mb-5"> ${this.dataAyat.surah.preBismillah !== null ? this.dataAyat.surah.preBismillah.text.arab : ''}</h3>
						<h1 class="mt-2">
						<span class="circle-number">${this.dataAyat.number.inSurah}</span> &nbsp;
						${this.dataAyat.text.arab}
						</h1>
						<h4 class="mt-5">${this.dataAyat.text.transliteration.en}</h4>
						<br/>
						<blockquote class="mb-2 text-success"> - ${this.dataAyat.translation.id}</blockquote>
						<br/>
						<audio ref="player" controls>
						<source src="${this.dataAyat.audio.primary}" type="audio/mp3">
						</audio>
						<br>
					`

				})
				.catch(err => console.log(err.response))
			},

			firstAyat(e){
				const surah = e.target.getAttribute('data-surah')
				const ayat = e.target.getAttribute('data-ayat')

				console.log(surah)

				console.log(surah + ' ayat : '+ ayat)

				this.$axios.$get(`https://api.quran.sutanlab.id/surah/${surah}/${ayat}`)
				.then( res => {
					this.showNext = true
					this.dataAyat = res.data
					this.config.NumberSurah = this.dataAyat.surah.number
					this.config.TotalAyat = this.dataAyat.surah.numberOfVerses
					this.config.activeData = this.dataAyat.number.inSurah
					this.config.Disabled = this.config.activeData == 1 ? 'page-item disabled' : ''
					this.config.DisabledTab = this.config.activeData == 1 ? 'tabindex="-1" aria-disabled="true"' : ''
					this.config.DisabledNext = this.config.activeData >= this.config.TotalAyat ? 'page-item disabled' : ''
					this.config.NextData = this.config.activeData >= this.config.TotalAyat ? 1 : this.config.activeData + 1
					this.config.PrevData = this.config.activeData != 1 ? this.config.activeData - 1 : ''
					this.config.FirstData = this.config.activeData >= 1 ? (this.config.activeData + 1) - this.config.activeData : ''
					this.config.LastData = this.config.activeData >= 1 ? (this.config.activeData - this.config.activeData) + this.config.TotalAyat : ''

					this.elemAyat = `
						<h3 class="mb-5"> ${this.dataAyat.surah.preBismillah !== null ? this.dataAyat.surah.preBismillah.text.arab : ''}</h3>
						<h1 class="mt-2">
						<span class="circle-number">${this.dataAyat.number.inSurah}</span> &nbsp;
						${this.dataAyat.text.arab}
						</h1>
						<h4 class="mt-5">${this.dataAyat.text.transliteration.en}</h4>
						<br/>
						<blockquote class="mb-2 text-success"> - ${this.dataAyat.translation.id}</blockquote>
						<br/>
						<audio ref="player" controls>
						<source src="${this.dataAyat.audio.primary}" type="audio/mp3">
						</audio>
						<br>
					`

				})
				.catch(err => console.log(err.response))
			},

			TafsirQuran(){
				// this.loading = true
				const surah = this.nomorSurah
				const ayat = document.querySelector('.tafsir-surah').getAttribute('data-ayat')
				console.log(surah +' - '+ ayat)
				this.$axios.get(`https://api.quran.sutanlab.id/surah/${surah}/${ayat}`)
				.then(res =>{
					// this.loading = false
					const tafsir = res.data
					console.log(tafsir)
					this.tafsir_title = `${tafsir.data.surah.name.transliteration.id} - Ayat ke ${tafsir.data.number.inSurah}`
					this.result_tafsir = `
					<h2 class="text-muted">${tafsir.data.text.arab}</h2>
					<blockquote class="blockquote-footer">
					${ tafsir.data.text.transliteration.en ? tafsir.data.text.transliteration.en : tafsir.data.text.transliteration.id }
					<br/>

					<small class="text-muted">
					${ tafsir.data.translation.id } <br>
					<br>
					${ tafsir.data.translation.en }
					</small>
					</blockquote>

					<p class="text-dark">
					${ tafsir.data.tafsir.id.long }
					</p>
					`
				})
				.catch(err => console.log(err.response))
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