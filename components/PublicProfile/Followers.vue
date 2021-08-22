<template>
	<div>
		<div class="container">

			<div class="d-flex justify-content-center row">
				<div class="col-md-6">
					<div class="follower-card  p-3  text-center">
						<div>
							<!-- <img src="https://i.imgur.com/yFeV2ed.png"> -->
							<h4 style="text-transform: capitalize;">List Member {{member.name}}</h4>
						</div>
						<p><span class="text-primary">Tertarik untuk mempunyai web replika ? seperti</span> {{member.username}}&nbsp;<br>Anda bisa langsung join menjadi bagian dari member sponsor {{member.username}}, langsung klik atau tap tombol <span class="text-danger">Join</span> Di bawah.<br><br></p>

						<nuxt-link :to="{name: 'member-join-sponsor', params:{sponsor: member.username}}" class="btn btn-outline-success mb-5 mt-5"><i class='bx bxs-user-check'></i> Join Now</nuxt-link>

						<!-- <pre>
							{{followers}}
						</pre> -->

						<div v-for="follower in followers" class="d-flex flex-row justify-content-between align-items-center">
							<div class="d-flex flex-row align-items-center">
								<div v-if="follower.avatar">
									<img :src="`https://app.evoush.com/storage/${follower.avatar}`" class="image--profile-member rounded center-block d-block mx-auto mt-0 mb-0" width="55">
								</div>
								<div v-else>
									<img class="rounded-circle" src="https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/profile/default.jpg" width="55">
								</div>
								<div class="d-flex flex-column align-items-start ml-2">
									<span style="text-transform: capitalize;" class="font-weight-bold">{{follower.name}}</span><span class="followers badge badge-success">{{follower.status}}</span></div>
							</div>
							<div class="d-flex flex-row align-items-center mt-2">
								<nuxt-link :to="{name:'member-username', params: {username: follower.username}}" class="btn btn-outline-primary"><i class='bx bx-link-external'></i> Lihat Profile</nuxt-link>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['followers', 'member']
	}
</script>

<style scoped>
.followers {
	font-size: 12px
}
</style>