<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
[data-theme="light"] {
  --bg-color: whitesmoke;
  --gold-color: #b88f43;
  --content-color: #a7121d;
  --project-color: #18181ecc;
  --timeline-years: darkblue;
}
::-webkit-scrollbar {
  width: 11px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px #a7121d;
  background: #111;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #a7121d;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #e10531;
}
/* Fixes white space on the left side - for small devices */
@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
  only screen and (-o-min-device-pixel-ratio: 3/2),
  only screen and (min--moz-device-pixel-ratio: 1.5),
  only screen and (min-device-pixel-ratio: 1.5) {
  html,
  body {
    width: 100%;
    overflow-x: hidden;
  }
}
</style>
