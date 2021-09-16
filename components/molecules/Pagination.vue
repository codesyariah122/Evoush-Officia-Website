<template>
	<div>
		<center>
			<nuxt-link v-if="prevPage" :to="prevLink" class="btn btn-primary btn-lg mt-5 mb-5"><i class='bx bx-skip-previous' ></i> Prev page</nuxt-link>
			<nuxt-link v-if="nextPage" :to="`${urlPrefix}/page/${pageNo + 1}`" class="btn btn-primary btn-lg mt-5 mb-5">Next page <i class='bx bx-skip-next bx-lg'></i></nuxt-link>
		</center>
	</div>
</template>

<script>
export default {
  props: ['prevPage', 'nextPage', 'pageNo', 'urlPrefix'],
  computed: {
    prevLink() {
      return this.pageNo === 2 ? this.urlPrefix : `${this.urlPrefix}/page/${this.pageNo - 1}`
    }
  }
}
</script>