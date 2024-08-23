import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueTimeline from "@growthbunker/vuetimeline";
import VueMeta from "vue-meta";
import VueTyper from "vue-typer";
import ScrollAnim from "./directives/scrollanimation";
import globalFunctions from './plugins/globalFunctions';

Vue.directive("scrollanim", ScrollAnim);
Vue.use(VueTyper);
Vue.use(VueTimeline);

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});

// Use the global functions plugin
Vue.use(globalFunctions);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
