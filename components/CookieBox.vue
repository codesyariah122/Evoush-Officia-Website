<template>
  <VueIfBot>
    	<cookie-consent>
      <template
        slot="message"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12 mt-5 px-2 py-3">
                Evoush Official Website menggunakan cookie untuk memberikan pengalaman browsing yang lebih baik bagi Anda, dengan perlindungan terhadap keamanan kebijakan privacy data-data anda.
                <center>
                    <a href="https://evoush.com" class="btn btn-link mt-5">Your Eternal Future</a>
                </center>
            </div>

          </div>
        </div>
      </template>
      <template
        slot="button"
      >
        <div class="col-lg-12">
          <center>
            <button class="btn btn-primary btn-lg">Setuju</button>
          </center>
        </div>
      </template>
    </cookie-consent>
  </VueIfBot>
</template>

<script>
	import VueIfBot from 'vue-if-bot/dist/vue-if-bot.es'
	import CookieConsent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'

	export default {
		components: {
			VueIfBot,
			CookieConsent
		},

    mounted(){
      // if(document.querySelector('.cookie-consent-compliance')){
      //   document.querySelector('.cookie-consent-compliance').style.visibility="hidden"
      // }
    }
	}
</script>

<style>
  .cookie-consent {
    /*display: flex;*/
    padding: 5px;
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
    background: linear-gradient(to left, salmon, LightSalmon);
  }

  .cookie-consent button:hover{
    transform: translateY(15px);
  }

  @media (min-width: 992px) {
    .cookie-consent{
      padding: 0;
      text-align: justify;
      margin:0;
    }
    .cookie-consent button:hover{
      transform: translateY(5px);
    }
  }
</style>

