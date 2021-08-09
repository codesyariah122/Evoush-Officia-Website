<template>
	<div>
		<div class="row justify-content-center mt-5 mb-5">
			<ul class="social-share" style="list-style: none; display: flex;">
				<li v-for="social in socials" class='mr-3' :key="social.id">
					<ShareNetwork
					:network="social.network"
					:url="social.url"
					:title="social.title"
					:description="social.description"
					:quote="social.quote"
					:hashtags="social.hashtag"
					:twitterUser="(social.twitterUser) ? social.twitterUser : ''"
					>
						<i :class='social.icon'></i>
						<span style="text-transform: capitalise;">share on {{social.network}}</span>
					</ShareNetwork>
				</li>
				
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['socials']
	}
</script>

<style scoped>
	.social-share i {
		font-size: 27px;
	}
</style>