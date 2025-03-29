<template>
    <div class="container">

      <div class="avatar">
        <img :src="critter.avatar" />
      </div>
      
      <div class="details">
        <div class="name">
          <h3>{{ critter.displayName }}</h3>
        </div>
        <div v-show="isFree">
          <button  v-on:click="adopt()">Adopt</button>
        </div>
        <div v-show="!isFree">
          <button  v-on:click="adoptPay()">Adopt - {{ cost }}</button>
        </div>
      </div>  
  
    </div>
  </template>

<script>
export default {
    props: ['critter', 'isActive', 'isFree', 'cost'],
    data() {
      return {
        critterModel: ""
        }
    },
    methods: {
      adopt() {
        this.$store.commit("ADD_CRITTER", this.critter);
        this.$router.push({ name: 'critter-room', params: {crittername: this.critter.name} });
      },
      adoptPay() {
        this.$store.commit("ADD_CRITTER", this.critter);
        // todo: add currency to critter
        // this.$store.commit("REMOVE_CURRENCY", this.cost);
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
    align-items: center;
    background-color: var(--critter-background-mute);
    border-radius: 10px;
    padding: 10px;
  }
  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70vw;
  }
  .avatar img {
    width: 100%;
    height: auto;
    max-width: 300px; /* Set a maximum width for the image */
    border-radius: 10px; /* Optional: add some border radius for aesthetics */
  }
  .name {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .details {
    background-color: var(--critter-background-soft);
    padding: 10px;
    border-radius: 10px;
    /* color: var(--color-text-dark); */
  }
</style>