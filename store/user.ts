import { defineStore } from 'pinia'
import { useApi } from '~/composables/useApi'

interface User {
  id: number
  name: string
  email: string
}

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as User[],
    currentUser: null as User | null,
    loading: false,
    error: null as string | null,
  }),
  getters: {
    getUserById: (state) => (id: number) =>
      state.users.find((user) => user.id === id),
  },
  actions: {
    async fetchUsers() {
      const { getUsers } = useApi()
      this.loading = true
      this.error = null
      try {
        const { data } = await getUsers()
        if (data.value) {
          this.users = data.value
        }
      } catch (error) {
        this.error = 'Failed to fetch users'
        console.error('Error fetching users:', error)
      } finally {
        this.loading = false
      }
    },
    setCurrentUser(userId: number) {
      const user = this.getUserById(userId)
      if (user) {
        this.currentUser = user
      } else {
        this.error = 'User not found'
      }
    },
  },
})
