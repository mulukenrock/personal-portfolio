<template>
  <div id="education">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6" class="px-10 px-md-2">
        <h4 class="white--text text-left">Education</h4>
        <v-timeline align-top dense reverse>
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            :icon="item.icon"
            fill-dot
          >
            <template v-slot:opposite>
              <span
                :class="`headline font-weight-bold white--text`"
                v-text="item.year"
              ></span>
            </template>
            <v-card :color="item.color" dark>
              <v-card-title class="py-2">
                <h5 class="white--text">
                  B.SC with honours (Software Engineering)
                </h5>
                <v-spacer />
                <h5 class="white--text">2019</h5>
              </v-card-title>
              <v-card-text
                :style="{ background: item.background }"
                class="py-3"
              >
                <v-img
                  src="aastu.jpeg"
                  contain
                  width="120"
                  height="120"
                ></v-img>
                <ul class="grey--text mt-3">
                  <li>Addis Ababa Science and Technology University (AASTU)</li>
                  <li>First Class Honours - Cumulative GPA of 3.75 / 4.0</li>
                  <li>Graduation Year - 2019</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline></v-col
      >
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          color: "#a7121d",
          icon: "mdi-star",
          background: "#1e1e1e",
          year: 2019,
        },
      ],
    };
  },
};
</script>
<style>
.theme--light.v-timeline:before {
  background: #a7121d;
}
</style>