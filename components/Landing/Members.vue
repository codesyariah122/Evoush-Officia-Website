<template>
	<div>
		<!-- ======= Services Section ======= -->
		<section id="members" class="services">
			<div class="container" data-aos="fade-up">
				<div class="section-title">
					<h2>Members</h2>
					<p>
						Member lists <span style="color:#ff3b40;">evoush</span> adalah daftar member-member evoush yang telah terdaftar dalam system web replika kami, yang ditujukan guna meningkatkan nilai branding member-member <span style="color:#ff3b40;">evoush</span>.
					</p>
				</div>

				<div class="row">
					<div v-for="member in members.data"
					class="col-lg-4 col-md-6 d-flex align-items-stretch mb-3"
					data-aos="zoom-in"
					data-aos-delay="100"
					>
					<div class="icon-box iconbox-blue">
						<div class="icon">
							<svg
							width="100"
							height="100"
							viewBox="0 0 600 600"
							xmlns="http://www.w3.org/2000/svg"
							>
							<path
							stroke="none"
							stroke-width="0"
							fill="#f5f5f5"
							d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
							></path>
						</svg>
						<!-- <i class="bx bxl-dribbble"></i> -->
						<div v-if="member.avatar">
							<!-- <img :src="`https://app.evoush.com/storage/${member.avatar}`" class="img-responsive" width="200"> -->

							<div class="portfolio-wrap">
				                <img
				                  :src="`https://app.evoush.com/storage/${member.avatar}`"
				                  class="img-fluid"
				                  alt=""
				                  width="200"
				                />
				                <div class="portfolio-info">
				                  <h4 style="text-transform: capitalize;">{{member.name}}</h4>
				                  <div class="portfolio-links">
				                    <a
				                      :href="`https://app.evoush.com/storage/${member.avatar}`"
				                      data-gall="productGallery"
				                      class="venobox"
				                      :title="member.username"
				                      ><i class='bx bx-zoom-in'></i></a>
				                    <a
				                      href="portfolio-details.html"
				                      data-gall="portfolioDetailsGallery"
				                      data-vbtype="iframe"
				                      class="venobox"
				                      :title="`Detail ${member.name}`"
				                      ><i class='bx bx-link-external text-success'></i></a>
				                  </div>
				                </div>
				            </div>

						</div>
						<div v-else>
							<img src="https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/profile/default.jpg" width="100" :alt="member.name" class="image--profile-member img-responsive rounded-circle center-block d-block mx-auto mt-2">
						</div>
					</div>

					<!-- <h4 class="mt-5" style="text-transform: capitalize;"><a href="">{{member.name}}</a></h4> -->
					<br>
					<p class="mt-5">
						<b>Username : {{member.username}}</b>  <br>
					</p>
					<blockquote v-if="member.quotes">
						<b>Quotes : </b> <br>
						{{member.quotes}}
					</blockquote>

					<blockquote v-else>
						<b>Quotes : </b> <br/>
						<b>{{member.name}}  <span class="text-danger">belum menambahkan quotes.</span></b>
					</blockquote>

					<div class="social-links mt-3">
						<a :href="`https://wa.me/${member.phone}?text=Hallo%20${member.name}%20saya%20tertarik%20untuk%20join%20Evoush, %20apa%20anda%20bisa%20bantu%20saya`" class="whatsapp"><i class='bx bxl-whatsapp text-success'></i></a>
						<a :href="`https://www.facebook.com/${member.facebook}`" class="facebook"><i class="bx bxl-facebook"></i></a>
						<a :href="`https://www.instagram.com/${member.instagram}`" class="instagram"><i class="bx bxl-instagram text-danger"></i></a>
						<a :href="member.youtube" class="linkedin"><i class="bx bxl-youtube text-danger"></i></a>
					</div>

				</div>
			</div>

			<div class="col-12 col-lg-12 col-xs-12 col-sm-12">
				<ul style="list-style: none;">
					<li><b>Page :{{members.from}}</b></li>
					<li><b>Per Page : {{members.per_page}}</b></li>
					<li><b>Total Page : {{members.total}}</b></li>
				</ul>
				<br>
				<blockquote class="blockquote-footer text-danger">
					Gunakan link halaman di bawah untuk melihat list member selanjutnya.
				</blockquote>
				<pagination align="center" :data="members" @pagination-change-page="listMembers"></pagination>
			</div>
			
		</div>
	</div>
</section>
<!-- End Services Section -->
</div>
</template>


<script>
	import pagination from 'laravel-vue-pagination'

	export default {
		props: ['members'],

		components: {
			pagination
		},

		mounted(){
			this.listMembers()
		},

		methods: {
			listMembers(page){
				this.$axios
				.get(`/evoush/member-list?page=${page}`)
				.then(res => {
					return res.data
				})
				.then(data => {
					this.members = data
				})
				.catch(err => console.log(err.response))
				.finally(() => this.loading = false)
			},
		}
	}
</script>