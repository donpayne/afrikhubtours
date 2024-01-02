<template>
  <div class="card text-center">
    <img :src="tour.image" alt="tour thumb" class="thumb">
    <p class="font-bold text-gray-500 m-4 truncate">{{ tour.title }}</p>
    <NuxtLink :to="`/tours/${tour.id}`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup>
  const { tour } = defineProps(['tour']);
</script>

<style scoped>
  .thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
  }
</style>