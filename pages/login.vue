<template>
  <div class="h-100">
    <b-container class="text-center d-flex">
      <b-card
        class="m-auto"
        overlay
        img-src="https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjkwNjAxfQ"
        img-alt="desk"
      >
        <h1>Login</h1>
        <b-form @submit.prevent="onSubmit" @reset="onReset">
          <b-form-group
            label="Email address:"
            label-for="email"
            description="If you don't have and email, please contact administrator"
          >
            <b-form-input
              id="email"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter registered email..."
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-input
              v-model="form.password"
              type="password"
              aria-describedby="password-help"
              placeholder="Enter a valid password.."
            />
            <b-form-text id="password-help"
              >Password must be password</b-form-text
            >
          </b-form-group>

          <b-button type="submit" variant="primary" class="text-white"
            >Submit</b-button
          >
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit(e) {
      console.log(e, ' -> submit')
    },
    onReset(e) {
      this.form = {
        email: '',
        password: ''
      }
      console.log(e, ' -> submit')
    }
  }
}
</script>

<style scoped>
.card {
  max-width: 500px;
}
.container {
  height: 100vh;
}
</style>
