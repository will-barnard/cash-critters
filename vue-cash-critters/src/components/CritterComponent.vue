<template>
    <div class="container">
  
      <div>
        <!-- stats go here -->
      </div>

      <div>
        {{ critter.displayName }}
      </div>

      <div>
        <img :src="critter.avatar" />
      </div>
      
      <div v-if="!isAdopt">
        <p>Hunger: {{ critter.hunger }}</p>
      </div>
      
      <div v-if="!isAdopt">
        <p>Happiness: {{ critter.happiness }}</p>
      </div>
        <!-- v-for decoration and critter goes here, use css.grid? -->
      
      <div>
        <button v-if="isActive" :disabled="!$store.state.currency.food" v-on:click="feed()">Feed</button>
      </div>
      <div v-if="isAdopt">
        <button  v-on:click="adopt()">Adopt</button>
      </div>
  
    </div>
  </template>

<script>
export default {
    props: ['critter', 'isActive', 'isAdopt'],
    data() {
      return {
        critterModel: ""
        }
    },
    methods: {
      feed() {
        this.$store.commit("FEED_CRITTER", this.critter);
      },
      adopt() {
        this.$store.commit("ADD_CRITTER", this.critter);
      }
    }
}
</script>

<style scoped>
  div {
    text-align: center;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>