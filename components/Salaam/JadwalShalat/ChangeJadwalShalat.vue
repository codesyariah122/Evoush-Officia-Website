<template>
	<div>
		<pre>
			{{ location }}
		</pre>
	</div>
</template>


<script>
	import Location from './Location'
	export default{
		props: ['location', 'query', 'timeNow', 'results'],
		components: {
			Location
		}
	}
</script>