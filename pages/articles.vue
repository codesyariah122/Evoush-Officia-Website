<template>
  <div>
    <Navigation/>
    
    <Hero/>
    
    <PanelArtikel :articles="articles" :tags="tags"/>

    <h1 class="underline mb-3" style="margin-top: 2rem;"></h1>

    <Footer/>

  </div>
</template>

<script>
  import Navigation from '~/components/Headers/Navigation'
  import Hero from '~/components/Articles/Hero'
  import PanelArtikel from '~/components/Articles/PanelArtikel'
  import Footer from '~/components/molecules/Footer'

  export default {
    data(){
      return {
        title: 'Evoush::Articles'
      }
    },
    components: {
      Navigation,
      Hero,
      PanelArtikel,
      Footer
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
      .only(['title', 'description', 'dir_img', 'img', 'slug', 'author', 'createdAt', 'updatedAt'])
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
    },
  }
</script>


