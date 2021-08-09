<template>
	<div>
		<div class="container">
			<div class="row justify-content-center mt-5">
				<div class="col-12 col-lg-12 col-xs-12 col-sm-12">
					<div class="float-right">
						<ColorModePicker/>
					</div>
				</div>

				<div class="col-lg-12 col-xs-12 col-sm-12">
					<SocialSharing :socials="socials"/>
				</div>

			</div>

			<div class="row justify-content-end mt-2 mb-5">
				<div class="col-lg-1 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#pages"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row justify-content-center">
				<Covid/>
			</div>
		</div>

	</div>
</template>

<script>
	import Covid from '@/components/HaloDokter/covid'

	export default{
		layout: 'pages',
		components: {
			Covid
		}
	}
</script>