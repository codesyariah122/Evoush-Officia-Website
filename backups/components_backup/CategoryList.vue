<template>
  <ul>
    <li v-for="category in categories" :key="category.slug">
      <n-link
        :to="{
          name: 'categories-slug',
          params: { slug: category.slug },
        }"
      >
        <category-view :category="category"></category-view>
      </n-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["categories"],
};
</script>