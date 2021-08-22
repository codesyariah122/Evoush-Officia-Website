<template>
	<div>
		<ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
			<li class="nav-item" role="presentation">
				<a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><i class='bx bxs-user-detail'></i></a>
			</li>
			<li class="nav-item" role="presentation">
				<a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"><i class='bx bxs-camera-movie'></i></a>
			</li>
			<li class="nav-item" role="presentation">
				<a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false" @click="getMember(member.username)"><i class='bx bx-group'></i></a>
			</li>
		</ul>
		<div class="tab-content" id="pills-tabContent">
			<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
				<div class="px-4 py-3">
					<center>
						<!-- <pre>
							{{member}}
						</pre> -->



						<div class="p-4 rounded shadow-lg">
							<p class="font-italic mb-0"><strong>Username : {{member.username}}</strong></p>
							<p class="font-italic mb-0"><strong>Status : </strong> <span class="badge badge-success">{{member.status}}</span></p>
							<p class="font-italic mb-0"><strong>Join : {{formatDate(member.created_at)}}</strong></p>


							<div class="social-links mt-3 mb-5">
								<!-- <small>Social media & Contact Founder : </small><br> -->

								<a :href="`https://wa.me/${member.phone}?text=Hallo%20${member.name}%20saya%20tertarik%20untuk%20join%20untuk%20menjadi%20member%20anda, %20bisakah%20saya%20dibantu%20untuk%20join%20member%20baru`" target="_blank" class="whatsapp"><i class='bx bxl-whatsapp text-success'></i></a>
								<a :href="`https://www.facebook.com/${member.facebook}`" target="_blank" class="facebook"><i class="bx bxl-facebook text-primary"></i></a>
								<a :href="`https://www.instagram.com/${member.instagram}`" target="_blank" class="instagram"><i class="bx bxl-instagram text-danger"></i></a>
								<a :href="member.youtube" target="_blank" class="youtube"><i class='bx bxl-youtube text-danger'></i></a>
								<a :href="`mailto: ${member.email}`" target="_blank" class="email"><i class='bx bx-envelope-open text-warning'></i></a>
							</div>

							<br>
							<div v-if="member.quotes">
								<blockquote class="blockquote-footer mt-3">
									{{member.quotes}}
									<br><br>
									<strong>Quotes by : <span style="text-transform: capitalize;">{{member.name}}</span></strong>
								</blockquote>
							</div>


							<div v-else>
								<blockquote class="blockquote-footer mt-3">
									<strong>{{member.username}}, <small class="text-danger">belum menambahkan quotes.</small> </strong>
								</blockquote>
							</div>
						</div>
					</center>
				</div>

				<div class="py-4 px-4">
					<div class="d-flex align-items-center justify-content-between mb-3">
						<h5 class="mb-0">Gallery Image</h5><a href="#" class="btn btn-link text-muted">Show all</a>
					</div>
					<div class="row">
						<div v-for="sample in samples" class="col-lg-6 mb-2 pr-lg-1">
							<img :src="sample.url" alt="" class="img-fluid rounded shadow-sm">
						</div>
					</div>
				</div>

			</div>
			<div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
				<div class="px-4 py-3">
					<div class="p-4 rounded shadow-lg">
						<h4 class="mb-0 text-center">Success Story : </h4>
						<div v-if="member.about">
							<blockquote class="blockquote-footer" v-html="member.about">
							</blockquote>
						</div>
						<div v-else>
							<blockquote class="blockquote-footer text-center">
								<strong>{{member.username}}, <small class="text-danger">belum menambahkan success story.</small></strong>
							</blockquote>
						</div>
					</div>
				</div>
			</div>
			<div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
				<div class="px-4 py-3">
					<div class="p-4 rounded shadow-lg">
						<div v-if="length > 0">
							<div v-if="loading">
								<center>
									<img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" width="50">
								</center>
							</div>
							<div v-else>
								<FollowersList :followers="followers" :member="member"/>
							</div>
						</div>
						<div v-else>
							<div class="container">
								<div class="row justify-content-center">
									<div v-if="token && user.username">
										<center>
											<!-- <pre>
												{{user}}
											</pre> -->
											<!-- <div class="col-lg-12 col-xs-12 col-sm-12">
												<blockquote class="blockquote-footer mb-2">
													<strong>{{member.username}}, <small class="text-danger">{{followers.message}}</small></strong>
												</blockquote>
												<br>
												<center>
													<a href="" class="btn btn-outline-success mb-5 mt-5">Daftarkan Member Baru</a>
												</center>
											</div> -->
											<div class="col-lg-12 col-xs-12 col-sm-12">
												<blockquote class="blockquote-footer mb-2">
													<strong>{{member.username}}, <small class="text-danger">{{followers.message}}</small></strong>
												</blockquote>
											</div>
										</center>
									</div>
									<div v-else>
										<center>
											<!-- <div class="col-lg-12 col-xs-12 col-sm-12">
												<blockquote class="blockquote-footer mb-2">
													<strong>{{member.username}}, <small class="text-danger">{{followers.message}}</small></strong>
												</blockquote>
											</div> -->

											<div class="col-lg-12 col-xs-12 col-sm-12">
												<p><span class="text-primary">Tertarik untuk mempunyai web replika ? seperti</span> <strong>{{member.username}}</strong> <br><br>Anda bisa langsung join menjadi bagian dari member sponsor <strong>{{member.username}}</strong>, langsung klik atau tap tombol <span class="text-danger">Join</span> Di bawah.<br></p>
											</div>
										</center>
										<div class="row justify-content-center">
											<div class="col-lg-12 col-xs-12 col-sm-12">
												<center>
													<nuxt-link :to="{name: 'member-join-sponsor', params:{sponsor: member.username}}" class="btn btn-outline-success mb-5 mt-5"><i class='bx bxs-user-check'></i>  Join Now</nuxt-link>
												</center>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
						<!-- <pre>
							{{followers}}
						</pre> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	import FollowersList from './Followers'

	export default {
		props: ['user', 'member', 'samples'],
		components: {
			FollowersList
		},
		data(){
			return{
				followers: [],
				length: null,
				loading: true,
				token: localStorage.getItem('token'),
			}
		},

		methods: {
			formatDate(date) {
				const options = { year: 'numeric', month: 'long', day: 'numeric' }
				return new Date(date).toLocaleDateString('en', options)
			},
			getMember(username){
				this.loading = true
				this.$axios.get(`/member/join/active/${username}`)
				.then( res => {
					console.log(res.data.length)
					this.followers = res.data
					console.log(this.followers)
					this.length = res.data.length
				})
				.catch(err => console.log(err.response))
				.finally(() => this.loading = false)
			}
		}
	}
</script>


<style scoped>
.nav-pills i {
	font-size: 36px !important;
}
</style>