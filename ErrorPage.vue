<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="p-8 bg-white shadow-lg rounded-lg">
      <h1 class="text-4xl font-bold text-red-600 mb-4">
        {{ error.statusCode }}
      </h1>
      <p class="text-xl mb-4">{{ error.message }}</p>
      <button
        @click="handleError"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {{ $t('goHome') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useError, clearError } from '#app'

defineOptions({
  name: 'ErrorPage',
})

const error = useError()

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<i18n lang="json">
{
  "en": {
    "goHome": "Go back home"
  },
  "fr": {
    "goHome": "Retourner à l'accueil"
  }
}
</i18n>
