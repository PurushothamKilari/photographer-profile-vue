<template>
    <!-- This component does not render anything visible -->
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    document.title = 'Niharika Visions - Commercial Photography in Ongole';
  
    const setMeta = (name, content) => {
      let element = document.head.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
  
    setMeta('description', 'Niharika Visions in Ongole is a leading business in commercial photography. We specialize in outdoor photography, wedding photography, video shooting services, and more. Find our address, contact number, reviews, and photos.');
    setMeta('keywords', 'Niharika Visions, commercial photographers, wedding photographers, outdoor photographers, video shooting services, photo studios, wedding planners, Ongole photography');
    setMeta('author', 'Niharika Visions');
  
    // Set Open Graph meta
    setMeta('og:title', 'Niharika Visions - Commercial Photography in Ongole');
    setMeta('og:description', 'Discover Niharika Visions, leading photographers in Ongole specializing in commercial, wedding, and outdoor photography.');
  
    // Set Twitter Card meta
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', 'Niharika Visions - Commercial Photography in Ongole');
    setMeta('twitter:description', 'Discover Niharika Visions, leading photographers in Ongole specializing in commercial, wedding, and outdoor photography.');
    setMeta('twitter:image', 'https://www.youtube.com/@niharikaphotography');
  });
  </script>
  