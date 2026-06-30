<template>
    <div class="bg-gray-600 text-white p-4">
        <h2 class="text-3xl font-bold">Aquesta es la pagina 2</h2>
        <p class="text-lg">Aquests son els continguts</p>

        <!-- BOTÓ PER MOSTRAR LA SUBPÀGINA A -->
        <RouterLink to="/Pagina2/SubPaginaA"
            class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded inline-block mt-4 ml-2 ">
            Mostrar Subpàgina A
        </RouterLink>

        <!-- BOTÓ PER MOSTRAR LA SUBPÀGINA B -->
        <RouterLink to="/Pagina2/SubPaginaB"
            class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded inline-block mt-4 ml-2 ">
            Mostrar Subpàgina B
        </RouterLink>

        <!-- BOTÓ PER MOSTRAR LA SUBPÀGINA C -->
        <RouterLink to="/Pagina2/SubPaginaC"
            class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded inline-block mt-4 ml-2 ">
            Mostrar Subpàgina C
        </RouterLink>

        <!-- BOTÓ PER MOSTRAR LA SUBPÀGINA D -->
        <RouterLink to="/Pagina2/SubPaginaD"
            class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded inline-block mt-4 ml-2 ">
            Mostrar Subpàgina D
        </RouterLink>

    </div>

    <!-- AQUI ES MOSTRARÀ EL CONTINGUT NIUAT -->
    <div>
        <RouterView />
    </div>
</template>

<script setup>
</script>
