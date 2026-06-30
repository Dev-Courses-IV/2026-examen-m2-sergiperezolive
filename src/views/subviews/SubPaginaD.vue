<template>
    <div class="bg-gray-400 p-4 text-white">
        <h2 class="text-3xl text-bold">Aquesta es la sub-pagina D</h2>
        <div class="text-black">
            <p class="text-2xl">Aquests son els continguts</p>
            <p class="text-xl">La subpàgina D mostra una llista de pel·lícules de Star Wars, obtingudes per una API (fetch)</p>
            <p>________________________________________</p>
            
        </div>

        <ul class="text-black">
            <li v-for="pelicula in peliculas" :key="pelicula.title">
                {{ pelicula.title }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// 1. Declarem la variable reactiva
const peliculas = ref([]);

// 2. Definim la funció asíncrona
async function obtenerCosas() {
  try {
    const respuesta = await fetch('https://swapi.info/api/films');
    const datos = await respuesta.json();
    
    // CORRECCIÓ: swapi.info retorna un array directe, no un objecte amb .results
    peliculas.value = datos; 
  } catch (error) {
    console.error("Error carregant les pel·lícules:", error);
  }
}

// 3. Executem la funció
obtenerCosas();
</script>