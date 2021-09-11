
<template>
	<div>
		<div class="container">
			<div class="row justify-content-end mt-3 mb-3">
				<div class="col-lg-1 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#members"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
				</div>
			</div>
		</div>
		<div v-if="length == 1">
			<Profile :token="token" :user="user" :members="members" :username="username"/>
		</div>


		<div v-else>
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-12 col-xs-12 col-sm-12">
						<div class="alert alert-danger">
							Member yang dicari tidak ditemukan
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Profile from '@/components/ProfileLogin/index'


	export default{
		layout: 'member',
		components: {
			Profile
		},

		data(){
			return {
				token: localStorage.getItem('token'),
				username: localStorage.getItem('username'),
				user: ''
			}
		},

		mounted(){
			if(this.token){
				// this.$swal({
				// 	icon: 'success',
				// 	title: `Selamat datang ${this.username}`,
				// 	showConfirmButton: false,
				// 	text: `Selamat datang ${this.username}`
				// })
				this.$toast(`Selamat Datang ${this.username}`)
				return this.$router.push({
					name:'profile-username',
					params: {username: this.username}
				})
			}else{
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
			this.$axios.$get(`https://app.evoush.com/api/member/${this.username}`)
			.then(response => {
				this.user = response[0]

			})
			.catch(error => {
				console.log(error.response)
			})
		},

		async asyncData({$axios, params}){
			const members = await $axios.$get(`/member/${params.username}`)
			const length = members.length
			return {members, length}
		},
	}
</script>


<style>
	.social-links{
		font-size: 31px!important;
	}
	.profile-head {
		transform: translateY(5rem)
	}
</style>