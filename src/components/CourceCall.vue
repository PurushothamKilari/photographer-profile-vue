<template>
    <section class="course" id="course_call">
      <h1 class="future_title">Services We Offer</h1>
      <div class="row">
        <div class="course-col" data-aos="fade-right" data-aos-duration="1000">
          <h2>PHOTOGRAPHY</h2>
          <p>
            PHOTOGRAPHY Candid photography (focusing on natural candid shots of
            the bride-groom and main family) & traditional photography (coverage
            of the entire event).
          </p>
        </div>
  
        <div class="course-col" data-aos="fade-right" data-aos-duration="1000">
          <h2>VIDEOGRAPHY</h2>
          <p>
            Cinematography (artistic style videography with focus on the
            bride-groom and main family and their priceless candid moments) &
            traditional videography (coverage of the entire event).
          </p>
        </div>
  
        <div class="course-col" data-aos="fade-left" data-aos-duration="1000">
          <h2>PHOTOBOOKS & ALBUMS</h2>
          <p>
            Handcrafted custom designed wedding photo books and albums to cater
            to every taste and preference.
          </p>
        </div>
  
        <div class="course-col" data-aos="fade-left" data-aos-duration="1000">
          <h2>POST-PRODUCTION</h2>
          <p>
            Editing services in cinematic teaser and short film & traditional
            video.
          </p>
        </div>
      </div>
    </section>

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

  <Gallery/>
  </template>
  
  <script setup>
import Gallery from './Gallery.vue';

  
  </script>
  
  <style scoped>

.lightbox {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  position: fixed;
  visibility: hidden;
  background: rgba(0, 0, 0, 0.65);
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

.wrapper header {
  justify-content: space-between;
}
 /* Course */

.course {
  width: 80%;
  margin: auto;
  text-align: center;
  padding-top: 100px;

}

h1 {
  font-size: 36px;
  font-weight: 300;
}

p {
  color: #777;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  padding: 10px;
}

.row {
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
}

.course-col {
  flex-basis: 31%;
  background: #f5dba4;
  border-radius: 10px;
  margin-bottom: 5%;
  padding: 20px 12px;
  box-sizing: border-box;
  transition: 0.5s;
  margin-left: 18px;
}

h3 {
  text-align: center;
  font-weight: 600;
  margin: 10px 0px;
}

.course-col:hover {
  box-shadow: 10px 10px 24px 0px rgba(0, 0, 0, 0.4);
}

@media (max-width: 1000px) {
  .row {
    flex-direction: column;
  }
}

  .future_title {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
  