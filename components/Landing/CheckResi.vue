<template>
	<div>
		<div class="container mt-5 mb-5">
			<div class="row justify-content-center">
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<div class="section-title">
						<h2>Check Resi</h2>
					</div>
				</div>

				<div class="col-lg-12 col-xs-12 col-sm-12">
					<form @submit.prevent="CheckResi">
						<div class="form-group">
							<select class="form-control" @change="ChangeCourier">
								<option value="">-Pilih Courier-</option>
								<option v-for="courier in couriers" :value="courier.name">
									{{ courier.name.toUpperCase() }}
								</option>
							</select>
						</div>
						<div class="form-group mt-3">
							<label for="awb">Masukan No Air Way Bill</label>
							<input type="text" name="awb" v-model="resi.awb" class="form-control" placeholder="No awb : 031xxxxxxx">
						</div>

						<div class="form-group">
							<button type="submit" class="btn btn-primary">Check Resi</button>
						</div>
					</form>
				</div>

				<div class="col-lg-12 col-xs-12 col-sm-12 mt-5">
					<div v-if="success">
						<div class="row justify-content-center">
							<div class="col-md-4">
								<div class="card" style="width: 18rem;">
									<div class="card-body">
										<h5 class="card-title">Detail Recieve</h5>
										<ul class="list-group">
											<li class="list-group-item">Origin : <b>{{ detail.origin }}</b></li>
											<li class="list-group-item">Destination : <b>{{ detail.destination }}</b></li>
											<li class="list-group-item">Shipper : <b>{{ detail.shipper }}</b></li>
											<li class="list-group-item">Receiver : <b>{{ detail.receiver }}</b></li>
										</ul>
									</div>
								</div>
							</div>
						</div>


						<div class="row justify-content-center">
							<div v-for="history in historys" class="col-md-4 mt-5">
								<div class="card mb-3" style="width: 18rem;">
									<div class="card-body">
										<h5 class="card-title">Detail Progress</h5>
										<ul class="list-group">
											<li class="list-group-item">Date : <b>{{ history.date }}</b></li>
											<li class="list-group-item">Description : <b>{{ history.desc }}</b></li>
											<li class="list-group-item">Location : <b>{{ history.location }}</b></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div v-else class="row justify-content-center">
						<div class="col-lg-12">
							<div v-if="loading">
								<small class="blockquote-footer text-info">
									Loading dulu kak ...
								</small>
								<img src="https://c.tenor.com/LeSVOZJUt-oAAAAM/muuve-rider.gif" class="img-fluid">
							</div>
						</div>
					</div>

					<div v-if="error" class="row-justify-content-center">
						<div class="col-lg-12">
							<div class="alert alert-danger">
								{{ error }}
							</div>
						</div>
					</div>


					<!-- <pre>
						{{ historys }}
					</pre>

					<pre class="mt-5">
						{{ detail }}
					</pre> -->
				</div>

			</div>
		</div>
	</div>
</template>


<script>
	export default{
		data(){
			return {
				error: null,
				success: null,
				loading: null,
				resi: {
					courier:'',
					awb:''
				},
				historys: [],
				detail: {},
				couriers: [
					{id:1, name: 'jne'},
					{id:2, name: 'pos'},
					{id:3, name: 'jnt'},
					{id:4, name: 'sicepat'},
					{id:5, name: 'tiki'},
					{id:6, name: 'anteraja'},
					{id:7, name: 'wahana'},
					{id:8, name: 'ninja'},
					{id:9, name: 'lion'},
					{id:10, name: 'pcp'},
					{id:11, name: 'jet'},
					{id:12, name: 'rex'},
					{id:13, name: 'first'},
					{id:14, name: 'ide'},
					{id:15, name: 'spx'},
					{id:16, name: 'kgx'},
					{id:17, name: 'sap'},
				]
			}
		},

		methods: {
			ChangeCourier(e){
				this.resi.courier = e.target.value
			},
			CheckResi(e){

				const resi = {
					courier: this.resi.courier,
					awb: this.resi.awb
				}
				console.log(resi)

				this.loading = true
				this.success = false
				e.preventDefault()
				this.$axios.get(`https://app.evoush.com/api/evoush/check-resi/${this.resi.courier}/${this.resi.awb}`)
				.then(res => {
					this.success = true
					this.loading = false
					this.detail = res.data.data.data.detail
					this.historys = res.data.data.data.history
					console.log(res)
				})
				.catch(err => {
					this.loading = false
					this.error = 'Terjadi kesalahan... periksa kembali kolom input'
					console.log(err.response)
				})
			}
		}
	}
</script>

