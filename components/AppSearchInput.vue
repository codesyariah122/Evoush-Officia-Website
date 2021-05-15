<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
      class="form-control mr-sm-2"
    />
    <ul
      v-if="articles.length"
      class="navbar-nav mr-auto"
    >
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="nav-link nav-item-search text-white"
        >
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: []
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch()
    }
  }
}
</script>


<style>
  .nav-item-search li {
    color: #fff!important;
    font-size: 23px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 17);  
  }
  .nav-item-search:hover::after{
    content:'';
    display: block;
    border-bottom: 3px solid #0B63DC;
    width: 50%;
    margin:auto;
    padding-bottom: 5px;
    margin-bottom: -8px;
  }
</style>
