<template>
	<nav class="navbar navbar-expand navbar-light">
		<div class="collapse navbar-collapse">
			<ul class="navbar-nav mx-auto">
				<li>
					<a href="/">
						<!-- <img :src="logo" class="img-responsive"> -->
						<Logo class="ml-5"/>
					</a>
				</li>
				<li>
					<AppSearchInput />
				</li>	
			</ul>
		</div>
	</nav>
</template>

<script>
	import Logo from './Headers/brand.vue'
	export default {
		components: {
			Logo
		}
	}
</script>
<style>
.navbar{
	position: relative;
	z-index:1;
	width: 100%!important;
}

.transparent-nav{
	background : rgba(255,255,255, 1);
	margin-top: .5rem;
}
/* DESKTOP VERSION */
@media (min-width: 992px) { 
 /* navbar */
 .navbar{
 	margin-left: -1rem!important;
 	width:100%!important;
 }
 .navbar-brand, .nav-link {
  color: white !important;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);

}
.nav-link{
  text-transform: uppercase;
  margin-right: 3px;
}
.nav-link:hover::after{
  content:'';
  display: block;
  border-bottom: 3px solid #0B63DC;
  width: 50%;
  margin:auto;
  padding-bottom: 5px;
  margin-bottom: -8px;
}

.transition{
  transition: background-color 0.5s ease;
  background : rgba(0, 0, 0, 0.3);
  position: fixed;
  margin-top: -.5rem;
}
.transparent-nav{
  background : rgba(0, 0, 0, 0.3);
  margin-top: -.5rem;
}

.white{
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
}
}

  @media screen and (max-width: 760px) {
   ul.navbar-nav li.nav-item{display: block;}
 }
</style>