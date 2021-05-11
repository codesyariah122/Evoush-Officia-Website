<template>
  <div class="row justify-content-start">
    <NuxtLink
      :to="`/blog/author/${author.name}`"
      class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
    >
	    <div class="col-sm-4 hidden-md-down">
	    	<img
	    	v-if="author.img"
	    	class="img-fluid img-thumbnail rounded-circle"
	    	:src="author.img"
	    	/>
	    </div>
	    <div class="col-sm-8 col-lg-8 col-xl-8">
	    	<h4 class="text-ifo">Author</h4>
	    	<p>{{ author.name }}</p>
	    	<p>{{ author.bio }}</p>
	    </div>
    </NuxtLink>
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
