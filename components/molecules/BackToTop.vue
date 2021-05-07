<template>
	<div class="row justify-content-center">
		<div class="col-12 col-sm-12 col-xs-12">
			<button v-on:click="backToTop()" id="myBtn" title="Go to top" class="btn btn-danger">
				<i class="fas fa-chevron-up text-white"></i>
			</button>
		</div>
	</div>
</template>


<style>

</style>


<script>
	export default {
		mounted(){
			this.scrollTop()
		},
		methods: {
			backToTop(){
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			}, 
			scrollTop(){
				window.addEventListener('scroll', function(){
					const scrolly = window.scrollY
					console.log(scrolly)
					const mybutton = document.querySelector('#myBtn');
					if(scrolly > 20){
						mybutton.style.visibility = "visible";
					}else{
						mybutton.style.visibility = "hidden";
					}
				})
			}
			
		}
	}
</script>

<style>
#myBtn {
    position: fixed;
    bottom: 25px;
    visibility: hidden;
    z-index: 1;
    
   /* visibility: hidden;
  		position: fixed;
  		bottom: 20px;
  		right: 0;
  		z-index: 99;
  		font-size: 18px;
  		border: none;
  		outline: none;
  		color: white;
  		cursor: pointer;
  		padding: 5px;
  		border-radius: 4px;*/
}
/* DESKTOP VERSION */
  @media (min-width: 992px) { 
  	#myBtn {
  		visibility: hidden;
  		position: fixed;
  		bottom: 20px;
  		right: 5px;
  		z-index: 99;
  		font-size: 18px;
  		border: none;
  		outline: none;
  		color: white;
  		cursor: pointer;
  		padding: 15px;
  		border-radius: 4px;
  	}

  	#myBtn:hover {
  		background-color: #555;
  	}
  }
</style>