<template>
	<div>
		<input type="search" v-model="keyword.title" name="keyword" class="form-control" placeholder="ketikan judul film yang ingin dicari" @keyup="getMovie">

		<div class="row justify-content-center">
			<div v-if="loading" class="col-md-4 col-xs-12 col-sm-12 mt-5">
				<small class="text-info">Loading dulu kak ...</small>
				<img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" class="img-fluid" width="100">
			</div>

			<div v-if="notFound" class="col-md-4 col-xs-12 col-sm-12 mt-5">
				<div class="alert alert-danger">
					Ooops ! Sory {{ notFound }}
				</div>
			</div>

			<div v-for="movie in movies" class="col-md-4 col-xs-12 col-sm-12 mt-5">
				<div class="card" style="width: 18rem;">
					<img class="card-img-top" :src="movie.Poster" alt="Card image cap">
					<div class="card-body">
						<h5 class="card-title">{{movie.Title}}</h5>
						<!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
					</div>
					<ul class="list-group list-group-flush">
						<li class="list-group-item">Type : {{movie.Type}}</li>
						<li class="list-group-item">Year : {{movie.Year}}</li>
					</ul>
					<div class="card-body">
						<button class="btn btn-primary btn-block" @click="getMovieDetail(movie.imdbID)">See Detail</button>
					</div>
				</div>
			</div>

			<!-- Modal -->
			<div class="modal fade" id="detailMovie" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLongTitle">Movie Detail</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<div class="card mb-3">
								<div class="row no-gutters">
									<div class="col-md-4">
										<img :src="detail.Poster" :alt="detail.Title" width="100">
									</div>
									<div class="col-md-8">
										<div class="card-body">
											<h5 class="card-title">{{detail.Title}}</h5>
											<p class="card-text">{{detail.Plot}}.</p>
											<p class="card-text"><small class="text-muted">Released : {{detail.Released}}</small></p>
											<ul class="list-group mt-5">
												<li class="list-group-item">
													<strong>Actors : <i>{{detail.Actors}}</i></strong>
												</li>
												<li class="list-group-item">
													<strong>Director : <i>{{detail.Director}}</i></strong>
												</li>
												<li class="list-group-item">
													<strong>Awards : <i>{{detail.Awards}}</i></strong>
												</li>
												<li v-if="detail.BoxOffice" class="list-group-item">
													<strong>BoxOffice : <i>{{detail.BoxOffice}}</i></strong>
												</li>
												<li class="list-group-item">
													<strong>Country : <i>{{detail.Country}}</i></strong>
												</li>
												<li class="list-group-item">
													<strong>Genre : <i>{{detail.Genre}}</i></strong>
												</li>
												<li class="list-group-item">
													<strong>Type : <i>{{detail.Type}}</i></strong>
												</li>
												<li class="list-group-item">
													<strong>Writter : <i>{{detail.Writer}}</i></strong>
												</li>
												<li class="list-group-item">
													<strong>Ratting : </strong> <br>
													<ul>
														<div v-for="rating in detail.Ratings">
															<li>
																{{rating.Source}} : <b>{{rating.Value}}</b>
															</li>
														</div>
													</ul>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
							<a :href="`https://www.imdb.com/title/${detail.imdbID}`" type="button" class="btn btn-primary">Lanjut Lihat</a>
						</div>
					</div>
				</div>
			</div>

		</div>

	</div>
</template>


<script>
	export default{
		data(){
			return{
				loading: null,
				apiKey: '43c80ec7',
				keyword: {},
				movies: [],
				detail: '',
				notFound: ''
			}
		},

		methods: {
			getMovie(){
				this.loading = true
				const keyword = this.keyword.title
				this.$axios.get(`https://www.omdbapi.com?apiKey=${this.apiKey}&s=${keyword}`)
				.then(res => {
					console.log(res.data)
					if(res.data.Response){
						this.loading = false
						// console.log(res.data.Response)
						this.movies = res.data.Search
					}

					this.notFound = res.data.Error

				})
				.catch(err => {
					console.log(err.response)
				})
			},

			getMovieDetail(imdbID){
				this.$axios.get(`https://www.omdbapi.com?apiKey=${this.apiKey}&i=${imdbID}`)
				.then(res => {
					console.log(res.data)
					this.detail = res.data
					$('#detailMovie').modal('show')
				})
			}
		}
	}
</script>