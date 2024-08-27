<template>
  <div class="p-4">
    <h1 ref="title" class="text-2xl font-bold mb-4">
      {{ $t('welcomeMessage') }}
    </h1>
    <p class="mb-4">{{ $t('description') }}</p>
    <ReusableButton @click="incrementCounter">
      {{ $t('clickMe') }} ({{ counter }})
    </ReusableButton>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCounterStore } from '~/store/counter'
import { gsap } from 'gsap'
import { useHead } from '#imports'
import ReusableButton from '~/components/atoms/ReusableButton.vue'

const { t } = useI18n()
const counterStore = useCounterStore()

const title = ref(null)
const counter = ref(0)

const incrementCounter = () => {
  counter.value++
  counterStore.increment()
}

onMounted(() => {
  if (title.value) {
    gsap.from(title.value, {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: 'power3.out',
    })
  }
})

useHead({
  title: t('welcomeMessage'),
  meta: [{ name: 'description', content: t('description') }],
})
</script>
