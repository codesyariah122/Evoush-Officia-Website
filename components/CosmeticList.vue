<template>
  <div>
    <div id="product-list">
     <div class="panel panel-default panel-focus">
        <div class="panel-body panel-body-focus">
          <div class="row justify-content-center">
            <div class="col-12 text-center mb-5">
               <h1>
                <n-link to="/categories/cosmetics">
                  Cosmetics
                </n-link>
              </h1>
            </div>
          </div>
          <div class="row">
            <div v-for="product in products" :key="product.permalink" v-if="product.categories[0].name == 'Cosmetics'" class="col-md-4 col-xs-12 col-sm-12">
               <CosmeticsView :product="product" :categories="product.categories[0]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CosmeticsView from '~/components/Productpage/ProductView/CosmeticsView'

  export default {
    props: ["products"],
    components:{
      CosmeticsView
    }
  };
</script>

<style scoped>
/*panel*/
.panel-focus{
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  margin-top: -1.7rem;
  padding: 12px;
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  align-content: justify-content-center;
  width: 90%;
  margin-left: 1.2rem;
}
.panel-body-focus {
  margin-top: 1rem;
  padding: 5px;
}
.panel-body-focus img{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)!important; color: rgb(255,228,181);border-radius:0%;
}
.panel-body-focus h1{
  margin-left: .3rem;
  font-family: 'SpringSakura';
  font-size: 21px;
  margin-top: 1rem;
}
.panel-body-focus p{
  line-height: 25px;
  font-size: 12px;
  text-indent: 21px;
  text-align: justify;
  margin-left: .1rem!important;
  width: 100%;
}
.panel-body-focus a {
  margin-left: 5rem;
  margin-bottom: 2rem;
}
/*end panel;*/
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
  /*panel*/
    .panel-focus{
      box-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
      border-radius: 12px;
      margin-top: -2rem;
      padding: 12px;
      background-color: white;
      margin-left: 3.5rem;
      width: 90%;
      /*height: 50vh;*/
    }
    .panel-body-focus {
      margin-top: .1rem;
      padding: 15px;
    }
    .panel-body-focus img{
      height: 300px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)!important; color: rgb(255,228,181);
    }
    .panel-body-focus h1{
      margin-left: 5rem;
      font-family: 'SpringSakura';
      font-size: 31px;
    }
    .panel-body-focus p{
      font-size: 18px;
      font-weight: 400;
      text-align: justify;
    }
    .panel-body-focus a {
      margin-left: 5rem;
    }
    .panel-body-focus .anim{
      width: 550px;
    }

    /*end panel;*/
}
</style>