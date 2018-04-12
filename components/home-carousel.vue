<template>
  <Carousel v-model="carouselValue" loop autoplay class="home-carousel">
    <CarouselItem v-for="(images, index) in $options.groupedImages" :key="'carousel-item' + index">
      <Row role="row">
        <Col role="gridcell" v-for="(image, i) in images" :md="12" :key="'Col' + i">
          <img :src="`/images/cabinet/${image}.jpg`" />
        </Col>
      </Row>
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
  margin: 30px 0;
}
</style>
