<template>
	<div>
		<!-- ======= About Section ======= -->
		<section id="about" class="about">
			<div class="container" data-aos="fade-up">
				<div class="section-title">
					<h2>Evoush Management</h2>
					<!-- <p>
						Dengan hormat kami perkenalkan management evoush, yang bersama beliau ini lah evoush berdiri dan berkembang, untuk kedepannya akan terus berinovasi dalam perjalanan membangun bisnis evoush . Dan beliau ini sudah tentu mempunyai segudang pengalaman dan prestasi dalam perjalanan karier keduanya.
					</p> -->
				</div>

				<div v-for="management in managements" class="row mt-5">
					<div class="col-lg-4">
						<div class="box-management">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<div class="_content-img-profile">
								<img :src="management.img" class="img-fluid noselect" alt="" />
							</div>
						</div>
					</div>
					<div class="col-lg-8 pt-4 pt-lg-0 content mt-5">
						<h3>{{management.name}}</h3>
						<h2>{{management.jabatan}}</h2>

						<div class="container">
							<p class="font-italic" v-html="management.profile">
							</p>
							<p>
								Selengkapnya tentang <b>Bapak. {{management.name}}</b> <br>
								<a :href="management.link_profile" class="btn btn-primary mt-5">Lebih Lanjut</a>
							</p>
						</div>



					</div>
					<div class="container">
						<h1 class="underline" style="margin-top: 5rem; margin-bottom: 5rem;"></h1>
					</div>
				</div>

				<div class="row">
					<div class="col-lg-12 col-xs-12 col-sm-12 mb-5">
						<div class="embed-responsive embed-responsive-4by3">
							<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/0H81i8_dPmM"></iframe>
						</div>
					</div>
				</div>

			</div>
		</section>
		<!-- End About Section -->
	</div>
</template>


<script>
	export default {
		props: ['managements']
	}
</script>


<style>
.box-management{
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 79.5vh;
	background: #111845a6;
	box-management-sizing: border-box-management;
	overflow: hidden;
	box-management-shadow: 0 20px 50px rgb(23, 32, 90);
	border: 2px solid #2a3cad;
	color: white;
	padding: 20px;
}

.box-management:before{
	content: '';
	position:absolute;
	top:0;
	left:-100%;
	width:100%;
	height:100%;
	background: rgba(255,255,255,0.1);
	transition:0.5s;
	pointer-events: none;
}

.box-management:hover:before{
	left:-2%;
	transform: skewX(-5deg);
}


.box-management ._content-img-profile{
	position:absolute;
	top:15px;
	left:15px;
	right:15px;
	bottom:15px;
	border:1px solid #f0a591;
	padding:20px;
	text-align:center;
	box-management-shadow: 0 5px 10px rgba(9,0,0,0.5);

}

.box-management span{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: block;
	box-management-sizing: border-box-management;

}

.box-management span:nth-child(1)
{
	transform:rotate(0deg);
}

.box-management span:nth-child(2)
{
	transform:rotate(90deg);
}

.box-management span:nth-child(3)
{
	transform:rotate(180deg);
}

.box-management span:nth-child(4)
{
	transform:rotate(270deg);
}

.box-management span:before
{
	content: '';
	position: absolute;
	width:100%;
	height: 2px;
	background: #50dfdb;
	animation: animate 4s linear infinite;
}

@keyframes animate {
	0% {
		transform:scaleX(0);
		transform-origin: left;
	}
	50%
	{
		transform:scaleX(1);
		transform-origin: left;
	}
	50.1%
	{
		transform:scaleX(1);
		transform-origin: right;

	}

	100%
	{
		transform:scaleX(0);
		transform-origin: right;

	}


}



@media (min-width: 992px) {
	.box-management {
		height: 42vh;
	}
}
</style>