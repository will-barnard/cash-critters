<template>
  <div class="body-container">
    <header v-if="$store.state.isBegin && $store.state.activeCritters.length > 0">
      <div class="wrapper">
        <nav>
          <RouterLink to="/critters">Critters</RouterLink>
        </nav>
        <div class="currency" v-if="$store.state.isBegin && $store.state.activeCritters.length > 0">
          <h3>Food: {{ $store.state.currency.food }}</h3>
          <h3>Love: {{ $store.state.currency.love }}</h3>
          <h3>Money: {{ $store.state.currency.money }}</h3>
        </div>
      </div>
    </header>
    
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

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


.body-container {
  height: 100%;
}
header {
  line-height: 1.5;
  height: 15vh;
}

.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999; /* Ensure it is on top of everything */
  background-color: var(--color-background); /* Apply standard background color */
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.currency {
    display: flex;
    flex-direction: row;
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
