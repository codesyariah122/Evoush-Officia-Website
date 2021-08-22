<template>
	<div :value="updateExists" :timeout="0" class="alert alert-warning alert-dismissible fade show" role="alert">
		<strong>Pembaruan content</strong>, untuk pembaruan content evoush silahkan reload halaman.
		<button type="button" class="close" data-dismiss="alert" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>
		<button @click="refreshApp" class="btn btn-primary btn-sm">Refresh Content</button>
	</div>
</template>

<script>
	import update from '~/mixins/update'
	export default{
		mixins: [update]
	}
</script>