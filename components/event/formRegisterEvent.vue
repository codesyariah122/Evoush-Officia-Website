<template>
	<div class="mt-5">

		<!-- <pre>
			{{contacts.length}}
		</pre> -->



		<div v-if="loadingMessage">
			<!-- <h1 class="text-primary">Sebentar yah Loading dulu .... </h1> -->
			<img src="https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!w340">
		</div>

		<div v-else v-if="show">
			<div  class="alert alert-success">
				{{message}}
			</div>
			<div class="col-lg-12 col-xs-12 col-sm-12 mb-5 mt-3">
				<div class="card" style="width: 18rem;">
					<p>Detail data kepesertaan lomba</p>
					<ul class="list-group list-group-flush">
						<li class="list-group-item">
							Nama Lengkap : {{fields.name}}
						</li>
						<li class="list-group-item">
							Nomor Telepon : {{fields.phone}}
						</li>
						<li class="list-group-item">
							Kota : <strong>{{fields.city}}</strong>
						</li>
						<li class="list-group-item">
							Nomor Peserta : <strong>{{no_peserta}}</strong>
						</li>
						<li class="list-group-item">
							Category : <strong>{{category}}</strong>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<small class="text-secondary mb-5">Harap isi form dengan lengkap dan benar sesuai data yang kami butuhkan yang tersedia di form pendaftaran berikut, kemudian click tombol Daftar event berwarna hijau. </small>


		<form class="border rounded p-5" @submit.prevent="DaftarEvent">

			<input v-if="contacts"  type="hidden" name="nomor_peserta" id="nomor_peserta" :value="contacts.id + 1">

			<input v-else type="hidden" name="nomor_peserta" id="nomor_peserta" :value="1">


			<div class="form-group">
				<small class="text-secondary">
					Nama lengkap asli sesuai identitas.
				</small>
				<input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Nama lengkap (sesuai identitas)" required="">
			</div>

			<div class="form-group">
				<small class="text-secondary">
					Gunakan nomor telepon yang aktif.
				</small>
				<input type="number" id="phone" class="form-control" placeholder="No Telpon Aktif : contoh format No telepon (6288111110000)" required="">
			</div>

			<div class="form-group">
				<small class="blockquote-footer text-secondary">*tidak wajib di isi / abaikan jika belum memiliki member username</small>
				<input type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Username member evoush (jika ada).">
			</div>

			<div class="form-group">
				<small class="text-secondary">
					Pilih kategori lomba yang kami sediakan, di list kategori di bawah dengan cara mengklik bagian list select dibawah kemudian akan muncul, beberapa list kategori lomba yang tersedia.
				</small>
				<select name="category_id" class="form-control" id="category">
					<option v-for="category in categorys" :value="category.id">{{category.name}}</option>
				</select>
			</div>

			<div class="col-6">
				<blockquote class="blockquote-footer text-secondary">
					Ketik nama kota anda, sesuai identitas data diri asli
				</blockquote>
			</div>

			<div class="form-group">
				<input type="text" name="city" id="city" class='form-control' placeholder="Ketik nama kota anda">
					<!-- <select name="province" id="province" class="form-control" v-on:change="getCity">
						<option value="" data-id=""><b>Pilih Provinsi</b></option>
						<option v-for="provins in provinces" v-bind:value="provins.id" :data-id="provins.id">{{provins.nama}}</option>
					</select> -->
				</div>

<!-- 				<div class="form-group">
					<select name="city" id="city" class="form-control">
						<option value="">Pilih Kota</option>
						<option v-if="pilih" v-for="city in citys" :key="city.id" v-bind:value="city.nama">{{city.nama}}</option>
					</select>
				</div> -->



				<button type="submit" class="btn btn-success btn-round btn-block shadow-sm">Daftar Event</button>
			</form>

			<!-- <div v-if="loading">
				<img src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif">
			</div> -->
		<!-- <form>
			<div class="form-group">
				<label for="fullname">Nama Lengkap</label>
				<input type="text" id="fullname" name="fullname" placeholder="Nama Lengkap" class="form-control">
			</div>
			<div class="form-group">
				<label for="telp">No Telepon</label>
				<input type="number" id="telp" name="telp" placeholder="08xx xxxx xxx" class="form-control">
			</div>
			<div class="form-group">
				<label for="city">Kota</label>
				<input type="text" name="city" id="city" placeholder="Kota Anda Tinggal" class="form-control">
			</div>
			<div class="form-group">
				<label for="username">Username</label>
				<input type="text" name="username" id="username" placeholder="Username Member Anda" class="form-control">
				<small class="text-danger blockquote-footer">Kosongkan jika tidak ada</small>
			</div>

			<div class="form-group"><br><br>
				<button type="submit" name="daftar" class="btn btn-primary btn-block">Daftar Event</button>
			</div>
		</form> -->
	</div>
</template>


<script>
	export default {

		data(){
			return{
				provinces: [],
				no_peserta: '',
				message: '',
				show: false,
				contacts:[],
				category: '',
				results: [],
				pilih: false,
				loadingMessage: false,
				complete: false,
				loading_message: '',
				citys: [],
				categorys: [
				{id:1, name: 'Pingpong'},
				{id:2, name: 'Zumba'},
				{id:3, name: 'Tiktok'},
				{id:4, name: 'Makeup'}
				],
				fields: {
					no_peserta: '',
					name: '',
					phone: '',
					username: '',
					category: '',
					province: '',
					city: ''
				}
			}
		},



		mounted(){
			this.$axios.get('https://app.evoush.com/api/evoush/contact-message')
			.then(res => {
				this.contacts = res.data.data.pop()
			})
		},

		methods: {
			// getProvinsi(){
			// 	this.$axios.get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
			// 	.then(res => {
			// 		// console.log(res)
			// 		this.provinces = res.data.provinsi
			// 	})
			// 	.catch(err => console.log(err.response))
			// },
			// getCity(e){
			// 	const id = e.target.value
			// 	this.$axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id}`)
			// 	.then(res => {
			// 		this.province = id
			// 		// console.log(this.fields.province)
			// 		this.pilih = true
			// 		this.citys = res.data.kota_kabupaten
			// 		// console.log(this.citys)
			// 	})
			// },

			DaftarEvent(e){
				const data = {
					no_peserta: document.querySelector('#nomor_peserta').value,
					name: document.querySelector('#name').value,
					phone: document.querySelector('#phone').value,
					username: document.querySelector('#username').value,
					category: document.querySelector('#category').value,
					city: document.querySelector('#city').value
				}

				if(data.no_peserta !== '' && data.name !== '' && data.phone !== '' && data.city !== '') {
					this.$toast("Tunggu beberapa saat proses pendaftaran sedang berlangsung ...")
					this.loadingMessage = true
					this.$axios.post('https://app.evoush.com/api/evoush/kirim-email', {
						no_peserta: data.no_peserta,
						name: data.name,
						phone: data.phone,
						username: data.username,
						category: data.category,
						province: null,
						city: data.city
					})
					.then(res => {
						this.message = res.data.message
						// console.log("success")
						console.log(res.data)
						this.no_peserta = data.no_peserta
						this.fields.name=res.data.data.name
						this.fields.phone=res.data.data.phone
						this.fields.username=res.data.data.username
						this.fields.city=res.data.data.city
						this.categorys.find(i => {(i.id == data.category) ? this.category = i.name   : ''})
					})
					.finally(() => {
						this.loadingMessage = false
						this.show = true
						e.target.reset()
						this.$swal({
							icon: 'success',
							title: this.message,
							text: data.name + ' Anda telah terdaftar menjadi peserta lomba event anniversary evoush',
							footer: '<a href="">Why do I have this issue?</a>'
						})
					})
				}else{
					this.$swal({
						icon: 'error',
						title: 'Oops...',
						text: 'Ada kesalahan data belum lengkap!',
						footer: ''
					})
				}
			}

		}
	}
</script>