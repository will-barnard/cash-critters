<template>
  <div class="body-container">
    <header v-if="$store.state.isBegin && $store.state.activeCritters.length > 0">
      <div class="wrapper">
        <nav>
          <h3 @click="$router.push({name: 'store'})">General Store</h3>
        </nav>
        <div class="spacer"></div>
        <div class="currency" v-if="$store.state.isBegin && $store.state.activeCritters.length > 0">
          <h3>Food:&nbsp;{{ $store.state.currency.food }}</h3>
          <h3>Love:&nbsp;{{ $store.state.currency.love }}</h3>
          <h3>Money:&nbsp;{{ $store.state.currency.money }}</h3>
        </div>
      </div>
    </header>
    <div class="adjust-spacer"></div>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'

</script>
<script>
export default {
  created() {
    if (!this.$store.state.isBegin) {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style scoped>
  .adjust-spacer {
    height: 2vh; /* Adjust this value to match the height of your header */
  }

  .body-container {
    height: 100%;
  }
  header {
    line-height: 1.5;
    height: 13vh;
  }
  .spacer {
    flex-grow: 1;
  }

  .wrapper {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999; /* Ensure it is on top of everything */
    background-color: var(--color-background); /* Apply standard background color */
    font-size: .6em;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  nav h3 {
    display: inline-block;
    border: 1px solid;
    margin: 5px;
    padding: 5px;
    border-radius: 10px;
  }
  .currency {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .currency h3 {
    display: inline-block;
    border: 1px solid;
    margin: 5px;
    padding: 5px;
    border-radius: 10px;
  }
  .currency:hover {
    cursor: default;
  }
</style>
