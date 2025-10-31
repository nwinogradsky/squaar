<template>
  <div
      style="
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
        transition: opacity 0.3s ease;
      "
  >
    <v-img :src="logo" width="200" />
  </div>
  <div
      style="
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translateX(-50%);
        z-index: 10;
        transition: opacity 0.3s ease;
      "
  >
    <SpeechBubble text="Salut ! Je te trouve un partenaire dans ton club ?" />
    <v-img :src="personage" width="30vw"/>
  </div>


</template>
<script setup lang="ts">
import logo from '~/assets/logo.png'
import personage from '~/assets/personage-blanc.png'
</script>


