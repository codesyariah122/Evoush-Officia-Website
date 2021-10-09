<template>
	<div>

		<!-- ======= Portfolio Section ======= -->
      <section id="products" class="portfolio section-bg">
        <div class="container" data-aos="fade-up">
          <div class="section-title">

            <h2>Product</h2>
            <p>
            	Product-product kami adalah yang terbaik dalam setiap categoriy nya, pada masa ini tidak semata keunggulan kualitas, namun juga manfaat yang kita dapatkan secara real bisa kita rasakan dari product-product evoush.
            </p>
          </div>

          <div class="row">

            <div class="col-lg-12 col-xs-12 col-sm-12 mb-5">
              <small class="text-danger">
                (* Klik foto / design gambar product untuk melihat detail data product secara keseluruhan, gunakan tombol filter di bawah untuk memfilter tampilan data product sesuai kategori yang anda inginkan.)
              </small>
            </div>

            <div
              class="col-lg-12 d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <ul id="portfolio-flters">
                <li data-filter="*" :class="showall ? 'filter-active' : ''" @click="ShowAllProducts">All</li>
                <li data-filter=".filter-nutrisi" :class="shownutrisi ? 'filter-active' : ''" @click="Nutrition">Nutrisi</li>
                <li data-filter=".filter-kosmetik" :class="showkosmetik ? 'filter-active' : ''" @click="Cosmetics">Kosmetik</li>
              </ul>
            </div>
          </div>

          <AllProducts v-if="showall" :allproducts="allproducts"/>

          <NutrisiProducts v-if="shownutrisi" :nutritions="nutritions"/>

          <CosmeticProducts v-if="showkosmetik" :cosmetics="cosmetics"/>

          <!-- <pre>
            {{ products.reverse() }}
          </pre> -->



        </div>
      </section>
      <!-- End Portfolio Section -->
	</div>
</template>


<style>
	.last{
		max-width: 350px;
	}
</style>

<script>
  import AllProducts from './ListProducts/AllProducts'
  import NutrisiProducts from './ListProducts/NutrisiProducts'
  import CosmeticProducts from './ListProducts/CosmeticProducts'

	export default {
    components:{
      AllProducts,
      NutrisiProducts,
      CosmeticProducts
    },

		props: ['allproducts', 'nutritions', 'cosmetics'],

    data(){
      return {
        showall: true,
        shownutrisi: false,
        showkosmetik: false
      }
    },

    methods: {
      ShowAllProducts(){
        this.showall = true
        this.shownutrisi = false
        this.showkosmetik = false
      },
      Nutrition(){
        this.showall=false
        this.showkosmetik = false
        this.shownutrisi = true
      },
      Cosmetics(){
        this.showall = false
        this.shownutrisi = false
        this.showkosmetik = true
      }
    }
	}
</script>

<style>
@media (min-width: 992px) {
  .edit-height{
    max-height: 18vh;
    align-items: center;
    margin-left: 5rem;
  }
}
</style>