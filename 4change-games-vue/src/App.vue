<template>
  <TheNavbar />
  <main>
    <router-view />
  </main>
  <TheFooter />
</template>

<script setup>
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
</script>
