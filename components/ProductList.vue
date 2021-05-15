<template>
  <div>
    <div id="product-list">
      <div class="container mt-5">
        <div class="row justify-content-start">
          <div v-for="product in products" :key="product.permalink" v-if="product.categories[0].name == 'Nutrisi'" class="col-md-4">
             <NutrisiView :product="product" :categories="product.categories[0]"/>
          </div>
          </div>
          <hr>
          <div class="row justify-content-start">
             <div v-for="product in products" :key="product.permalink" v-if="product.categories[0].name == 'Cosmetics'" class="col-md-4">
             <CosmeticsView :product="product" :categories="product.categories[0]"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CosmeticsView from '~/components/Productpage/ProductView/CosmeticsView'
  import NutrisiView from '~/components/Productpage/ProductView/NutrisiView'

  export default {
    props: ["products"],
    components:{
      CosmeticsView,
      NutrisiView
    }
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