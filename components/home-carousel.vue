<template>
  <Carousel v-model="carouselValue"
    loop autoplay
    :autoplay-speed="5000"
    class="home-carousel">
    <CarouselItem v-for="i in 8" :key="'carousel-item' + i">
      <img :src="`/images/cabinet/${i}.jpg`" class="carousel-image"/>
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

  .carousel-image {
    height: 532px;
    width: 800px;
  }
  @media screen and (max-width: 900px) {
    max-width: 600px;
    max-height: 399px;
    .carousel-image {
      height: 399px;
      width: 600px;
    }
  }
  @media screen and (max-width: 640px) {
    max-width: 340px;
    max-height: 226px;
    .carousel-image {
      height: 226px;
      width: 340px;
    }
  }
  @media screen and (max-width: 340px) {
    max-width: 200px;
    max-height: 133px;
    .carousel-image {
      height: 133px;
      width: 200px;
    }
  }
}
</style>
