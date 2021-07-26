<template>
	<div>
		<!-- Mamam dong kak sekali kali -->
		<!-- ======= Portfolio Details ======= -->
		<section id="portfolio-details" class="portfolio-details">
			<div class="container" data-aos="fade-up">
				<div v-for="member in members" class="row justify-content-center">
					<!--Profile Card 3-->
					<div class="col-lg-8 col-xs-12 col-sm-12">
						<div class="card profile-card-3">
							<div class="background-block">
								<img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile-sample1" class="background"/>
							</div>
							<div class="profile-thumb-block">
								<img :src="`https://app.evoush.com/storage/${member.avatar}`" alt="profile-image" class="profile" width="150"/>
							</div>
							<div class="card-content">
								<h2 style="text-transform: capitalize;">{{member.name}}
									<small style="text-transform: lowercase;">{{member.username}}</small></h2>
									<ul style="list-style: none;">
										<li><strong><i class='bx bx-map'></i> {{member.city}} | {{member.province}}</strong></li>
										<li>Status : <span class="badge badge-success">{{member.status}}</span> </li>
									</ul>
								<div class="icon-block">
									<a :href="`https://wa.me/${member.phone}?text=Hallo%20${member.name}%20saya%20tertarik%20untuk%20join%20Evoush, %20apa%20anda%20bisa%20bantu%20saya`"><i class='bx bxl-whatsapp'></i></a>
									<a :href="`https://www.facebook.com/${member.facebook}`" class="facebook"><i class="bx bxl-facebook"></i></a>
									<a :href="`https://www.instagram.com/${member.instagram}`" class="instagram"><i class="bx bxl-instagram"></i></a>
									<a :href="`https://www.youtube.com/channel/${member.youtube}`" class="youtube"><i class="bx bxl-youtube"></i></a>
									<a :href="`mailto:${member.email}`" class="envelope-open"><i class='bx bxs-envelope'></i></a>
								</div>
							</div>
						</div>
						<p class="mt-3 w-100 float-left text-center"><strong>Modren Profile Card</strong></p>
					</div>
					<div class="col-md-3 col-xs-3 col-sm-3">
						<nuxt-link class="btn btn-danger" to="/"><i class='bx bxs-left-arrow-square'></i></nuxt-link><br>Kembali
					</div>

				</div><!-- end row loop -->
			</div>
		</section><!-- End Portfolio Details -->
	</div>
</template>

<script>
	export default{
		layout: 'member',
		async asyncData({$axios, params}){
			const members = await $axios.$get(`/member/${params.username}`)
			return {members}
		},

		methods: {
			formatDate(date) {
				const options = { year: 'numeric', month: 'long', day: 'numeric' }
				return new Date(date).toLocaleDateString('en', options)
			}
		}
	}
</script>


<style>
	.social-links{
		font-size: 31px!important;
	}

	/*Profile Card 3*/
	.profile-card-3 {
		font-family: 'Open Sans', Arial, sans-serif;
		position: relative;
		float: left;
		overflow: hidden;
		width: 100%;
		text-align: center;
		height:100vh;
		border:none;
		margin-top: -2rem;
	}
	.profile-card-3 .background-block {
		float: left;
		width: 100%;
		height: 400px;
		overflow: hidden;
	}
	.profile-card-3 .background-block .background {
		width:100%;
		vertical-align: top;
		opacity: 0.9;
		-webkit-filter: blur(0.1px);
		filter: blur(0.2px);
		-webkit-transform: scale(1.8);
		transform: scale(2.8);
	}
	.profile-card-3 .card-content {
		width: 100%;
		padding: 15px 25px;
		color:#232323;
		float:left;
		background:#efefef;
		height:50%;
		border-radius:0 0 5px 5px;
		position: relative;
		z-index: 9999;
	}
	.profile-card-3 .card-content::before {
		content: '';
		background: #efefef;
		width: 120%;
		height: 100%;
		left: 11px;
		bottom: 51px;
		position: absolute;
		z-index: -1;
		transform: rotate(-13deg);
	}
	.profile-card-3 .profile {
		border-radius: 50%;
		position: absolute;
		bottom: 70%;
		left: 50%;
		max-width: 500px;
		opacity: 1;
		box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
		border: 2px solid rgba(255, 255, 255, 1);
		-webkit-transform: translate(-50%, 0%);
		transform: translate(-50%, 0%);
		z-index:99999;
	}
	.profile-card-3 h2 {
		margin: 0 0 5px;
		font-weight: 600;
		font-size:25px;
	}
	.profile-card-3 h2 small {
		display: block;
		font-size: 15px;
		margin-top:10px;
	}
	.profile-card-3 i {
		display: inline-block;
		font-size: 18px;
		color: #232323;
		text-align: center;
		border: 1px solid #232323;
		width: 30px;
		height: 30px;
		line-height: 30px;
		border-radius: 50%;
		margin:0 5px;
	}
	.profile-card-3 .icon-block{
		float:left;
		width:100%;
		margin-top:15px;
	}
	.profile-card-3 .icon-block a{
		text-decoration:none;
	}
	.profile-card-3 i:hover {
		background-color:#232323;
		color:#fff;
		text-decoration:none;
	}
</style>