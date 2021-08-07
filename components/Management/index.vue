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

					<div class="col-lg-12 col-xs-12 col-sm-12 mb-5">
						<small class="text-danger">
							(* Klik foto / design gambar untuk melihat detail design profile management evoush keseluruhan.)
						</small>
					</div>


					<!--Profile Card 1-->
					<div v-for="management in managements" class="col-lg-12 col-xs-12 col-sm-12 mb-5">
						<!-- <img :src="management.popup" class="img-fluid"> -->

						<div class="card profile-card-1">
							<img :src="management.hero" :alt="management.name" class="background"/>
							<div class="container">
								
								<img :src="management.img" :alt="management.name" class="profile profile-overlay"/>
								
								<!-- <div class="middle">
									<div class="text">
										<button v-b-modal.modal-xl="`modal-${management.id}`" class="btn btn-sm btn-success"><i class='bx bxs-zoom-in'></i> Lihat detail</button>
									</div>
								</div> -->
							</div>
							<div class="card-content">
								<h2>{{management.name}}<small><strong>{{management.jabatan}}</strong></small></h2>
								<div class="icon-block mb-5"><a :href="management.fb"><i class='social-i bx bxl-facebook-circle'></i></a><a :href="management.twitter"> <i class='social-i bx bxl-twitter'></i></a><a :href="management.ig"> <i class='social-i bx bxl-instagram-alt'></i></a></div>
							</div>
						</div>

						<!-- Modal -->
						<b-modal :id="`modal-${management.id}`" size="xl" centered hideFooter body-class="p-0">
							<div class="container">
								<img :src="management.popup" class="img-size">
							</div>
						</b-modal>

					</div>

					<div class="col-lg-12 col-xs-12 col-sm-12 mb-5">
						<div class="embed-responsive embed-responsive-4by3">
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
.modal  {
  padding: 0 !important;
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
	height:70vh;
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
	/*border-radius: 50%;*/
	position: absolute;
	bottom: 30%;
	left: 50%;
	/*max-width: 100px;*/
	width: 190px;
	height: 290px;
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
	margin-top:6.3rem;
}
.profile-card-1 h2 small {
	display: block;
	font-size: 15px;
	margin-top:10px;
}
.profile-card-1 .social-i {
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
.profile-card-1 .social-i:hover {
	background-color:#fff;
	color:#2E3434;
	text-decoration:none;
}

.img-size{
	height: 300px;
	width: 350px;
}


/*.container {
  position: relative;
  width: 50%;
}*/

/*.profile-overlay {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}
*/
/*.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .profile-overlay {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  background-color: #04AA6D;
  color: white;
  font-size: 16px;
  padding: 1px 3px;
}*/


@media (min-width: 992px) { 
	.profile-card-1 {
		font-family: 'Open Sans', Arial, sans-serif;
		position: relative;
		float: left;
		overflow: hidden;
		width: 100%;
		color: #ffffff;
		text-align: center;
		height:55vh;
		border:none;
	}
	.profile-card-1 .profile {
		/*border-radius: 50%;*/
		position: absolute;
		bottom: 10%;
		left: 50%;
		/*max-width: 100px;*/
		width: 400px;
		height: 600px;
		opacity: 1;
		box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
		border: 5px solid rgba(255, 255, 255, 1.5);
		-webkit-transform: translate(-50%, 0%);
		transform: translate(-50%, 0%);
	}
	.profile-card-1 h2 {
		margin: 0 0 5px;
		font-weight: 600;
		font-size:27px;
		color:#fff!important;
		margin-top:9rem;
	}

	/*.middle {
		transition: .5s ease;
		opacity: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		text-align: center;
	}*/

	.img-size{
		width: 1100px;
		height: 700px;
	}
}
</style>