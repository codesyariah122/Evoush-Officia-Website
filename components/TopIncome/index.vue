<template>
	<div>
		<div v-for="member in members" class="col-lg-12 col-xs-12 col-sm-12 mb-5" data-aos="fade-up">
			
			<!-- <h5><strong>{{lists[0].data}}</strong></h5> -->
			
			<div class="card profile-card-2">
				<div class="card-img-block">
					<img class="img-responsive img-fluid" :src="(member.cover) ? `https://app.evoush.com/storage/${member.cover}` : `https://mediatrack.sg/wp-content/uploads/2021/02/digital-transformation-banner-blog.png` " alt="Card image cap">
				</div>
				<div class="card-body pt-5">
					<div class="row justify-content-center">
						<img :src="(member.avatar) ? `https://app.evoush.com/storage/${member.avatar}` : `https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/profile/default.jpg`" alt="profile-image" class="profile img-fluid img-responsive image--profile-member img-responsive rounded-circle center-block d-block mx-auto mt-2"/>
					</div>

					<div class="row justify-content-center mt-5 media-body">
						<div class="col-lg-8 col-xs-8 col-sm-8">
							<center>											
								<h5 class="card-title ml-3" style="text-transform: capitalize;">{{member.name}}</h5>
								<p><strong>Username : {{member.username}}</strong></p>
								<p :class="(member.achievements.includes('STAR SAPHIRE')) ? `badge badge-primary text-white` : `badge badge-success text-white`"> {{member.achievements.includes('STAR SAPHIRE') ? 'STAR SAPHIRE' : 'SAPHIRE'}} </p>

								<div class="mt-2 mb-3">
									<nuxt-link :to="{name: 'member-username', params:{username: member.username}}" class="btn btn-danger btn-sm">Lihat Profile</nuxt-link>
								</div>

								<blockquote v-if="member.quotes"  class="card-text blockquote-footer">
									{{member.quotes}} 
									<br><br>
									<small class="text-primary">Quotes By, <strong>{{member.username}}</strong></small>
								</blockquote>


								<div class="social-links">
									<small>Social media & Contact Founder : </small><br>
									<a href="" target="_blank" class="whatsapp"><i class='bx bxl-whatsapp text-success'></i></a>
									<a href="" target="_blank" class="facebook"><i class="bx bxl-facebook text-primary"></i></a>
									<a href="" target="_blank" class="instagram"><i class="bx bxl-instagram text-danger"></i></a>
									<a href="" target="_blank" class="youtube"><i class='bx bxl-youtube text-danger'></i></a>
									<a href="" target="_blank" class="email"><i class='bx bx-envelope-open text-warning'></i></a>
								</div>
							</center>
						</div>
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
				members: [],
				lists: [
					{id: 1, data: 'Peringkat 1'},
					{id: 2, data: 'Peringkat 2'},
					{id: 3, data: 'Peringkat 3'},
					{id: 4, data: 'Peringkat 4'},
					{id: 5, data: 'Peringkat 5'},
					{id: 6, data: 'Peringkat 6'},
					{id: 7, data: 'Peringkat 7'},
					{id: 8, data: 'Peringkat 8'},
					{id: 9, data: 'Peringkat 9'},
					{id: 10, data: 'Peringkat 10'}
				]
			}
		},

		mounted(){
			this.getMembers()
		},

		methods: {
			getMembers(){
				this.$axios.get('/evoush/top-income')
				.then(res => {
					// console.log(res)
					this.members = res.data
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
	margin-top: -19rem;
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

.media-body{
	margin-top: 3rem!important;
}

.media-body h5 {
	font-size: 23px;
}

.media-body p {
	font-size: 11px;
}

@media (min-width: 992px) { 
	.profile-card-2 .card-img-block{
		float:left;
		width: 100%;
		height:600px;
		overflow:hidden;
	}
	.profile {
		border-radius: 50%;
		position: absolute;
		top: -23rem!important;
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