<template>
  <div>
    <h1>Categories</h1>

    <category-list :categories="categories"></category-list>
    
  </div>
</template>

<script>
import commerce from "~/common/commerce";

export default {
  async asyncData() {
    const { data: categories } = await commerce.categories.list();

    return {
      categories,
    };
  },
};
</script>