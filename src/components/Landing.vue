<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Welcome to WAAAM Assassins</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <blockquote class="blockquote text-xs-center">
          This is version 1 of WAAAM Assassins portal. <br>
          Please sign up with an account to begin.
        </blockquote>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 class="text-xs-center" mt-5>
        <v-btn color="primary" to="/signup">Sign Up</v-btn>
        <v-btn to="/signin">Sign In</v-btn>
      </v-flex>
      <!-- <v-flex xs12 sm6 offset-sm3 mt-3>
        <form enctype="multipart/form-data">
          Upload assassin photo <br>
          <input type="file" value="upload" ref="uploadedImage" accept="image/*" @change="uploadImage"><br>
          <v-btn @click="uploadImage" color="primary">Upload</v-btn>
        </form>
      </v-flex> -->
    </v-layout>
  </v-container>
</template>

<script>
import firebase from 'firebase'
export default {
  methods: {
    uploadImage (event) {
      console.log('start')
      var file = event.target.files
      firebase.storage.ref().put(file).then(console.log('done'))
    }
  }

}
</script>
