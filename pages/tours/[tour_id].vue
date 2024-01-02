<template>
  <div>
    <TourDetails :tour="tour"/>
  </div>
</template>

<script setup>
  const { tour_id } = useRoute().params;
  const tours = [
    {
      id: 'gorillas',
      title: 'Gorilla Trek',
      description: 'This is a tour to see gorillas',
      image: '../img/gorillas.png',
    },
    {
      id: 'chettahs',
      title: 'Chettah Safari',
      description: 'This is a tour to see chettahs',
      image: '../img/chettahs.png',
    },
  ];
  const tour = tours.find(t => t.id === tour_id);
  if (tour === undefined) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Tour page not found!',
    })
  }

  definePageMeta({
    layout: 'default',
  });
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