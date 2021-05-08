<template>
  <div>
    <Hero/>
    <h1 class="underline" style="margin-top: 5rem;"></h1>

    <div class="row justify-content-center">
      <div v-for="articles in article" :key="article.slug">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <div class="col-md-4">
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img v-if="article.img" :src="article.img" alt="test">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ article.title }}</h5>
                    <p>by {{ article.author.name }}</p>
                    <p class="card-text">{{ article.description }}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>

    <h1 class="underline" style="margin-top: 5rem;"></h1>

    <br/>

  </div>
</template>

<script>
  import Hero from '~/components/Articles/Hero'
  export default {
    components: {
      Hero
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

</style>
