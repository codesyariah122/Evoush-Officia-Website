<template>
	<div>
		<div class="container">
			<div class="row justify-content-end mt-3 mb-3">
				<div class="col-lg-1 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#pages"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
				</div>
			</div>
		</div>

		<CodeEthics class="mt-3 mb-5"/>

	</div>
</template>

<script>
	export default{
		layout: 'pages'
	}
</script>