<!-- components/AnimatedIn.vue -->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  as?: string
  animation?: 'down'|'left'|'right'|'fade'
  delay?: number
  index?: number  // pour le stagger manuel
}>(), { as: 'div', animation: 'fade', delay: 0, index: 1 })

const tag = computed(() => props.as)
const animClass = computed(() => {
  return {
    'a-down':  props.animation === 'down',
    'a-left':  props.animation === 'left',
    'a-right': props.animation === 'right',
    'a-fade':  props.animation === 'fade'
  }
})
const style = computed(() => `animation-delay:${props.delay + (props.index-1)*0.06}s`)
</script>

<template>
  <component :is="tag" :class="animClass" :style="style">
    <slot />
  </component>
</template>
