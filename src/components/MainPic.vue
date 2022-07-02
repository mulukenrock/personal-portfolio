<template>
  <v-col
    cols="12"
    sm="5"
    md="4"
    class="d-flex child-flex pa-sm-3 pa-sm-3 pa-md-3"
  >
    <v-img
      src="muluken-getachew.png"
      contain
      :height="$vuetify.breakpoint.mdAndDown ? 300 : 400"
      class="normalpic"
      alt="Muluken Getachew"
    >
      <template v-slot:placeholder>
        <v-skeleton-loader
          class="mx-auto"
          type="image"
          max-width="450"
          :dark="false"
        ></v-skeleton-loader>
      </template>
    </v-img>
  </v-col>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.normalpic {
  filter: opacity(0.9) drop-shadow(0 0 0 #111);
}
</style>

<style>
div.v-image__placeholder > div > div {
  height: 400px;
  border-radius: 10px;
}
</style>
