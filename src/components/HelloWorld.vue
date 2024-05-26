<script setup>
import { ref } from 'vue';
import RateUsPopup from './RateUsPopup.vue';
import HeaderComp from './HeaderComp.vue';

defineProps({
  msg: String,
})

const count = ref(0)

// const rateUsPopup = ref(null);

const isPopupVisible = ref(false)

function togglePopup() {
  isPopupVisible.value = !isPopupVisible.value;
}
</script>

<template>
  <HeaderComp/>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <div id="rate">
    <button @click="togglePopup">Rate Us</button>
    <RateUsPopup v-if="isPopupVisible" @close="isPopupVisible = false" show=true />
  </div>

</template>

<style scoped>

</style>
