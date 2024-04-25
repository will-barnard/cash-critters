<template>
    <div class="container">
  
      <div>
        <!-- stats go here -->
      </div>

      <div>
        {{ critterModel.name }}
      </div>

      <div>
        <img :src="critterModel.avatar" />
      </div>
      
      <div>
        <p>Hunger: {{ critterModel.hunger }}</p>
      </div>
      
      <div>
        <p>Happiness: {{ critterModel.happiness }}</p>
      </div>
        <!-- v-for decoration and critter goes here, use css.grid? -->
      
      <div>
        <button v-on:click="feed()">Feed</button>
      </div>
  
    </div>
  </template>

<script>
export default {
    props: ['critter', 'i'],
    data() {
      return {
        critterModel: ""
        }
    },
    created() {
      this.critterModel = this.$store.state.critters.find((obj) => {
          return this.critter.name == obj.name;
      });
    },
    methods: {
      feed() {
        this.$store.commit("FEED_CRITTER", this.critter);
      }
    }
}
</script>

<style scoped>
    
</style>