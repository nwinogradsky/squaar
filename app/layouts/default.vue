<template>
  <v-app>
    <v-img :src="background" cover height="100vh">
      <v-sheet
        class="fill-height text-center align-content-center pa-2"
        color="transparent"
      >
        <v-container>
          <slot />
        </v-container>
      </v-sheet>
    </v-img>
  </v-app>
</template>

<script setup lang="ts">
import background from '~/assets/background.png'
</script>
