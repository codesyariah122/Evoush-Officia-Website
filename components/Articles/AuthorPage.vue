<template>
	<div class="container-fluid h-100">
		<div class="row h-100">
			<div class="col-sm-6 col-2 h-100 bg-dark text-white py-2 align-items-center justify-content-center fixed-top" id="left" :style="bgImg">

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
							{{articles[0].author.name}}
						</h1> 
						<p class="mb-4">{{ articles[0].author.bio }}</p>
					</div>
				</div>
			</div>

			<div class="col-sm-6 invisible col-2"><!--hidden spacer--></div>
			<div class="col offset-3 offset-sm-6 py-2">
				<NuxtLink to="/articles">
					<p class="hover:underline">Back to All Articles</p>
				</NuxtLink>

				<h3 class="mb-4">
					Here are a list of articles by {{ articles[0].author.name }}:
				</h3>

				<div  v-for="article in articles"  :key="article.slug" class="card mb-3" style="max-width: 540px;">
					<div class="row no-gutters">
						<div class="col-md-4">
							<div  v-if="article.img" >
								<img :src="require(`~/assets/blog/images/${article.dir_img}/${article.img}`)" :alt="article.alt"/>
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
/* DESKTOP VERSION */
@media (min-width: 992px) { 
	body, html {
		height: 100%;
	}
	#author-context{
		margin-top: 17rem;
		margin-left: 5rem;
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