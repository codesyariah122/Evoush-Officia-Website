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
							<div v-for="(history, index) in historys" class="col-md-4 mt-5">
								<div class="card mb-3" style="width: 18rem;">
									<div class="card-body">
										<h5 class="card-title">Detail Progress ke {{ index }} </h5>
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
								<img src="https://cfr.lps.go.id/images/Animation/Progressbar.gif" class="img-fluid">
								<small class="blockquote-footer text-info">
									Loading dulu kak ...
								</small>
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

					<div v-if="empty" class="row justify-content-center">
						<div class="col-lg-12">
							<div class="alert alert-warning">
								{{ empty }}
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
				empty: null,
				resi: {
					courier:'',
					awb:''
				},
				no: 0,
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

				if(this.resi.courier === "" || this.resi.awb === ""){
					this.empty = "Terjadi kesalahan, periksa kembali kolom inputan check resi diatas"
				}

				this.loading = true
				this.success = false
				e.preventDefault()
				this.$axios.get(`https://app.evoush.com/api/evoush/check-resi/${this.resi.courier}/${this.resi.awb}`)
				.then(res => {
					this.empty = null
					// console.log(res.data.data)
					if(res.data.data.status === 400){
						this.success = false
						this.loading = false
						this.error = res.data.data.message
					}else{
						this.success = true
						this.loading = false
						this.detail = res.data.data.data.detail
						this.historys = res.data.data.data.history.reverse()
					}
				})
				.catch(err => {
					this.loading = false
					this.success = false
					console.log(err.response)
				})
			}
		}
	}
</script>

