<template>
  <div>
    <h1>Categories</h1>

    <category-list :categories="categories"></category-list>
  </div>
</template>

<script>
export default {
  async asyncData({ $commerce }) {
    const { data: categories } = await $commerce.categories.list();

    return {
      categories,
    };
  },
};
</script>