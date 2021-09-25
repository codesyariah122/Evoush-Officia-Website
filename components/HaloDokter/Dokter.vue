<template>
	<div>
		<div v-if="success" class="col-lg-12 col-xs-12 col-sm-12">
			<div class="alert alert-success">
				{{ success }}
			</div>
		</div>

		<div v-if="errors" class="col-lg-12 col-xs-12 col-sm-12">
			<div class="alert alert-warning">
				{{ errors }}
			</div>
		</div>

		<!-- <pre>
			{{ users }}
		</pre> -->



		<div class="col-lg-12 col-xs-8 col-sm-8">
			<form @submit.prevent="KirimPertanyaan">
				<div class="form-group">
					<label for="fullname">Nama Lengkap</label>
					<input type="text" name="fullname" class="form-control" placeholder="Nama Lengkap Anda" v-model="consults.fullname">
					<div v-if="validation.fullname" class="mt-2 alert alert-danger">
						{{ validation.fullname[0] }}
					</div>
				</div>
				<div class="form-group">
					<label for="fullname">Username Member Evoush</label>
					<input type="text" name="username" class="form-control" placeholder="Username member resmi anda di evoush" v-model="consults.username">
					<div v-if="validation.username" class="mt-2 alert alert-danger">
						{{ validation.username[0] }}
					</div>
				</div>
				<div class="form-group">
					<label for="phone">No Hp / Mobile Phone</label>
					<vue-tel-input v-model="consults.phone"></vue-tel-input>
					<div v-if="validation.phone" class="mt-2 alert alert-danger">
						{{ validation.phone[0] }}
					</div>
				</div>

				<input type="hidden" name="ip" v-model="consults.city">

				<div class="form-group">
					<label for="phone">Usia</label>
					<input type="number" name="age" v-model="consults.age" class="form-control">
					<div v-if="validation.age" class="mt-2 alert alert-danger">
						{{ validation.age[0] }}
					</div>
				</div>

				<div class="form-group">
					<label>Jenis Kelamin</label>
					<br>
					<input type="radio" name="gender" id="pria" value="pria" v-model="consults.gender">
					<label for="pria"><i class='bx bx-male'></i>Pria</label>
					<input class="ml-5" type="radio" name="gender" id="wanita" value="wanita" v-model="consults.gender">
					<label for="wanita"><i class='bx bx-female'></i>Wanita</label>
					<br>
					<div v-if="validation.gender" class="mt-2 alert alert-danger">
						{{ validation.gender[0] }}
					</div>
				</div>

				<div class="form-group">
					<label for="d1">Pertanyaan Anda</label>
					<!-- <textarea name="message" class="form-control" placeholder="Isi dengan pertanyaan mengenai keluhan seputar masalah kesehatan" v-model="consults.message"></textarea> -->
					<tinymce id="d1" v-model="consults.message"></tinymce>
					<div v-if="validation.message" class="mt-2 alert alert-danger">
						{{ validation.message[0] }}
					</div>
				</div>

				<input type="hidden" name="status" value="INACTIVE" v-model="consults.status">

				<div class="form-group mt-5">
					<small class="text-danger">Klik tombol (kirim pertanyaan) dibawah setelah selesai mengisi seluruh kolom input pertanyaan di atas</small><br>
					<button type="submit" class="btn btn-primary btn-lg btn-block">
						<div v-if="loading">
							<small class="text-white">Loading ... dulu kak !</small> <br>
							<img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" width="70" class="img-fluid">
						</div>
						<div v-else>
							Mulai Konsultasi
						</div>
					</button>
				</div>
			</form>
		</div>

	</div>
</template>

<script>
	export default{

		data(){
			return{
				loading: null,
				success: '',
				errors: '',
				consults: {},
				validation: [],
				ip: '',
				users: {}
			}
		},

		mounted(){
			this.getIp(),
			this.getCity(this.ip),
			this.consults.status = "INACTIVE"
		},

		methods: {
			getIp(){

    			this.$axios
    			.get('http://ip-api.com/json/')
    			.then(res => {
    				this.ip = res.data.query
    				// console.log(res)
    			})
    			.catch(err => console.log(err.message))
			},

			getCity(ip){
				this.$axios
				.get(`https://ipapi.co/${ip}/json/`)
				.then(res => {
					this.consults.city = res.data.city
				})
				.catch(err => console.log(err.message))
			},
			KirimPertanyaan(e){
				e.preventDefault()
				this.loading = true
				this.errors = null

				let data = {
					fullname: this.consults.fullname,
					username: this.consults.username,
					phone: this.consults.phone,
					message: this.consults.message,
					city: this.consults.city,
					age: this.consults.age,
					gender: this.consults.gender,
					status: this.consults.status
				}

				localStorage.setItem('consults', JSON.stringify(data))

				this.$axios.post('https://app.evoush.com/api/evoush/consults', data)
				.then(res => {
					console.log(res)
					// if(res.status === 200){
						this.loading = false
						this.success = res.data.message
						this.consults.fullname = ''
						this.consults.phone = ''
						this.consults.message = ''
						this.consults.age = ''
						this.consults.gender = ''


						this.toasts(`${this.success}, Selanjutnya kami akan menyambungkan chat anda ke dokter kami`)
						setTimeout(()=>{
							location.reload()
						}, 5000)
					// }

				})
				.catch(err => {
					this.loading = false
					this.success = null
					this.errors = "Terjadi kesalahan saat proses mengirim data"
					this.validation = err.response.data
					console.log(err.response.data)
				})
			},

			toasts(message){
				this.$toast(message)
			}

		}

	}
</script>
