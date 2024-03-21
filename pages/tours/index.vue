<template>
  <div>
    <h2 class="mb-20 text-4xl">Tours</h2>
    <div class="grid grid-cols-4 gap-5">
      <ContentList :path="$route.path" v-slot="{ list }">
        <div v-for="tour in list">
          <TourCard :tour="tour"/>
        </div>
      </ContentList>
    </div>
  </div>
</template>

<script setup>
  useHead({
    title: 'Heart of Africa Adventures | Tours',
  });
</script>

<style scoped>

</style>