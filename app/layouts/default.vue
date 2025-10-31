<template>
  <v-app>
    <v-img src="~/public/background.png" cover :height="mdAndUp ? '100vh' : undefined">
      <v-sheet
        class="fill-height text-center align-content-center pa-2"
        color="rgba(var(--v-theme-primary), 0.7)"
      >
        <v-container :class="xs ? 'px-2 py-10 mb-10' : undefined">
          <slot />
        </v-container>
      </v-sheet>
    </v-img>
    <!--      <Footer />-->
  </v-app>
</template>
<script setup lang="ts">
import { useDisplay } from 'vuetify'
// import Footer from '../components/Footer.vue'
const { xs, mdAndUp } = useDisplay()
</script>
