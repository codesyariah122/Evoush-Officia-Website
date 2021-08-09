<template>
	<section id="halo-dokter" class="portfolio-details">
		<div class="container" data-aos="fade-up">
			<div class="col-lg-12 col-xs-12 col-sm-12">
				<div class="section-title">
					<h2 class="portfolio-title">Halo Dokter Evoush</h2>
				</div>
			</div>

			<div class="col-lg-12 col-xs-12 col-sm-12">
				<div v-if="country_name == 'Indonesia'">
					<div class="row mt-5">
						<div class="col-lg-12 col-xs-12 col-sm-12">
							<p>Data covid 19 Indonesia Terupdate</p>
							<small class="text-danger">
								<i class='bx bx-shield-alt-2'></i> Waspadai hoax dalam penyebaran informasi data digital
							</small>
							<blockquote class="blockquote-footer">
								Pilih provinsi yang ingin anda cek data terupdatenya
							</blockquote>
						</div>
						<div class="col-lg-12 col-xs-12 col-sm-12 mt-2">
							<label for="exampleFormControlSelect1">Pilih Provinsi</label>
							<select class="form-control" id="exampleFormControlSelect1" @change="changeProvince">
								<option value="">-Pilih Province-</option>
								<option v-for="province in provinces" v-model="province.nama" >{{province.nama}}</option>
							</select>
						</div>
					</div>
				</div>
			</div>

		</div>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				ip: '',
				country_name: '',
				provinces:[]
			}
		},

		mounted(){
			this.getLocation(this.ip),
			this.getProvinsi()
		},

		methods: {
			getIp(){
				this.$axios
				.get('https://api.ipify.org/?format=json')
				.then(res => {
		        	// console.log(res)
		        	this.ip = res.data.ip
        		})
        		.catch(err => console.log(err.message))
			},
			getLocation(ip){
				this.$axios
				.get(`https://ipapi.co/${ip}/json/`)
				.then(res => {
					// console.log(res)
					this.country_name = res.data.country_name
				})
				.catch(err => console.log(err.message))
			},
			getProvinsi(){
				this.$axios.get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
				.then(res => {
					// console.log(res.data.provinsi)
					this.provinces = res.data.provinsi
				})
			},
			changeProvince(event){
				const provinsi = event.target.value
				const config = {
					headers: {
						'Access-Control-Allow-Origin': '*',
					},
					proxy: {
						host: 'cors-anywhere.herokuapp.com'
					}
				};
				this.$axios.get('https://api.kawalcorona.com/indonesia/provinsi',  { crossdomain: true })
				.then(res => {
					console.log(res)
				})
				.catch(err => console.log(err.response))
			}
		}
	}
</script>