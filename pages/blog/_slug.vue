<template>
  <article>
    <div class="container-fluid h-100">
      <div class="row justify-content-start h-100">
        <div class="col-sm-4 hidden-md-down">
          <img :src="require(`~/assets/blog/images/${article.dir_img}/${article.img}`)" class="img-responsive" :alt="article.alt">
        </div>
        <div class="col-sm-8 col-lg-8 col-xl-8">
          <h1 class="ml-5">{{article.title}}</h1>
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
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      tags,
      prev,
      next
    }
  },


  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },

   
  },

  head(){
      return {
        title: `Evosuh::Article - ${this.article.title}`,
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
}
</script>


<style scoped>
article{
  height: 100%;
}



/* DESKTOP VERSION */
@media (min-width: 992px) { 
  .context{
    margin-left: 2rem;
  }
}
</style>