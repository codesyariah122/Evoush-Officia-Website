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

				<div  v-for="article in articles"  :key="article.slug" class="card-pricing mb-3">
					<NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
						<img  :src="require(`~/assets/blog/images/${article.dir_img}/${article.img}`)" :alt="article.alt" class="img-card-pricing float-left img-responsive">

						<div class="card-content-pricing">
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
 .wrapper-pricing {
  display: table;
  height: 100%;
  width: 100%;
}

.container-fostrap {
  display: table-cell;
  padding: 1em;
  text-align: center;
  vertical-align: middle;
}
.fostrap-logo {
  width: 100px;
  margin-bottom:15px
}

.card-pricing {
  display: block; 
    margin-bottom: 20px;
    line-height: 1.42857143;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); 
    transition: box-shadow .25s; 
}
.card-pricing:hover {
  box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}
/*.img-card-pricing {
  width: 100%;
  height:200px;
  border-top-left-radius:2px;
  border-top-right-radius:2px;
  display:block;
    overflow: hidden;
}*/
.img-card-pricing{
  width: 100%!important;
  height: 70vh!important;
  object-fit:cover!important; 
  transition: all .25s ease;
} 
.card-content-pricing {
  padding:15px;
  text-align:left;
}
.card-title-pricing {
  margin-top:0px;
  font-weight: 700;
  font-size: 1.65em;
}
.card-title-pricing a {
  color: #000;
  text-decoration: none !important;
}
.card-read-more-pricing {
  border-top: 1px solid #D4D4D4;
}
.card-read-more-pricing a {
  text-decoration: none !important;
  padding:10px;
  font-weight:600;
  text-transform: uppercase
}
#right{
	margin-top: 40rem!important;
}

#left{
	/*height: 100vh;*/
	width: 100%;
	position: absolute;
}
#author-context{
	width: 100%!important;
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
	.wrapper-pricing {
		display: table;
		height: 100%;
		width: 100%;
	}

	.container-fostrap {
		display: table-cell;
		padding: 1em;
		text-align: center;
		vertical-align: middle;
	}
	.fostrap-logo {
		width: 100px;
		margin-bottom:15px
	}

	.card-pricing {
		display: block; 
		margin-bottom: 20px;
		line-height: 1.42857143;
		background-color: #fff;
		border-radius: 2px;
		box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); 
		transition: box-shadow .25s; 
	}
	.card-pricing:hover {
		box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
	}
/*.img-card-pricing {
  width: 100%;
  height:200px;
  border-top-left-radius:2px;
  border-top-right-radius:2px;
  display:block;
    overflow: hidden;
    }*/
    .img-card-pricing{
    	width: 100%!important;
    	height: 70vh!important;
    	object-fit:cover!important; 
    	transition: all .25s ease;
    } 
    .card-content-pricing {
    	padding:15px;
    	text-align:left;
    }
    .card-title-pricing {
    	margin-top:0px;
    	font-weight: 700;
    	font-size: 1.65em;
    }
    .card-title-pricing a {
    	color: #000;
    	text-decoration: none !important;
    }
    .card-read-more-pricing {
    	border-top: 1px solid #D4D4D4;
    }
    .card-read-more-pricing a {
    	text-decoration: none !important;
    	padding:10px;
    	font-weight:600;
    	text-transform: uppercase
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
		/*height: 100vh;*/
		width: 100%;
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