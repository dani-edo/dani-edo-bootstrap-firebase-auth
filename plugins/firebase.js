import * as firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAWKxLNGaO6QRl6yt9_2E_4um3uN3O-kLw',
  authDomain: 'auth-dani-edo.firebaseapp.com',
  databaseURL: 'https://auth-dani-edo.firebaseio.com',
  projectId: 'auth-dani-edo',
  storageBucket: 'auth-dani-edo.appspot.com',
  messagingSenderId: '364844543107',
  appId: '1:364844543107:web:7c5690f0c091eb8c98bfb6'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
