<template>
  <v-app-bar color="#111111" dark flat class="px-8" app>
    <v-btn icon>
      <v-icon color="#A7121D">fas fa-sun</v-icon>
    </v-btn>

    <v-spacer></v-spacer>
    <v-btn text @click="scroll('home')">Home</v-btn>
    <v-btn text @click="scroll('about')">About</v-btn>
    <v-btn text @click="scroll('education')">Education</v-btn>
    <v-btn text @click="scroll('experience')">Experience / Projects</v-btn>
    <v-btn text @click="scroll('tools')">Tools</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
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
