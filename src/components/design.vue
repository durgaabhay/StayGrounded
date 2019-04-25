<template>
  <v-container grid-list-md text-xs-center>
    <h1 class="heading title is-1">Explore the Seasons of North Carolina</h1>
    <v-layout row wrap>
      <v-flex xs6 sm4 md3 x12 class="custom">
        <v-card class="summer">
          <v-card-title primary-title>
            <h3>Summer</h3>
            <!--<Summer></Summer>-->
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs6 sm4 md3 x12 class="custom">
        <v-card class="fall">
          <v-card-title primary-title>
            <h3>Fall</h3>
            <!--<Fall></Fall>-->
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs6 sm4 md3 x12 class="custom">
        <v-card class="winter">
          <v-card-title primary-title>
            <h3>Winter</h3>
            <!--<Winter></Winter>-->
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs6 sm4 md3 x12 class="custom">
        <v-card class="spring">
          <v-card-title primary-title>
            <h3>Spring</h3>
            <!--<Spring></Spring>-->
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import brew from './brew'
  export default {
    name: "p5-example",
    components: {
      brew
    },
    data: () => ({
    })
  };
</script>
<style scoped>

</style>
