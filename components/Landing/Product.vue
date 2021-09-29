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
                <li data-filter="*" class="filter-active">All</li>
                <li data-filter=".filter-nutrisi">Nutrisi</li>
                <li data-filter=".filter-kosmetik">Kosmetik</li>
              </ul>
            </div>
          </div>

          <div
            class="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >

          <!-- <pre>
            {{ products }}
          </pre>
 -->
            <div v-for="product in products" :class="(product.categories[0].name === 'Nutrisi' ? 'col-lg-4 col-md-6 portfolio-item filter-nutrisi' : 'col-lg-4 col-md-6 portfolio-item filter-kosmetik')">
              <div class="portfolio-wrap">
                <img
                  :src="`https://raw.githubusercontent.com/evoush-products/bahan_evoush/main/migration_db/${product.cover}`"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>{{product.title}}</h4>
                  <p>{{product.categories[0].name}}</p>
                  <div class="portfolio-links mt-3">
                    <a
                      :href="`https://raw.githubusercontent.com/evoush-products/bahan_evoush/main/migration_db/${product.cover}`"
                      data-gall="productGallery"
                      class="venobox btn btn-sm btn-primary text-white"
                      :title="product.title"
                      ><i class="bx bx-plus"></i
                    ></a>
                    <nuxt-link
                      :to="{name: `product-${product.categories[0].name}-slug`, params: {categories: product.categories[0].name, slug: product.slug}}"
                      data-gall="portfolioDetailsGallery"
                      data-vbtype="iframe"
                      class="venobox btn btn-sm btn-success text-white"
                      :title="`Detail ${product.title}`"
                      ><i class='bx bx-window-open'></i> Lihat</nuxt-link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <!-- End Portfolio Section -->
	</div>
</template>


<script>
	export default {
		props: ['products'],
     mounted(){
       // Porfolio isotope and filter
       this.getVenobox()
    },

    methods:{
      getVenobox(){
                 // Porfolio isotope and filter
                 $(window).on('load', function() {
                  var portfolioIsotope = $('.portfolio-container').isotope({
                    itemSelector: '.portfolio-item'
                  });

                  $('#portfolio-flters li').on('click', function() {
                    $("#portfolio-flters li").removeClass('filter-active');
                    $(this).addClass('filter-active');

                    portfolioIsotope.isotope({
                      filter: $(this).data('filter')
                    });
                    aos_init();
                  });

            // Initiate venobox (lightbox feature used in portofilo)
            $('.venobox').venobox({
              'share': false
            });

            // Initiate aos_init() function
            aos_init();

          });
      }
    }
	}
</script>