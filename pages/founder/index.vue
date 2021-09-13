<template>
	<div>
		<div class="container">
			<div class="row justify-content-end mt-3 mb-3">
				<div class="col-lg-1 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#pages"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col-lg-12 col-xs-12 col-sm-12 text-center">
					<div class="section-title">
						<h2 class="portfolio-title">Founder</h2>
					</div>
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col-lg-12">
					<div class="row">
						<div data-aos="fade-up" v-for="founder in founders" class="col-md-12 col-xs-12 col-sm-12 mt-3 mb-5" :key="founder.id">
							<div class="card profile-card-2">
								<div class="card-img-block">
									<img class="img-responsive img-fluid" :src="founder.cover ? founder.cover : 'https://coolwallpapers.me/picsup/5605343-internet-wallpapers.jpg'" alt="Card image cap">
								</div>
								<div class="card-body pt-5">
									<div class="row justify-content-center">
										<img :src="founder.avatar ? `https://raw.githubusercontent.com/evoush-products/bahan_evoush/main/migration_db/${founder.avatar}` : 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/profile/default.jpg'" alt="profile-image" class="profile img-fluid img-responsive image--profile-member img-responsive rounded-circle center-block d-block mx-auto mt-2"/>
									</div>

									<div class="row justify-content-center mt-5 media-body">
										<div class="col-lg-8 col-xs-8 col-sm-8">
											<center>
												<h5 class="card-title ml-3">{{founder.name}}</h5>
												<p><strong>Username : {{founder.username}}</strong></p>
												<p class="badge badge-primary text-white"> {{(founder.achievements.includes('STAR SAPHIRE') || founder.achievements.includes('SAPHIRE')) ? 'FOUNDER' : ''}}</p>
												<p style="font-size: 16px;"> <i class='bx bx-map' style="font-size: 14px;"></i>
													{{founder.city}} | {{founder.province}}
												</p>
												<div class="mt-2 mb-3">
													<nuxt-link :to="{name:'member-username', params: {username: founder.username}}" class="btn btn-danger btn-sm">Lihat Profile</nuxt-link>
												</div>

												<blockquote v-if="founder.quotes" class="card-text blockquote-footer">{{founder.quotes}}.</blockquote>

												<blockquote class="blockquote-footer" v-else>
													<small class="text-primary">{{founder.username}}, <strong>belum menambahkan quotes</strong></small>
												</blockquote>
												<div class="social-links mt-3 mb-5">
													<!-- <small>Social media & Contact Founder : </small><br> -->

													<a :href="`https://wa.me/${founder.phone}?text=Hallo%20${founder.name}%20saya%20tertarik%20untuk%20join%20untuk%20menjadi%20member%20anda, %20bisakah%20saya%20dibantu%20untuk%20join%20member%20baru`" target="_blank" class="whatsapp"><i class='bx bxl-whatsapp text-success'></i></a>
													<a :href="`https://www.facebook.com/${founder.facebook}`" target="_blank" class="facebook"><i class="bx bxl-facebook text-primary"></i></a>
													<a :href="`https://www.instagram.com/${founder.instagram}`" target="_blank" class="instagram"><i class="bx bxl-instagram text-danger"></i></a>
													<a :href="founder.youtube" target="_blank" class="youtube"><i class='bx bxl-youtube text-danger'></i></a>
													<a :href="`mailto: ${founder.email}`" target="_blank" class="email"><i class='bx bx-envelope-open text-warning'></i></a>
												</div>
											</center>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		layout: 'pages',
		head(){
			return {
				title: 'Evoush::Founder'
			}
		},

		data(){
			return {
				founders: []
			}
		},

		mounted(){
			this.getFounder()
		},

		methods: {
			getFounder(page){
				this.$axios.get(`https://app.evoush.com/api/evoush/founder-list?page=${page}`)
				.then(res => {
					return res.data
				})
				.then(res=>{
					this.founders = res.data
				})
				.catch(err => {
					console.log(err.response)
				})
			}
		}
	}
</script>


<style scoped>

/*Profile card 2*/
.profile-card-2 .card-img-block{
	float:left;
	width: 100%;
	height:400px;
	overflow:hidden;
	/*background: linear-gradient(to right, salmon, coral);*/
}

.profile-card-2 .card-body{
	position:relative;
}
.profile-card-2 .profile {
	border-radius: 50%;
	position: absolute;
	top: -23rem;
	left: 50%;
	/*max-width: 65px;*/
	width: 150px;
	border: 3px solid rgba(255, 255, 255, 1);
	-webkit-transform: translate(-50%, 0%);
	transform: translate(-50%, 0%);
}
.profile-card-2 h5{
	text-transform: capitalize;
	font-size: 31px;
	font-weight:700;
	/*color:#000!important;*/
	margin-top: -15rem;
	align-items: center!important;
}
.profile-card-2 .card-text{
	font-weight:300;
	font-size:15px;
}
.profile-card-2 .icon-block{
	float:left;
	width:100%;
}
.profile-card-2 .icon-block a{
	text-decoration:none;
}
.profile-card-2 i {
	display: inline-block;
	font-size: 31px;
	color: #6ab04c;
	text-align: center;
	border: 1px solid #6ab04c;
	width: 40px;
	height: 40px;
	line-height: 37px;
	border-radius: 50%;
	margin:0 5px;
}
.profile-card-2 i:hover {
	background-color:#6ab04c;
	color:#fff!important;
}


.media-body h5 {
	font-size: 23px;
}

.media-body p {
	font-size: 11px;
	color:#000;
}

@media (min-width: 992px) {
	.profile-card-2 .card-img-block{
		float:left;
		width: 100%;
		height:800px;
		overflow:hidden;
	}
	.profile {
		border-radius: 50%;
		position: absolute;
		top: -19rem!important;
		left: 50%!important;
		/*max-width: 65px;*/
		width: 250px!important;
		border: 3px solid rgba(255, 255, 255, 1);
		-webkit-transform: translate(-50%, 0%);
		transform: translate(-50%, 0%);
	}
	.profile-card-2 h5{
		text-transform: capitalize;
		font-size: 31px;
		font-weight:700;
		/*color:#6ab04c;*/
		/*margin-top: -10rem;*/
	}
	.media-body{
		margin-top: 13rem!important;
	}
}
</style>