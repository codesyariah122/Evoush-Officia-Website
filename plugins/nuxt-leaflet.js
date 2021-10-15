import Vue from 'vue';
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from 'vue2-leaflet';
import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";
import { Icon } from 'leaflet';
import L from "leaflet";
// import "~/assets/leaflet.css";
// import "~/assets/MarkerCluster.css";
// import "~/assets/MarkerCluster.Default.css";
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  // iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  // iconUrl: require('leaflet/dist/images/marker-icon.png'),
  // shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  iconRetinaUrl: require('assets/marker-custom/marker-icon-2x.png'),
  iconUrl: require('assets/marker-custom/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-popup', LPopup);
Vue.component('l-icon', LIcon);
Vue.component('v-marker-cluster', Vue2LeafletMarkerCluster);