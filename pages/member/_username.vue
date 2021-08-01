  
<template>
	<div>
		<div class="container">
			<div class="row justify-content-end mt-2 mb-3">
				<div class="col-lg-1 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#members"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
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
		head(){
			return {
				title: `Evoush::Member | ${this.members[0].username}`,
				link: [
					{rel: 'canonical', href: `https://evoush.com/member/${this.members[0].username}`}
				],
				meta: [
				{ hid: 'description', name: 'description', content: 'Evoush::Member'},
				{ hid: 'keywords', name: 'keywords', content: 'Evoush::Official | Web::Replika'},
				{ hid: 'author', name: 'author' , content: `${this.members[0].username} | Evoush::Member`},
				{ hid: 'og:type', property: 'og:type', content: 'website'},
				{ hid: 'og:url', property: 'og:url', content: `https://evoush.com/member/${this.members[0].username}`},
				{ hid: 'og:title', property: 'og:title', content: 'Evoush Indonesia | Evoush::Member'},
				{ hid: 'og:site_name', property: 'og:site_name', content: `${this.members[0].name} | ${this.members[0].username}`},
				{ hid: 'og:description', property: 'og:description', content: `${this.members[0].quotes}`},
				{ hid: 'og:image', property: 'og:image', content: `https://app.evoush.com/storage/${this.members.[0].avatar}`},
				{ hid: 'og:image:width', property: 'og:image:width', content: '600'},
				{ hid: 'og:image:height', property: 'og:image:height', content: '598'}
				]
			}
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