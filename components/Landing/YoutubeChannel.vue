<template>
	<div>
		<div class="container-fluid">
			<div class="row justify-content-center">
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<div class="row">
						<div class="col-md-4">
							<img :src="results.snippet.thumbnails.medium.url" class="img-fluid" widht="150">
						</div>
						<div class="col-md-5">
							<h5>{{results.snippet.title}}</h5>
							<p>{{results.statistics.subscriberCount}} Subscribers.</p>
							<div class="g-ytsubscribe" data-channelid="UCIzNgeNDD58z8XNppkopwzw" data-layout="default" data-count="default"></div>
						</div>

						<div class="col-md-12">
							<div class="embed-responsive embed-responsive-16by9">
								<iframe class="embed-responsive-item" :src="`https://www.youtube.com/embed/${results.id.videoId}?rel=0`" allowfullscreen></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['channels'],

		data(){
			return {
				results: this.channels.data.items[0]
			}
		},

		mounted(){
			// console.log(this.results)
		}
	}
</script>