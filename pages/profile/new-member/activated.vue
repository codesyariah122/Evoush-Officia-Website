<template>
	<div>
		<section id="members" class="services">
			<div class="container" data-aos="fade-up">
				<div class="section-title">
					<h2>Aktivasi Member {{username}}</h2>
				</div>

				<MemberList :newMembers="newMembers" :username="username"/>

			</div>
		</section>
	</div>
</template>


<script>
	import MemberList from '@/components/ProfileLogin/MemberListActivated'

	export default{
		layout: 'member',
		components: {
			MemberList
		},

		data(){
			return{
				newMembers:[],
				token: localStorage.getItem('token'),
				username: localStorage.getItem('username'),
			}
		},

		mounted(){
			this.inActiveMember()
		},
		methods: {
			inActiveMember(){
				this.$axios.get(`https://app.evoush.com/api/member/join/inactive/${this.username}`)
				.then(res=>{
					this.newMembers = res.data
					this.$toast(`Halo ${this.members[0].username}, Anda mempunya ${this.newMembers.length} member yang perlu di aktivasi. Silahkan diaktivasi.`)
				})
			},
		}
	}
</script>


<style>
.people-nearby .google-maps{
	background: #f8f8f8;
	border-radius: 4px;
	border: 1px solid #f1f2f2;
	padding: 20px;
	margin-bottom: 20px;
}

.people-nearby .google-maps .map{
	height: 300px;
	width: 100%;
	border: none;
}

.people-nearby .nearby-user{
	padding: 20px 0;
	border-top: 1px solid #f1f2f2;
	border-bottom: 1px solid #f1f2f2;
	margin-bottom: 20px;
}

img.profile-photo-lg{
	height: 80px;
	width: 80px;
	border-radius: 50%;
}
</style>