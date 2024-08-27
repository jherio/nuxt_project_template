<template>
  <button
    class="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-secondary transition duration-300"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineEmits(['click'])
</script>
