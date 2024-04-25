<template>
  <div class="container">
    <button v-on:click="begin()" v-if="!$store.state.isBegin">start the game</button>
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
  }
</style>