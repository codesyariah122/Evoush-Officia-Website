<template>
	<ul class="thumbnail-widget">
		<li v-for="link in links" :key="link.id">
			<div class="thumb-content"><a :href="link.link">
				{{link.name}}
			</a></div> 
		</li>
	</ul>
</template>


<script>
	export default {
		data(){
			return {
				links: [

					{id:1, name:"Health Food", link: "/product/health"},
					{id:2, name:"Skincare Beauty", link: "/product/beauty"},

				]
			}
		}
	}
</script>