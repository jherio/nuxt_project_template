<template>
  <div>
    <h1 ref="title" class="text-2xl font-bold mb-4">
      {{ $t('welcomeMessage') }}
    </h1>
    <p class="mb-4">{{ $t('description') }}</p>
    <ReusableButton @click="incrementCounter">
      {{ $t('clickMe') }} ({{ counter }})
    </ReusableButton>
    <div v-if="userStore.loading">Loading users...</div>
    <div v-else-if="userStore.error">{{ userStore.error }}</div>
    <ul v-else>
      <li
        v-for="user in userStore.users"
        :key="user.id"
        @click="selectUser(user.id)"
      >
        {{ user.name }}
      </li>
    </ul>
    <div v-if="userStore.currentUser" class="mt-4">
      <h2 class="text-xl font-bold">Selected User:</h2>
      <p>Name: {{ userStore.currentUser.name }}</p>
      <p>Email: {{ userStore.currentUser.email }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCounterStore } from '~/store/counter'
import { useUserStore } from '~/store/user'
import { gsap } from 'gsap'
import { useHead } from '#imports'
import ReusableButton from '~/components/atoms/ReusableButton.vue'

const { t } = useI18n()
const counterStore = useCounterStore()
const userStore = useUserStore()

const title = ref(null)
const counter = ref(0)

const incrementCounter = () => {
  counter.value++
  counterStore.increment()
}

const selectUser = (userId: number) => {
  userStore.setCurrentUser(userId)
}

onMounted(async () => {
  if (title.value) {
    gsap.from(title.value, {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: 'power3.out',
    })
  }
  await userStore.fetchUsers()
})

useHead({
  title: t('welcomeMessage'),
  meta: [{ name: 'description', content: t('description') }],
})
</script>
