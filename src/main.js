import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueTimeline from "@growthbunker/vuetimeline";
import VueMeta from 'vue-meta'
import VueTyper from "vue-typer";

Vue.use(VueTyper);
Vue.use(VueTimeline);
 
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
