<template>
    <header>
    <div class="navbar">
      <div class="logo">
        <img src="/logo.svg" alt="logo"> Coffee Quality Challenge
      </div>
      <nav class="nav-links">
        <RouterLink class="nav-item" to="/">
          <img src="/home.svg" alt="">Home</RouterLink>
        <RouterLink class="nav-item" to="/ranking">
          <img src="/ranking.svg" alt=""> Ranking</RouterLink>
        <RouterLink class="nav-item" to="/avaliacao">
          <img src="/avaliacao.svg" alt=""> Avaliação</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FEF6EC;
  padding: 15px 35px;
}

.logo{
  display: flex;
  font-size: 1.8rem;
  font-weight: 600;
  color: #621e0b;
  font-family: "Cormorant SC", serif;
  align-items: center;
  gap: 10px;
  cursor: default;
}


  
.nav-links{
  display: flex;
  gap: 1.5rem;
  font-family: "Google Sans Flex", sans-serif;
}

.nav-links img{
  width: 24px;
  height: 24px;
}

.nav-item{
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #6F2A0AB5;
  gap: 10px;
  font-weight: 500;
}

.nav-item:hover,
.nav-item.active{
  color: #6f2a0ae6;
}
</style>