<template>
  <Card class="contact-form">
    <p slot="title">Contactez nous</p>
    <Form ref="contactForm" label-position="top">
      <FormItem label="Email" inline>
        <Input v-model="email" size="large" placeholder="Email"></Input>
      </FormItem>
      <FormItem label="Message">
        <Input v-model="message" size="large" type="textarea" placeholder="Message"></Input>
      </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('sendForm')">Envoyer</Button>
        </FormItem>
    </Form>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      email: undefined,
      message: undefined
    }
  },
  methods: {
    sendForm(e) {
      console.log('sendForm', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-form {
  margin: 0 15px 15px 15px;
}
</style>
