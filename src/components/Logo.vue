<template>
  <div class="px-1 text-center">
    <img :src="src" class="logo-img" :style="customStyle" />
    <p class="logo-name grey--text text-center body-2">{{ name }}</p>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  props: ["src", "name", "customStyle"],
};
</script>

<style scoped>
.logo-img {
  height: 50px;
  margin: 0px;
}
.logo-name {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
</style>
