<template>
	<div class="container-fluid h-100">
		<div class="row h-100">
			<div v-if="article.img && article.dir_img" >
				<div :style="{ backgroundImage: `url(${getImage})` }" class="col-sm-6 col-2 h-100 bg-dark text-white py-2 align-items-center justify-content-center fixed-top bg-img" id="left" >
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
			</div>

			<div v-else>
				<div :style="bgImgEmpty" class="col-sm-6 col-2 h-100 bg-dark text-white py-2 align-items-center justify-content-center fixed-top" id="left" >
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
			</div>

			<div class="col-sm-6 invisible col-2"><!--hidden spacer--></div>
			<div class="col offset-3 offset-sm-6 py-2">
				<NuxtLink to="/articles">
					<p class="hover:underline">Back to All Articles</p>
				</NuxtLink>

				<h3 class="mb-4">
					{{article.title}}
				</h3>

				<div class="ml-5">
					<!-- content from markdown -->
					<nuxt-content :document="article" />
					<!-- content author component -->
					<author :author="article.author" />
					<!-- prevNext component -->
					<PrevNext :prev="prev" :next="next" class="mt-8" />
				</div>
				
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		props: ['article', 'prev', 'next', 'tags'],

		data(){
			return {
				getImage: require(`../../assets/blog/images/${this.article.dir_img}/${this.article.img}`),
				bgImgEmpty: {
					'background-image': "url('https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
					'background-size': 'cover',
					'height': '100vh',
					'width': '100vw',
					'overflow': 'hidden'
				}
			}
		},

		head(){
			return {
				title: this.article.title,
				meta: [
					{ hid: 'description', name: 'Evoush Indonesia', content: 'Your Eternal Future' },
					{ name: 'description', content: 'Bisnis Evoush Indonesia'},
					{ name: 'keyword', content: 'Bisnis Evoush Bisnis Menjanjikan'},
					{ property: 'og-title', content: 'Evoush::Author'},
					{ property: 'og-description', content: `Author Evoush Official Website | ${this.article.title}`},
					{ property: 'og-image', content: this.article.img},
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
	.bg-img{
		background-size: cover;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
	}
	#author-context{
		margin-top: 17rem;
		margin-left: 3rem;
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