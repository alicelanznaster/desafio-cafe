<template>
    <footer>
        <div class="conteudo">
            <div class="marca">
                <h1>Coffee Quality Challenge</h1>
                <p>Sistema acadêmico para avaliação de cafés especiais</p>
            </div>
            <div class="rotas">
                <h2>Explorar</h2>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/ranking">Ranking</RouterLink>
                <RouterLink to="/avaliacao">Avaliações</RouterLink>
            </div>

        </div>
        <div class="direitos">
            <p>
                Coffee Quality Challenge © 2026. Todos os direitos reservados.
                Este site foi desenvolvido exclusivamente para fins educacionais
            </p>
        </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
footer{
  background-color: #621e0b;
  color: #FEF6EC;
  padding: 30px 40px;
  padding-bottom: 15px;
}

.conteudo{
    display: flex;   
    margin: 0 auto;
    gap: 30vw;
}

.marca h1 {
  margin-top: 20px;
  font-size: 2rem;
  font-family: "Cormorant SC", serif;
}

.marca p {
  font-size: 1.1rem;
}

.rotas{
  display: flex;
  flex-direction: column;
}

.rotas h2{
  margin-bottom: 10px;
  font-family: "Cormorant", serif;
  font-size: 27px;
}

.rotas a {
  color: white;
  text-decoration: none;
  font-size: 17px;
}

.rotas a:hover {
  text-decoration: underline;
} 

.direitos {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  text-align: center;
  font-size: 15px;
}


</style>