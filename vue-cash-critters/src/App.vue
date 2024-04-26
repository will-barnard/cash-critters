<template>
  <header v-if="$store.state.isBegin">
    <div class="wrapper">
      <nav>
        <RouterLink to="/critters">Critters</RouterLink>
      </nav>
    </div>
  </header>
  <div class="currency" v-if="$store.state.isBegin">
    <h3>Food: {{ $store.state.currency.food }}</h3>
    <h3>Love: {{ $store.state.currency.love }}</h3>
    <h3>Money: {{ $store.state.currency.money }}</h3>
  </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
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

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
