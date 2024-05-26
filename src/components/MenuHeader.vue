<template>
    <section class="menu" id="menu">
      <div class="section__records menu__container">
        <ul class="menu__banner">
          <li data-aos="zoom-out">
            <span><i class="fa fa-video-camera"></i></span>
            <h4>150+</h4>
            <p>Projects Completed</p>
          </li>
          <li data-aos="zoom-out">
            <span><i class="fa fa-quote-right"></i></span>
            <h4>100%</h4>
            <p>Customer Satisfied</p>
          </li>
          <li data-aos="zoom-out">
            <span><i class="ri-function-line"></i></span>
            <h4>20 Years</h4>
            <p>Experience In Photography</p>
          </li>
        </ul>
      </div>
    </section>

    <div class="section__container popular__container">
    <h3 class="section__header">Features</h3>
    <h2 class="section__header">Photography</h2>
    <div class="popular__grid" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500"
    data-aos-duration="1500">
      <div class="popular__card" >
        <img src="./../images/img-1-1.jpg" class="lazy" alt="popular" />
        <h4>Baby Photography</h4>
      </div>
      <div class="popular__card">
        <img src="./../images/img-11.jpg" class="lazy" alt="popular" />
        <h4>Wedding photography</h4>
      </div>
      <div class="popular__card">
        <img src="./../images/img-15.jpg" class="lazy" alt="popular" />
        <h4>Candid photography</h4>
      </div>
      <div class="popular__card">
        <img src="./../images/img-16.jpg" class="lazy" alt="popular" />
        <h4>Event Photography</h4>
      </div>
    </div>
  </div>

  <CourceCall/>

  </template>
  
  <script setup>
import CourceCall from './CourceCall.vue';
  // Optional: Import AOS for animation if not globally initialized

  </script>
  
  <style scoped>
  
.menu__banner {
  list-style: none;
  padding: 2rem 2rem;
  display: grid;
  gap: 2rem;
  text-align: center;
  background-color: #0f1a2c;
  border-radius: 18px;
}

.popular__grid {
    margin-top: 2rem;
    display: grid;
    gap: 1rem;
}
.popular__card {
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
}
.popular__card:hover {
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
}
.popular__card img {
    margin-bottom: 1rem;
    border-radius: 10px;
    max-width: 100%;
    max-height: 100%;
}
.popular__card h4 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-dark);
}
.popular__card>div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
}
@media (width > 540px) {
    .popular__grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (width > 768px) {
    .popular__grid {
        grid-template-columns: repeat(4, 1fr);
    }

}

.menu__banner span {
  font-size: 3.5rem;
  color: #f6ac0f;
}

.menu__banner h4 {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
}

.menu__banner p {
  color: #acb4c7;
}

@media (width > 480px) {
  .menu__banner {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (width > 768px) {
  .menu__banner {
    grid-template-columns: repeat(3, 1fr);
  }
}


  </style>
  