<template>
	<div>
		<section id="products" class="portfolio section-bg">
			<div class="container" data-aos="fade-up">
				<div class="container">
					<div class="row justify-content-end mt-3 mb-3">
						<div class="col-lg-1 col-xs-6 col-sm-6">
							<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#pages"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
						</div>
					</div>

					<div class="row justify-content-center">
						<div class="col-lg-12 col-xs-12 col-sm-12">
							<div class="section-title">
								<h2>Evoush Salaam</h2>
							</div>
							<blockquote class="blockquote-footer">
								RASULULLAH S.A.W BERSABDA
								"Barangsiapa yang menunjuki kepada kebaikan maka dia akan mendapatkan pahala seperti pahala orang yang mengerjakannya".
								Rasulullah S.A.W
							</blockquote>
							<p>
								Evoush Salaam merupakan kumpulan aplikasi yang dapat menambah pengalaman dan khazanah baru dalam perjalanan pencarian ilmu yang kita lalui selama hayat kita.
								Data data pada setiap sumber aplikasi berasal dari sumber terbuka <a href="https://github.com/Zhirrr/islamic-rest-api-indonesian-v2">Zhirrrr Islamic Api</a>
							</p>
						</div>
					</div>

					<div class="row justify-content-center">
						<div class="col-lg-12 col-xs-12 col-sm-12">
							<div
								class="row portfolio-container"
								data-aos="fade-up"
								data-aos-delay="200"
								>
									<div v-for="list in lists" class="col-lg-4 col-md-6 portfolio-item">
										<div class="portfolio-wrap">
											<div class="wrap-article">
												<img
												:src="list.cover"
												class="img-fluid img-articles" style="width: 500px; height:250px;"
												alt=""
												/>
											</div>
											<div class="portfolio-info">
												<h4>{{list.title}}</h4>
												<div class="portfolio-links mt-3">
													<a
													:href="list.cover"
													data-gall="productGallery"
													class="venobox btn btn-sm btn-primary text-white"
													:title="list.title"
													><i class="bx bx-plus"></i
														>
													</a>
													<nuxt-link
													:to="list.link"
													data-gall="portfolioDetailsGallery"
													data-vbtype="iframe"
													class="venobox btn btn-sm btn-success text-white lihat"
													:title="`Detail ${list.title}`"
													><i class='bx bx-window-open'></i> Buka
												</nuxt-link>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	</div>
</template>


<script>
	export default{
		layout: 'pages',
		data(){
			return{
				lists: [
					{
						id:1,
						title: 'Alquran Digital',
						cover: 'https://www.freevector.com/uploads/vector/preview/30295/Al_Quran_vector_4.jpg',
						link: '/salaam/quran'
					},
					{
						id:2,
						title: 'Jadwal Shalat',
						cover: 'https://img.freepik.com/free-vector/islamic-mosque-building-flat-design-illustration_5379-218.jpg?size=626&ext=jpg',
						link: '/salaam/jadwal-shalat'
					},
					{
						id:2,
						title: 'Hadist Digital',
						cover: 'https://awsimages.detik.net.id/community/media/visual/2020/05/10/faebba1a-d974-4c46-811e-30eed2ed55fd_169.jpeg?w=1200',
						link: '/salaam/hadist'
					}
				]
			}
		}
	}
</script>