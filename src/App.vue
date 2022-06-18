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
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 3px grey;
  border-radius: 5px;
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #aaa;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #888;
}
</style>
