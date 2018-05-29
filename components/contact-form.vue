<template>
  <Card class="contact-form">
    <p slot="title">Contactez nous</p>
    <Form ref="contactForm" label-position="top">
      <FormItem label="Email" inline>
        <Input v-model="email" size="large" placeholder="Email" />
      </FormItem>
      <FormItem label="Message">
        <Input v-model="message" size="large" type="textarea" placeholder="Message" />
      </FormItem>
        <FormItem>
            <Button type="primary" @click="sendForm">Envoyer</Button>
        </FormItem>
    </Form>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      message: null
    }
  },
  methods: {
    sendForm() {
      if (!this.message || !this.email) {
        return
      }
      const params = {
        from: this.email,
        text: this.message
      }
      return this.$axios.$get('/api/mail', { params })
        .then(res => {
            this.$Notice.success({
              title: 'Votre message a bien été envoyé.'
            })
            this.email = null
            this.message = null
        })
        .catch(e => {
          this.$Notice.error({
            title: 'Une erreur est survenue durant l\'envoi de votre message.'
          })
        })
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-form {
  margin: 0 15px 15px 15px;
}
</style>
