<template>
  <div>
    <h1>{{ product.name }}</h1>
    <p>{{ product.price.formatted_with_symbol }}</p>
  </div>
</template>

<script>
import commerce from "~/common/commerce";

export default {
  async asyncData({ params }) {
    const { permalink } = params;

    const product = await commerce.products.retrieve(permalink, {
      type: "permalink",
    });

    return {
      product,
    };
  },
};
</script>