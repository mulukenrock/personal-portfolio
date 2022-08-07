<template>
  <v-col
    v-scrollanim
    cols="12"
    sm="5"
    md="6"
    lg="5"
    class="d-flex child-flex pr-sm-0"
  >
    <v-img
      src="muluken-getachew.png"
      contain
      :height="$vuetify.breakpoint.xs ? 250 : 300"
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
>>> .v-image__image.v-image__image--contain {
  z-index: 1 !important;
}

.before-enter {
  opacity: 0;
  transform: translateY(-100px);
  transition: all 0.9s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>

<style>
div.v-image__placeholder > div > div {
  height: 400px;
  border-radius: 10px;
}
</style>

<style lang="scss">
@import "../assets/photo-bg.scss";
</style>
