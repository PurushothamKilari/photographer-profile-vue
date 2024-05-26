<template>
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
  </template>
  
  <script setup>
  import SocialIcons from './SocialIcons.vue';


  </script>
  
  <style scoped>

.gallery .images {
  gap: 15px;
  max-width: 85%;
  margin: 40px 0;
  columns: 5 310px;
  list-style: none;
}

  .images {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }
  .img {
    margin: 5px;
    width: calc(33.333% - 10px); /* 3 images per row with margin */
  }
  .img img {
    width: 100%;
    height: auto;
    display: block;
  }
  .gallery__btn {
    text-align: center;
    margin-top: 20px;
  }
  .btn {
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
  </style>
  