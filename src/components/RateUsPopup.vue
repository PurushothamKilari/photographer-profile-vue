<template>
  <div v-if="isVisible" class="popup" @click.self="closePopup">
    <div class="popup-content" @click.stop>
      <span class="close-btn" @click="closePopup">&times;</span>
      <h2>Rate Us</h2>
      <p>We would love to hear your feedback!</p>
      <div class="star-rating">
        <span v-for="star in 5" :key="star" class="star" @click="setRating(star)">&#9733;</span>
      </div>
      <textarea v-model="feedback" placeholder="Leave your feedback here..." rows="4"></textarea>
      <button @click="submitRating">Submit</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, onMounted } from 'vue'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  show: Boolean
})

const emit = defineEmits(['update:show'])

const isVisible = ref(props.show)
const rating = ref(0)
const feedback = ref('')

watchEffect(() => {
  isVisible.value = props.show
})

const closePopup = () => {
  isVisible.value = false
  emit('update:show', false)
}

const setRating = (star) => {
  rating.value = star
}

const submitRating = () => {
  console.log('Rating:', rating.value)
  console.log('Feedback:', feedback.value)
  window.location.replace("https://maps.app.goo.gl/deVe7WahFw2gN6a2A") // Redirect on submit
  closePopup()
}

// Open the popup automatically after a delay of 90 seconds (90000 milliseconds)
onMounted(() => {
  setTimeout(() => {
    if (!props.show) {
      isVisible.value = true
    }
  }, 90000)
})
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  position: relative;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
.star {
  cursor: pointer;
  font-size: 20px;
}
.star:hover {
  color: gold;
}
</style>


<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.star-rating {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}
.star {
  font-size: 24px;
  cursor: pointer;
  color: #ddd;
  transition: color 0.3s;
}


.star.selected {
  color: #f39c12;
}

.popup-content {
  background: rgb(209, 223, 84);
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.star {
  cursor: pointer;
  font-size: 20px;
}

.star:hover {
  color: gold;
}
</style>
