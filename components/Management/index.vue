<template>
	<div>
		<!-- ======= Portfolio Details ======= -->
		<section id="management-details" class="portfolio-details">
			<div class="container" data-aos="fade-up">
				<div class="row justify-content-center">
					<div class="col-lg-12 col-xs-12 col-sm-12 text-center">
						<div class="section-title">
							<h2 class="portfolio-title">Management Evoush</h2>
						</div>
					</div>


					<!--Profile Card 1-->
					<div v-for="management in managements" class="col-lg-12 col-xs-12 col-sm-12 mb-5">
						<img :src="management.popup" class="img-fluid">
						<!-- <div class="card profile-card-1">
							<img :src="management.hero" :alt="management.name" class="background"/>
							<a href="#" v-b-modal.modal-lg="`modal-${management.id}`">
								<img :src="management.img" :alt="management.name" class="profile"/>
							</a>
							<div class="card-content">
								<h2>{{management.name}}<small><strong>{{management.jabatan}}</strong></small></h2>
								<div class="icon-block mb-5"><a :href="management.fb"><i class='bx bxl-facebook-circle'></i></a><a :href="management.twitter"> <i class='bx bxl-twitter'></i></a><a :href="management.ig"> <i class='bx bxl-instagram-alt'></i></a></div>
							</div>
						</div>

						<!-- Modal -->
						<b-modal :id="`modal-${management.id}`" hideFooter size="xl">
							<img :src="management.popup" class="img-size">
						</b-modal>

					</div>

					<div class="col-lg-12 col-xs-12 col-sm-12">
						<div class="embed-responsive embed-responsive-21by9">
							<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/0H81i8_dPmM"></iframe>
						</div>
					</div>

				</div>
			</div>
		</section><!-- End Portfolio Details -->
	</div>
</template>


<script>
	export default {
		props: ['managements']
	}
</script>


<style scoped>
.modal-dialog {
	max-width: 800px;
	margin: 30px auto;
}
.modal-body {
	position:relative;
	padding:0px;
}
.close {
	position:absolute;
	right:-30px;
	top:0;
	z-index:999;
	font-size:2rem;
	font-weight: normal;
	color:#fff;
	opacity:1;
}
/*Profile Card 1*/
.profile-card-1 {
	font-family: 'Open Sans', Arial, sans-serif;
	position: relative;
	float: left;
	overflow: hidden;
	width: 100%;
	color: #ffffff;
	text-align: center;
	height:65vh;
	border:none;
}
.profile-card-1 .background {
	width:100%;
	height: 100vh;
	vertical-align: top;
  /*opacity: 0.9;
  -webkit-filter: blur(5px);
  filter: blur(5px);
   -webkit-transform: scale(1.8);
   transform: scale(2.8);*/
}
.profile-card-1 .card-content {
	width: 100%;
	padding: 15px 25px;
	position: absolute;
	left: 0;
	top: 50%;
}
.profile-card-1 .profile {
	border-radius: 50%;
	position: absolute;
	bottom: 40%;
	left: 50%;
	/*max-width: 100px;*/
	width: 250px;
	height: 250px;
	opacity: 1;
	box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
	border: 2px solid rgba(255, 255, 255, 1);
	-webkit-transform: translate(-50%, 0%);
	transform: translate(-50%, 0%);
}
.profile-card-1 h2 {
	margin: 0 0 5px;
	font-weight: 600;
	font-size:21px;
	color:#fff!important;
	margin-top:7rem;
}
.profile-card-1 h2 small {
	display: block;
	font-size: 15px;
	margin-top:10px;
}
.profile-card-1 i {
	display: inline-block;
	font-size: 16px;
	color: #ffffff;
	text-align: center;
	border: 1px solid #fff;
	width: 30px;
	height: 30px;
	line-height: 30px;
	border-radius: 50%;
	margin:0 5px;
}
.profile-card-1 .icon-block{
	float:left;
	width:100%;
	margin-top:15px;
}
.profile-card-1 .icon-block a{
	text-decoration:none;
}
.profile-card-1 i:hover {
	background-color:#fff;
	color:#2E3434;
	text-decoration:none;
}

.img-size{
	height: 500px;
	width: 750px;
	background-size: cover;
	overflow: hidden;
}
</style>