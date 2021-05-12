<template>
	<nav class="navbar navbar-expand navbar-light sticky-top">
		<div class="collapse navbar-collapse">
			<ul class="navbar-nav mx-auto">
				<li class="nav-item"><a href="/about" class="nav-link">About</a></li>
				<li class="nav-item"><a href="/product" class="nav-link">Product</a></li>
				<li>
					<a href="/">
						<!-- <img :src="logo" class="img-responsive"> -->
						<Logo/>
					</a>
				</li>
				<li class="nav-item"><nuxt-link to="/articles" class="nav-link">Articles</nuxt-link></li>
				<li class="nav-item"><nuxt-link to="/contact" class="nav-link">Contact</nuxt-link></li>
			</ul>
		</div>
	</nav>
</template>

<script>
	import Logo from './brand.vue'

	export default {
		components: {
			Logo
		},
		data(){
			return {
				logo: Logo,
				style: {
					logo: {
						'width': '250px',
						'height': '100px'
					}
				}
			}
		}
	}
</script>

<style scoped>

.mobileNav{
	box-shadow: 0 8px 10px -6px black!important;
}
.navbar{
	position: relative;
	z-index:1;
}

.transparent-nav{
	background : rgba(255,255,255, 1);
	margin-top: .5rem;
}

.transition{
	transition: background-color 0.5s ease;
	background : rgba(255, 255, 255, 0.5);
	position: fixed;
	margin-top: -.5rem;
	z-index: 1;
	width:100%;
}

.white{
	color: #fff;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
}

/* DESKTOP VERSION */
@media (min-width: 992px) { 
 /* navbar */
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
  width:100%;
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