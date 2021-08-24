<template>
  <div class="flex justify-between">
    <h5 class="text-secondary">Article Lainnya</h5>
    <NuxtLink
      v-if="prev"
      :to="{ name: `blog-${prev.categories}-slug`, params: { slug: prev.slug } }"
      class="mb-2 btn btn-outline-primary"
    >
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: `blog-${next.categories}-slug`, params: { slug: next.slug } }"
      class="btn btn-outline-success"
    >
      {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>
