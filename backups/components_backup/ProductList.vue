<template>
  <ul>
    <li v-for="product in products" :key="product.permalink">
      <n-link
        :to="{
          name: 'products-permalink',
          params: { permalink: product.permalink },
        }"
      >

        <product-view :product="product"></product-view>

      </n-link>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ["products"],
  };

  console.log(products)
</script>