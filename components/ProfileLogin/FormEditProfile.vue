<template>
	<div>
		<div class="container-fluid rounded bg-white mt-5">
			<div class="row edit-form">
				<div class="col-md-4 border-right">
					<div class="d-flex flex-column align-items-center text-center p-3 py-5">
						<div v-if="field.avatar">
							<img class="rounded-circle mt-5" :src="`https://raw.githubusercontent.com/evoush-products/bahan_evoush/main/migration_db/${field.avatar}`" width="90">
						</div>
						<span class="font-weight-bold" style="text-transform: capitalize;">{{field.name}}</span>
						<span>{{field.email}}</span>
						<span>{{field.city}} | {{field.province}}</span>
					</div>
					<div v-if="showSuccess">
						<div v-if="message" class="col-md-12">
							<div class="alert alert-success alert-dismissible fade show" role="alert">
								<strong>Halo {{field.username}}!</strong> {{message}} <strong class="text-primary">Successfully</strong>.
								<button type="button" class="close" data-dismiss="alert" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
						</div>

						<div v-else class="col-md-8 ml-5">
							<div class="alert alert-success alert-dismissible fade show" role="alert">
								<strong>Ooopsss!</strong> {{message}} <strong class="text-primary">Failed Errors</strong>.
								<button type="button" class="close" data-dismiss="alert" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
						</div>
					</div>
				</div>



<!-- <pre>
	{{field.id}}
</pre> -->

<!-- <pre>
	{{edits}}
</pre> -->
<!-- <pre>
	{{provinces}}
</pre> -->

				<div class="col-md-8">
					<div class="p-3 py-5">
						<div class="d-flex justify-content-between align-items-center mb-3">
							<div class="d-flex flex-row align-items-center back">
								<a @click="historyBack()" class="btn btn-primary"><i class='bx bx-arrow-back'></i> Kembali</a>
							</div>
							<h6 class="text-right">Edit Profile</h6>
						</div>


						<form @submit.prevent="updateProfile">
							<div class="row mt-2">
								<input type="hidden" name="id" id="id" v-model="field.id">
								<div class="col-md-6 mb-3"><input type="text" id="name" class="form-control" placeholder="Nama Lengkap" v-model="field.name"></div>
								<div class="col-md-6"><input type="text" id="username" class="form-control" placeholder="Username Member" v-model="field.username"></div>
							</div>
							<div class="row mt-3">
								<div class="col-md-6 mb-3"><input type="text" id="email" class="form-control" placeholder="Email@address.com" v-model="field.email"></div>
								<div class="col-md-6"><input type="text" id="phone" class="form-control" placeholder="Phone number / format: 6282xxxxxxxxx" v-model="field.phone"></div>
							</div>
							<div class="row mt-3">
								<div class="col-md-6 mb-3">
									<select name="province" id="province" class="form-control" v-on:change="getCity">
										<option v-model="field.province">{{field.province}}</option>
										<option value="" data-id=""><b>Ubah Provinsi</b></option>
										<option v-for="provins in provinces" v-bind:value="provins.id" v-model="provins.nama" :data-id="provins.id">{{provins.nama}}</option>
									</select>
								</div>
								<div class="col-md-6">
									<div v-if="!pilih">
										<select name="city" id="city" class="form-control">
											<option v-model="field.city">{{field.city}}</option>
										</select>
									</div>
									<div v-else>
										<select name="city" id="city" class="form-control">
											<option value="">Pilih Kota</option>
											<option v-for="city in citys" :key="city.id" v-model="city.nama">{{city.nama}}</option>
										</select>
									</div>
								</div>
							</div>

							<div class="row mt-3">
								<div class="col-md-12">
									<textarea name="address" id="address" v-model="field.address" placeholder="Alamat lengkap anda saat ini" class="form-control"></textarea>
								</div>
								<div class="col-md-12 mt-3">
									<!-- <textarea id="quotes" name="quotes" placeholder="Your quotes max: 100character" class="form-control" v-model="field.quotes" rows="5"></textarea> -->
									<!-- <tinymce id="d1" v-model="field.quotes"></tinymce> -->
									<wysiwyg v-model="field.quotes"/>
								</div>
							</div>

							<div class="row mt-3">
								<div class="col-md-6 mb-3"><input type="text" id="youtube" class="form-control" placeholder="example(https://www.youtube.com/channel/UCIzNgeNDD58z8XNppkopwzw)" v-model="field.youtube"></div>
								<div class="col-md-6"><input type="text" id="facebook" class="form-control" placeholder="Facebook username" v-model="field.facebook"></div>
							</div>
							<div class="row mt-3">
								<div class="col-md-6"><input type="text" id="instagram" class="form-control" placeholder="Instagram username" v-model="field.instagram"></div>
							</div>
							<!-- <div class="row mt-3">
								<div class="col-md-6">
									<div v-if="fields.avatar">
										<img class="rounded-circle mt-5 mb-3" :src="`http://localhost:8000/storage/${fields.avatar}`" width="90"><br>
										<span class="text-info mt-2 mb-2">Current profile image</span><br>
										<small class="text-danger"><strong>Pilih file jika ingin mengubah profile image</strong></small>
										<input type="file" id="avatar" name="avatar" ref="avatar" @change="onChangeAvatar">
									</div>
								</div>
								<div class="col-md-6">
									<img :src="`http://localhost:8000/storage/${edits[0].cover}`" width="100" class="img-fluid img-responsive">
									<span class="text-info mt-2 mb-2">Current profile cover</span><br>
									<small class="text-danger"><strong>Pilih file jika ingin mengubah profile cover</strong></small>
									<input type="file" id="cover" name="cover">
								</div>
							</div> -->
							<div class="row mt-3">
								<div class="col-md-12">
									<small class="text-danger mt-3 mb-2"><strong>Ketik di bagian text editor di bawah jika ingin mengubah success story anda</strong></small>
									<!-- <textarea class="form-control about" name="about" v-model="field.about" rows="15" id="about"></textarea> -->
									<!-- <tinymce id="d2" v-model="field.about"></tinymce> -->
									<wysiwyg v-model="field.about" :options="options"/>
								</div>
							</div>

							<div class="mt-5 text-right"><button class="btn btn-primary profile-button" type="submit">Save Profile</button></div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	export default{
		props: ['edits'],
		 data(){
		 	return {
		 		provinces: [],
		 		pilih: false,
		 		citys: [],
		 		newAvatar: null,
		 		newCover: null,
		 		field:{},
		 		validation: [],
		 		message: '',
		 		showSuccess: false,
		 		options: {
		 			maxHeight: "500px"
		 		}
		 	}
		 },
		head(){
			return {
				title: `Edit Profile ${this.edits[0].name}`
			}
		},

		created(){
			this.$axios(`https://app.evoush.com/api/member/${this.edits[0].username}`)
			.then(res => {
				this.field = res.data[0]
				console.log(res.data)
			})
		},

		mounted(){
			this.getProvinsi()
		},
		methods: {

			updateProfile(event){

				this.$axios.put(`/member/update/${this.field.id}`, {
					id: this.field.id,
					name: this.field.name,
					email: this.field.email,
					username: this.field.username,
					address: this.field.address,
					phone: this.field.phone,
					quotes: this.field.quotes,
					about: this.field.about,
					instagram: this.field.instagram,
					facebook: this.field.facebook,
					youtube: this.field.youtube,
					province: this.field.province,
					city: this.field.city,
					parallax: null
				})
				.then(res => {
					if(res.data.success){
						this.message = res.data.message
						this.showSuccess = true
						// this.$swal({
						// 	position: 'top-end',
						// 	icon: 'success',
						// 	title: res.data.message,
						// 	showConfirmButton: false,
						// 	timer: 1500
						// })
						this.$toast(res.data.message+' Successfully')
					}
				})
				.catch(err => {
					console.log(err.response.data)
					this.showSuccess = false
					this.$swal({
						icon: 'error',
						title: 'Oops...',
						text: err.response.data
					})
				})

			},


			getProvinsi(){
				this.$axios.get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
				.then(res => {
					// console.log(res)
					this.provinces = res.data.provinsi
				})
				.catch(err => console.log(err.response))
			},
			getCity(e){
				const id = e.target.value
				this.$axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id}`)
				.then(res => {
					this.fields.province = id
					// console.log(this.fields.province)
					this.pilih = true
					this.citys = res.data.kota_kabupaten
					// console.log(this.citys)
				})
			},

			historyBack(){
				return this.$router.back()
			},




		}
	}
</script>


<style scoped>

.form-control:focus {
    box-shadow: none;
    border-color: #BA68C8
}

.profile-button {
    background: #BA68C8;
    box-shadow: none;
    border: none
}

.profile-button:hover {
    background: #682773
}

.profile-button:focus {
    background: #682773;
    box-shadow: none
}

.profile-button:active {
    background: #682773;
    box-shadow: none
}

.back:hover {
    color: #682773;
    cursor: pointer
}
</style>