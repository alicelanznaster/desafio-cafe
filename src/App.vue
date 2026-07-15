<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <AppHeader />
  <main class="content">
    
    <!--Tudo que precisa ser rendenrizado pelas minhas rotas
    estará dentro dessa tag content, o responsável por isso é o RouterView-->
    <RouterView />
    
  </main>
  
  <AppFooter/>
</template>

<style scoped>


.content{
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>
