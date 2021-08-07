<template>
	<div>
		<div v-for="member in members" class="row justify-content-center px-2 py-1 mx-auto mb-5">
			<div class="col-lg-10 col-xs-12 col-sm-12 mx-auto">
				<!-- Profile widget -->
				<div class="shadow rounded overflow-hidden profile">
					<!-- <pre>
						http://localhost:8000/storage/{{member.cover}}
					</pre> -->
					<div class="px-4 pt-5 pb-4 cover" :style="(member.cover) ? `background-image: url('https://app.evoush.com/storage/${member.cover}')` : 'background-image: url(https://mediatrack.sg/wp-content/uploads/2021/02/digital-transformation-banner-blog.png)'">
						<div class="media align-items-end">
							<div class="row justify-content-center">
								<div class="col-lg-10">
									<div v-if="member.avatar">
										<img :src="`https://app.evoush.com/storage/${member.avatar}`" alt="..." width="130" class="rounded-circle mb-3 profile profile-overlay">
									</div>
									<div v-else>
										<img src="https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/profile/default.jpg" :alt="member.name" class="rounded-circle mb-3" width="100">
									</div>
								</div>
								<div class="col-lg-8 col-xs-6 col-sm-6">
									<div class="media-body">
										<h4 style="text-transform: capitalize;">{{member.name}}</h4>
										<p class="small"> <i class='bx bx-map'></i>
											{{member.city}} | {{member.province}}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- <pre>
						{{token}}
					</pre> -->

					<div class="p-4 d-flex justify-content-end text-center">
						<ul class="list-inline mb-0">
							<li class="list-inline-item">
								<h5 class="font-weight-bold mb-0 d-block">
									{{samples.length}}
								</h5><small class="text-muted"> <i class="fas fa-image mr-1"></i>Gallery</small>
							</li>
							<li class="list-inline-item">
								<div v-if="loading">
									<img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" width="50">
								</div>
								<div v-else>
									<h5 class="font-weight-bold mb-0 d-block">{{followers}}</h5>
								</div>
								<small class="text-muted"> <i class="fas fa-user mr-1"></i>Members</small>
							</li>							
							<li v-if="token" class="mb-2 mt-2">
								<nuxt-link :to="{name:'profile-username', params: {username: user.username}}" class="btn btn-success">My Profile</nuxt-link>
							</li>
							<li v-else class="mb-2 mt-2">
								<nuxt-link to="/auth/login" class="btn btn-primary">Login</nuxt-link>
							</li>
						</ul>
					</div>


					<ProfileTabs :member="member" :samples="samples" :user="user"/>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ProfileTabs from './ProfileTabs'

	export default {
		props: ['members'],
		middleware: 'authenticated',
		components: {
			ProfileTabs
		},
		
		data(){
			return {
				samples: [
				{id:1, url: 'https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
				{id:2, url: 'https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
				{id:3, url: 'https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
				{id:4, url: 'https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}
				],

				followers: null,
				loading: true,
				token: localStorage.getItem('token'),
				username: localStorage.getItem('username'),
				user: '',
				sapaan: ''
			}
		},

		mounted(){
			if(this.token && this.username){
				return this.$router.push({
					name: 'profile-username',
					params: {username: this.username}
				})
			}
			this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token}`
			this.$axios.get('/api/user')
			.then(response => {

                    //console.log(response.data.name)
                    this.user = response

                })
			.catch(error => {
				console.log(error.response.data)
			})
			
			this.getFollowers(this.members[0].username)
		},
		methods: {
			getFollowers(username){
				this.$axios.get(`/member/join/active/${username}`)
				.then( res => {
					if(res.length > 0){
						this.followers = res.length
					}else{
						this.followers = 0
					}
					// console.log(this.length)
				})
				.catch(err => console.log(err.response))
				.finally(() => this.loading = false)
			},

			logout(){
				this.$swal({
					title: 'Are you sure?',
					text: "Want to exit this account",
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Yes, Logout!'
				}).then((result) => {
					if (result.isConfirmed) {
						this.$swal(
							'Okay',
							'Anda akan segera logout',
							'success'
						)
						this.$axios.defaults.headers.common.Authorization  = `Bearer ${this.token}`
						this.$axios.post('/logout')
						.then(res => {
							// console.log(res)
							if(res.data.success) {

		                    //remove localStorage
		                    localStorage.removeItem('token')

		                    //redirect ke halaman login
		                     return this.$router.push({
		                        	path: '/auth/login'
		                        })
		                    }
		                })
						.catch(error => {
							// console.log(error)
							console.log(error.response.data)
						})
					}
				})
			}
		}
	}
</script>



<style scoped>
.cover {	
	background-repeat: no-repeat;
	/*height: 50vh;*/
	min-height: 50vh;
	width: 100%;
	-webkit-background-size: cover;
	background-size: cover;
	position: relative;
}

.media .profile{
	width: 250px;
	height: 250px;
	border-radius: 50%!important;
	margin-top: 7rem;
	margin-left: -2rem;
}

.container {
	position: relative;
	width: 50%;
}
.profile-overlay{
	opacity: 1;
	display: block;
	width: 100%;
	height: auto;
	transition: .5s ease;
	backface-visibility: hidden;
}
.container:hover .profile-overlay{
	opacity: 0.3;
}

.middle {
	transition: .5s ease;
	opacity: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	text-align: center;
}

.container:hover .middle{
	opacity: 1;
}

.text {
	background-color: #04AA6D;
	color: white;
	font-size: 12px;
	padding: 2px 3px;
	cursor: pointer;
}

.media-body h4{
	font-size: 35px;
}
@media (min-width: 992px) { 
	.media .profile{
		margin-top: 25rem;
		/*margin-left: 2rem;*/
	}

}
</style>