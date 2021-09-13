<template>
	<div>
		<div class="container mt-5 mb-5">
			<div class="row justify-content-center">
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<div v-if="error.statusCode === 404">
						<div class="alert alert-danger">
							<h4 class="text-center">{{ message }}</h4>
						</div>
						<nuxt-link to="/" class="btn btn-block btn-primary">Back</nuxt-link>
					</div>

					<div v-else>
						<div class="alert alert-warning">
							<h5>An error occurred</h5>
						</div>
						<nuxt-link to="/">Home Page</nuxt-link>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['error'],
		layout: 'default',

		data(){
			return {
				message: 'Page not found'
			}
		}
	}
</script>