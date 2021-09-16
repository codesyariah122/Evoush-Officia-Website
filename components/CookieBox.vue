<template>
	<cookie-consent>
  <template
    slot="message"
  >
    Evoush Official Website menggunakan cookie untuk memberikan pengalaman browsing yang lebih baik bagi Anda, dengan perlindungan terhadap keamanan kebijakan privacy data-data anda. <br>
    <a href="https://evoush.com" class="btn btn-link mt-5">Your Eternal Future</a>
  </template>
  <template
    slot="button"
  >
    <button class="btn btn-primary btn-block">Setuju</button>

  </template>
</cookie-consent>
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
    /*display: flex;*/
    padding: 35px;
    align-items: center;
    align-self: center;
    justify-content: center;
    border-bottom: 1px solid white;
    color: white;
    background: linear-gradient(to right, coral, LightCoral);
  }
  .cookie-consent button {
    border: 2px solid white;
    box-shadow: 5px 10px #888888;
    padding: 10px;
    margin-bottom: -15rem;
    /*margin-left: 20px;*/
    /*min-width: 140px;*/
    background: linear-gradient(to left, salmon, LightSalmon);
  }

  .cookie-consent button:hover{
    transform: translateY(15px);
  }
</style>

