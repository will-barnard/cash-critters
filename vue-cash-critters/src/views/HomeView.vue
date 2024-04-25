<template>
  <div class="container">
    <button v-on:click="begin()" v-if="!start">start the game</button>
    <div v-if="start">
      <div>
        <button v-on:click="addMo()" v-if="start">add another critter</button>
      </div>
      <CritterComponent class="critter-container" v-for="(critter, i) in $store.state.critters" :key="i" :critter="critter" :i="i"/>
    </div>
  </div>
</template>

<script>
import CritterComponent from '@/components/CritterComponent.vue';
import CritterData from '../assets/CritterData.js';

export default {
  components: {CritterComponent},
  data() {
    return {
      start: false
    }
  },
  methods: {
    begin() {
      this.start = true;
      this.addCritter();
      this.tick();
    },
    tick() {
      setTimeout( () => {
        this.$store.commit("TICK_CRITTERS");
        console.log("tick");
        this.tick();
      }, 6000)
    },
    addCritter() {
      const critter = CritterData.HungryHarry;
      this.$store.commit("ADD_CRITTER", critter);
    },
    addMo() {
      this.$store.commit("ADD_MO", CritterData.MunchyMo);
    }
  },
  created() {
    }
}
</script>

<style scoped>
  .container {
    text-align: center;
  }
  .critter-container {
    display: inline-block;
    padding: 20px;
    border: 1px solid;
    border-radius: 10px;
  }
</style>