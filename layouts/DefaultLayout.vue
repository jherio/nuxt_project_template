<template>
  <div>
    <header class="bg-gray-800 text-white p-4">
      <h1 class="text-2xl font-bold">{{ $t('appTitle') }}</h1>
    </header>
    <main class="container mx-auto p-4">
      <slot />
    </main>
    <footer class="bg-gray-800 text-white p-4 mt-8">
      <p>{{ $t('footerText') }}</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
// No need to import useI18n or define t if we're not using it in the script
</script>
