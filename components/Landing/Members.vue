<template>
	<div>
		<!-- ======= Services Section ======= -->
		<section id="members" class="services">
			<div class="container" data-aos="fade-up">
				<div class="section-title">
					<h2>Leaders</h2>
					<p>
						Halo <span style="color:#ff3b40;">evousher</span> <strong class="text-primary">{{city}}</strong> <br> 
						Berikut ini adalah leader <span style="color:#ff3b40;">evoush</span> yang telah terdaftar resmi di system web replika member <span style="color:#ff3b40;">evoush</span>. <br> Ini merupakan bagian web support kami guna meningkatkan branding secara personal bagi member-member evoush, dan kami akan selalu terus meningkatkan kualitas fungsi dari web replika kami.
					</p>
				</div>

				<div class="row">
					<!-- <pre>
						{{members}}
					</pre> -->
					<div v-for="member in members.data" class="col-lg-4 col-md-6 d-flex align-items-stretch mb-3" data-aos="zoom-in" data-aos-delay="100">
						<div :class="(member.id % 2 == 0) ? 'icon-box iconbox-blue' : 'icon-box iconbox-red'">
							<div class="icon">
								<svg width="200" height="200" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
									<path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
								</svg>
								<!-- <i class="bx bxl-dribbble"></i> -->
								<img v-if="member.avatar" :src="`https://app.evoush.com/storage/${member.avatar}`" class="img-fluid img-responsive image--profile-member img-responsive rounded-circle center-block d-block mx-auto mt-2" width="150">
								<img v-else src="https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/profile/default.jpg" :alt="member.name" class="image--profile-member img-responsive rounded-circle center-block d-block mx-auto mt-2" width="100">
							</div>
							<div class="mt-5">
								<h4>{{member.name}}</h4>
								<ul>
									<li><strong>Username : {{member.username}}</strong></li>
									<li><strong>Status : </strong> <span class="badge badge-success">Active</span></li>
									<li><span class="badge badge-info"><i class='bx bxs-trophy bx-lg text-white'></i> {{member.achievements.includes('STAR SAPHIRE') ? 'STAR SAPHIRE' : 'SAPHIRE'}}</span></li>
									<li class="mt-5 mb-5">
										<strong>Media Social : </strong><br>
										<div class="social-links">
											<a :href="`https://wa.me/${member.phone}?text=Hallo%20${member.name}%20saya%20tertarik%20untuk%20join%20Evoush, %20apa%20anda%20bisa%20bantu%20saya`" target="_blank" class="whatsapp"><i class='bx bxl-whatsapp text-success'></i></a>
											<a :href="`https://www.facebook.com/${member.facebook}`" target="_blank" class="facebook"><i class="bx bxl-facebook text-primary"></i></a>
											<a :href="`https://www.instagram.com/${member.instagram}`" target="_blank" class="instagram"><i class="bx bxl-instagram text-danger"></i></a>
											<a :href="`${member.youtube}`" target="_blank" class="youtube"><i class='bx bxl-youtube text-danger'></i></a>
											<a :href="`mailto:${member.email}`" target="_blank" class="email"><i class='envelope-open text-warning'></i></a>
										</div>
									</li>
								</ul>
								<div v-if="member.quotes">
									<blockquote class="blockquote-footer">
										{{member.quotes}}
										<br>
										<small style='text-transform: capitalize; font-size: 14px;' class="text-secondary">
											Quotes by : {{member.name}}
										</small>
									</blockquote>
								</div>
								<div v-else>
									<blockquote class="blockquote-footer">
										Belum Menambahkan Quotes, silahkan edit profile <br>
										<small style='text-transform: capitalize;' class="text-secondary">
											{{member.name}} Belum menambahkan quotes
										</small>
									</blockquote>
								</div>

								<div class="mt-5">
									<nuxt-link :to="{name:'member-username', params: {username: member.username}}" class="btn btn-primary"><i class='bx bx-link-external text-white'></i> Lihat Profile</nuxt-link>
								</div>
							</div>
						</div>
					</div>


					<div class="col-12 col-lg-12 col-xs-12 col-sm-12 mt-5">
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

		
		data(){
			return {
				ip: '',
				city: '',
				members: []
			}
		},

		mounted(){
			this.listMembers(),
			this.getIp(),
			this.getLocation(this.ip)
		},

		methods: {
			listMembers(page){
				this.$axios
				.get(`https://app.evoush.com/api/evoush/member-list?page=${page}`)
				.then(res => {
					// console.log(res)
					return res.data
				})
				.then(data => {
					console.log(data)
					this.members = data
				})
				.catch(err => console.log(err.response))
				.finally(() => this.loading = false)
			},
			getIp(){
				this.$axios
				.get('https://api.ipify.org/?format=json')
				.then(res => {
		        	// console.log(res)
		        	this.ip = res.data.ip
        		})
        		.catch(err => console.log(err.message))
			},
			getLocation(ip){
				this.$axios
				.get(`https://ipapi.co/${ip}/json/`)
				.then(res => {
					this.city = res.data.city
				})
				.catch(err => console.log(err.message))
			}
		}
	}
</script>