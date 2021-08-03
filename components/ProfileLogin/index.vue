<template>
	<div>
		<div v-for="member in members" class="row justify-content-center px-2 py-1 mx-auto mb-5">
			<div class="col-lg-10 col-xs-12 col-sm-12 mx-auto">
				<!-- Profile widget -->
				<div class="shadow rounded overflow-hidden profile">
					<div class="px-4 pt-5 pb-4 cover" :style="(member.cover) ? `background-image: url('https://app.evoush.com/storage/${member.username}/${member.cover}')` : 'background-image: url(https://mediatrack.sg/wp-content/uploads/2021/02/digital-transformation-banner-blog.png)'">
						<div class="media align-items-end">
							<div class="row justify-content-center">
								<div class="col-lg-10">
									<div v-if="member.avatar">
										<img :src="`https://app.evoush.com/storage/${member.avatar}`" alt="..." width="130" class="rounded-circle mb-3">
									</div>
									<div v-else>
										<img src="https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/profile/default.jpg" :alt="member.name" class="image--profile-member rounded-circle center-block d-block mx-auto mt-0 mb-0" width="100">
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
							<li class="mb-2 mt-2">
								<a class="btn btn-danger" @click.prevent="logout">Logout</a>
							</li>
							<li>
								<nuxt-link :to="{name:'profile-edit-username', params: {username: user.username}}" class="btn btn-outline-info btn-sm mb-0 mt-3">Edit profile</nuxt-link>
							</li>
						</ul>
					</div>

					<div class="container">					
						<div class="row justify-content-center">
							<div class="col-lg-12 col-xs-12 col-sm-12">
								<center>
									<div class="alert alert-success alert-dismissible fade show" role="alert">
										<strong>Halo! {{sapaan}}</strong> Anda telah login menggunakan username <strong class="text-info">{{user.username}}</strong>.
										<button type="button" class="close" data-dismiss="alert" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>	
								</center>
							</div>
						</div>
					</div>

					<ProfileTabs :user="user" :samples="samples"/>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ProfileTabs from './ProfileTabs'

	export default {
		props: ['members', 'sapaan', 'token'],
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
				user: ''
			}
		},
		head(){
			return {
				title: `Evoush::Member | ${this.user.username}`,
				meta: [
				{ hid: 'description', name: 'description', content: 'Evoush::Member'},
				{ hid: 'keywords', name: 'keywords', content: 'Evoush::Official | Web::Replika'},
				{ hid: 'author', name: 'author' , content: `${this.user.username} | Evoush::Member`},
				{ hid: 'og:type', property: 'og:type', content: 'website'},
				{ hid: 'og:url', property: 'og:url', content: `https://evoush.com/member/${this.user.username}`},
				{ hid: 'og:title', property: 'og:title', content: 'Evoush Indonesia | Evoush::Member'},
				{ hid: 'og:site_name', property: 'og:site_name', content: `${this.user.name} | ${this.user.username}`},
				{ hid: 'og:description', property: 'og:description', content: `${this.user.quotes}`},
				{ hid: 'og:image', property: 'og:image', content: `https://app.evoush.com/storage/${this.user.avatar}`},
				{ hid: 'og:image:width', property: 'og:image:width', content: '600'},
				{ hid: 'og:image:height', property: 'og:image:height', content: '598'}
				]
			}
		},

		mounted(){

			if(!this.token){
				this.$swal({
					icon: 'error',
					title: 'Oops...',
					text: 'Sepertinya anda belum login!',
					footer: '<a href="https://evoush.com/issue">Why do I have this issue?</a>'
				})
				return this.$router.push({
					path: '/auth/login'
				})
			}

			this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token}`
			this.$axios.$get('https://app.evoush.com/api/user')
			.then(response => {

                    this.user = response

                    let h=(new Date()).getHours();
                    let m=(new Date()).getMinutes();
                    let s=(new Date()).getSeconds();
                    if (h >= 4 && h < 10) this.sapaan = "Selamat pagi, "
                    	if (h >= 10 && h < 15) this.sapaan = "Selamat siang, "
                    		if (h >= 15 && h < 18) this.sapaan = "Selamat sore, "
                    			if (h >= 18 || h < 4) this.sapaan = "Selamat malam, "

                })
			.catch(error => {
				console.log(error.response.data)
			})

			this.getFollowers(this.user.username)
		},
		methods: {
			getFollowers(username){
				this.$axios.$get(`/member/join/active/${username}`)
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
					title: 'Anda yakin ingin keluar ?',
					text: `Anda akan keluar dari akun ${this.user.username}`,
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Yes, Logout!'
				}).then((result) => {
					if (result.isConfirmed) {
						this.$swal(
							'Okay',
							`Anda telah logout dari akun ${this.user.username}`,
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
	/*background-size: cover;*/
	background-repeat: no-repeat;
	/*height: 50vh;*/
	min-height: 50vh;
	width: 100%;
	-webkit-background-size: cover;
	background-size: cover;
	position: relative;
}

.media img{
	border-radius: 50%!important;
	margin-top: 7rem;
}

.media-body h4{
	font-size: 14px;
}
@media (min-width: 992px) { 
	.media img{
		margin-top: 25rem;
		margin-left: 2rem;
	}
}

</style>