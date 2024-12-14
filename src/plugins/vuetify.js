import "@fortawesome/fontawesome-free/css/all.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa" || "md" || "mdi",
  },
  theme: {
    themes: {
      dark: {
        background: "#111",
      },
    },
  },
});
