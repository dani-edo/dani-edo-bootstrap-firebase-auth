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
          <b-form-group label="Email Address" label-for="email">
            <b-form-input
              id="email"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter registered email..."
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Password" label-for="password">
            <b-input
              id="password"
              v-model="form.password"
              type="password"
              aria-describedby="password-help"
              placeholder="Enter a valid password.."
            />
            <!-- <b-form-text id="password-help"
              >Password must be password</b-form-text
            > -->
          </b-form-group>

          <b-form-invalid-feedback v-if="form.error !== ''">{{
            form.error
          }}</b-form-invalid-feedback>
          <b-form-group class="mt-3">
            <b-button type="submit" variant="primary" class="text-white"
              >Submit</b-button
            >
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form-group>
        </b-form>
      </b-card>
      <div class="demo-auth">
        <h3>Demo Account</h3>
        Email: dani@edo.com
        <br />
        Pass: 123456
      </div>
    </b-container>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
        error: ''
      }
    }
  },
  methods: {
    onSubmit(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          this.$router.push('/secret')
        })
        .catch((error) => {
          this.form.error = error.message
        })
    },
    onReset(e) {
      this.clearForm()
    },
    clearForm() {
      this.form = {
        email: '',
        password: '',
        error: ''
      }
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
img {
  height: 350px;
  object-fit: cover;
}
.invalid-feedback {
  display: block !important;
}
.demo-auth {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 20px;
}
</style>
