<template>
  <div>
    <h1>Products</h1>

    <product-list :products="products"></product-list>

  </div>
</template>

<script>
import commerce from "~/common/commerce";

export default {
  async asyncData() {
    const { data: products } = await commerce.products.list();
    return {
      products,
    };
  },
};
</script>