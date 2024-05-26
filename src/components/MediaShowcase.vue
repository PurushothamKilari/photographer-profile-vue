<template>
    <section>
      <div class="section__header">Highlights</div>
      <div class="instagram__flex">
        <img v-for="n in 20" :src="`src/images/img-${n % 10 + 1}.jpg`" class="lazy" :alt="`Image ${n % 10 + 1}`" v-lazy-container="{ selector: 'img' }"/>
      </div>
  
      <h2 class="section-header">Event Films</h2>
      <div class="video-container">
        <div class="video-item" v-for="id in videoIds" :key="id">
          <iframe :src="`https://www.youtube.com/embed/${id}`" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </div>
  
      <div class="register__grid">
        <div class="register__content">
          <h4 style="text-transform: capitalize;">Visit Our YouTube channel and watch the Wedding Films</h4>
          <a href="https://www.youtube.com/@niharikaphotography" class="btnn">Click Here</a>
        </div>
      </div>
    </section>
    <CustomerTestimonals></CustomerTestimonals>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import CustomerTestimonals from './CustomerTestimonals.vue';
  
  const videoIds = ref(['VIDEO_ID_1', 'VIDEO_ID_2', 'VIDEO_ID_3']);
  </script>
  
  <style scoped>

  

.register__grid{
  display: grid;
  background-color: var(--text-dark);
  border-radius: 1rem;
}
.register__content {
  margin-bottom: 1rem;
  padding-block: 4rem;
  padding-inline: 1rem;
  text-align: center;
}
.register__content h4 {
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 5rem;
  text-align: center;
  color: var(--white);
}
.btnn {
  padding: 1rem 1.5rem;
  outline: none;
  border: none;
  color: var(--text-dark);
  background-color: white;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;
}

.btnn:hover {
  background-color: rgb(223, 235, 193);
}
.section__p {
  margin-left: 20px;
  text-align: center;
 
  font-size: 1rem;
  color: var(--text-dark);
}

.section__header {
  margin-left: 20px;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 3rem;
  color: var(--text-dark);
  margin-top: 30px;
}

.section__description {
  max-width: 600px;
  margin-bottom: 1rem;
  color: var(--text-light);
}

.instagram__flex {
  display: flex;
  align-items: center;
  gap: 10px;
  animation: scroll 45s linear infinite;
}

.instagram__flex img {
  width: 100%;
  max-width: 250px;
  aspect-ratio: 16/9;
  border-radius: 8px;
  object-fit: cover;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% - 10px));
  }
}

@media (max-width: 768px) {
  .instagram__flex img {
    max-width: 205px;
  }
}

@media (max-width: 480px) {
  .instagram__flex img {
    max-width: 180px;
  }
}


  </style>
  