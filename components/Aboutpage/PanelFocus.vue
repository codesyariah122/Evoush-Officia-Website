<template>
	<div class="container">
		<div class="row mb-5">
			<div class="col-md-4 mx-auto intent-start">
				<div class="polaroid">
					<img :src="image1" class="img-responsive polaroid-vector">
				</div>
			</div>

			<div class="col-md-6 ml-2">
				<h2>Evoush Location</h2>
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
/*panel*/
.panel-header{
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  padding: 12px;
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  align-content: justify-content-center;
  width: 90%;
  margin-left: 1rem;
  z-index: 1!important;
}
.panel-body-header {
  margin-top: 1rem;
  padding: 5px;
}
.panel-body-header img{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)!important; color: rgb(255,228,181);border-radius:0%;
  margin-bottom: 2rem;
  margin-top: -1rem;
}
.panel-body-header h1{
  margin-top: 2rem;
  margin-left: -1rem;
  font-family: 'SpringSakura';
  font-size: 21px;
}
.panel-body-header p{
  line-height: 25px;
  font-size: 12px;
  text-indent: 21px;
  text-align: justify;
  margin-left: .1rem!important;
  width: 100%;
}
.panel-body-header a {
  margin-left: 5rem;
  margin-bottom: 2rem;
}
/*end panel;*/

/*polaroid*/
    .polaroid{
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)!important;
      color: rgba(0,0,0,0.7);
      position: relative;
      text-align: center;
      margin-bottom: 3rem;
      margin-top:2rem;
    }

    .polaroid-body h2{
      padding: 15px;
      color:black;
      font-family: 'Poiret One', cursive;font-weight:bold;
      font-size: 25px;
    }

    .polaroid-body p{
      padding: 15px;
      color:black;
      font-family: 'Poiret One', cursive;font-weight:bold;
      font-size: 25px; 
    }

    .polaroid-vector{
      width: 350px!important;
      height: 400px!important;
      margin-top: -.1rem!important;
      margin-left: -.1rem!important;
    }
    /*end polaroid*/

/*Mobile setup*/
@media only screen and (max-device-width: 812px) {
	.panel-header img{
		width: 290px!important;
		height: 270px!important;
	}
}
/*end mobile*/

/* DESKTOP VERSION */
  @media (min-width: 992px) { 
  	/*panel*/
    .panel-header{
      box-shadow: 0 3px 20px rgba(0, 0, 0, 1.7);
      border-radius: 12px;
      margin-top: -7rem!important;
      padding: 12px;
      background-color: white;
      margin-left: 7rem!important;
      width: 80%;
      height: 53vh;
      z-index: 1!important;
    }
    .panel-body-header {
      margin-top: 2rem!important;
      padding: 15px;
      margin-left: 2rem;
      width: 100%;
    }
    .panel-body-header img{
      width: 400px;
      height: 500px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)!important; color: rgb(255,228,181);
    }
    .panel-body-header h1{
      margin-left: 3rem;
      font-family: 'SpringSakura';
    }
    .panel-body-header p{
      margin-left: 1rem !important;
      font-size: 16px;
      text-align: justify;
    }
    .panel-body-header a {
      margin-left: 5rem;
    }
    .panel-body-header .anim{
      width: 330px;
      height: 300px;
      margin-right: 1.5rem;
      margin-top: -2rem;
    }
    /*end panel;*/
    /* content */

    /*polaroid*/
    .polaroid{
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)!important;
      color: rgba(0,0,0,0.7);
      position: relative;
      text-align: center;
      margin-bottom: 3rem;
      margin-top:2rem;
    }

    .polaroid-body h2{
      padding: 15px;
      color:black;
      font-family: 'Poiret One', cursive;font-weight:bold;
      font-size: 25px;
    }

    .polaroid-body p{
      padding: 15px;
      color:black;
      font-family: 'Poiret One', cursive;font-weight:bold;
      font-size: 25px; 
    }

    .polaroid-vector{
      width: 450px!important;
      height: 350px!important;
      margin-top: -1rem!important;
      margin-left: -.5rem!important;
    }
    /*end polaroid*/
  }	
</style>