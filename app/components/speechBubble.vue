<!-- components/SpeechBubble.vue -->
<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <div class="bubble a-fade" style="animation-delay:.6s">
    <span class="bubble-text">{{ text }}</span>
    <span class="bubble-tail" />
  </div>
</template>

<style scoped>
.bubble{
  position: relative;
  background:#fff;
  border:4px solid #121212;
  border-radius:22px;
  padding:18px 22px;
  max-width: 520px;
  box-shadow: 0 6px 0 #12121222;
}
.bubble-text{ font-weight: 700; font-size: clamp(18px, 2.4vw, 26px); }
.bubble-tail{
  position:absolute; left: 24px; bottom:-22px;
  width:0; height:0;
  border-left: 14px solid #12121200;
  border-right:14px solid #12121200;
  border-top: 22px solid #121212;
}
.bubble-tail::after{
  content:""; position:absolute; left:-10px; top:-22px;
  border-left:10px solid transparent; border-right:10px solid transparent;
  border-top:18px solid #fff;
}
</style>
