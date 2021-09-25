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
				status: ''
			}
		},
		components: {
			ColorModePicker
		},

		mounted(){
			// this.getChat(),
			this.getDataConsult()
		},

		methods:{
			getDataConsult(){
				this.users = localStorage.getItem('consults') ? JSON.parse(localStorage.getItem('consults')) : ''
				this.$axios.get(`https://app.evoush.com/api/evoush/data/consult/${this.users.username}`)
				.then(res => {
					this.consults = res.data.data
					this.check = this.consults.map(d => {
						return d.username == this.users.username ? d : ''
					})
					// console.log(this.check[0])
					this.status = this.check[0].status

					const path = window.location.pathname.split('/')
					console.log(this.status)

					if(path[1] !== "halo-dokter" ||  this.status === "INACTIVE"){
						$crisp.push(['do', 'chat:hide'])
					}else{
						$crisp.push(['do', 'chat:show'])
					}
				})

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