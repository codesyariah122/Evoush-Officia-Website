<template>
	<div>
		<ul style="list-style: none;">
			<li>
				<a href="/">
					<!-- <img :src="logo" class="img-responsive"> -->
					<Logo class="ml-2"/>
				</a>
			</li>	
		</ul>
		<div class="row" id="author-context">
			<div class="col-12">
				<h1 class="d-none d-sm-block">
					{{article.title}}
				</h1> 
				<p class="mb-4">{{ article.description }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Logo from '~/components/Headers/brand.vue'

	export default {
		components: {
			Logo
		},
		props: ['article']
	}
</script>

<style>
/* DESKTOP VERSION */
@media (min-width: 992px) { 
	body, html {
		height: 100%;
	}
	.bg-img{
		background-size: cover;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
	}
	#author-context{
		margin-top: 17rem;
		margin-left: 5rem;
		color: #fff;
	}
	#author-context h1, h2, h3, h4, h5 {
		font-family: 'Walkway';
		font-weight: 900;
		text-transform: capitalize;
	}
	#author-context p{
		font-family: 'Poiret One';
		font-weight: 900;
		text-transform: capitalize;
	}
}
</style>