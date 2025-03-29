import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from './store'
import axios from 'axios'

// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

// Add all solid icons to the library
library.add(fas)

axios.defaults.headers = {
    'Access-Control-Allow-Origin': '*'
}

const app = createApp(App);
const store = createStore();

app.use(router);
app.use(store);

// Register Font Awesome component globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')