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

				<div v-if="check[0]">
					<div class="row justify-content-center">
						<div class="col-lg-12 col-xs-12 col-sm-12">
							<!-- <pre>
								{{ check }}
							</pre> -->
							<div class="alert alert-success alert-dismissible fade show" role="alert">
								<strong>Halo {{ check[0].username }}!</strong> Setelah melakukan Refresh Halaman, Untuk Memulai konsultasi Bersama Dokter Winda Silahkan Memulai Chat Di Bagian Kiri, atau di chatbox yang telah aktif.
								<button type="button" class="close" data-dismiss="alert" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
						</div>
					</div>
				</div>

				<div class="row justify-content-center">
					<div class="col-lg-12 col-xs-12 col-sm-12">
						<!-- <pre>
							{{ status }}
						</pre> -->
						<div v-if="status === 'INACTIVE'" class="alert alert-warning">
							Hi {{ users.fullname }}, proses konsultasi anda sedang kami proses. Jika pesan ini masih muncul harap refresh halaman, dengan melakukan tap/klik tombol refresh di bawah ini. <br>
							<button class="btn btn-primary mt-3" @click="Reload">Refresh</button>
						</div>
					</div>
				</div>

			</div>

			<Nuxt/>

			<a href="#" class="back-to-top"><i class="bx bx-up-arrow-alt"></i></a>
			<!-- <div id="preloader"></div> -->

			<Footer class="mt-5"/>

		</main>
	</div>
</template>


<script>
	import ColorModePicker from '@/components/molecules/ColorModePicker'
	import Footer from '~/components/layouts/Footer'

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
			ColorModePicker,
			Footer
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
					// console.log(this.consults.length)
					if(this.consults.length > 0){
						this.check = this.consults.map(d => {
							return d.username == this.users.username ? d : ''
						})
						// console.log(this.check[0])
						this.status = this.check[0].status
						// console.log(this.status)
						this.getChat(this.status)
					}
				})
				.catch(err => {
					console.log(err)
				})


			},

			getChat(status){
				if(this.status === ""){
					$crisp.push(['do', 'chat:hide'])
				}else{
					if(this.status === "ACTIVE"){
						$crisp.push(['do', 'chat:show'])
						$crisp.push(['do', 'chat:open'])
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