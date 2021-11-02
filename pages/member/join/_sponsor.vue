<template>
	<div>
		<!-- Navbar-->
		<header class="header">
			<nav class="navbar navbar-expand-lg navbar-light py-3">
				<div class="container">
					<!-- Navbar Brand -->
					<a href="#" class="navbar-brand">
						<!-- <Logo/>voush -->
						<nuxt-link class="btn btn-danger ml-3 mt-3" :to="`/member/${dataSponsor[0].username}`"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
					</a>
				</div>
			</nav>
		</header>


		<div class="container">
			<div class="row py-5 align-items-center">
				<!-- For Demo Purpose -->
				<div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
					<img :src="`https://app.evoush.com/storage/${dataSponsor[0].avatar}`" alt="" class="img-fluid mb-3 d-none d-md-block img-responsive" width="300">
					<h1>Join Member Baru</h1>
					<p class="font-italic text-muted mb-0">Anda akan diarahkan untuk join member baru dari sponsor <strong class="text-primary" style="text-transform: capitalize;">{{dataSponsor[0].name}}</strong>.</p>
					<p class="font-italic text-muted">Silahkan isi data <a href="https://bootstrapious.com" class="text-muted">
						<u>di form join berikut dengan lengkap dan benar sesuai data informasi yang kami sediakan.</u></a>
					</p>
				</div>

				<!-- Registeration Form -->



				<div v-if="hide_form" class="col-md-7 col-lg-6 ml-auto">
					<div class="alert alert-success" role="alert">
						<h4 class="alert-heading">Selamat Bergabung</h4>
						<p v-html="message"></p>
						<hr>
						<p class="mb-0">Silahkan klik tombol aktivasi dibawah ini .</p>
						<!-- <button class="btn btn-primary btn-block mt-5 mb-3" @click="AktivasiAkun">Aktivasi Akun</button> -->
						<a :href="`https://wa.me/${dataSponsor[0].phone}?text=Hallo%20${dataSponsor[0].name}%20saya%20sudah%20melakukan%20join%20menjadi%20member%20anda, %20apa%20anda%20bisa%20bantu%20saya%20untuk%20proses%20aktivasi`" target="_blank" class="btn btn-primary btn-block mt-5 mb-5" @click="AktivasiAkun">Aktivasi Akun</a>
					</div>
				</div>


				<div v-else id='form-join' class="col-md-7 col-lg-6 ml-auto">


					<div v-if="loading">
						<center>
							<img src="https://www.suchirayuhospital.com/img/rolling.gif" class="img-fluid">
						</center>
					</div>

					<div v-if="err_message" class="alert alert-danger">{{err_message}}</div>

					<div v-if="new_member_inactive === false">
						<div v-if="has_join_status" class="alert alert-warning alert-dismissible fade show" role="alert">
							<strong>Halo {{ activate_user.username }}!</strong> Anda merupakan member dari sponsor <nuxt-link :to="`/member/${has_join.username}`"> <strong>{{ has_join.name }}</strong></nuxt-link>
							<button type="button" class="close" data-dismiss="alert" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<!-- form anjing -->
						<div v-else>
							<FormJoin :dataSponsor="dataSponsor" :storeNewMember="storeNewMember" :validation="validation" :field="field" :provinces="provinces" :getCity="getCity" :citys="citys" :showPassword="showPassword" :showPasswordConfirm="showPasswordConfirm" :showing="showing" :showingConfirm="showingConfirm" :show="show" :hide="hide" :loading="loading" :loading_city="loading_city"/>
						</div>
					</div>

					<div v-else>
						<!-- <pre>
							{{ activate_user }}
						</pre> -->
						<div v-if="activate_user.status === 'INACTIVE'" class="alert alert-warning alert-dismissible fade show" role="alert">
							<strong>Halo {{ activate_user.username }}!</strong> Jika pemberitahuan ini masih muncul, kemungkinan member anda belum di aktivasi pada system web replika, silahkan hubungi sponsor atau admin website official evoush. <br>
							<a href="#" class="btn-link" @click="AktivasiAkun">Refresh Page</a>
							<!-- <button type="button" class="close" data-dismiss="alert" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button> -->
						</div>


						<div v-else>
							<div class="alert alert-warning alert-dismissible fade show" role="alert">
								<strong>Halo {{ activate_user.username }}!</strong> Anda merupakan member dari sponsor <nuxt-link :to="`/member/${has_join.username}`"> <strong>{{ has_join.name }}</strong></nuxt-link>
								<button type="button" class="close" data-dismiss="alert" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
						</div>


					</div>

				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import Logo from '~/components/molecules/Logo'
	import FormJoin from '@/components/PublicProfile/FormJoin'

	export default {
		layout: 'pages',
		components: {
			Logo,
			FormJoin
		},
		async asyncData({$axios, params}){
			const sponsor = params.sponsor
			const dataSponsor = await $axios.$get(`/member/${sponsor}`)

			return {
				dataSponsor
			}

		},

		data(){
			return {
				provinces: [],
				citys: [],
				showing: false,
				showingConfirm: false,
				show: `<i class='bx bx-show'></i>`,
				hide: `<i class='bx bxs-hide'></i>`,
				error: false,
				name_join: "",
				email_sponsor: "",
				success: null,
				activate_user: {},
				has_join: {},
				has_join_status:'',
				new_member_inactive: false,
				loading_city: null,

				result: {},
				field: {
					name: '',
					email: '',
					phone: '',
					password: '',
					password_confirmation:'',
					achievements: null
				},
				messages: '',
				err_message: '',
				validation:{},
				profile: this.profileData,
				loading: null,
				activated: null,
				hide_form: null
			}
		},

		created(){
			this.getProvinsi(),
			this.CheckAktivasi(),
			this.CheckSponsor()
		},

		methods: {
			AktivasiAkun(){
				location.reload()
			},
			CheckSponsor(){
				const sponsor_id = localStorage.getItem('sponsor_id')
				const user = JSON.parse(localStorage.getItem('activation'))
				if(user !== null){
					this.$axios.get(`https://app.evoush.com/api/evoush/member/sponsor/check/${user.id}`)
					.then(res => {
						console.log(res.data)
						if(res.data.data){
							this.$toast(`${user.username}, anda telah join menjadi member dari sponsor : ${res.data.data.username}`)
							this.has_join_status = true
							this.has_join = res.data.data
						}else{
							this.has_join_status = false
						}
					})
					.catch(err => {
						console.log(err.message)
					})
				}else{
					console.log('....')
				}
			},
			CheckAktivasi(){
				const user = JSON.parse(localStorage.getItem('activation'))
				console.log(user)
				if(user !== null){
					this.$axios.get(`https://app.evoush.com/api/evoush/user/active/${user.email}`)
					.then(res => {
						this.activate_user = {
							id: res.data.data.id,
							username: res.data.data.username,
							email: res.data.data.email,
							status: res.data.data.status
						}
						if(this.activate_user.status === "INACTIVE"){
							this.new_member_inactive = true
							this.$toast(`${res.data.data.username}, username anda belum di aktivasi, silahkan laporkan ke admin website official evoush`)
						}
						localStorage.setItem('activation', JSON.stringify(this.activate_user))
					})
					.catch(err => {
						console.log(err.message)
					})
				}else{
					console.log('....')
				}
				// this.$router.back()
			},
			storeNewMember(e) {
				e.preventDefault()
				this.loading = true
				const roles = document.querySelector('#roles').value
				const setData = {
					sponsor_id: document.querySelector('#sponsor_id').value,
					roles: [roles],
					status: document.querySelector('#status').value,
					username_path: document.querySelector('#username_path').value,
					name: this.field.name,
					email: this.field.email,
					phone: this.field.phone,
					province: document.querySelector('#province').value,
					city: document.querySelector('#city').value,
					password: this.field.password,
					password_confirmation: this.field.password_confirmation,
					achievements: this.field.achievements,
				}

				this.$axios
				.post('https://app.evoush.com/api/member/activation', setData)
				// .finally(() => {
				// 	console.log("Beres anjing kadie")
				// 	e.target.reset()
				// 	this.hide_form = false
				// 	this.activated = true
				// 	this.loading = false
				// 	this.success = true
				// 	this.hideForm()
				// })
				.then(res => {

					this.message = res.data.message
					if(this.message){
						this.$toast(`Selamat bergabung ${setData.name}, silahkan lanjut ke aktivasi.`)
						e.target.reset()
						this.hide_form =true
						this.setCookie("New Member", setData.name, 7);
						const storage_data = {
							status: setData.status,
							email: setData.email
						}
						localStorage.setItem('sponsor_id', setData.sponsor_id)
						localStorage.setItem('activation', JSON.stringify(storage_data))
					}
				})
				.catch(err => {
					this.err_message = "Terjadi kesalahan / mohon isi kolom input dengan lengkap dan benar"
					this.hide_form = false
					this.loading = false
					this.success = false
					this.validation = err.response.data
					this.getAlert(this.err_message, 'https://i.gifer.com/CSrL.gif', 'https://e7.pngegg.com/pngimages/906/961/png-clipart-white-bricks-and-wall-background-clean-walls.png')
					this.showForm()
				})

			},

			getProvinsi() {
				this.$axios
				.get("https://dev.farizdotid.com/api/daerahindonesia/provinsi")
				.then(res => {
					// console.log(res)
					this.provinces = res.data
				})
			},

			getCity(e) {
				this.loading_city = true
				const id = e.target.value;
				this.$axios
				.get(
					`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id}`
					)
				.then(res => {
					setTimeout(() => {
						this.loading_city = false
					}, 1500)
					this.citys = res.data;
				});
			},

			showPassword() {
				const password = document.querySelector("#password");
				if (password.type === "password") {
					password.type = "text";
					this.showing = true;
				} else {
					password.type = "password";
					this.showing = false;
				}
			},
			showPasswordConfirm() {
				const password = document.querySelector("#password_confirmation");
				if (password.type === "password") {
					password.type = "text";
					this.showingConfirm = true;
				} else {
					password.type = "password";
					this.showingConfirm = false;
				}
			},

			getAlert(message, gif, bg) {
				this.$swal({
					title: message,
					width: 600,
					padding: "3em",
					background: `#fff url(${bg})`,
					backdrop: `
					rgba(0,0,123,0.4)
					url("${gif}")
					left top
					no-repeat
					`
				});
			},

			setCookie(cname, cvalue, exdays) {
				const d = new Date();
				d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
				let expires = "expires=" + d.toGMTString();
				document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
			},
			deleteCookie(cname) {
	            var d = new Date(); //Create an date object
	            d.setTime(d.getTime() - (1000*60*60*24)); //Set the time to the past. 1000 milliseonds = 1 second
	            var expires = "expires=" + d.toGMTString(); //Compose the expirartion date
	            window.document.cookie = cname+"="+"; "+expires;//Set the cookie with name and the expiration date
	            // window.location.reload()
	            this.hideModal()
	            this.new_member = null
	        },

	        hideForm(){
	        	document.getElementById('form-join').style.display.visibility = "hidden"
	        },

	        showForm(){
	        	document.getElementById('form-join').style.display.visibility = "visible"
	        }

	    }
	}
</script>

