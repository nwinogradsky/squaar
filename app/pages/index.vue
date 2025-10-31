<template>
  <div
      style="
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9;
      "
  >
    <v-img :src="logo" width="200" />
  </div>
  <div
      style="
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 10;
      "
      class="mr-4"
  >
    <SpeechBubble text="Hello ! On joue ?" />
    <v-img :src="personage"/>
  </div>
  <div
      style="
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 10;
      "
      class="mb-10 ml-10"
  >
    <v-btn color="white text-red" variant="elevated" size="x-large">
      <div class="text-h5 font-weight-bold">Trouver une partie</div>
    </v-btn>
  </div>


</template>
<script setup lang="ts">
import logo from '~/assets/logo.png'
import personage from '~/assets/personage-blanc.png'
</script>


