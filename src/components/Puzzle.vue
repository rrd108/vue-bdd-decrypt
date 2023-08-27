<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { shuffleText } from '../composables/shuffle'

  import text from '../assets/text.ts'

  const secret = text.toLowerCase()
  const textShuffled = shuffleText(secret)
  const solution = ref(textShuffled)

  const spannedSolution = computed(() => solution.value.split(''))

  const oldChar = ref('')
  const newChar = ref('')
  const clickedPosition = ref(-1)

  const setValuesForChange = (i: number) => {
    clickedPosition.value = i
    oldChar.value = textShuffled[i]
  }

  const isCorrectGuess = () => newChar.value == secret[clickedPosition.value]

  const getCharPositions = (oldChar: string) => {
    const positions = []
    for (let i = 0; i < textShuffled.length; i++) {
      if (textShuffled[i] == oldChar) {
        positions.push(i)
      }
    }
    return positions
  }

  const changeChar = () => {
    if (isCorrectGuess()) {
      const positions = getCharPositions(oldChar.value)
      positions.forEach(
        position =>
          (solution.value = solution.value.substring(0, position) + newChar.value + solution.value.substring(position + 1))
      )
      clickedPosition.value = -1
    }
    oldChar.value = ''
    newChar.value = ''
  }
</script>

<template>
  <h1>Vue BDD DeCrypt Game</h1>
  <div v-if="clickedPosition != -1">Helytelen tipp!</div>
  <div v-if="oldChar">
    <h6>Cseréljük a "{{ oldChar }}" karaktert erre:</h6>
    <input type="text" v-model="newChar" @input="changeChar" />
  </div>
  <h2>
    <span v-for="(char, i) in spannedSolution" :key="i" @click="setValuesForChange(i)" :class="{ good: char == secret[i] }">
      {{ char }}
    </span>
  </h2>
</template>

<style scoped>
  h2 {
    font-family: 'Courier New', Courier, monospace;
  }
  span {
    cursor: pointer;
    background-color: #ee9;
    color: #aaa;
  }
  .good {
    background: none;
    color: #eee;
  }
  div {
    position: absolute;
    top: 0;
    background-color: rgb(41, 0, 49);
    padding: 1em;
    font-size: 2rem;
  }
  h6 {
    margin: 0;
  }
  input {
    display: inline;
    width: 2em;
    text-align: center;
    font-size: 2rem;
  }
</style>
