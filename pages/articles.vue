<template>
  <div>
    <Hero/>
    <h1 class="underline mb-2" style="margin-top: 2rem;"></h1>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6" v-for="article in articles" :key="article.slug">
            <div class="card mb-3"  style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img v-if="article.img" :src="article.img" alt="test" class="img-responsive">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                    <h5 class="card-title">{{ article.title }}</h5>
                    <p>by {{ article.author.name }}</p>
                    <p class="card-text">{{ article.description }}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>

    <h1 class="underline" style="margin-top: 2rem;"></h1>
    <br>
  </div>
</template>

<script>
  import Hero from '~/components/Articles/Hero'
  export default {
    data(){
      return {
        title: 'Evoush::Articles'
      }
    },
    components: {
      Hero
    },
    head(){
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'Evoush Indonesia', content: 'Your Eternal Future' },
          { name: 'description', content: 'Bisnis Evoush Indonesia'},
          { name: 'keyword', content: 'Bisnis Evoush Bisnis Menjanjikan'},
          { property: 'og-title', content: 'Evoush Indonesia'},
          { property: 'og-description', content: 'Kumpulan Artikel Menarik Seputar Bisnis Evoush'},
          { property: 'og-image', content: '~/assets/images/vector_image/vector9.jpg'},
          { property: 'og-url', content: 'https://evoush.vercel.app'}
        ]
      }
    },
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()
      const tags = await $content('tags', params.slug)
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
      return {
        articles,
        tags
      }
    }
  }
</script>

<style >
.card img{
  width: 330px!important;
  height: 180px!important;
}

/* DESKTOP VERSION */
@media (min-width: 992px) { 
  .card img{
    height: 230px;
    width: 180px;
  }
}
</style>
