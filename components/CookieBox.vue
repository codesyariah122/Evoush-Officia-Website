<template>
	<VueIfBot>
		<CookieConsent
		message="Kami sebagai media yang melindungi privacy anda!"
		link-label="Cookies Privacy"
		/>
	</VueIfBot>
</template>

<script>
	import VueIfBot from 'vue-if-bot/dist/vue-if-bot.es'
	import CookieConsent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'

	export default {
		components: {
			VueIfBot,
			CookieConsent
		}
	}
</script>

<style>
  .cookie-consent {
    display: flex;
    padding: 10px;
    align-items: center;
    align-self: center;
    justify-content: center;
    border-bottom: 1px solid white;
    color: white;
    background-color: #ff3b40;
  }
  .cookie-consent button {
    border: 1px solid white;
    padding: 10px;
    margin-left: 20px;
    min-width: 140px;
  }
</style>