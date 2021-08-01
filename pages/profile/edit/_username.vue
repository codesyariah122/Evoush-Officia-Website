<template>
	<div>
		<FormEdit :edits="edits"/>
		<!-- <pre>
			{{edit}}
		</pre> -->
	</div>
</template>

<script>
	import FormEdit from '@/components/ProfileLogin/FormEditProfile'

	export default {
		layout: 'member',
		components: {
			FormEdit
		},

		async asyncData({$axios, params}){
			const edits = await $axios.$get(`/member/${params.username}`)
			return {edits}
		}
	}
</script>