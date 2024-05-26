<script setup>
import { ref } from 'vue';
import RateUsPopup from './RateUsPopup.vue';
import HeaderComp from './HeaderComp.vue';

defineProps({
  msg: String,
})

const count = ref(0)

const rateUsPopup = ref(true);

const isPopupVisible = ref(false)

function togglePopup() {
  isPopupVisible.value = !isPopupVisible.value;
}
</script>

<template>
  <HeaderComp/>

  <div id="rate">
    <button @click="togglePopup">Rate Us</button>
    <RateUsPopup v-if="isPopupVisible" @close="isPopupVisible = false" show=rateUsPopup />
  </div>

</template>

<style scoped>

</style>
