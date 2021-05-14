<template>
  <div class="row justify-content-start">
    <div class="col-sm-12 col-12 col-xs-12 hidden-md-down">
       <NuxtLink :to="`/blog/author/${author.name}`">
         <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img v-if="author.img" :src="author.img" :alt="author.name" class="img-responsive img-card">
              </div>
              <div class="col-md-8">
                <div class="card-body ml-5">
                  <h5 class="card-title">Author</h5>
                  <p class="card-text">{{ author.name }}</p>
                  <p class="card-text"><small class="text-muted">{{ author.bio }}</small></p>
                </div>
              </div>
          </div>
        </div>
    </NuxtLink>
  </div>
</div>

</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.card{
  max-width: 300px;
}
.img-card{
  width: 80px!important;
  height: 150px!important;
}
@media only screen and (max-device-width: 812px) {
  .img-card{
    width: 200px!important;
    height: 230px!important;
  }
}
@media (min-width: 992px) { 
  .card{
    max-width: 540px;
  }
  .card img{
    width: 180px!important;
    height: 180px!important;
  }
}
</style>