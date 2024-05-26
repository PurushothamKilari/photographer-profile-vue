<template>
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>Niharika<span>Visions</span></h3>
        <p class="footer-links">
        <a><router-link to="/">Home</router-link></a>|
        <a><router-link to="/about">About</router-link></a>|
        <a><router-link to="/feature">Features</router-link></a>|
        <a><router-link to="/services">Services</router-link></a>|
        <a><router-link to="/gallery">Gallery</router-link></a>|
        <a><router-link to="/contact">Contact</router-link></a>
        </p>
        <p class="footer-company-name">
          Copyright © 2024 <strong>Niharika Visions</strong> All rights reserved | Designed by CSEdge
        </p>
      </div>
      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>
            <span>Anjaiah Rd, Pandaripuram, Ongole, </span> Andhra Pradesh 523002
          </p>
        </div>
        <div>
          <i class="fa fa-phone"></i>
          <a href="tel:919160227979" style="text-decoration: none; color: #f5f5f5">09160227979</a>
        </div>
        <div>
          <i class="fa fa-whatsapp"></i>
          <a href="https://wa.me/919160227979?text=Query%20from%20website" style="text-decoration: none; color: #f5f5f5">+91 9160227979</a>
        </div>
      </div>
      <div class="footer-right">
        <p class="footer-company-about">
          <span>About the company</span>
          <strong>Niharika Visions</strong> in Ongole is one of the leading businesses in the Commercial Photographers. Also known for Photographers, Outdoor Photographers, Wedding Photographers, Video Shooting Services, Photo Studios, Wedding Planners, Commercial Photographers, Model Photographers and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Niharika Visions, Ongole.
        </p>
        <div class="footer-icons">
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-youtube"></i></a>
          <button @click="togglePopup">Rate Us</button>
          <RateUsPopup v-if="isPopupVisible" @close="isPopupVisible = false" show=rateUsPopup />
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import RateUsPopup from './RateUsPopup.vue';
  const count = ref(0)
  
  const rateUsPopup = ref(true);
  
  const isPopupVisible = ref(false)
  
  function togglePopup() {
    isPopupVisible.value = !isPopupVisible.value;
  }
  </script>
  <style scoped>
footer {
    position: fixed;
    bottom: 0;
}

@media (max-height:800px) {
    footer {
        position: static;
    }
    header {
        padding-top: 40px;
    }
}

.footer-distributed {
    background-color: #161616;
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font: bold 16px sans-serif;
    padding: 50px 50px 60px 50px;
    margin-top: 80px;
}

.footer-distributed .footer-left, .footer-distributed .footer-center, .footer-distributed .footer-right {
    display: inline-block;
    vertical-align: top;
}

/* Footer  */

.footer-distributed .footer-left {
    width: 30%;
}

.footer-distributed h3 {
    color: #ffffff;
    font: normal 36px 'Cookie', cursive;
    margin: 0;
    font-family: "Oswald","Playfair Display","Poppins",  serif, sans-serif;
}


.footer-distributed h3 span {
    color: #e0ac1c;
    font-family: "Oswald","Playfair Display","Poppins",  serif, sans-serif;
}

/* Footer links */

.footer-distributed .footer-links {
    color: #ffffff;
    margin: 20px 0 12px;
}

.footer-distributed .footer-links a {
    display: inline-block;
    line-height: 1.8;
    text-decoration: none;
    color: inherit;
}

.footer-distributed .footer-company-name {
    color: #8f9296;
    font-size: 14px;
    font-weight: normal;
    margin: 0;
}

/* Footer Center */

.footer-distributed .footer-center {
    width: 35%;
}

.footer-distributed .footer-center i {
    background-color: #33383b;
    color: #ffffff;
    font-size: 25px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    text-align: center;
    line-height: 42px;
    margin: 10px 15px;
    vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope {
    font-size: 17px;
    line-height: 38px;
}

.footer-distributed .footer-center p {
    display: inline-block;
    color: #ffffff;
    vertical-align: middle;
    margin: 0;
}

.footer-distributed .footer-center p span {
    display: block;
    font-weight: normal;
    font-size: 14px;
    line-height: 2;
}

.footer-distributed .footer-center p a {
    color: #e0ac1c;
    text-decoration: none;
    ;
}

/* Footer Right */

.footer-distributed .footer-right {
    width: 30%;
}

.footer-distributed .footer-company-about {
    line-height: 20px;
    color: #92999f;
    font-size: 13px;
    font-weight: normal;
    margin: 0;
}

.footer-distributed .footer-company-about span {
    display: block;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
}

.footer-distributed .footer-icons {
    margin-top: 25px;
}

.footer-distributed .footer-icons a {
    display: inline-block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    background-color: #33383b;
    border-radius: 2px;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;
    margin-right: 3px;
    margin-bottom: 5px;
}

.footer-distributed .footer-icons a:hover {
    background-color: #3F71EA;
}

.footer-links a:hover {
    color: #3F71EA;
}

@media (max-width: 880px) {
    .footer-distributed .footer-left, .footer-distributed .footer-center, .footer-distributed .footer-right {
        display: block;
        width: 100%;
        margin-bottom: 40px;
        text-align: center;
    }
    .footer-distributed .footer-center i {
        margin-left: 0;
    }
}       
        

        
  </style>
  