<template>
  <div>
    <h1>{{ category.name }}</h1>

    <product-list :products="products"></product-list>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $commerce }) {
    const { slug } = params;
    const category = await $commerce.categories.retrieve(slug, {
      type: "slug",
    });
    const { data: products } = await $commerce.products.list({
      category_slug: slug,
    });
    return {
      category,
      products,
    };
  },
};
</script>