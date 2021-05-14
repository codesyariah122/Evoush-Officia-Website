<template>
	<div class="container-fluid">
		<div class="row">
			<div v-if="article.img && article.dir_img" >
				<div :style="{ backgroundImage: `url(${getImage})` }" class="col-sm-6 col-12 bg-dark text-white py-2 d-flex align-items-center justify-content-center fixed-top bg-img" id="left">

					<div class="row" id="author-context">
						<div class="row">
							<div class="col-12">
								<TheHeader/>
							</div>
						</div>
						<div class="col-12 col-sm-12 col-xs-12">
							<ul>
								<li>
									<h1 class="text-white">
										{{formatDate(article.updatedAt)}} | {{article.author.name}}
									</h1>
								</li>
							</ul>

							<h1>
								{{article.title}}
							</h1>
							<p class="mb-4">{{ article.description }}</p>
						</div>
					</div>
				</div>
			</div>

			<div v-else>
				<div :style="bgImgEmpty" class="col-sm-6 col-12 bg-dark text-white py-2 d-flex align-items-center justify-content-center fixed-top bg-img" id="left" >
					<div class="row">
						<div class="col-12">
							<TheHeader/>
						</div>
					</div>

					<div class="row" id="author-context">
						<div class="col-12 col-sm-12 col-xs-12">
							<ul>
								<li>
									<h1 class="text-primary">
										{{formatDate(article.updatedAt)}}
									</h1>
								</li>
								<li>
									<h1> {{article.author.name}} </h1>
								</li>
							</ul>
							<h1>
								{{article.title}}
							</h1> 
							<p class="mb-4">{{ article.description }}</p>
						</div>
					</div>
				</div>
			</div>

			<div class="col-6 invisible col-2"><!--hidden spacer--></div>
			<div class="col-sm-6 col-12 offset-0 offset-sm-6 py-2" id="right">
				<NuxtLink to="/articles">
					<p class="hover:underline mt-5">Back to All Articles</p>
				</NuxtLink>

				<h1 class="mb-4">
					{{article.title}}
				</h1>

				<div class="ml-2" id="article-doc">
					<!-- content from markdown -->
					<nuxt-content :document="article" />
					<!-- content author component -->
					<author :author="article.author" />
					<!-- prevNext component -->
					<PrevNext :prev="prev" :next="next" class="mt-2" />
					<h1 class="underline mb-3" style="margin-top: 2rem;"></h1>
				</div>
				
			</div>

		</div>
	</div>
</template>

<script>
	import Logo from '~/components/Headers/brand.vue'

	export default {
		props: ['article', 'prev', 'next', 'tags'],
		components: {
			Logo
		},
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

#right{
	margin-top: 40rem!important;
	width: 100%;
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
#author-context ul li {
	margin-left: -3rem;
	font-size: 18px!important;
	list-style: none; display: flex; flex-wrap: nowrap; margin-left: .2rem;
}
#author-context h1{
	font-size: 21px;
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

	#right{
		margin-top: 2rem!important;
	}

	.bg-img{
		background-size: cover;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
	}
	#author-context{
		margin-top: -11rem!important;
		margin-left: 2rem!important;
		width: 100%;
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
	#author-context ul li{
		list-style: none; display: flex; flex-wrap: nowrap;
	}
}
</style>