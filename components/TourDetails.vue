<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="tour.image" alt="tour image" class="mx-auto my-7">
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ tour.title }}</h2>
        <p class="text-xl my-7">{{ tour.id }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Tour Description:</h3>
        <p class="mb-7">{{ tour.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { tour } = defineProps(['tour']);
</script>

<style scoped>
  img {
    max-width: 400px;
  }
</style>