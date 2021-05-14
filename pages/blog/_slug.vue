<template>
  <div>
    <section id="article">
      <article>
        <PanelSlug :article="article" :prev="prev" :next="next" :tags="tags"/>
      </article>
    </section>
  </div>
</template>

<script>
import PanelSlug from '~/components/Articles/PanelSlug'

export default {
  components: {
    PanelSlug
  },

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
#article{
  width: 100%;
}
/* DESKTOP VERSION */
@media (min-width: 992px) { 
  #article{
    width: 100%;
  }
}
</style>