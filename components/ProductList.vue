<template>
  <div>
    <div id="product-list">
      <div class="container mt-5">
        <div class="row" v-for="product in products" :key="product.permalink">
          <div class="col-12 col-xs-12 col-sm-12">
            <h1>
            <n-link :to="product.categories[0].slug">
              {{product.categories[0].name}}
            </n-link>
          </h1>
          </div>
          <div class="col-md-4 col-xs-12 col-sm-12 mb-3">
            <product-view :product="product"></product-view>
          </div>
          <div class="col-12">
            <hr>
          </div>
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

<style scoped>
@media only screen and (max-device-width: 812px) {
  #intents{
    width: 100%!important;
    margin-top: -1rem;
  }
}
/* DESKTOP VERSION */
@media (min-width: 992px) { 
  #intents{
    width: 100%!important;
  }
}
</style>