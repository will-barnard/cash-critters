<template>
  <div class="container">
    <div class="spacer"></div>
    <h1 class="button" @click="begin()" v-if="!$store.state.isBegin">start the game</h1>
    <div class="spacer"></div>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
    }
  },
  methods: {
    begin() {
      this.$store.commit("INIT");
      this.$router.push({name: "critters"})
    }
  },
  created() {
    if (this.$store.state.isBegin) {
      this.$router.push({name: "critters"})
    }
  }
}
</script>

<style scoped>
  .container {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 80vh;
  }
  .button {
    border: 1px solid;
    border-radius: 20px;
    padding: 10px;
  }
  .button:hover {
    cursor: pointer;
  }
  .spacer {
    flex-grow: 1;
  }
  
</style>