<script setup>
import Navbar from './components/Navbar.vue'

// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <h1 class="text-3xl text-red-500">Hola</h1> -->
  <div class="w-full">

    <Navbar />

    <div class="w-full min-h-screen bg-gray-800 ">
      <RouterView />
    </div>

  </div>

  <!-- <HelloWorld /> -->
</template>
