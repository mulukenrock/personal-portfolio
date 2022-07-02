<template>
  <div id="tools">
    <v-row align="center" justify="center" class="mx-1">
      <v-col cols="12">
        <h4 class="white--text my-2 mt-6 text-center">
          Programming Languages / Tools
        </h4>
      </v-col>
      <Logo
        src="https://img.icons8.com/color/96/000000/vue-js.png"
        name="Vue"
      />
      <Logo
        src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/000000/external-nuxt-js-a-free-and-open-source-web-application-framework-logo-color-tal-revivo.png"
        name="Nuxt.Js"
      />
      <Logo
        src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark.svg"
        name="Vuetify"
      />
      <Logo src="hasura.png" name="Hasura" />
      <Logo
        src="https://img.icons8.com/fluency/96/000000/node-js.png"
        name="Node.Js"
      />
      <Logo src="https://img.icons8.com/color/2x/graphql.png" name="GraphQL" />
      <Logo
        src="https://img.icons8.com/color/96/000000/postgreesql.png"
        name="PostgreSQL"
      />
      <Logo
        src="https://img.icons8.com/color/96/000000/mongodb.png"
        name="MongoDB"
      />
      <Logo
        src="https://img.icons8.com/fluency/96/000000/docker.png"
        name="Docker"
      />
      <Logo
        :customStyle="{ background: '#fff' }"
        src="expressjs-icon.png"
        name="Express"
      />
      <Logo
        src="https://img.icons8.com/color/96/000000/javascript.png"
        name="JavaScript"
      />
      <Logo
        src="https://img.icons8.com/color/96/000000/typescript.png"
        name="TypeScript"
      />
      <Logo src="https://img.icons8.com/color/96/000000/git.png" name="Git" />
      <Logo
        src="https://img.icons8.com/color/96/000000/html-5.png"
        name="HTML"
      />
      <Logo src="https://img.icons8.com/color/96/000000/css3.png" name="CSS" />
      <Logo src="tailwindcss.png" name="Tailwind CSS" />
      <Logo
        src="https://img.icons8.com/color/96/000000/heroku.png"
        name="Heroku"
      />
      <Logo src="netlify.png" name="Netlify" />
      <Logo
        src="https://img.icons8.com/color/96/000000/gitlab.png"
        name="Gitlab"
      />
      <Logo
        :customStyle="{ background: '#fff' }"
        src="github.png"
        name="Github"
      />
    </v-row>
  </div>
</template>

<script>
import Logo from "../components/Logo";

export default {
  components: {
    Logo,
  },
  data() {
    return {};
  },
};
</script>
