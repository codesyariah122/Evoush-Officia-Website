import Vue from 'vue'
import VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyAZWMWXmcyz1MgObsiOvCm6B4lfweWWoFQ',
		libraries: 'places'
	},
	installComponents: true
})