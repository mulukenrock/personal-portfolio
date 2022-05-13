<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

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
</style>
