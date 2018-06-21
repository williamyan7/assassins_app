import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueFire from 'vuefire'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import firebase from 'firebase'

Vue.use(Vuetify)
Vue.use(VueFire)

Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyBbnCIFOJbGWaezFshEGTSkjHxtbwcHYfM',
  authDomain: 'vuejs-practice-5e903.firebaseapp.com',
  databaseURL: 'https://vuejs-practice-5e903.firebaseio.com',
  projectId: 'vuejs-practice-5e903',
  storageBucket: 'vuejs-practice-5e903.appspot.com',
  messagingSenderId: '772257637461'
}

firebase.initializeApp(config)

/* eslint-disable no-new */
const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    created () {
      firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
          store.dispatch('autoSignIn', firebaseUser)
        }
      })
    }
  })
  unsubscribe()
})
