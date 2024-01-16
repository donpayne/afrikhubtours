<template>
  <div>
    <TourDetails :tour="tour"/>
  </div>
</template>

<script setup>
  const { id } = useRoute().params;
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
  const tour = tours.find(t => t.id === id);
  if (tour === undefined) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Tour page not found!',
      fatal: true,
    })
  }

  useHead({
    title: `AfrikHubTours | ${ tour.title }`,
    meta: [
      { name: 'description', content: `${ tour.description }`},
    ],
  });
</script>

<style scoped>

</style>