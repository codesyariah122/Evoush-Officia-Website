<template>
	<div>
		<div class="container-fluid">
			<div class="row">
				<!-- left content -->
				<div class="col-sm-6 col-12 bg-dark text-white py-2 d-flex align-items-center justify-content-center fixed-top bg-img" id="left" :style="{ backgroundImage: `url(${product.assets[3].url})` }">
					<div class="row" id="product-context">
						<div class="col-12 col-sm-12 col-xs-12">
							<nav class="navbar navbar-light transparent-nav navbar-prod">
								<a href="/">
									<BrandLogo class="navbar-brand"/>
								</a>
								<ul class="navbar-nav mr-auto">
									<li class="nav-item active text-primary">
										<a class="nav-link-prod" href="/product">Products</a>
									</li>
								</ul>					
							</nav>
						</div>
						<div class="col-12 col-sm-12 col-xs-12 prod-detail">
							<h1>
								{{product.seo.title}}
							</h1>
							<blockquote class="text-primary ml-3">
								Category : <nuxt-link :to="`/categories/${product.categories[0].name}`">{{product.categories[0].name}}</nuxt-link>
							</blockquote>
							<h2 class="text-primary">
								{{product.price.formatted_with_symbol}}
							</h2>
							<p class="text-dark" v-html="product.seo.description"></p>

							<a href="/product" class="btn btn-primary"> Kembali Ke Products </a>
						</div>
					</div>
				</div>
				<!-- end left content -->

				<!-- right content -->
				<div class="col-6 invisible col-2"><!--hidden spacer--></div>
				<div class="col-sm-6 col-12 offset-0 offset-sm-6 py-2" id="right">
					<!-- <pre>
						{{product}}
					</pre> -->
					<div class="row justify-content-center right-prod-detail">
						<div class="col-12">
							<h1>
								{{product.name}}
							</h1>
							<blockquote class="blockquote-footer">
								{{product.categories[0].name}}
							</blockquote>
							<p v-html="product.description" class="mb-5"></p>

							<ProductCarousel :assets="product.assets"/>

							<a :href="product.checkout_url.checkout" class="mt-3 mb-5 btn btn-primary"> 
								Check Out
							</a>
							<h1 class="underline mb-3" style="margin-top: 2rem;"></h1>
						</div>
					</div>
				</div>
				<!-- end right content -->
			</div>
		</div>

	</div>
</template>
<script>
	import BrandLogo from '~/components/Headers/brand'
	import ProductCarousel from '~/components/Productpage/ProductCarousel'

	export default {
		props: ['product'],
		components: {
			BrandLogo,
			ProductCarousel
		},
		data(){
			return{
				card: {
					style: {
						imgTop:{
							'width': '100%!important',
							'height': '100vh!important'
						}
					}
				}
			}
		},
		head(){
			return {
				title: `Evoush::${this.product.categories[0].name} - ${this.product.name}`,
				meta: [
					{ hid: 'description', name: 'Evoush Indonesia', content: 'Your Eternal Future' },
					{ name: 'description', content: 'Bisnis Evoush Indonesia'},
					{ name: 'keyword', content: 'Bisnis Evoush Bisnis Menjanjikan'},
					{ name: 'keyword', content: 'Bisnis Multilevel Zaman Now ya Evoush'},
					{ property: 'og-title', content: 'Evoush::Author'},
					{ property: 'og-description', content: `Evoush::Product | ${this.product.categories[0].name} | ${this.product.name}`},
					{ property: 'og-image', content: this.product.assets[0].url},
					{ property: 'og-url', content: 'https://evoush.vercel.app/product'}
				],
			}
		},
	}
</script>


<style>
.bg-img{
	background-size: cover;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
}
#right{
	margin-top: 40rem!important;
	width: 100%;
}
#left{
	height: 100vh;
	width: 100%;
	position: absolute;
}
.navbar-prod{
	margin-top: -1rem!important;
	margin-left: -1rem!important;
	width: 100%;
}

.nav-link-prod {
	color: #000 !important;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 7.7);
	text-transform: uppercase;
	margin-right: 3px;
}


.prod-detail{
	margin-top: 13rem!important;
}
.prod-detail h1{
	text-shadow: 1px 1px 1px rgba(50, 10, 0, 100);
	text-transform: capitalize;
	margin-left: 1rem;
}
.right-prod-detail p{
	font-size: 21px;
	text-align: justify;
	text-indent: 12px;
}
/* responsively apply fixed position */
@media (min-width: 576px){
    #left {
        position: fixed;
        top: 0;
        bottom: 0;
    }
    #product-context{
    	margin-left: 1rem!important;
    }
}

/* DESKTOP VERSION */
@media (min-width: 992px) { 
	body, html {
		height: 100%;
	}
	#right{
		margin-top: 2rem!important;
	}

	.bg-img{
		background-size: cover;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
	}
	.navbar-prod{
		margin-top: -1rem!important;
		margin-left: -2rem!important;
		width: 100%;
	}
	.nav-link-prod:hover::after{
		content:'';
		display: block;
		border-bottom: 3px solid #0B63DC;
		width: 50%;
		margin:auto;
		padding-bottom: 5px;
		margin-bottom: -8px;
	}
	.prod-detail{
		margin-top: 17rem!important;
	}
	.prod-detail h1{
		text-shadow: 1px 1px 1px rgba(0, 0, 0, 50);
		text-transform: capitalize;
	}
	.right-prod-detail p{
		font-size: 21px;
		text-align: justify;
		text-indent: 12px;
	}
}
</style>