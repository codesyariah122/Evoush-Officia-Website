<template>
	<div>
		<section id="newmember-lists" class="portfolio-details">
			<div class="container" data-aos="fade-up">
				<div class="row justify-content-center text-center">
					<div class="col-lg-12 col-xs-12 col-sm-12">
						<h2 class="portfolio-title mb-2 mt-2">New Member Signin</h2>

						<div class="owl-carousel portfolio-details-carousel mt-2">
							<img v-for="list in lists" :src="list.img" class="img-fluid img-responsive" alt="" :key="list.id" width="400" height="400" >
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				lists: [

					{id:1, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/new_member/1.jpeg'},
					{id:2, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/new_member/2.jpeg'},
					{id:3, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/new_member/3.jpeg'},
					{id:4, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/new_member/4.jpeg'},
					{id:5, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/new_member/5.jpeg'},
					{id:6, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/new_member/6.jpeg'}

				]
			}
		}
	}
</script>

<style>
#newmember-lists img{
	width: 300px;
	height: 250px;
	display: flex;
	align-items: center;
	margin-left: 1rem;
}

@media (min-width: 992px) {
	#newmember-lists img{
	width: 400px;
	height: 350px;
	display: flex;
	align-items: center;
	margin-left: 25rem;
}
}
</style>