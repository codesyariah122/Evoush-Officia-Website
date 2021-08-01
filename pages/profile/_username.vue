  
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
			<Profile :token="token" :user="user" :members="members" :sapaan="sapaan"/>
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
				user: '',
				sapaan: ''
			}
		},

		mounted(){
			this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token}`
			this.$axios.$get('http://localhost:8000/api/user')
			.then(response => {
				console.log(response)
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