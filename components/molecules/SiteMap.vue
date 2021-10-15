<template>
	<div class="col-lg-12 mt-5 col-xs-12 col-sm-12">
		<h6><u>Sitemap : </u></h6>
		<div class="container">
			<div class="row justify-content-center">
				<ul class="sitemap">
					<li  v-for="site in sites">
						<div v-if="site.name !== 'Landing Product'">
							<a :href="site.url" class="ml-3">{{ site.name }}</a>
						</div>
						<br>
						<div v-if="site.name === 'Landing Product'">
							<span class="badge badge-primary" > {{ site.name }} </span>
							<ol class="ml-4" style="list-style: none; text-align: left;">
								<li v-for="landing in landings">
									<a :href="landing.url">
										{{ landing.name }}
									</a>
								</li>
							</ol>
						</div>

					</li>
				</ul>
			</div>
		</div>

	</div>
</template>

<script>
	export default{
		data(){
			return {
				date: new Date().getFullYear(),
				sites:[],
				landings: []
			}
		},
		created(){
			this.getSiteMap()
		},
		methods:{
			getSiteMap(){
				this.sites.push(
					{id:1, name: 'Starter Page', url: 'https://evoush-landing-api.herokuapp.com'},
					{id:2, name: 'Landing Product', url:''}
				)
				this.landings.push(
					{id:1, name: 'Opportunity', url: 'https://evoush-opportunity.netlify.app/'},
					{id:2, name: 'Portfolio', url: 'https://evoush-products.github.io/'},
					{id:3, name: 'Gilcam Propolis', url: 'https://propolis.netlify.app/'},
					{id:4, name: 'Brightening Beauty Soap', url: 'https://evoush-beauty-soap.netlify.app/'},
					{id:5, name: 'Kileon', url: 'https://kileon.netlify.app/'},
					{id:6, name: 'Perfect Lipmatte', url: 'https://evoush-perfect-lipmatte.netlify.app/'},
					{id:7, name: 'Peeling Spray', url: 'https://peeling-spray.netlify.app/'}
				)
			}
		}
	}
</script>


<style>
	.sitemap{
		list-style: none;
		display: flex;
	}
	@media(min-width: 992px){
		.sitemap{
			list-style: none;
			display: flex;
		}
	}

</style>