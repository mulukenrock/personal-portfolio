<template>
  <div v-scrollanim id="education">
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
          <v-card-title class="py-2 px-2 px-sm-4">
            <h5 class="white--text" style="word-break: break-word">
              B.SC with honours (Software Engineering)
            </h5>
            <v-spacer />
            <h5 class="white--text">2019</h5>
          </v-card-title>
          <v-card-text
            :style="{ background: item.background }"
            class="py-3 px-2 px-sm-4"
          >
            <v-img src="aastu.jpeg" contain width="120" height="120"></v-img>
            <ul class="grey--text mt-3">
              <li>Addis Ababa Science and Technology University (AASTU)</li>
              <li>First Class Honours - Cumulative GPA of 3.75 / 4.0</li>
              <li>Graduation Year - 2019</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
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
<style scoped>
.theme--light.v-timeline:before {
  background: #a7121d !important;
}

.before-enter {
  opacity: 0;
  transform: translateX(100px);
  transition: all .9s ease-out;
}

.enter {
  opacity: 1;
  transform: translateX(0px);
}

@media only screen and (max-width: 599px) {
  >>> .v-timeline-item__divider {
    min-width: 50px !important;
  }
  >>> .v-timeline--dense .v-timeline-item__body {
    max-width: calc(100% - 50px) !important;
  }

  .v-application--is-ltr .v-timeline--reverse.v-timeline--dense:before {
    right: calc(25px - 1px) !important;
    left: initial !important;
  }
}
</style>
