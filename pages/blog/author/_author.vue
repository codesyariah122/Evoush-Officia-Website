<template>
  <div class="row justify-content-center">
    <div class="col-lg-8 col-xs-12 col-sm-12">
      <div class="card profile-card-2">
        <div class="card-img-block">
          <img class="img-fluid" :src="articles[0].author.cover" alt="Card image cap">
        </div>
        <div class="card-body pt-5">
          <img :src="articles[0].author.img" alt="profile-image" class="profile"/>
          <h5 class="card-title">{{articles[0].author.name}}</h5>
          <p class="card-text">{{articles[0].author.jobdesk}}</p>
          <blockquote class="blockquote-footer">
            {{articles[0].author.bio}}
          </blockquote>

          <NuxtLink to="/"
          ><p class="hover:underline">Back to All Articles</p></NuxtLink
          >
          
          <div class="row justify-content-center">
            <div class="col-md-12">
                <h3 class="mb-4 font-bold text-4xl">
                  Here are a list of articles by {{ articles[0].author.name }}:
                </h3>
                  <ul>
                    <li
                        v-for="article in articles"
                        :key="article.slug"
                        class="w-full px-2 xs:mb-6 md:mb-12 article-card"
                        >
                        <NuxtLink
                        :to="{ name: `blog-${articles[0].categories}-slug`, params: { slug: article.slug } }"
                        class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
                        >

                        <div
                        class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"
                        >
                        <h2 class="font-bold">{{ article.title }}</h2>
                        <img
                        v-if="article.img"
                        class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
                        :src="require(`~/assets/blog/images/${article.slug}/${article.img}`)" width="500"
                        :alt="article.alt"
                        />
                        <p>{{ article.description }}</p>
                        <p class="font-bold text-gray-600 text-sm">
                          {{ formatDate(article.updatedAt) }}
                        </p>
                      </div>
                    </NuxtLink>
                  </li>
                </ul>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blog',
  head(){
    return{
      title: `Evoush::Author | Profile::${this.articles[0].author.name}`
    }
  },
  async asyncData({ $content, params }) {
    const articles = await $content('Blog')
      .where({
        'author.name': {
          $regex: [params.author, 'i']
        }
      })
      .without('body')
      .sortBy('createdAt', 'asc')
      .fetch()

      console.log(articles)

    return {
      articles
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

<style scoped>
  /*Profile card 2*/
.profile-card-2 .card-img-block{
    float:left;
    width:100%!important;
    height:30vh;
    overflow:hidden;
}
.profile-card-2 .card-body{
    position:relative;
}
.profile-card-2 .profile {
  position: absolute;
  top: -42px;
  left: 8%;
  /*max-width: 75px;*/
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 1);
  -webkit-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
}
.profile-card-2 h5{
    font-weight:600;
    color:#6ab04c;
    margin-top: 5rem;
}
.profile-card-2 .card-text{
    font-weight:300;
    font-size:15px;
}
.profile-card-2 .icon-block{
    float:left;
    width:100%;
}
.profile-card-2 .icon-block a{
    text-decoration:none;
}
.profile-card-2 i {
  display: inline-block;
    font-size: 16px;
    color: #6ab04c;
    text-align: center;
    border: 1px solid #6ab04c;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    margin:0 5px;
}
.profile-card-2 i:hover {
  background-color:#6ab04c;
  color:#fff;
}

ul li {
  list-style: none;
}
</style>
