<template>
	<div>
		<h6>Cari Member Anda</h6>
		<form @submit.prevent="SearchMember">
			<div class="row justify-content-center">
				<div class="col-md-8 col-xs-5 col-sm-5">
					<input type="text" name="search" v-model="search.username" class="form-control" placeholder="Cari member berdasarkan username terdaftar"autocomplete="off">
				</div>
				<div class="col-md-4 col-xs-3 col-sm-3">
					<button type="submit" class="search btn btn-primary">
						<div v-if="loading">
							<img src="https://d2b8lqy494c4mo.cloudfront.net/mss/images/loading.gif" class="img-fluid  loading-img">
						</div>
						<div v-else>
							<i class='bx bx-lg bx-search-alt'></i>cari
						</div>
					</button>
				</div>
			</div>
		</form>

		<div v-if="error">
			<div class="alert alert-danger mt-3">
				{{ error }}
			</div>
			<!-- <img src="https://64.media.tumblr.com/aac2f5a3e634799d9b15fa20218efa51/tumblr_p9rgvzIBhe1wxdq3zo1_500.gifv" class="img-fluid mt-2 mb-5"> -->
			<img v-if="!loading" src="https://cdn.dribbble.com/users/2272148/screenshots/6633933/daily008.gif" class="img-fluid mb-5 mt-2">
		</div>

		<div v-if="loading">
			<img src="https://media.baamboozle.com/uploads/images/61672/1613937931_188128_gif-url.gif" class="img-fluid">
		</div>

		<div v-else>
			<div v-if="message" :class="message === `Data username ${username} ditemukan` ? 'alert alert-success mt-5' : 'alert alert-warning mt-5'">
				{{ message }}
			</div>

				<CardMember :members="members"/>

			</div>
		</div>

	</div>
</template>

<script>
	import CardMember from '@/components/molecules/SearchMemberprofile'

	export default{
		components: {
			CardMember
		},
		data(){
			return{
				search:{
					username: ''
				},
				loading: null,

				members: [],
				message: '',
				error: '',
				username: ''
			}
		},

		methods:{
			SearchMember(){
				this.loading = true
				const username = this.search.username
				if(username === ""){
					this.error = "Kolom input username wajib di isi"
					this.members = ''
					this.message = ''
					setTimeout(() => {
						this.loading = false
					}, 1500)
				}else{
					this.$axios(`https://app.evoush.com/api/member/search/${username}`)
					.then(res => {
						this.error = false
						console.log(res.data)
						this.search.username = ''
						setTimeout(() => {
							this.loading = false
							this.members = res.data.data
							this.message = res.data.message
							this.username = this.members[0].username
						}, 1500)
					})
					.catch(err => {
						console.log(err)
					})
				}
			}
		}
	}
</script>


<style>
	.search{
		margin-top:.7rem;
		width:100%;
	}
	.bx-search-alt{
		font-size: 27px;
		padding:2;
	}
	.loading-img {
		max-width: 80px;
	}
	@media (min-width: 992px) {
		.search{
			margin-top:-.3rem;
			width: 30%;
		}
	}
</style>