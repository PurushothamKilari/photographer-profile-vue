import { createRouter, createWebHistory } from 'vue-router'
import Home from './../components/HeaderComp.vue'
import About from './../components/About.vue'
// import Features from './../components/Features.vue'
// import Services from './../components/Services.vue'
// import Gallery from './../components/Gallery.vue'
// import Contact from './../components/Contact.vue'



const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  // { path: '/feature', component: Features },
  // { path: '/services', component: Services },
  // { path: '/gallery', component: Gallery },
  // { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
