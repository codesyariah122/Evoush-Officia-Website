<template>
	<div>
		<div class="container mt-5 mb-5">
			<div class="row justify-content-center">
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<div v-if="error.statusCode === 404">
						<div class="alert alert-danger">
							<h4 class="text-center">{{ message }}</h4>
						</div>
						<a  @click="historyBack" class="btn btn-block btn-primary">Back</a>
					</div>

					<div v-else>
						<div class="alert alert-warning">
							<h5>An error occurred</h5>
							<p>Perawatan data sumber terkait</p>
						</div>
						<a  @click="historyBack" class="btn btn-block btn-primary">Back</a>
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
		},
		mounted(){
			$crisp.push(['do', 'chat:hide'])
		},

		methods: {
			historyBack(){
				return this.$router.back()
			}
		}
	}
</script>