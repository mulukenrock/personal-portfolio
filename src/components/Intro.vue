<template>
  <v-col
    cols="12"
    sm="6"
    md="5"
    lg="4"
    class="text-sm-left text-center px-3 px-sm-0 px-md-3"
  >
    <h5 class="red--text text--darken-1 title font-weight-bold">
      Hey, I'm Muluken
    </h5>
    <vue-typer
      :text="[
        $vuetify.breakpoint.xs ? 'Software Engr' : 'Software Engineer',
        $vuetify.breakpoint.xs ? 'Fullstack dev' : 'Fullstack Developer',
        'Tech Enthusiast',
      ]"
      :shuffle="true"
      eraseStyle="backspace"
      :eraseDelay="20"
    ></vue-typer>
    <p class="grey--text pr-lg-15">
      A fullstack developer specializing in Vue.js, Node.js, Express.js, HASURA,
      and Nuxt.js!
      <br />
      <br />
      4 years of overall experience!
    </p>
    <v-btn
      v-for="(icon, index) in icons"
      :key="index"
      class="mr-4 text-left mb-4"
      icon
    >
      <v-tooltip
        bottom
        color="white"
        content-class="font-weight-bold red--text"
      >
        <template v-slot:activator="{ on }">
          <a :href="icon.link" target="_blank" rel="noopener noreferrer">
            <v-icon v-on="on" size="24px" color="red" class="text-left zoom">{{
              icon.image
            }}</v-icon>
          </a>
        </template>
        <span>{{ icon.name }}</span>
      </v-tooltip>
    </v-btn>
    <div>
      <a :href="cv" target="_blank" rel="cv">
        <v-btn rounded color="#a7121d" dark>
          <v-icon size="20px" color="white" class="text-left mr-3">{{
            "fa fa-envelope"
          }}</v-icon>
          Download Resume
        </v-btn>
      </a>
    </div>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      cv: process.env.VUE_APP_CV_URL,
      icons: [
        {
          name: "Telegram",
          image: "fab fa-telegram",
          link: "https://t.me/getMuluqen",
        },
        {
          name: "Linked In",
          image: "fab fa-linkedin",
          link: "https://www.linkedin.com/in/mulukenrock/",
        },
        {
          name: "Email",
          image: "fa fa-envelope",
          link: "mailto: mulukenrock@gmail.com",
        },
        {
          name: "Github",
          image: "fab fa-github",
          link: "https://github.com/mulukenrock",
        },
        {
          name: "Stack Overflow",
          image: "fab fa-stack-overflow",
          link: "https://stackoverflow.com/users/14529454/ambassel",
        },
      ],
    };
  },
};
</script>
<style scoped>
.zoom:hover {
  transform: scale(1.5);
}
a {
  text-decoration: none;
}
</style>

<style>
.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: bold;
  font-size: 30px;
}
.vue-typer .custom.char {
  color: #84a1ff;
}
.vue-typer .custom.char.selected {
  color: #a7121d;
}
.vue-typer .custom.caret {
  width: 1.5px;
  background-color: #fff;
}
</style>
