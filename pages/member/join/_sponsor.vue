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
			<div class="row py-5 mt-4 align-items-center">
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
						<img src="https://d33wubrfki0l68.cloudfront.net/3dafc215e0dc2be7e854dc25c44c453fdaf4be87/ccccb/uploads/foodrush-loader.gif" class="img-fluid">
					</div>
					<!-- <h1>Teu di hide anjing</h1> -->
					<div v-if="err_message" class="alert alert-danger">{{err_message}}</div>
					<form  @submit.prevent="storeNewMember">

						<div class="row">

							<input type="hidden" name="email_sponsor" :value="dataSponsor[0].email" id="email_sponsor">

							<input type="hidden" name="sponsor_id" :value="dataSponsor[0].id" id="sponsor_id">

							<input type="hidden" name="roles[]" value="FOLLOWER" id="roles">

							<input type="hidden" name="status" value="INACTIVE" id="status">

							<input type="hidden" name="username_path" :value="dataSponsor[0].username" id="username_path">

							<!-- First Name -->
							<div class="input-group col-lg-12 mb-4">
								<div class="input-group-prepend">
									<span class="input-group-text bg-white px-4 border-md border-right-0">
										<i class='bx bx-user text-muted'></i>
									</span>
								</div>
								<input type="text" v-model="field.name" name="name" placeholder="Nama Lengkap Anda" class="form-control bg-white border-left-0 border-md" id="name">

								<div class="col-lg-12 col-xs-12 col-sm-12">
									<small class="text-danger">*wajib di isi</small>
									<br />
								</div>

								<div class="col-lg-12 col-xs-12 col-sm-12">
									<small v-if="validation.name" class="mt-2 text-danger">
										{{validation.name[0]}}
									</small>
								</div>

							</div>

							<!-- Last Name -->
							<!-- <div class="input-group col-lg-6 mb-4">
								<div class="input-group-prepend">
									<span class="input-group-text bg-white px-4 border-md border-right-0">
										<i class='bx bx-user text-muted'></i>
									</span>
								</div>
								<input type="text" name="last_name" placeholder="Last Name" class="form-control bg-white border-left-0 border-md" id="last_name">

							</div> -->

							<!-- Email Address -->
							<div class="input-group col-lg-12 mb-4">
								<div class="input-group-prepend">
									<span class="input-group-text bg-white px-4 border-md border-right-0">
										<i class='bx bx-envelope-open text-muted'></i>
									</span>
								</div>
								<input id="email" v-model="field.email" type="email" name="email" placeholder="alamat_email_anda@email.com" class="form-control bg-white border-left-0 border-md">

								<div class="col-lg-12 col-xs-12 col-sm-12">
									<small class="text-danger">*Wajib diisi</small>
									<br />
								</div>
								<div class="col-lg-12 col-xs-12 col-sm-12">
									<small v-if="validation.email" class="mt-2 text-danger">
										{{validation.email[0]}}
									</small>
								</div>
							</div>

							<!-- Phone Number -->
							<div class="input-group col-lg-12 mb-4">
								<div class="input-group-prepend">
									<span class="input-group-text bg-white px-4 border-md border-right-0">
										<i class='bx bx-phone text-muted'></i>
									</span>
								</div>
								<!-- <select id="countryCode" name="countryCode" style="max-width: 80px" class="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted">
									<option value="">+12</option>
									<option value="">+10</option>
									<option value="">+15</option>
									<option value="">+18</option>
								</select> -->
								<vue-tel-input type="number" v-model="field.phone" class="bg-white border-md border-left-0 pl-3" id="phone" name="phone"></vue-tel-input>
								<!-- <input type="tel" id="phone" name="phone" placeholder="Phone Number Format:(628782xxxx)" class="form-control bg-white border-md border-left-0 pl-3"> -->
								<div class="col-lg-12 col-xs-12 col-sm-12">
									<small class="text-danger">*Wajib diisi</small>
									<br />
								</div>
								<div class="col-lg-12 col-xs-12 col-sm-12">
									<small v-if="validation.phone" class="mt-2 text-danger">
										{{validation.phone[0]}}
									</small>
								</div>
							</div>


							<!-- Job -->
							<div class="input-group col-lg-12 mb-4">
								<div class="input-group-prepend">
									<span class="input-group-text bg-white px-4 border-md border-right-0">
										<i class='bx bx-globe text-muted'></i>
									</span>
								</div>
								<select
                                    name="province"
                                    class="form-control custom-select bg-white border-left-0 border-md"
                                    v-on:change="getCity"
                                    id="province">
                                    <option value="" data-id="">Pilih Provinsi</option>
                                    <option
                                        v-for="provins in provinces.provinsi"
                                        v-bind:value="provins.id"
                                        :value="provins.id"
                                        :data-id="provins.id"
                                        >{{ provins.nama }}</option
                                    >
                                </select>

                                <div class="col-lg-12 col-xs-12 col-sm-12">
	                                <small class="text-danger">*wajib di pilih salah satu</small>
	                                <br>
                                </div>

                                <div class="col-lg-12 col-xs-12 col-sm-12">
                                	<small v-if="validation.province" class="mt-2 text-danger">
										{{validation.province[0]}}
									</small>
                                </div>

							</div>

							<div class="input-group col-lg-12 mb-4">
								<div class="input-group-prepend">
									<span class="input-group-text bg-white px-4 border-md border-right-0">
										<i class='bx bx-globe text-muted'></i>
									</span>
								</div>
								<select
                                    name="city"
                                    class="form-control custom-select bg-white border-left-0 border-md"
                                    id="city"
                                >
                                    <option value="">Pilih Kota</option>
                                    <option
                                        v-for="city in citys.kota_kabupaten"
                                        :key="city.id"
                                        :value="city.nama"
                                        >{{ city.nama }}</option
                                    >
                                </select>
                                <div class="col-lg-12 col-xs-12 col-sm-12">
	                                <small class="text-danger">*wajib di pilih salah satu</small >
	                                <br>
                                </div>

                                <div class="col-lg-12 col-xs-12 col-sm-12">
                                	<small v-if="validation.city" class="mt-2 text-danger">
										{{validation.city[0]}}
									</small>
                                </div>

							</div>

							<!-- Password -->
							<div class="input-group col-lg-6 mb-4">
								<div class="input-group-prepend">
									<span class="input-group-text bg-white px-4 border-md border-right-0">
										<i class='bx bx-lock-alt text-muted'></i>
									</span>
								</div>
								<input v-model="field.password" placeholder="password"
                                    type="password"
                                    name="password"
                                    id="password" class="form-control bg-white border-left-0 border-md">

                                <div class="col-lg-12 col-xs-12 col-sm-12">
                                	<small class="text-danger">*wajib di isi</small>
                                	<br />
                                	<div
                                	id="show-password"
                                	class="show"
                                	v-on:click="showPassword"
                                	>
	                                	<div v-if="showing === false">
	                                		<span v-html="show"></span> Show Password
	                                	</div>
	                                	<div v-else>
	                                		<span v-html="hide"></span> Hide Password
	                                	</div>
                                	</div>
                                </div>
                                <div class="col-lg-12 col-xs-12 col-sm-12">
                                	<small v-if="validation.password" class="mt-2 text-danger">
										{{validation.password[0]}}
									</small>
                                </div>

							</div>

							<!-- Password Confirmation -->
							<div class="input-group col-lg-6 mb-4">
								<div class="input-group-prepend">
									<span class="input-group-text bg-white px-4 border-md border-right-0">
										<i class='bx bx-lock-alt text-muted'></i>
									</span>
								</div>
								<input v-model="field.password_confirmation" placeholder="Ketik ulang password anda"
                                    type="password"
                                    name="password_confirmation"
                                    id="password_confirmation" class="form-control bg-white border-left-0 border-md">

                                    <div class="col-lg-12 col-xs-12 col-sm-12">
	                                    <small class="text-danger">*Ulangi password</small>
	                                    <div
	                                    id="show-password"
	                                    class="show"
	                                    v-on:click="showPasswordConfirm"
	                                    >
		                                    <div v-if="showingConfirm === false">
		                                    	<span v-html="show"></span> Show Password
		                                    </div>
		                                    <div v-else>
		                                    	<span v-html="hide"></span> Hide Password
		                                    </div>
	                                	</div>
                                	</div>

                                	<div class="col-lg-12 col-xs-12 col-sm-12">
                                		<small v-if="validation.password_confirmation" class="mt-2 text-danger">
	                                    		{{validation.password_confirmation[0]}}
	                                    	</small>
                                	</div>

							</div>

							<!-- Submit Button -->
							<div class="form-group col-lg-12 mx-auto mb-0">
								<!-- <a href="#" class="btn btn-primary btn-block py-2">
									<span class="font-weight-bold">Join Member</span>
								</a> -->
								<button type="submit" class="btn btn-primary">
									Join Member
								</button>
							</div>

							<!-- Divider Text -->
							<!-- <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
								<div class="border-bottom w-100 ml-5"></div>
								<span class="px-2 small text-muted font-weight-bold text-muted">OR</span>
								<div class="border-bottom w-100 mr-5"></div>
							</div> -->

							<!-- Social Login -->
							<!-- <div class="form-group col-lg-12 mx-auto">
								<a href="#" class="btn btn-primary btn-block py-2 btn-facebook">
									<i class="fa fa-facebook-f mr-2"></i>
									<span class="font-weight-bold">Continue with Facebook</span>
								</a>
								<a href="#" class="btn btn-primary btn-block py-2 btn-twitter">
									<i class="fa fa-twitter mr-2"></i>
									<span class="font-weight-bold">Continue with Twitter</span>
								</a>
							</div> -->

							<!-- Already Registered -->
							<!-- <div class="text-center w-100">
								<p class="text-muted font-weight-bold">Already Registered? <a href="#" class="text-primary ml-2">Login</a></p>
							</div> -->

						</div>
					</form>

				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import Logo from '~/components/molecules/Logo'

	export default {
		layout: 'pages',
		components: {
			Logo
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
			this.getProvinsi()
		},

		methods: {
			AktivasiAkun(){
				this.$router.back()
			},
			storeNewMember(e) {
				e.preventDefault()
				this.loading = true
				const setData = {
					sponsor_id: document.querySelector('#sponsor_id').value,
					roles: document.querySelector('#roles').value,
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
				const id = e.target.value;
				this.$axios
				.get(
					`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id}`
					)
				.then(res => {
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

<style scoped>
.border-md {
	border-width: 2px;
}

.btn-facebook {
    background: #405D9D;
    border: none;
}

.btn-facebook:hover, .btn-facebook:focus {
    background: #314879;
}

.btn-twitter {
    background: #42AEEC;
    border: none;
}

.btn-twitter:hover, .btn-twitter:focus {
    background: #1799e4;
}

.show{
	cursor: pointer;
}

/*
*
* ==========================================
* FOR DEMO PURPOSES
* ==========================================
*
*/

body {
    min-height: 100vh;
}

.form-control:not(select) {
    padding: 1.5rem 0.5rem;
}

select.form-control {
    height: 52px;
    padding-left: 0.5rem;
}

.form-control::placeholder {
    color: #ccc;
    font-weight: bold;
    font-size: 0.9rem;
}
.form-control:focus {
    box-shadow: none;
}

</style>