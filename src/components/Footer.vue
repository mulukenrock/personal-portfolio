<template>
  <v-footer dark padless>
    <v-divider style="background: #a7121d" />
    &nbsp;
    <v-card
      flat
      tile
      class="black white--text py-0 px-5 text-center"
      width="100%"
    >
      <v-row class="my-0 py-0" align="center">
        <v-col cols="12" lg="2" class="py-0 hidden-md-and-down">
          <v-card-text class="white--text py-0">
            <v-btn icon>
              <v-icon color="#A7121D">fas fa-sun</v-icon>
            </v-btn>
          </v-card-text>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3" style="font-size: 14px">
          <span class="mr-6">
            <v-icon size="17px" color="red" class="text-center mr-2"
              >fa fa-phone</v-icon
            >
            +251939020570
          </span>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" style="font-size: 14px">
          <span>
            <v-icon size="20px" color="red" class="text-center mr-2"
              >fa fa-envelope</v-icon
            >
            mulukenrock@gmail.com
          </span>
        </v-col>
        <v-col cols="12" md="4" class="py-0">
          <v-card-text class="py-0">
            <v-btn class="mx-1 white--text" icon>
              <v-icon color="#A7121D">mdi-account</v-icon>
            </v-btn>
            Muluken Getachew &copy; {{ copyrightYear }}
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      copyrightYear: 2024
    }
  },
  async created() {
    const copyrightDate = await this.$fetchDate();
    this.copyrightYear = copyrightDate.getFullYear();
  },
};
</script>

<style></style>
