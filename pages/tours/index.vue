<template>
  <div>
    <h2>Tours</h2>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="tour in tours">
        <TourCard :tour="tour"/>
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'default',
  });

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
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>