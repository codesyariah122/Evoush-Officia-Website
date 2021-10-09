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
							<small class="text-white">Loading ...</small><br>
							<img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" class="img-fluid  loading-img">
						</div>
						<div v-else>
							<i class='bx bx-lg bx-search-alt'></i>cari
						</div>
					</button>
				</div>
			</div>
		</form>

		<div v-if="loading">
			<!-- <img src="https://media.baamboozle.com/uploads/images/61672/1613937931_188128_gif-url.gif" class="img-fluid"> -->
			<div class="d-flex align-items-start">
				<strong>Loading...</strong>
				<div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
			</div>
		</div>

		<div v-if="error">
			<div class="alert alert-danger mt-3">
				{{ error }}
			</div>
			<!-- <img src="https://64.media.tumblr.com/aac2f5a3e634799d9b15fa20218efa51/tumblr_p9rgvzIBhe1wxdq3zo1_500.gifv" class="img-fluid mt-2 mb-5"> -->
			<center>
				<img  src="https://i.pinimg.com/originals/5b/a7/5f/5ba75f2cf22105ce68ac7bae24cd5eac.gif" width="400" class="img-fluid mb-5 mt-2">
			</center>
		</div>


		<div v-else>
			<div v-if="show">

				<div v-if="message === `Data username ${username} ditemukan`" class="alert alert-success mt-5">
					{{ message }}
				</div>

				<div v-else>
					<center>
						<img  src="https://raw.githubusercontent.com/evoush-products/bahan_evoush/a7ec8cdbaccc66257bbdc5d2d82d8a202069d8b9/assets/alert-assets/error-no-result.svg" width="400" class="img-fluid mb-2 mt-2">
						<br>
						<div class="alert alert-warning">
							{{ message }}
						</div>
					</center>
				</div>

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
				show: false,
				members: [],
				message: '',
				error: '',
				username: ''
			}
		},

		methods:{
			SearchMember(){
				this.show = false
				this.loading = true
				this.error = ''
				const username = this.search.username

				if(username === ""){
					setTimeout(() => {
						this.error = "Kolom input username wajib di isi"
						this.members = ''
						this.message = ''
						this.loading = false
					}, 1500)
				}else{
					this.$axios(`https://app.evoush.com/api/member/search/${username}`)
					.then(res => {
						this.members = res.data.data
						console.log(this.members)
						if(this.members != ""){
							this.search.username = ''
							this.loading = false
							this.show = true
							this.error = false
							this.message = res.data.message
							this.username = this.members[0].username
						}
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
		max-width: 30px;
	}
	@media (min-width: 992px) {
		.search{
			margin-top:-.3rem;
			width: 50%;
		}
	}
</style>