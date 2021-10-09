<template>
	<div>
		<div class="form-group">
			<input type="search" name="keyword" id="keyword" class="form-control" placeholder="Ketikan keyword untuk mencari video youtube" v-model="keyword" @keyup="SearchYoutube">
			<!-- <img v-if="loading" class="loading" src="https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!w340"> -->
			<div v-if="loading">
				<div class="d-flex align-items-start mt-2">
					<strong>Loading...</strong>
					<div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
				</div>
			</div>
		</div>



		<div v-if="keyword">
			<ul v-for="video in videos" class="list-video">
				<li class="title">
					{{ video.snippet.title }}
				</li>
				<li>
					<div class="embed-responsive embed-responsive-16by9">
						<iframe width="560" height="315" :src="`https://www.youtube.com/embed/${video.id.videoId}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	export default{
		data(){
			return{
				keyword:'',
				videos: [],
				loading: null
			}
		},

		methods:{
			SearchYoutube(){
				this.loading = true
				const q = this.keyword.replace(" ", "")
				this.$axios
				.get(`https://evoush-landing-api.herokuapp.com/api/data/youtube/search/${q}`)
				.then(res=>{
					console.log(res.data)
					// console.log(res.data.data)
					if(res.data.message === "Success fetch youtube video"){
						this.loading = false
						this.videos = res.data.data.items
					}
				})
				.catch(err => {
					console.log(err.message)
				})
			}
		}
	}
</script>

<style>

.list-video{
	list-style: none;
}

.list-video li {
	font-size: 31px;
}

.title {
	margin-bottom: 1.5rem;
}
.loading {
	position: absolute;
	left: 50rem;
	top: -8px;
	max-width: 50px;
}
</style>