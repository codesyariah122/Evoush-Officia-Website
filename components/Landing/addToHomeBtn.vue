<template>
  <div>
    <small v-if="message" class="blockquote-footer text-info mb-5 mt-3">
      {{message}}
    </small>
    <button
      v-if="deferredPrompt"
      ref="addBtn"
      class="add-button btn btn-primary"
      @click="clickCallback"
    ><i class='bx bxs-extension bx-lg'></i>
      Install Evoush::App
    </button>
  </div>
</template>

<script>
export default {
  name: 'AddToHomeScreen',
  data: () => ({
    deferredPrompt: null,
    message: null
  }),
  mounted() {
    this.captureEvent()
  },
  methods: {
    captureEvent() {
      window.addEventListener('beforeinstallprompt', (e) => {
        // ! Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault()
        // Stash the event so it can be triggered later.
        this.deferredPrompt = e
        this.message = "Install aplikasi evoush untuk mendapatkan update terbaru konten-konten evoush."
      })
    },
    clickCallback() {
      // Show the prompt
      this.deferredPrompt.prompt()
      // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          // Call another function?
          // this.captureEvent()
          console.log("User accepted installation")
        }else{
          console.log("User canceled installation")
        }
        this.deferredPrompt = null
      })
    },
  },
}
</script>
