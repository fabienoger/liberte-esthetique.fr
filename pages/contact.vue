<template>
  <main role="main" class="contact">
    <h1 role="heading" aria-level="1" class="text-center page-header">
      Contact
    </h1>
    <Row>
      <Col :xs="24" :md="12">
        <map-c></map-c>
      </Col>
      <Col :xs="24" :md="12">
        <informations></informations>
        <contact-form></contact-form>
      </Col>
    </Row>
  </main>
</template>

<script>
import contactForm from '~/components/contact-form.vue'
import informations from '~/components/informations.vue'
import mapC from '~/components/map.vue'

export default {
  components: {
    contactForm,
    informations,
    mapC
  }
}
</script>

<style lang="scss" scoped>
.contact {
  div.ivu-row {
    margin-top: 50px;
  }
}
</style>
