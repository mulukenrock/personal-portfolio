<template>
  <v-app
    id="home"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <NavBar />
    <div class="progress-bar" :style="{ width: progressPercent }"></div>
    <v-container>
      <v-row justify="center" align="center">
        <MainPic />
        <Intro />
        <v-col cols="12" class="padd">
          <About />
          <Education />
          <Experience />
          <Tools />
        </v-col>
      </v-row>
    </v-container>
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
          "Muluken Getachew, software enginner, portfolio site, personal website",
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
      progressPercent: "0%",
    };
  },
  methods: {
    runOnScroll() {
      let scrollPos =
        document.body.scrollTop || document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrolled = (scrollPos / height) * 100;
      console.log(scrolled, " sccc");
      this.progressPercent = `${scrolled}%`;
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
