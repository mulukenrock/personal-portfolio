<template>
  <div v-scrollanim id="about">
    <h4 class="white--text mb-3">About Me</h4>
    <p class="grey--text">
      I'm highly motivated, and I enjoy problem-solving and logical thinking.
      I'm good at collaboration & teamwork, creativity, communication, time
      management, and attention to detail. My career goal is to apply my
      knowledge in the field of designing, development, and maintenance to cater
      to the specific needs of the people and grow in my profession.
    </p>
  </div>
</template>

<style scoped>
.before-enter {
  opacity: 0;
  transform: translateX(-100px);
  transition: all .9s ease-out;
}

.enter {
  opacity: 1;
  transform: translateX(0px);
}
</style>
