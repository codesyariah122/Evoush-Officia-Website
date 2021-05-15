<template>
	<nav class="navbar navbar-light transparent-nav navbar-slug-article">
		<a href="/">
			<Logo class="navbar-brand"/>
		</a>
		<ul class="navbar-nav mr-auto">
			<li class="nav-item active text-primary">
				<a class="nav-link-article" href="/articles">Articles</a>
			</li>
			<li class="nav-item active text-primary">
				<AppSearchInput />
			</li>
		</ul>					
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
.navbar-slug-article{
	margin-top: -1rem!important;
	margin-left: -1rem!important;
	width: 100%;
}

.nav-link-article {
	color: #fff !important;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 50);
	text-transform: uppercase;
	margin-right: 3px;
}

.nav-link-article:hover::after{
  content:'';
  display: block;
  border-bottom: 3px solid #0B63DC;
  width: 50%;
  margin:auto;
  padding-bottom: 5px;
  margin-bottom: -8px;
}
/* DESKTOP VERSION */
@media (min-width: 992px) { 
 /* navbar */
 .navbar-slug-article{
 	margin-top: -1rem!important;
 	margin-left: -5rem!important;
 	width: 100%;
 }
}

 
</style>