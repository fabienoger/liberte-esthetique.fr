<template>
  <main role="main">
    <h1 role="heading" aria-level="1" class="text-center page-header">
      Contact
    </h1>
    <Row>
      <Col span="12">
        <div>Carte</div>
      </Col>
      <Col span="12">
        <informations></informations>
        <contact-form></contact-form>
      </Col>
    </Row>
  </main>
</template>

<script>
import contactForm from '~/components/contact-form.vue'
import informations from '~/components/informations.vue'

export default {
  components: {
    contactForm,
    informations
  }
}
</script>

<style lang="scss">
</style>
