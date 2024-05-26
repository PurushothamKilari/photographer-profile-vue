<template>
    <section class="section__container about__container" id="about">
      <div class="about__image" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="1500">
        <img src="/src/assets/a.jpeg" alt="about" />
      </div>
      <div class="about__content" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">
        <p class="section__subheader">ABOUT US</p>
        <h2 class="section__header">WE CAPTURE THE MOMENTS!</h2>
        <p class="section__description">
          Welcome to Niharika Visions. We specialize in capturing precious moments with beauty and creativity, offering services in wedding
          photography, pre-wedding shoots, couple portraits, and event photography.
        </p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'About'
  }
  </script>
  
  <style scoped>
  .section__container {
    /* Styles specific to this component */
  }
  .about__image img {
    width: 100%;
    height: auto;
  }
  </style>
  