
<template>
	<div>
		<div class="container">
			<div class="row justify-content-end mt-2 mb-3">
				<div class="col-lg-6 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#members"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
				</div>
			</div>

			<div class="row justify-content-center mt-5 mb-3">
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<SocialSharing :socials="socials"/>
					<!-- <h1>Halo</h1> -->
				</div>
			</div>

		</div>
		<div v-if="length == 1">
			<Profile :members="members"/>
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
	import Profile from '@/components/PublicProfile/index'


	export default{
		layout: 'member',
		components: {
			Profile
		},
		async asyncData({$axios, params}){
			const members = await $axios.$get(`/member/${params.username}`)
			const length = members.length
			console.log(length)
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