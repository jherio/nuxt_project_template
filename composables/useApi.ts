import { UseFetchOptions } from 'nuxt/app'

interface User {
  id: number
  name: string
  email: string
  // Add other properties as needed
}

export const useApi = () => {
  const config = useRuntimeConfig()

  const getUsers = (options: UseFetchOptions<User[]> = {}) => {
    return useFetch<User[]>('https://jsonplaceholder.typicode.com/users', {
      baseURL: config.public.apiBase,
      ...options,
    })
  }

  return {
    getUsers,
  }
}
