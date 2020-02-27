<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Firebase Auth
      </h1>
      <h2 class="subtitle">
        Login to see the awesome secret page
      </h2>
      <div class="links">
        <nuxt-link v-if="!loggedIn" to="/login" class="button--green">
          Login
        </nuxt-link>
        <b-button
          v-else
          class="button--green text-white"
          @click.prevent="logout"
        >
          Logout
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      loggedIn: false
    }
  },
  mounted() {
    this.initFirebaseAuth()
  },
  methods: {
    initFirebaseAuth() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.loggedIn = true
        } else {
          this.loggedIn = false
        }
      })
    },
    logout() {
      firebase.auth().signOut()
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
