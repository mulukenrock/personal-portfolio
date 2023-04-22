<template>
  <v-app
    id="home"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <NavBar />
    <div class="progress-bar" :style="{ width: `${progressPercent}%` }"></div>
    <v-container>
      <v-row justify="center" align="center" class="px-4">
        <v-col cols="12" md="10" lg="8" class="text-left">
          <v-row justify="center" align="center">
            <MainPic />
            <Intro />
          </v-row>
        </v-col>
        <v-col cols="12" md="10" lg="8" class="text-left">
          <About />
        </v-col>
        <v-col cols="12" md="10" lg="8">
          <Education />
        </v-col>
        <v-col cols="12" md="10" lg="8">
          <Experience />
        </v-col>
        <v-col cols="12">
          <Tools />
        </v-col>
      </v-row>
    </v-container>
    <v-fab-transition>
      <v-btn
        class="mr-3"
        elevation="21"
        fab
        bottom
        right
        color="#a7121d"
        fixed
        dark
        :small="$vuetify.breakpoint.xs"
        @click="$vuetify.goTo('#home')"
        v-show="progressPercent > 15"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-fab-transition>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

import About from "../components/About.vue";
import Education from "../components/Education.vue";
import Experience from "../components/Experience.vue";
import Tools from "../components/Tools.vue";
import Intro from "../components/Intro.vue";
import MainPic from "../components/MainPic.vue";

export default {
  metaInfo: {
    titleTemplate: "Muluken Getachew %s",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "A full-stack developer specializing in Vue.js, Node.js, Express.js, HASURA, and Nuxt.js. With 4 years of overall experience!",
      },
      { hid: "og:title", property: "og:title", content: "Muluken Getachew" },
      { hid: "og:type", property: "og:type", content: "Website" },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "A full-stack developer specializing in Vue.js, Node.js, Express.js, HASURA, and Nuxt.js. With 4 years of overall experience!",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://i.imgur.com/VrUUsPf.jpg",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://muluken.dev",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "muluken.app",
      },
    ],
  },
  components: {
    NavBar,
    Footer,
    About,
    Education,
    Experience,
    Tools,
    Intro,
    MainPic,
  },
  created() {
    this.post_visit();
  },
  mounted() {
    window.addEventListener("scroll", this.runOnScroll);
    window.addEventListener("wheel", this.runOnWheel);
  },
  data() {
    return {
      progressPercent: 0,
      goToOptions: {
        duration: 1000,
        offset: 0,
        easing: "easeInOutCubic",
      },
    };
  },
  methods: {
    runOnScroll() {
      let scrollPos =
        document.body.scrollTop || document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      this.progressPercent = (scrollPos / height) * 100;
    },
    async post_visit() {
      try {
        await fetch(`${process.env.VUE_APP_VISIT_URL}/count`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            input: {
              page: "HOME",
            },
          }),
        });
      } catch (e) {
        return;
      }
    },
  },
};
</script>
<style scoped>
.padd {
  padding: 12px 0 !important;
}
.theme--light.v-timeline:before {
  background: #a7121d;
}
.progress-bar {
  position: fixed;
  height: 2px;
  background: #e10531;
  z-index: 1;
}
</style>
