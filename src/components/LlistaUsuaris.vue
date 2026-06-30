<template>
  <div class="bg-gray-700 text-white p-4 rounded">
    <h2 class="text-xl font-bold mb-4">Usuaris registrats</h2>

    <ul v-if="store.users.length > 0" class="space-y-2">
      <li 
        v-for="(u, index) in store.users" 
        :key="index"
        class="bg-gray-800 p-3 rounded"
      >
        <strong>{{ u.nom }} {{ u.cognoms }}</strong><br>
        {{ u.edat }} anys — {{ u.provincia }}
      </li>
    </ul>

    <p v-else class="text-gray-300">Encara no hi ha usuaris registrats.</p>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'
const store = useUserStore()
</script>
