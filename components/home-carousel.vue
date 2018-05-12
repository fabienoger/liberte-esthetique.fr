<template>
  <Carousel v-model="carouselValue" loop autoplay class="home-carousel">
    <CarouselItem v-for="i in 8" :key="'carousel-item' + i">
      <img :src="`/images/cabinet/${i}.jpg`" height="532" width="800"/>
    </CarouselItem>
  </Carousel>
</template>

<script>
export default {
  groupedImages: [[1, 2], [3, 4], [5, 6], [7, 8]],
  data() {
    return {
      carouselValue: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.home-carousel {
  margin: 30px auto;
  display: block; 
  max-width: 800px;
  max-height: 532px;
}
</style>
