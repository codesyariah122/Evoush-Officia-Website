<template>
	<div>

	<!-- 	<pre>
			{{user}}
		</pre> -->

		<ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
			<li class="nav-item" role="presentation">
				<a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><i class='bx bxs-user-detail'></i></a>
			</li>
			<li class="nav-item" role="presentation">
				<a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"><i class='bx bxs-camera-movie'></i></a>
			</li>
			<li class="nav-item" role="presentation">
				<a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false" @click="getMember(user.username)"><i class='bx bx-group'></i></a>
			</li>
		</ul>
		<div class="tab-content" id="pills-tabContent">
			<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
				<div class="px-4 py-3">
					<center>
						<div class="p-4 rounded shadow-lg">
							<p class="font-italic mb-0"><strong>Username : {{user.username}}</strong></p>
							<p class="font-italic mb-0"><strong>Status : </strong> <span class="badge badge-success">{{user.status}}</span></p>
							<p class="font-italic mb-0"><strong>Join : {{formatDate(user.created_at)}}</strong></p>
							<br>

							<div v-if="user.quotes">
								<blockquote class="blockquote-footer mt-3">
									{{user.quotes}}
									<br>
									Quotes by : {{user.username}}
								</blockquote>
							</div>
							<div v-else>
								<blockquote class="blockquote-footer mt-3">
									<strong>{{user.username}}, <small class="text-danger">belum menambahkan quotes.</small> </strong>
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
						<div v-if="user.about">
							<blockquote class="blockquote-footer" v-html="user.about">
							</blockquote>
						</div>
						<div v-else>
							<blockquote class="blockquote-footer text-center">
								<strong>{{user.username}}, <small class="text-danger">belum menambahkan success story.</small></strong>
							</blockquote>
						</div>
					</div>
				</div>
			</div>
			<div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
				<div class="px-4 py-3">
					<div class="p-4 rounded shadow-lg">

						<!-- <pre>
							{{length}}
						</pre> -->

						<div v-if="length > 0">
							<div v-if="loading">
								<center>
									<img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" width="50">
								</center>
							</div>
							<div v-else>
								<FollowersList :followers="followers" :member="user"/>
							</div>
						</div>
						<div v-else>
							<div class="container">
								<div class="row justify-content-center">
									<center>
										<div class="col-lg-12 col-xs-12 col-sm-12">

											<blockquote class="blockquote-footer mb-2">
												<strong>{{user.username}}, <small class="text-danger">{{followers.message}}</small></strong>
											</blockquote>
											<br>
											<center>
												<a href="" class="btn btn-outline-success mb-5 mt-5">Daftarkan Member Baru</a>
											</center>
										</div>
									</center>
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
	import FollowersList from '@/components/ProfileLogin/Followers'

	export default {
		props: ['user', 'samples'],
		components: {
			FollowersList
		},
		data(){
			return{
				followers: [],
				length: null,
				loading: false,
				followers:[]
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