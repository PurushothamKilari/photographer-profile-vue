<template>
    <div class="icons" id="icon-container">
      <ul>
        <li class="facebook"><a href="https://www.facebook.com"><i class="fa fa-facebook-square"></i></a></li>
        <li class="twitter"><a href="https://www.twitter.com"><i class="fa fa-twitter"></i></a></li>
        <li class="linkedin"><a href="https://www.linkedin.com"><i class="fa fa-linkedin"></i></a></li>
        <li class="instagram"><a href="https://www.instagram.com"><i class="fa fa-instagram"></i></a></li>
        <li class="youtube"><a href="https://www.youtube.com"><i class="fa fa-youtube-play"></i></a></li>
        <li class="whatsapp"><a href="https://wa.me/"><i class="fa fa-whatsapp"></i></a></li>
      </ul>
    </div>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  

.icons {
  opacity: 1;
  transition: opacity 0.3s ease;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  position: fixed;
  z-index: 100;
  
}

.icons.visible {
  opacity: 1;
}

.icons ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.icons ul li {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  margin: 5px 0;
  color: #fff;
}

.icons ul li a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: #fff;
  text-decoration: none;
}

.facebook {
  background-color: #3b5998;
}

.linkedin {
  background-color: #007bb5;
}

.youtube {
  background-color: #ff0000;
}

.twitter {
  background-color: #55acee;
}

.instagram {
  background-color: #ff4800;
}
  </style>
  