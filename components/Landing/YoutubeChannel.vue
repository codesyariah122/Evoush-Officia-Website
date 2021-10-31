<template>
	<div>
		<div class="container-fluid">
			<div class="row justify-content-center">
				<div class="col-lg-12 col-xs-12 col-sm-12">

					<!--Profile Card 3-->
					<div class="container">
						<div class="card profile-card-3">
							<div class="background-block">
								<img :src="channels.data.items[0].brandingSettings.image.bannerExternalUrl"  alt="profile-sample1" class="background"/>
							</div>
							<div class="profile-thumb-block">
								<img :src="channels.data.items[0].snippet.thumbnails.medium.url" alt="profile-image" class="profile"/>
							</div>
							<div class="card-content-yt">
								<h2><a :href="`https://youtube.com/channel/${channels.data.items[0].id}`" target="_blank">{{channels.data.items[0].snippet.title}}</a><small><i class='bx bxs-user-circle'></i> {{channels.data.items[0].statistics.subscriberCount}} Subscribers.</small></h2>
								<h2><small><i class='bx bx-tv'></i> {{channels.data.items[0].statistics.videoCount}} Total video</small></h2>
								<blockquote class="blockquote-footer mt-3" v-html="channels.data.items[0].brandingSettings.channel.description" style="text-align: justify;"></blockquote>
								<br>
								<small class="text-info mt-2 mb-5">{{channels.data.items[0].brandingSettings.channel.keywords}}</small>
								<br>
							</div>
						</div>
					</div>

					<p class="mt-3 w-100 float-left text-center mt-5"><strong>Latest Videos</strong></p>

					<div class="container">
						<div class="card card-list-yt">
							<ul class="list-group list-group-flush">
								<div>
									<!-- <pre>
										{{ latests }}
									</pre> -->

									<li v-for="latest in latests" class="list-group-item">
										<div v-for="yt in latest.items">
											<div class="embed-responsive embed-responsive-16by9 mb-3">
												<iframe class="embed-responsive-item" :src="`https://www.youtube.com/embed/${yt.id.videoId}?rel=0`" allowfullscreen></iframe>
											</div>
											<br>
											<ul style="list-style: none;">
												<li>
													<strong>{{yt.snippet.title}}</strong>
												</li>
												<li>
													<strong>Published At : {{formatDate(yt.publishTime)}}</strong>
												</li>
												<li>
													<blockquote class="blockquote-footer" v-html="yt.snippet.description" style="text-align: justify;"></blockquote>
												</li>
											</ul>
										</div>
									</li>
								</div>
							</ul>
						</div>
					</div>

					<!-- <p class="mt-3 w-100 float-left text-center mt-5"><strong>Teaser Product Video Playlist</strong></p>
					<div class="container">
						<div class="card card-list-yt">
							<ul class="list-group list-group-flush">
								<div>
									<li v-for="video in videos" class="list-group-item">
										<div class="embed-responsive embed-responsive-16by9 mb-3">
											<iframe class="embed-responsive-item" :src="`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}?rel=0`" allowfullscreen></iframe>
										</div>
										<br>
										<ul style="list-style: none;">
											<li>
												<strong>{{video.snippet.title}}</strong>
											</li>
											<li>
												<strong>Published At : {{formatDate(video.contentDetails.videoPublishedAt)}}</strong>
											</li>
											<li>
												<blockquote class="blockquote-footer" v-html="video.snippet.description" style="text-align: justify;"></blockquote>
											</li>
										</ul>
									</li>
								</div>
							</ul>
						</div>
					</div> -->

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['channels', 'latests', 'playlists'],

		data(){
			return {
				results: '',
				// videos: [
				// 	{id:1, data: this.playlists.data.items[0]},
				// 	{id:2, data: this.playlists.data.items[1]},
				// 	{id:3, data: this.playlists.data.items[2]},
				// 	{id:4, data: this.playlists.data.items[4]},
				// 	{id:5, data: this.playlists.data.items[5]}
				// ],

				videos: ''
			}
		},

		created(){
			this.results = this.channels.data.items[0],
			this.videos = this.playlists.data.items
			console.log(this.latests)
		},

		methods: {
			formatDate(date) {
				const options = { year: 'numeric', month: 'long', day: 'numeric' }
				return new Date(date).toLocaleDateString('en', options)
			},
		}
	}
</script>

<style>
	.yt-profile{
		list-style: none;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	.yt-profile li{
		padding: 20px 20px 40px 40px;
		text-align: center;
	}

	/*Profile Card 3*/
	.profile-card-3 {
		font-family: 'Open Sans', Arial, sans-serif;
		position: relative;
		float: left;
		overflow: hidden;
		width: 100%;
		text-align: center;
		height:900px;
		border:none;
	}
	.profile-card-3 .background-block {
		float: left;
		width: 100%;
		overflow: hidden;
	}
	.profile-card-3 .background-block .background {
		width:100%;
/*		vertical-align: top;
		opacity: 0.9;
		-webkit-filter: blur(0.5px);
		filter: blur(0.5px);
		-webkit-transform: scale(1.8);
		transform: scale(2.8);*/
	}
	.profile-card-3 .card-content-yt {
		width: 100%;
		padding: 55px 25px;
		color:#232323;
		float:left;
		/*background:#efefef;*/
		height:50%;
		border-radius:0 0 5px 5px;
		position: relative;
		z-index: 1;
	}
	.profile-card-3 .card-content-yt::before {
		content: '';
		/*background: #efefef;*/
		width: 120%;
		height: 100%;
		left: 11px;
		bottom: 7px;
		position: absolute;
		z-index: -1;
		transform: rotate(-13deg);
	}


	.profile-card-3 .card-content-yt blockquote{
		text-align: justify;
	}

	.list-group blockquote{
		margin-left: -2rem;
	}

	.profile-card-3 .profile {
		border-radius: 50%;
		position: absolute;
		bottom: 68.5%;
		left: 50%;
		max-width: 100px;
		opacity: 1;
		box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
		border: 2px solid rgba(255, 255, 255, 1);
		-webkit-transform: translate(-50%, 0%);
		transform: translate(-50%, 0%);
		z-index:99999;
	}
	.profile-card-3 h2 {
		margin: 0 0 5px;
		font-weight: 600;
		font-size:25px;
		text-transform: lowercase;
	}
	.profile-card-3 h2 small {
		display: block;
		font-size: 15px;
		margin-top:10px;
	}
	.profile-card-3 i {
		display: inline-block;
		font-size: 16px;
		/*color: #232323;*/
		text-align: center;
		border: 1px solid #232323;
		width: 30px;
		height: 30px;
		line-height: 30px;
		border-radius: 50%;
		margin:0 5px;
	}
	.profile-card-3 .icon-block{
		float:left;
		width:100%;
		margin-top:15px;
	}
	.profile-card-3 .icon-block a{
		text-decoration:none;
	}
	.profile-card-3 i:hover {
		background-color:#232323;
		color:#fff;
		text-decoration:none;
	}
	.profile-thumb-block{
		margin-top: 5rem;
	}

	@media (min-width: 992px) {

		/*Profile Card 3*/
		.profile-card-3 {
			font-family: 'Open Sans', Arial, sans-serif;
			position: relative;
			float: left;
			overflow: hidden;
			width: 100%;
			text-align: center;
			height:900px;
			border:none;
		}
		.profile-card-3 .background-block {
			float: left;
			width: 100%;
			overflow: hidden;
		}
		.profile-card-3 .background-block .background {
			width:100%;
	/*		vertical-align: top;
			opacity: 0.9;
			-webkit-filter: blur(0.5px);
			filter: blur(0.5px);
			-webkit-transform: scale(1.8);
			transform: scale(2.8);*/
		}
		.profile-card-3 .card-content-yt {
			width: 100%;
			padding: 55px 25px;
			color:#232323;
			float:left;
			/*background:#efefef;*/
			height:45%;
			border-radius:0 0 5px 5px;
			position: relative;
			z-index: 9999;
		}
		.profile-card-3 .card-content-yt::before {
			content: '';
			/*background: #efefef;*/
			width: 120%;
			height: 100%;
			left: 11px;
			bottom: 51px;
			position: absolute;
			z-index: -1;
			transform: rotate(-13deg);
		}
		.profile-card-3 .profile {
			border-radius: 50%;
			position: absolute;
			bottom: 43%;
			left: 50%;
			max-width: 100px;
			opacity: 1;
			box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
			border: 2px solid rgba(255, 255, 255, 1);
			-webkit-transform: translate(-50%, 0%);
			transform: translate(-50%, 0%);
			z-index:99999;
		}
		.profile-card-3 h2 {
			margin: 0 0 5px;
			font-weight: 600;
			font-size:25px;
			text-transform: lowercase;
		}
		.profile-card-3 h2 small {
			display: block;
			font-size: 15px;
			margin-top:10px;
		}
		.profile-card-3 i {
			display: inline-block;
			font-size: 16px;
			/*color: #232323;*/
			text-align: center;
			border: 1px solid #232323;
			width: 30px;
			height: 30px;
			line-height: 30px;
			border-radius: 50%;
			margin:0 5px;
		}
		.profile-card-3 .icon-block{
			float:left;
			width:100%;
			margin-top:15px;
		}
		.profile-card-3 .icon-block a{
			text-decoration:none;
		}
		.profile-card-3 i:hover {
			background-color:#232323;
			color:#fff;
			text-decoration:none;
		}
		.profile-thumb-block{
			margin-top: 1rem!important;
		}
	}
</style>