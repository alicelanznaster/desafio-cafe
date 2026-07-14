<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="navbar">
      <div class="logo">
        Café Desafio
      </div>
      <nav class="nav-links">
        <RouterLink class="nav-item" to="/">Home</RouterLink>
        <RouterLink class="nav-item" to="/ranking">Ranking</RouterLink>
        <RouterLink class="nav-item" to="/avaliacao">Avaliação</RouterLink>
      </nav>
    </div>
  </header>

  <main class="content">
    <!--Tudo que precisa ser rendenrizado pelas minhas rotas
    estará dentro dessa tag content, o responsável por isso é o RouterView-->
    <RouterView />
  </main>
</template>

<style scoped>

.navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;

}

.logo{
  font-size: 1.5rem;
  font-weight: bold;
  color: gray;
}

.nav-links{
  display: flex;
  gap: 1.5rem;
}

.nav-item{
  color: black;
  text-decoration: none;
}

.nav-item:hover,
.nav-item.active{
  color: rgb(224, 84, 131);
}

.content{
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>
