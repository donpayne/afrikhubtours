<template>
  <div>
    <h2 class="mb-20 text-4xl">Tours</h2>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="tour in tours">
        <TourCard :tour="tour"/>
      </div>
    </div>
  </div>
</template>

<script setup>
  const tours = [
    {
      id: 'gorillas',
      title: 'Gorilla Trek',
      description: 'This is a tour to see gorillas',
      image: './img/gorillas.png',
    },
    {
      id: 'chettahs',
      title: 'Chettah Safari',
      description: 'This is a tour to see chettahs',
      image: './img/chettahs.png',
    },
  ];

  useHead({
    title: 'AfrikHubTours | Tours',
  });
</script>

<style scoped>

</style>