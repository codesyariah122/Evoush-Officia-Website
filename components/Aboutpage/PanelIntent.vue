<template>
	<div class="container">
		<div class="row mb-5">
			<div class="col-md-4 mx-auto intent-start">
				<img :src="image1" class="img-responsive">
			</div>

			<div class="col-md-6">
				<h2>Title</h2>
				<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
			</div>
		</div>
	</div>
</template>

<script>
	import Depan from '~/assets/images/kantor/Depan.jpg'

	export default{
		data(){
			return {
				image1: Depan	
			}
		}
	}
</script>

<style>

.intent-start {
	width: 100%;
}
.intent-start img{
	width: 400px;
	height: 300px;
}
/* DESKTOP VERSION */
  @media (min-width: 992px) { 
  	.intent-start img{
  		width: 400px;
  		height: 300px;
  	}
  }	
</style>