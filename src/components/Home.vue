<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Home page</h1>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
        <p>Welcome {{ name }}</p>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-5>
        <v-btn color="green" v-on:click="assignTeam" >Assign Teams</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      name: ''
    }
  },
  firestore () {
    firebase.firestore().collection('user').doc(firebase.auth().currentUser.email).get()
    .then(doc => {
      if (doc) {
        var data = doc.data()
        this.name = data.name
      } else {
        console.log('No document exists')
      }
    }).catch(error => { console.log('Error: ' + error) })
  },
  methods: {
    assignTeam () {
      firebase.firestore().collection('user').doc(firebase.auth().currentUser.email).update({
        team_num: 2
      })
    }
  }
}
</script>
