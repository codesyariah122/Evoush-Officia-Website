<template>
	<div>
		<div class="container">
			<div class="row justify-content-end mt-2 mb-3">
				<div class="col-lg-1 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#pages"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
				</div>
			</div>



			<section class="term-of-service">
				<div class="section-title">
					<h2 class="portfolio-title"><strong>Movie Inspiration</strong></h2>
				</div>

				<ul style="list-style: none;">
					<li v-for="movie in movies" :key="movie.id" class="mb-5">
						<h5 class="text-secondary mt-5">{{movie.title}}</h5>
						<br>
						<div class="embed-responsive embed-responsive-16by9 mt-2">
							<iframe width="560" height="315" :src="movie.link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</div>
					</li>
				</ul>

				<h1 class="underline" style="margin-top: 5rem;"></h1>

				<div class="container mt-5 mb-5">
					<div class="row justify-content-center">
						<div class="col-lg-12 col-xs-12 col-sm-12">
							<h4 class="text-secondary text-center">Cari Movie Favorite Anda</h4>
						</div>
						<div class="col-lg-12 col-xs-12 col-sm-12">
							<Movie/>
						</div>
					</div>
				</div>

			</section>

		</div>
	</div>
</template>


<script>
	export default {
		layout: 'pages',

		head(){
			return {
				title: 'Evoush::Official | Term-Of-Service'
			}
		},

		data(){
			return {
				ip: '',
				city: '',
				movies: [
					{id:1, link: 'https://www.youtube.com/embed/5xVuYhf8MvE', title: 'The Pursuit of Happyness'},
					{id:2, link: 'https://www.youtube.com/embed/r-St3WAEf-4', title: 'THE FOUNDER'},
					{id:3, link: 'https://www.youtube.com/embed/1uG4SJyAKCE', title: 'JOBS'}
				]
			}
		},

		methods: {

		}

	}
</script>


<style scoped>
article {
  max-width: 50em;
  background: white;
  padding: 2em;
  margin: 1em auto;
}

.table-of-contents {
  float: right;
  width: 40%;
  background: #eee;
  font-size: 0.8em;
  padding: 1em 2em;
  margin: 0 0 0.5em 0.5em;
}
.table-of-contents ul {
  padding: 0;
}
.table-of-contents li {
  margin: 0 0 0.25em 0;
}
.table-of-contents a {
  text-decoration: none;
}
.table-of-contents a:hover,
.table-of-contents a:active {
  text-decoration: underline;
}

h3:target {
  animation: highlight 1s ease;
}

@keyframes highlight {
  from { background: yellow; }
  to { background: white; }
}
</style>