<template>
  <b-navbar toggleable="lg" type="dark" variant="secondary" fixed="top">
    <b-navbar-brand to="/"> Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/secret">Secret Page</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if="loggedIn" @click="logout">Logout</b-nav-item>
        <b-nav-item v-else to="/login">Login</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data() {
    return { loggedIn: false }
  },
  mounted() {
    this.setFirebase()
  },
  methods: {
    setFirebase() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.loggedIn = true
        } else {
          this.loggedIn = false
        }
      })
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/')
        })
    }
  }
}
</script>
