<template>
    <NuxtLink
      :to="{name: 'blog-author-author', params: {author: author.name}}"
    >
    <img
    v-if="author.img"
    class="avatar"
    :src="author.img"
    />
    <h2>Author</h2>
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
 width: 50px;
 height: 50px;
 border-radius: 50%;
}
h2{
  font-size: 13px;
}
h4 {
  font-size: 10px;
}
p{
  font-size: 8px;
}
</style>