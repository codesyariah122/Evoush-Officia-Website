<template>
  <div class="row justify-content-start">
    <div class="col-sm-12 col-12 col-xs-12 hidden-md-down">
       <NuxtLink :to="`/blog/author/${author.name}`">
         <div class="card-pricing">
            <a v-if="author.img" :href="author.img">
              <img  :src="author.img" :alt="author.name" class="img-card-pricing float-left img-responsive">
            </a>
            <div class="card-content-pricing">
              <h5 class="card-title">Author</h5>
              <p class="card-text">{{ author.name }}</p>
              <p class="card-text"><small class="text-muted">{{ author.bio }}</small></p>
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
 .wrapper-pricing {
  display: table;
  height: 100%;
  width: 100%;
}

.container-fostrap {
  display: table-cell;
  padding: 1em;
  text-align: center;
  vertical-align: middle;
}
.fostrap-logo {
  width: 100px;
  margin-bottom:15px
}

.card-pricing {
    display: block; 
    margin-bottom: 20px;
    line-height: 1.42857143;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); 
    transition: box-shadow .25s; 
    height: 100%;
}
.card-pricing:hover {
  box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}

.img-card-pricing{
  width: 30%!important;
  height: 100%!important;
  object-fit:cover!important; 
  transition: all .25s ease;
} 
.card-content-pricing {
  padding:15px;
  text-align:left;
  margin-left: 3rem!important;
}
.card-title-pricing {
  margin-top:0px;
  font-weight: 700;
  font-size: 1.65em;
}
.card-title-pricing a {
  color: #000;
  text-decoration: none !important;
}
.card-read-more-pricing {
  border-top: 1px solid #D4D4D4;
}
.card-read-more-pricing a {
  text-decoration: none !important;
  padding:10px;
  font-weight:600;
  text-transform: uppercase
}
</style>