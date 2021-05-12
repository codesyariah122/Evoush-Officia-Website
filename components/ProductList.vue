<template>
  <div>
    <div class="container" id="product-list">
      <div class="row" v-for="product in products" :key="product.permalink">
        <div class="col-12">
          <h3>
          <n-link :to="product.categories[0].slug">
            {{product.categories[0].name}}
          </n-link>
        </h3>
        </div>
        <div class="col-md-6 mb-3">
          <product-view :product="product"></product-view>
        </div>
        <div class="col-12">
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products"],
};
</script>