<template>
    <div>
      <h2 class="section__header">
        Read what our customers love about us
      </h2>
  
      <div class="review" ref="reviewContainer"></div>
  
      <section class="map top">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3844.4926276470774!2d80.0304597!3d15.5117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b01a0dd3ded51%3A0xd64e6440b5ea2a1d!2sNiharika%20Visions!5e0!3m2!1sen!2sin!4v1716040259608!5m2!1sen!2sin"
          width="400"
          height="300"
          style="border: 0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </section>
    </div>
    <Footer/>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import Footer from './Footer.vue';
  
  const reviewContainer = ref(null);
  
  onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.taggbox.com/embed-lite.min.js';
    script.onload = () => {
      if (window.tgbInit) {
        window.tgbInit({
          "widgetId": "155345",
          "container": reviewContainer.value
        });
      }
    };
    document.body.appendChild(script);
  });
  </script>
  
  <style scoped>
  .section__header {
    text-transform: capitalize;
  }
  
  .review {
    width: 100%;
    height: 400px; /* Adjust based on your layout needs */
    overflow-y: hidden;
  }
  
  .map {
    margin-top: 20px;
  }
  </style>
  