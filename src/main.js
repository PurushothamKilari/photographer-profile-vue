// import { createApp } from 'vue'

// import App from './App.vue'

// createApp(App).mount('#app')
import { createApp } from 'vue'
// import Vue from 'vue';
//import { createMetaManager } from 'vue-meta' 
import App from './App.vue'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './router'
import VueLazyload from 'vue-lazyload';

// Vue.use(VueLazyload);

const app = createApp(App).use(router)

// Create and use the meta manager
//app.use(createMetaManager())
app.use(VueLazyload)
app.mount('#app')
AOS.init();