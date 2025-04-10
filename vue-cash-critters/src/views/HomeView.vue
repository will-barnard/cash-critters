<template>
  <div class="container">
    <div class="top-spacer"></div>
    <h1>Cash Critters</h1>
    <div class="logo">
      <img src="/img/critters/HUNGRY_HARRY_FULL.png" alt="hungry harry" />
    </div>
    <div class="top-spacer"></div>
    <h3 class="button" @click="begin()" v-if="!$store.state.isBegin">start the game</h3>
    <div class="top-spacer"></div>
    <p @click="$router.push({ name: 'about' })" class="about">About</p>
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
      this.$router.push({name: "adopt"})
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
    justify-content: space-between; /* Distribute items from top to bottom */
    align-items: center;
    font-size: 1em;
    min-height: 100vh; /* Ensure the container takes up at least the full viewport height */
    box-sizing: border-box; /* Include padding and border in height calculations */
    padding-bottom: 20px; /* Add padding to prevent the bottom element from being cut off */
    overflow-y: auto; /* Ensure content is scrollable if it overflows */
  }
  .button {
    border: 1px solid;
    border-radius: 20px;
    padding: 10px;
  }
  .button:hover {
    cursor: pointer;
  }
  .about {
    margin-bottom: 20px;
  }
  .spacer {
    flex-grow: 1; /* This will now work as intended */
  }
  .top-spacer {
    height: 5vh; /* Adjust this value as needed */
  }
  .logo {
    margin: 20px;
    height: 30vh;
    width: 30vh;
    border: 5px solid #000;
    background: conic-gradient(red, yellow, green, cyan, blue, magenta, red);
    border-radius: 20px;
    padding: 10px;
    animation: swirl 3s linear infinite, moveColors 5s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
  }
  .logo img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: relative;
    z-index: 1; /* Ensure it is above the background */
    filter: none; /* Prevent color changes */
    animation: none; /* Disable animations for the image */
  }

  @keyframes swirl {
    from {
      background-position: 0% 50%;
    }
    to {
      background-position: 100% 50%;
    }
  }
  @keyframes moveColors {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
</style>