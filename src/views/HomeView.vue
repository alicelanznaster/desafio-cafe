<script setup>
import { computed } from 'vue'
import { cafes, calcularNota } from '@/utils/cafes';
import { RouterLink } from 'vue-router'

const totalCafes = computed(() => cafes.value.length)

const melhorCafe = computed(() => {
  return [...cafes.value].sort((a, b) => {
    return calcularNota(b) - calcularNota(a)
  })[0]
})

const ultimoCafe = computed(() => {
  return cafes.value[cafes.value.length - 1]
})
</script>

<template>
  <main class="home">
    <section class="banner">
      <img src="/banner.svg" alt="img-banner">

      <div class="textos">
        <h1>Campeonato de Avaliação de Qualidade de Café</h1>
        <p>
           Avalie, compare e descubra os melhores cafés especiais.
        </p>
      </div>
    </section>
    <section class="cards">

      <div class="card">
        <img src="/icone-pessoas.svg" alt="total-avaliados">

        <div class="info">
          <h3>Total de Cafés Avaliados</h3>
          <h1>{{ totalCafes }}</h1>
          <p>cafés</p>
        </div>
      </div>  

      <div class="card">
        <img src="/maior-nota.svg" alt="icone-trofeu">
        <div class="info">
          <h3>Café com Maior Nota</h3>
          <h1>{{ calcularNota(melhorCafe).toFixed(1) }}</h1>
          <p>{{ melhorCafe.nome }}</p>
          <span>{{ melhorCafe.produtor }}</span>
      </div>
    </div>
    
    <div class="card">
      <img src="/relogio.svg" alt="relogio">

      <div class="info">
        <h3>Última Avaliação</h3>
        <h1>{{ calcularNota(ultimoCafe).toFixed(1) }}</h1>
        <p>{{ ultimoCafe.cafe }}</p>
        <span>{{ ultimoCafe.data }}</span>
      </div>
    </div>
  </section>

  <section class="acoes">
    <RouterLink to="/avaliacao" class="botao">
      <img src="/btn-avaliacao.svg" alt="icon-avaliacao">
      Ver Avaliações
    </RouterLink>
  </section>

  <section class="participar">
    <div class="texto">
      <img src="/megafone.svg" alt="Megafone">
      <div>
        <h3>Participe e faça a diferença!</h3>
        <p>
          Cada avaliação ajuda a reconhecer o trabalho dos produtores
          e a valorizar o café de qualidade.
        </p>
      </div>
    </div>
    <img class="fazenda" src="/img-banner.svg" alt="Fazenda">
  </section>
</main>

</template>

<style scoped>
.home{
  min-height: 55vh;
  background:#FEF6EC;
}

.banner{
  display: flex;
  align-items: center;
  color: black;
  width: 90%;
  max-width: 1200px;
  margin-top: 30px;
  margin: 40px auto;  
  padding: 30px;
  padding-top: 10px;
  border-radius: 15px;
  border: 2px solid #debfb7b4;
  text-align: center;
  background: #f1e1d8;
} 

.banner img{
  width: 29%;
  height: 220px;
  object-fit: contain;
}

.banner h1{
  margin-top: 20px;
  font-weight: 600;
  font-size: 2rem;
}

.banner p{
  border-top: 2px solid rgba(162, 100, 66, 0.655); 
  margin-top: 15px;
  padding-top: 10px;
  font-size: 18px;
}

.cards{
  display: flex;
  color: black;
  width: 90%;
  max-width: 1200px;
  margin: 30px auto;
  gap: 25px;
  
}

.card{
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
  background: white;  
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,.08);
  transition: .2s;
  text-align: center;
}


.card:hover{
  transform: translateY(-4px);
}

.card img{
  width: 90px;
  height: 90px;
  object-fit: contain;
  flex-shrink: 0;
}

.card h3{
  font-size: 17px;
  color: #666;
  font-weight: 500;
}

.card h1{
  font-size: 48px;
  color: #6B3F22;
}

.card p{
  font-size: 18px;
  font-weight: 600;
}

.card span{
  color: #888;
  font-size: 15px;
}

.acoes{
  display: flex;
  justify-content: center;
  margin: 30px 0;
}

.botao{
  background: #621e0b;
  color: white;
  display: flex;
  padding: 14px 40px;
  align-items: center;
  border-radius: 10px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  gap: 10px;
  transition: .2s;
}

.botao img{
  width: 25px;
  height: 25px;
}

.botao:hover{
  opacity: 0.9;
}

.participar{
  width: 90%;
  max-width: 1200px;
  margin: 35px auto 50px;
  background: #F8F4F1;
  border-radius: 15px;
  padding: 25px 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0,0,0,.08);
}

.texto{
  display: flex;
  align-items: center;
  gap: 20px;
}

.texto img{
  width: 45px;
}

.texto h3{
  margin: 0;
  font-size: 18px;
  color: #5e2b16;
}

.texto p{
  margin-top: 5px;
  color: #666;
  line-height: 1.5;
}

.fazenda{
  width: 240px;
}
</style>