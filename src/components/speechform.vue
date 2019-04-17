<template>
  <b-container>
    <div>
      <b-alert show variant="success">
        <h4 class="alert-heading">Talk to our Barista</h4>
        <p>
          Click on the button below.Answer a few questions and get yourself a nice drink!!
        </p>
        <hr>
        <p class="mb-0">
          Say something like 'Hey Barista'!!! And hear back from her.
        </p>
      </b-alert>
      <b-img  class="pic-image" id="audio-control" v-on:click="startSpeech" :src="require('../assets/microphone.png')"></b-img>

    </div>
    <div>
      <label id="BOT">{{ botName }}</label>
    </div>
    <div>
      <router-link variant="danger" to="/brew">Brew</router-link>
      <router-view></router-view>
    </div>
  </b-container>
</template>

<script>
  export default {
        name: "speechform",
        data() {
          return {
            botName: 'Barista'
        }
      },
      methods: {
        startSpeech() {
          console.log('Clicking the button');
        }
      }
    }
</script>

<style scoped>

</style>
