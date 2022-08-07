<template>
  <v-app-bar color="#111111" dark flat class="pl-sm-8 pr-xs-0 pr-sm-8" app>
    <img
      @click="scroll('home')"
      src="muluken-logo.png"
      :height="
        $vuetify.breakpoint.xs
          ? '26px'
          : $vuetify.breakpoint.sm
          ? '30px'
          : '36px'
      "
      style="cursor: pointer"
    />
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <v-btn text @click="scroll('home')">Home</v-btn>
      <v-btn text @click="scroll('about')">About</v-btn>
      <v-btn text @click="scroll('education')">Education</v-btn>
      <v-btn text @click="scroll('experience')">Experience / Projects</v-btn>
      <v-btn text @click="scroll('tools')" class="pr-md-0">Tools</v-btn>
    </div>
    <v-icon
      aria-label="menu icon"
      class="hidden-md-and-up"
      @click="drawer = !drawer"
      >fas fa-bars</v-icon
    >
    <v-navigation-drawer
      v-model="drawer"
      class="hidden-lg-and-up ztop"
      hide-overlay
      app
      absolute
      style="top: 40 !important"
      right
      color="#111111"
    >
      <v-list nav flat tile dense color="#111111">
        <v-list-item class="px-0"> </v-list-item>

        <v-divider class="pb-2" />
        <v-list-item class="px-0 mb-2 tile">
          <v-btn text @click="scroll('home')">Home</v-btn>
        </v-list-item>
        <v-list-item class="px-0 mb-2 tile">
          <v-btn text @click="scroll('about')">About</v-btn>
        </v-list-item>
        <v-list-item class="px-0 mb-2 tile">
          <v-btn text @click="scroll('education')">Education</v-btn>
        </v-list-item>
        <v-list-item class="px-0 mb-2 tile">
          <v-btn text @click="scroll('experience')"
            >Experience / Projects</v-btn
          >
        </v-list-item>
        <v-list-item class="px-0 mb-2 tile">
          <v-btn text @click="scroll('tools')">Tools</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    scroll(id) {
      const element = document.getElementById(id);
      let pos = element.style.position;
      let top = element.style.top;
      element.style.position = "relative";
      element.style.top = "-70px";
      element.scrollIntoView({ behavior: "smooth" });
      element.style.top = top;
      element.style.position = pos;
    },
  },
};
</script>

<style></style>
