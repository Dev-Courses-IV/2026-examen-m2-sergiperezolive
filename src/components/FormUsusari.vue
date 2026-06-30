<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'

const store = useUserStore()

const user = ref({
  nom: "",
  cognoms: "",
  edat: "",
  provincia: ""
})

function enviar() {
  store.addUser({ ...user.value })

  user.value = {
    nom: "",
    cognoms: "",
    edat: "",
    provincia: ""
  }
}
</script>

<template>
   
  <form @submit.prevent="enviar" class="space-y-4 bg-gray-700 p-4 rounded grid grid-cols-1 md:grid-cols-2 gap-4">
    <h2 class="text-3xl text-bold text-white">Formulari</h2>
    <p class="text-l text-white">Aquests és el component del formulari</p>
    <input v-model="user.nom" type="text" placeholder="Nom" class="text-black p-2 w-full rounded bg-gray-200" />
    <input v-model="user.cognoms" type="text" placeholder="Cognoms" class="text-black p-2 w-full rounded bg-gray-200" />
    <input v-model="user.edat" type="number" placeholder="Edat" class="text-black p-2 w-full rounded bg-gray-200" />
    <input v-model="user.provincia" type="text" placeholder="Província" class="text-black p-2 w-full rounded bg-gray-200" />

    <button class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
      Desar usuari
    </button>

  </form>
</template>
