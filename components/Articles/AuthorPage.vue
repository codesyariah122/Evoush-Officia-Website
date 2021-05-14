<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-6 col-12 bg-dark text-white py-2 d-flex align-items-center justify-content-center fixed-top bg-img" id="left" :style="bgImg">

				<!-- <img :src="logo" class="img-responsive"> -->

				<div class="row" id="author-context">
					<div class="row">
						<div class="col-12">
							<a href="/">
								<Logo class="ml-2"/>
							</a>
						</div>
					</div>

					<div class="col-12 col-sm-12 col-xs-12">
						<h1 class="d-none d-sm-block">
							{{articles[0].author.name}}
						</h1> 
						<p class="mb-4">{{ articles[0].author.bio }}</p>
					</div>
				</div>
			</div>

			<div class="col-sm-6 invisible col-2"><!--hidden spacer--></div>
			<div class="col-sm-6 col-12 offset-0 offset-sm-6 py-2" id="right"">
				<NuxtLink to="/articles">
					<p class="hover:underline">Back to All Articles</p>
				</NuxtLink>

				<h1 class="mb-4">
					Here are a list of articles by {{ articles[0].author.name }}:
				</h1>

				<div  v-for="article in articles"  :key="article.slug" class="card mb-3">
					<div class="row no-gutters">
						<div class="col-md-4">
							<div  v-if="article.img" >
								<img :src="require(`~/assets/blog/images/${article.dir_img}/${article.img}`)" :alt="article.alt" class="img-responsive"/>
							</div>
							<div v-else>
								<img :src="`https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`" class="img-responsive">
							</div>
						</div>
						<div class="col-md-8">
							<NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
								<div class="card-body">
									<h5 class="card-title">
										{{article.title}}
									</h5>
									<p class="card-text">{{article.description}}.</p>
									<p class="card-text"><small class="text-muted">
										{{formatDate(article.updatedAt)}}
									</small></p>
								</div>
							</NuxtLink>
						</div>
					</div>
				</div>
				
			</div>

		</div>
	</div>
</template>

<script>
	import Logo from '~/components/Headers/brand.vue'

	export default {
		props: ['articles'],
		components:{
			Logo
		},

		data(){
			return {
				bgImg:{
					'background-image': `url(${this.articles[0].author.img})`,
					'background-size': 'cover',
					'height': '100vh',
					'width': '100vw',
					'overflow': 'hidden'
				}
			}
		},

		head(){
			return {
				title: `Evoush::author - ${this.articles[0].author.name}`,
				meta: [
					{ hid: 'description', name: 'Evoush Indonesia', content: 'Your Eternal Future' },
					{ name: 'description', content: 'Bisnis Evoush Indonesia'},
					{ name: 'keyword', content: 'Bisnis Evoush Bisnis Menjanjikan'},
					{ property: 'og-title', content: 'Evoush::Author'},
					{ property: 'og-description', content: `Author Evoush Official Website | ${this.articles[0].author.name}`},
					{ property: 'og-image', content: this.articles[0].author.img},
					{ property: 'og-url', content: 'https://evoush.vercel.app'}
				],
			}
		},

		methods: {
			formatDate(date) {
				const options = { year: 'numeric', month: 'long', day: 'numeric' }
				return new Date(date).toLocaleDateString('en', options)
			}
		}
	}
</script>

<style>

#right{
	margin-top: 40rem!important;
}
#right .card{
	max-width: 400px;
}

#left{
	height: 100vh;
	width: 100%;
	position: absolute;
}
#author-context{
	width: 70%!important;
	margin-left: -1rem!important;
}
#author-context ul li{
	margin-left: -3rem;
	font-size: 18px!important;
	list-style: none; display: flex; flex-wrap: nowrap; margin-left: .2rem;
}

#article-doc p{
	width: 80%;
	text-align: justify;
	text-indent: 21px;
}
/* responsively apply fixed position */
@media (min-width: 576px){
    #left {
        position: fixed;
        top: 0;
        bottom: 0;
    }
    #author-context{
    	margin-left: 1rem!important;
    }
}

/* DESKTOP VERSION */
@media (min-width: 992px) { 
	body, html {
		height: 100%;
	}

	#brand-logo{
		top:0;
		position: sticky;
	}

	#right{
		margin-top: 2rem!important;
	}
	#right .card{
		max-width: 550px;
	}

	.bg-img{
		background-size: cover;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
	}
	#author-context{
		margin-top: 16rem!important;
		margin-left: 3rem!important;
		width: 100%;
	}

	#author-context p{
		font-family: 'Poiret One';
		font-weight: 900;
		text-transform: capitalize;
	}
	#author-context ul li{
		list-style: none; display: flex; flex-wrap: nowrap;
	}
}
</style>