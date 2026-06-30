<template>
    <div class="bg-gray-400 p-4">
        <h2 class="text-3xl text-bold">Aquesta es la sub-pagina C</h2>
        <div>
            <p class="text-l text-white p-4">Aquests son els continguts. S'han de mostrar els usuaris que s'han registrat en la sub-pàgina B</p>
        </div>

        <!-- aqui es mostra la llista d'usuaris  -->
        <LlistaUsuaris />
    </div>


</template>

<script setup>

//Aquí importem la llista d'usuaris
import LlistaUsuaris from '../../components/LlistaUsuaris.vue'

</script>