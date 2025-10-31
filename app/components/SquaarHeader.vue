<!-- components/SquaarHeader.vue -->
<template>
  <header class="py-4 px-6">
    <div class="d-flex align-center justify-space-between a-down" style="animation-delay:.05s">
      <div class="d-flex align-center gap-3">
        <img :src="logo" alt="SQUAAR" height="56" class="me-3" />
        <strong class="text-h5">SQUAAR</strong>
      </div>
      <nav class="d-flex align-center ga-4">
        <v-btn variant="text" class="a-right" style="animation-delay:.12s">Groupes</v-btn>
        <v-btn variant="text" class="a-right" style="animation-delay:.16s">Sessions</v-btn>
        <v-btn variant="text" class="a-right" style="animation-delay:.20s">Profils</v-btn>
        <v-btn color="primary" class="ms-2 a-right" style="animation-delay:.24s">Se connecter</v-btn>
      </nav>
    </div>
  </header>
</template>
<script setup lang="ts">
import logo from '~/assets/logo.png'
</script>
