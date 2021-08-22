<template>
	<div class="container mt-5 mb-5">
		<div class="row justify-content-center">
			<div class="col-lg-12 col-xs-12 col-sm-12">
				<div class="section-title">
					<h2>Check Ongkir</h2>
				</div>
			</div>
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
					<button class="btn btn-lg btn-primary" @click="getCostOngkir">CEK ONGKOS KIRIM</button>
				</div>
			</div>
		</div>

		<div class="col-lg-12 col-xs-12 col-sm-12 mt-5">
			<div v-if="results" class="card">
				<div class="card-body">
					<h4 class="text-xl pb-1">HASIL ONGKOS KIRIM</h4>
					<hr class="border-2">
					<div class="mt-4" v-for="result in results.data[0].costs">
						<ul style="list-style:none;">
							<li>
								Layanan : <strong>{{result.service}}</strong> <br> <small class="blockquote-footer text-info">{{result.description}}</small>
							</li>
							<li>
								Biaya : <strong>Rp. {{result.cost[0].value}}</strong> <br>
								Estimasi : <strong>{{result.cost[0].etd}}</strong> Hari
							</li>
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
				results: null
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



			async getCostOngkir(){
				let data = {
					origin: this.state.city_origin,
					destination: this.state.city_destination,
					weight: this.state.weight,
					courier: this.state.courier
				}
				this.$axios.post('https://app.evoush.com/api/evoush/checkOngkir', {
			        headers: {
			        	'Content-Type': 'application/json',
			        	'Authorization': 'No Auth'
			        },
			        data
			      }).then(response => {
			      	console.log(response.data)
			      	this.results = response.data.data[0].costs
			      
			      })
			      .catch(error => {
			      	console.log(error.response)
			      })
			  }
			}
		}
	</script>