<template>
    <div class="bg-gray-400 p-4">
        <h2 class="text-3xl text-bold">Aquesta es la sub-pagina B</h2>
        <div class="pb-4 text-black">
            <p class="text-l">Aquests son els continguts</p>
            <p class="text-l">La subpàgina B és una vista que conté el component d'un formulari</p>
            <p class="text-l">Quan l'usuari es registra es pot veure a la llista de la sub-pàgina C</p>
          
        </div>
        
        <!-- aqui es mostra l'usuari -->
        <FormUsusari />

    </div>

    
</template>


<script setup>
//Aquí importem l'usuari
import FormUsusari from '../../components/FormUsusari.vue'
</script>