<template>

<h2 id="gallery" class="future_title">Our Recent Photos</h2>
  <div class="lightbox">
    <div class="wrapper">
      <header>
        <div class="details">
          <i class="uil uil-camera"></i>
          <span>Image Preview</span>
        </div>
        <div class="buttons"><i class="close-icon uil uil-times"></i></div>
      </header>
      <div class="preview-img">
        <div class="img"><img src="" class="lazy" alt="preview-img" /></div>
      </div>
    </div>
  </div>
    <section class="gallery" data-aos="fade-up" data-aos-duration="3000">
        <ul class="images">
      <li class="img" data-aos="fade-right" data-aos-duration="1000">
        <img src="./../images/img-4.jpg" class="lazy" alt="img" loading="lazy" />
      </li>
      <li class="img" data-aos="fade-up" data-aos-duration="1000">
        <img src="./../images/img-5.jpg" class="lazy" alt="img" loading="lazy" />
      </li>
      <li class="img" data-aos="zoom-in" data-aos-duration="1000">
        <img src="./../images/img-7.jpg" class="lazy" alt="img" loading="lazy" />
      </li>
      <li class="img" data-aos="zoom-in" data-aos-duration="1000">
        <img src="./../images/img-1.jpg" class="lazy" alt="img" loading="lazy" />
      </li>
      <li class="img">
        <img src="./../images/img-15.jpg" class="lazy" alt="img" loading="lazy" />
      </li>
      <li class="img" data-aos="fade-up" data-aos-duration="1000">
        <img src="./../images/img-2.jpg" class="lazy" alt="img" loading="lazy" />
      </li>
    </ul>
      <div class="gallery__btn">
        <router-link to="/gallery" class="btn">VIEW GALLERY</router-link>
      </div>
    </section>
    <SocialIcons/>
    <MediaShowcase />
  </template>
  
  <script setup>
  import SocialIcons from './SocialIcons.vue';
  import MediaShowcase from './MediaShowcase.vue';


  </script>
  
  <style scoped>
.gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.gallery .images {
  gap: 15px;
  max-width: 85%;
  margin: 40px 0;
  columns: 5 310px;
  list-style: none;
}
.gallery .images .img {
  display: flex;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  margin-bottom: 14px;
  border-radius: 4px;
}
.gallery .images img {
  width: 100%;
  transition: transform 0.2s ease;
}

.gallery .images .img:hover img {
  transform: scale(1.1);
}

/* Image lightbox styling */
.lightbox {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  position: fixed;
  visibility: hidden;
  background: rgba(0,0,0,0.65);
}
.lightbox.show {
  visibility: visible;
}
.lightbox .wrapper {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 100%;
  padding: 20px;
  max-width: 850px;
  background: #fff;
  border-radius: 6px;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -50%) scale(0.9);
  transition: transform 0.1s ease;
}
.lightbox.show .wrapper {
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, -50%) scale(1);
}
.wrapper :where(header, .details) {
  display: flex;
  align-items: center;
}
  </style>
  