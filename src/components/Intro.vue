<template>
  <v-col
    cols="12"
    sm="7"
    md="6"
    lg="7"
    class="text-sm-left text-center pl-sm-8 px-lg-16"
    v-scrollanim
  >
    <h5 class="text--darken-1 title font-weight-bold lighter">
      Hey, I'm Muluken Getachew
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
    <p class="grey--text pr-lg-4">
      A fullstack developer specializing in Vue.js, Node.js, Express.js, HASURA,
      and Nuxt.js!
      <br />
      <br />
      {{ yearsOfExperience }} years of overall experience!
    </p>
    <div class="contact-details">
      <v-btn
        v-for="(icon, index) in icons"
        :key="index"
        class="mr-4 text-left mb-4 icons"
        icon
      >
        <v-tooltip
          bottom
          color="white"
          content-class="font-weight-bold tooltip-txts text-left"
        >
          <template v-slot:activator="{ on }">
            <a :href="icon.link" target="_blank" rel="noopener noreferrer">
              <v-icon v-on="on" size="24px" class="zoom">{{
                icon.image
              }}</v-icon>
            </a>
          </template>
          <span>{{ icon.name }}</span>
        </v-tooltip>
      </v-btn>
    </div>
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
  async created() {
    const currentDate = await this.$fetchDate();
    const currentYear = currentDate.getFullYear();

    this.yearsOfExperience = currentYear - this.professionalExpStart;
  },
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
      professionalExpStart: 2019,
      yearsOfExperience: 5,
    };
  },
};
</script>
<style scoped lang="scss">
.zoom {
  color: #dc1826 !important;
}
.lighter {
  color: #dc1826;
}
.tooltip-txts {
  color: #dc1826;
}
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
.contact-details .icons:last-of-type {
  margin-right: 0 !important;
}
@media only screen and (min-width: 600px) {
  .contact-details .icons {
    justify-content: start !important;
  }
}

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.9s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>
