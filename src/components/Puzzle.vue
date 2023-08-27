<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { shuffleText } from '../composables/shuffle'

  import text from '../assets/text.ts'

  const secret = text.toLowerCase()
  const textShuffled = shuffleText(secret)
  const solution = ref(textShuffled)

  const spannedSolution = computed(() => solution.value.split(''))
</script>

<template>
  <h1>Vue BDD DeCrypt Game</h1>
  <h2>
    <span v-for="(char, i) in spannedSolution" :key="i">
      {{ char }}
    </span>
  </h2>
</template>

<style scoped>
  h2 {
    font-family: 'Courier New', Courier, monospace;
  }
</style>
