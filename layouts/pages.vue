<template>
	<div>
		<div id="fb-root"></div>
		<main>
<!--
			<pre>
				ie event
				<h1>{{event}}</h1>
			</pre> -->

			<div class="container">
				<div class="row justify-content-center mt-5">
					<div class="col-12 col-lg-12 col-xs-12 col-sm-12">
						<div class="float-right">
							<ColorModePicker/>
						</div>
					</div>
				</div>

				<div class="row justify-content-center">
					<div class="col-lg-12 col-xs-12 col-sm-12">
						<pre>
							{{ status }}
						</pre>
						<div v-if="status === 'INACTIVE'" class="alert alert-warning">
							Hi {{ users.fullname }}, proses konsultasi anda sedang kami proses. Jika pesan ini masih ada harap refresh halaman, dengan menekan tombol refresh di bawah ini. <br>
							<button class="btn btn-primary mt-3" @click="Reload">Refresh</button>
						</div>
					</div>
				</div>

			</div>

			<Nuxt/>

			<a href="#" class="back-to-top"><i class="bx bx-up-arrow-alt"></i></a>
			<!-- <div id="preloader"></div> -->

		</main>
	</div>
</template>


<script>
	import ColorModePicker from '@/components/molecules/ColorModePicker'

	export default {
		data(){
			return {
				event: ($nuxt.$router.path === '/event/anniversary' ? false : true),
				users: {},
				consults: [],
				check: {},
				status: '',
				path: $nuxt.$route.name
			}
		},
		components: {
			ColorModePicker
		},

		mounted(){
			this.getChat(this.status),
			this.getDataConsult()
		},

		methods:{
			getDataConsult(){

				this.users = localStorage.getItem('consults') ? JSON.parse(localStorage.getItem('consults')) : ''

				this.$axios.get(`https://app.evoush.com/api/evoush/data/consult/${this.users.username}`)
				.then(res => {
					this.consults = res.data.data
					console.log(this.consults.length)
					if(this.consults.length > 0){
						this.check = this.consults.map(d => {
							return d.username == this.users.username ? d : ''
						})
						// console.log(this.check[0])
						this.status = this.check[0].status
						console.log(this.status)
						this.getChat(this.status)
					}
				})
				.catch(err => {
					console.log(err)
				})


			},

			getChat(status){
				if(this.path !== "halo-dokter" ||  this.status === ""){
					$crisp.push(['do', 'chat:hide'])
				}else{
					if(this.status === "ACTIVE"){
						$crisp.push(['do', 'chat:show'])
					}
				}
			},


			Reload(){
				window.location.reload()
			}
		}

	}
</script>


<style>
	:root {
		--primary-color: #fff;
	}
</style>