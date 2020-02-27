<template>
  <div class="container-full">
    <div class="centered">LOGGED IN</div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { getUserFromCookie } from '@/helpers'

export default {
  asyncData({ req, redirect }) {
    if (process.server) {
      const user = getUserFromCookie(req)
      if (!user) {
        redirect('/login')
      }
    } else {
      const user = firebase.auth().currentUser
      if (!user) {
        redirect('/login')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container-full {
  background: #41c58e;
  height: 100vh;
  width: 100vw;
  position: relative;
}
.centered {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  color: white;
}
</style>
