<template>
  <header class="header" id="home">
    <nav data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <div class="nav__bar">
        <div class="nav__logo">
          <h3 style="color: aliceblue">Niharika <span style="color: #f6ac0f">Visions</span></h3>
          <!-- Uncomment if you decide to use an image for the logo -->
          <!-- <img src="assets/logo.png" class="lazy" alt="logo" /> -->
        </div>
        <div class="nav__menu__btn" id="menu-btn" @click="toggleMenu">
          <i class="ri-menu-line"></i>
        </div>
      </div>
      <ul class="nav__links">
  <li><a><router-link to="/">Home</router-link></a></li>
  <li><a><router-link to="/about">About</router-link></a></li>
  <li><a><router-link to="/feature">Features</router-link></a></li>
  <li><a><router-link to="/services">Services</router-link></a></li>
  <li><a><router-link to="/gallery">Gallery</router-link></a></li>
  <li><a><router-link to="/contact">Contact</router-link></a></li>
</ul>
    </nav>
    <div class="section__container header__container">
      <div class="header__content" data-aos="fade-left">
        <h1>
          "Every Smile,<br />Every Tear,<br />Every Moment"
        </h1>
      </div>
    </div>
  </header>

  <MenuHeader/>
</template>

<script setup>
import { ref } from 'vue'
import MenuHeader from './MenuHeader.vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
.header {
  /* Styles specific to your header */
}

.nav__links a {
  text-decoration: none;
  color: inherit;  /* Preserves text color from parent element */
  cursor: pointer; /* Shows a pointer cursor on hover */
}

.nav__links li {
  padding: 10px;
}

/* If you are styling router-link directly, you may need to target the class they generate */
.router-link-active {
  font-weight: bold; /* Example style for active state */
}
.nav__bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav__logo h3 {
  color: aliceblue; /* Already inline styled */
}
.nav__menu__btn i {
  cursor: pointer;
}
.nav__links {
  list-style: none;
  padding: 0;
  display: flex; /* Adjust this to handle responsiveness or mobile view */
}
.nav__links li {
  padding: 10px;
}
.nav__links a {
  text-decoration: none;
  color: inherit; /* Ensure links use the color of the parent text element */
}
.section__container {
  /* Additional styling */
}
</style>
