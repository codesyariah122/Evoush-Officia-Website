<template>
	<div>
		<section id="management-details" class="portfolio-details">
			<div class="container" data-aos="fade-up">
				<div class="row justify-content-center mb-5">
					<div class="col-lg-12 col-xs-12 col-sm-12">
						<div class="section-title">
							<h2 class="portfolio-title">List Event</h2>
						</div>
						<p>
							Event-event yang evoush gelar, selain memperkenalkan product dan bisnis evoush secara masif pada para calon evousher sebagai media edukasi bagi product dan bisnis evoush. Kami menamakan perlehatan event evoush dengan nama <strong><code>E.O.S</code></strong> yang merupakan akronim dari <strong><code>Evoush.Opportunity.Seminar</code></strong>. E.O.S menjadi landasan bagi para calon <strong>evousher</strong>, agar mendapatkan sarana edukasi yang membekali para <strong>evousher</strong> saat memluai join dan menjalankan bisnis, evoush yang mempunyai legalitas yang kuat dan leader-leader unggulan yang siap menjadi mentor-mentor yang membawa anda menuju mahligai kesuksesan yang gemilang.
						</p>
					</div>
					<div class="col-lg-12 col-xs-12 col-sm-12">
						<ul>
							<li>
								<div v-for="list in lists">
									<h1>{{list.title}}</h1>
									<blockquote class="blockquote-footer">
										{{list.quotes}}
									</blockquote>
									<img :src="`https://raw.githubusercontent.com/evoush-products/bahan_evoush/main/migration_db/${list.cover}`" class="img-fluid">
									<br>
									<button class="btn btn-primary mt-2 btn-block" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
										Lihat details
									</button>
									<div class="collapse" id="collapseExample">
										<div class="card card-body">
											<p v-html="list.content"></p>
											<video controls>
												<source :src="list.link" type="video/mp4">
												<source src="mov_bbb.ogg" type="video/ogg">
												Your browser does not support HTML video.
											</video>
										</div>
									</div>
								</div>
							</li>

						</ul>
					</div>
				</div>

				<h1 class="underline" style="margin-top: 5rem;"></h1>

				<div class="row justify-content-center">
					<div class="col-lg-12 col-xs-12 col-sm-12 text-center">
						<div class="section-title">
							<h2 class="portfolio-title">Documentasi Event</h2>
						</div>
					</div>
					<div class="col-lg-12 col-xs-12 col-sm-12">
						<p>
							Berikut event-event evoush yang telah terselenggara dengan sukses dan meriah, kami sajikan dalam dokumentasi video teaser.
						</p>
					</div>
					<div class="col-lg-12 col-xs-12 col-lg-12">

					</div>
				</div>

				<div class="row justify-content-center">
					<div v-for="event in events" class="col-lg-12 col-xs-12 col-sm-12 mb-5 mt-2" :key="event.id">
						<div class="embed-responsive embed-responsive-21by9">
							<iframe class="embed-responsive-item" :src="event.src"></iframe>
						</div>
					</div>
				</div>



			</div>
		</section>
	</div>

</template>

<script>
	export default {
		data(){
			return {
				events: [
					{id:1, src: 'https://www.youtube.com/embed/ENpbFbB5xr4'},
					{id:2, src: 'https://www.youtube.com/embed/MOe-JZhB1yo'},
					{id:3, src: 'https://www.youtube.com/embed/sthDx1cCqNM'}
				],
				lists: []
			}
		},

		mounted(){
			this.getEventLists()
		},

		methods: {
			getEventLists(){
				this.$axios.get('https://app.evoush.com/api/evoush/event')
				.then(res => {
					console.log(res.data)
					this.lists = res.data
				})
			}
		}
	}
</script>