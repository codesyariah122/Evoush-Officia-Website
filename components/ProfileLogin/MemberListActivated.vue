<template>
	<div>

		<div class="row justify-content-center">
			<div class="col-md-8">
				<div class="people-nearby">

					<!-- <pre>
						{{newMembers}}
					</pre> -->
					<div v-if="success">
						<div v-if="loading">
							<img src="https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!w340">
						</div>
						<div v-else class="alert alert-success">
							{{message}}
						</div>
						<center>
							<nuxt-link class="btn btn-danger ml-3 mt-3" :to="`/profile/${username}`"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
						</center>
					</div>

					<div v-else>
						<div v-if="newMembers.length > 0" class="nearby-user">
							<div v-for="(item, index) in newMembers" class="row">
								<div  class="col-md-2 col-sm-2">
									<img v-if="item.avatar" :src="`https://app.evoush.com/storage/${item.avatar}`" alt="user" class="profile-photo-lg">
									<img v-else src="https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/profile/default.jpg" :alt="item.name" class="image--profile-member img-responsive rounded-circle center-block d-block mx-auto mt-2" width="100">
								</div>
								<div class="col-md-7 col-sm-7">
									<h5><a href="#" class="profile-link" style="text-transform: capitalize;">{{item.name}}</a></h5>
									<p><strong>Username : </strong>{{item.username}}</p>
									<p class="text-muted">
										<strong>Join Pada : {{formatDate(item.created_at)}}</strong>
									</p>
								</div>
								<div class="col-md-3 col-sm-3">
									<form @submit.prevent="AktivasiMember">
										<input type="hidden" name="id" :value="item.id">
										<input type="hidden" name="status" value="ACTIVE">
										<button class="btn btn-primary pull-right" type="submit">Aktivasi</button>
									</form>
								</div>
							</div>
						</div>

						<div v-else class="nearby-user">
							<div class="row justify-content-center">
								<div class="col-lg-12 col-xs-12 col-sm-12">
									<h2 class="text-center text-muted">Belum anda member baru join</h2>
								</div>
								<div class="col-lg-12 col-xs-12 col-sm-12">
									<center>
										<nuxt-link class="btn btn-danger ml-3 mt-3" :to="`/profile/${username}`"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
									</center>
								</div>
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
		props: ['newMembers', 'username'],

		data(){
			return{
				created: '',
				message: '',
				users: {},
				show: false,
				loading: false,
				success: false
			}
		},

		methods: {
			formatDate(date) {
				const options = { year: 'numeric', month: 'long', day: 'numeric' }
				return new Date(date).toLocaleDateString('en', options)
			},

			AktivasiMember(){
				const id = document.querySelector("input[name='id']").value
				const status = document.querySelector("input[name='status']").value

				this.$axios.put(`/member/activated/${id}`, {
					id: id,
					status: status
				})
				.then(res => {
					this.$toast(res.data.message)
					this.message = res.data.message
					this.users = res.data.data
					console.log(res)
				})
				.finally((index) =>{
					this.$delete(this.newMembers, index)
					this.show = true
					this.success = true
				})
				.catch(err => console.log(err.response))

				console.log(status)
			},
		}
	}
</script>