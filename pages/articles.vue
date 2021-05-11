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
                  <div v-if="article.img">
                    <img :src="require(`~/assets/blog/images/${article.dir_img}/${article.img}`)" :alt="article.alt" class="img-responsive">
                  </div>
                  <div v-else>
                    <img :src="`https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`" class="img-responsive">
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                      <h5 class="card-title">{{ article.title }}</h5>
                      <p>by {{ article.author.name }}</p>
                      <p class="card-text">{{ article.description }}</p>
                      <p class="card-text"><small class="text-muted"> {{article.created_at}} </small></p>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <hr class="mb-3 mt-2"/>

      <div class="row">
        <div class="col-12">
          <h3 class="text-info mb-3 text-center">Topics</h3>
          <div class="row justify-content-center">
            <div class="col-md-3 col-sm-12 col-xs-12" v-for="tag of tags" :key="tag.slug">
              <NuxtLink :to="`/blog/tag/${tag.slug}`" class="">
                <p class="text-secondary text-center" style="font-weight: 900;">
                 {{ tag.name }}
               </p>
              </NuxtLink>
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
          { property: 'og-image', content: 'https://evoush.vercel.app/_nuxt/img/vector15.05196e7.jpg'},
          { property: 'og-url', content: 'https://evoush.vercel.app'}
        ]
      }
    },
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'dir_img', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()
      const tags = await $content('tags', params.slug)
      .only(['name', 'description',  'img', 'slug'])
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
    height: 235px!important;
    width: 180px!important;
  }
}
</style>
