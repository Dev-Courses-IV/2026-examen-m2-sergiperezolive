import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
  const users = ref([])
  const totalUsers = computed(() => users.value.length)
  function addUser(user) {
    users.value.push(user)
  }

  return { users, totalUsers, addUser }
})