<template>
  <div class="wow">
    <img src="/img/home-lions.png" />
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'home',
  });
</script>

<style scoped>
.wow {
  width: 1728px;
  height: 740px;
  left: 0px;
  top: 0px;
  will-change: transform;
  transform: translate3d(0px, 100px, 0px);
}
</style>