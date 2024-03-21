<template>
  <div>
    <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
      <TourDetails :tour="data"/>
    </ContentQuery>
  </div>
</template>

<script setup>
  const { id } = useRoute().params;

  useHead({
    title: `Heart of Africa Adventures | ${ id }`,
  });
</script>

<style scoped>

</style>