<template>
  <div>
    <div class="m-3 flex justify-center">
      <img class="mr-2" src="/favicon/android-chrome-192x192.png" />
      <div class="border-l-2 border-s-slate-900 mt-6 mb-3">
        <p class="pl-7 pt-6 -mb-3 font-afrik font-bold text-5xl tracking-wide afrik-orange">Heart of Africa Adventures</p>
        <p class="pl-7 font-sans font-medium text-4xl tracking-wider subpixel-antialiased">TOURS AND TRAVEL</p>
        <p class="pl-16 -mt-1 font-serif font-thin text-xl tracking-wider subpixel-antialiased afrik-orange">- Dream, Explore, Discover -</p>
      </div>
    </div>
    <img class="w-auto pt-2" src="/img/home-lions.png" />
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'home',
  });
</script>

<style scoped>
.afrik-orange {
    color: #F4941C;
  }
</style>