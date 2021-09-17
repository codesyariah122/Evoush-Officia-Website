<template>
	<div class="container mt-5 mb-5">
		<div class="row justify-content-center">
			<div class="col-lg-12 col-xs-12 col-sm-12">
				<div class="section-title">
					<h2>Check Ongkir</h2>
				</div>
			</div>
			<form @submit.prevent="getCostOngkir">
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<h4>ORIGIN</h4>
					<div class="form-group">
						<label for="prov">PROVINSI</label>
						<select @change="getCitiesOrigin" v-model="state.province_origin" class="form-control">
							<option value="">-Pilih Provinsi-</option>
							<option v-for="province in provinces" :key="province.id" :value="province.province_id">{{province.province}}</option>
						</select>
					</div>
					<div class="form-group">
						<label for="kab">KABUPATEN</label>
						<select class="form-control" v-model="state.city_origin">
							<option value="">-Pilih Provinsi Asal Terlebih Dahulu-</option>
							<option v-for="city in cities_origin" :key="city.id" :value="city.city_id">{{city.city_name}}</option>
						</select>
					</div>
				</div>
				<div class="col-lg-12 col-xs-12 col-sm-12 mt-2">
					<h4>DESTINATION</h4>
					<div class="form-group">
						<label for="prov">PROVINSI</label>
						<select class="form-control" @change="getCitiesDestination" v-model="state.province_destination">
							<option value="">-Pilih Provinsi-</option>
							<option v-for="province in provinces" :key="province.id" :value="province.province_id">{{
								province.province
							}}</option>
						</select>
					</div>
					<div class="form-group">
						<label class="mb-2">KABUPATEN</label>
						<select class="form-control" v-model="state.city_destination">
							<option value="">-Pilih Provinsi Tujuan Terlebih Dahulu-</option>
							<option class="py-1" v-for="city in cities_destination" :key="city.id" :value="city.city_id">{{ city.city_name }}</option>
						</select>
					</div>
				</div>
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<h4><i class='bx bxs-truck' ></i> KURIR</h4>
					<hr>
					<div class="form-group">
						<label for="kurir">KURIR</label>
						<select v-model="state.courier" class="form-control">
							<option value="">-Pilih Kurir-</option>
							<option class="py-1" value="jne">JNE</option>
							<option class="py-1" value="tiki">TIKI</option>
							<option class="py-1" value="pos">POS</option>
						</select>
					</div>
				</div>
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<div class="form-group">
						<label for="berat">BERAT <i class='bx bxs-package'></i>(Gram)</label>
						<input type="text" class="form-control" v-model="state.weight" placeholder="Masukkan Berat Barang (Gram)">
					</div>
				</div>

				<div class="col-lg-12 col-xs-12 col-sm-12">
					<div class="form-group">
						<button type="submit" class="btn btn-lg btn-primary">CEK ONGKOS KIRIM</button>
					</div>
				</div>
			</form>
		</div>

		<div class="col-lg-12 col-xs-12 col-sm-12 mt-5">
			<div v-if="error">
				<div class="alert alert-warning">
					Terjadi kesalahan harap periksa kembali kolom input check ongkir diatas
				</div>
			</div>

			<div v-if="results" class="card">
				<div class="card-body">

					<div v-if="loading">
						<div class="d-flex justify-content-center">
							<div class="col-lg-12 col-xs-12 col-sm-12">
								<img src="https://c.tenor.com/LeSVOZJUt-oAAAAM/muuve-rider.gif" class="img-fluid">
							</div>
						</div>
					</div>

					<div v-if="show_result">
						<h4 class="text-xl pb-1" style="text-transform: uppercase;">ONGKOS KIRIM {{ results[0].code }}</h4>
						<hr class="border-2">

						<h4><strong>Courier : {{ results[0].code }}</strong></h4>
						<h5>{{ results[0].name }}</h5>
						<ul class="list-group">
							<!-- <pre>
								{{ results[0].costs }}
							</pre> -->
							<div v-for="cost in results[0].costs">
								<li class="list-group-item">
									Service : <b>{{ cost.service }}</b> <br>
									<blockquote class="blockquote-footer text-info ml-5">
										{{ cost.description }}
									</blockquote>
								</li>
								<div v-for="c in cost.cost">
									<li class="list-group-item">
										Perkiraan waktu pengiriman : <strong>{{ c.etd }} Hari</strong>
									</li>
									<li class="list-group-item">
										Tarif pengiriman : <strong>
											Rp. {{ c.value }}
										</strong>
									</li>
									<li class="list-group-item">
										Catatan : <strong v-if="c.note">
											{{ c.note }}
										</strong>
										<strong v-else class="text-danger">
											Tidak ada catatan
										</strong>
									</li>
								</div>
							</div>
						</ul>
					</div>

				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data(){
			return {
				error: null,
				show_result: false,
				loading: null,
				provinces: {},
				state: {
					province_origin: '',
					city_origin: '',

					province_destination: '',
					city_destination: '',

					weight: '',
					courier: ''
				},
				cities_origin: {},
				cities_destination: {},
				results: []
			}
		},

		mounted(){
			this.$axios.get('https://app.evoush.com/api/evoush/provinces')
			.then(res => {
				// console.log(res)
				this.provinces = res.data.data
			})
			.catch(err => {
				console.log(err.response)
			})
		},



		methods: {
			getCitiesOrigin(){
				this.$axios.get(`https://app.evoush.com/api/evoush/cities/${this.state.province_origin}`)
				.then(response => {
					this.cities_origin = response.data.data
				})
				.catch(error => {
					console.log(error.response.data)
				})
			},

			getCitiesDestination(){
				this.$axios.get(`https://app.evoush.com/api/evoush/cities/${this.state.province_destination}`)
				.then(response => {
					this.cities_destination = response.data.data
				})
				.catch(error => {
					console.log(error.response.data)
				})
			},

			getCostOngkir(e){
				e.preventDefault()
				this.loading = true
				this.show_result = false
				let sending = {
					origin: this.state.city_origin,
					destination: this.state.city_destination,
					weight: this.state.weight,
					courier: this.state.courier
				}

				console.log(sending)
				this.$axios.post('https://app.evoush.com/api/evoush/checkOngkir', sending)
				.then(response => {
					this.loading = false
					this.show_result = true
					this.error = false
					this.results = response.data.data
					console.log(this.results)
				})
				.catch(error => {
					this.loading = false
					this.show_result = false
					this.error= true
					console.log(error.message)
				})
			}
		}
	}
</script>