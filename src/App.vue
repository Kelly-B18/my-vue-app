<!-- src/App.vue -->
<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<template>
<div id="app-layout">
<!-- Navbar stays fixed on top for ALL pages -->
<Navbar />

<!-- Vue Router swaps ONLY the page content below here -->
<RouterView />
</div>
</template>