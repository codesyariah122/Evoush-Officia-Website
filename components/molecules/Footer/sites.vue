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

					{id:1, name:"About", link: "/about"},
					{id:2, name:"Top Leaders", link: "/top-leaders"},
					{id:3, name:"Success Stories", link: "/success-stories"},
					{id:4, name:"Event/Tickets", link: "/event"},
					{id:5, name:"News", link: "/articles"},
					{id:6, name:"Life Style", link: "/life-style"},
					{id:7, name:"Quran Digital", link: "/quran-digital"}
				]
			}
		}
	}
</script>