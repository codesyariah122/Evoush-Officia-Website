<template>
    <NuxtLink
      :to="{name: 'blog-author-author', params: {author: author.name}}"
    >
    <h2>Author</h2>
      <img
      v-if="author.img"
      class="avatar"
      :src="author.img"
      />
    <h4>{{author.name}}</h4>
    <p>{{author.bio}}.</p>

    </NuxtLink>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>


<style scoped>
.avatar {
 width: 130px;
 height: 120px;
 border-radius: 50%;
}
h2{
  font-size: 33px;
}
h4 {
  font-size: 31px;
}
p{
  font-size: 21px;
}
</style>