<!-- components/SquaarHero.vue -->
<script setup lang="ts">
const emit = defineEmits<{ (e:'primary'):void }>()
import AnimatedIn from './AnimatedIn.vue'
</script>

<template>
  <section class="hero-court px-6 py-8 position-relative">
    <div class="hero-floor-line" />

    <v-container fluid>
      <v-row class="align-center">
        <!-- Col gauche : Texte + CTA -->
        <v-col md="6" cols="12">
          <div class="mt-6">
            <SpeechBubble text="Salut ! Je te trouve un partenaire dans ton club ?" />
          </div>
        </v-col>

        <v-col md="6" cols="12" class="text-center">
          <AnimatedIn animation="left" :delay="0.18">
            <img
                src="../assets/personage-blanc.png"
                alt="Joueuse SQUAAR"
                style="max-width: 520px; width: 82%; filter: drop-shadow(0 10px 18px rgba(0,0,0,.18));"
            />
          </AnimatedIn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
