<script setup>
import { computed } from 'vue';
import { cafes, calcularNota } from '@/utils/cafes';

const ranking = computed(() => {

  return [...cafes.value]
    .sort((a,b) => calcularNota(b) - calcularNota(a))

})
</script>

<template>
  <main class="ranking">
    <section class="topo">
      <div class="conteudo">
        
        <div class="titulo">
          <div class="info">
              <img src="/ranking.svg" alt="">
              <h1>Ranking Geral</h1>
          </div>
          <p>Classificação dos melhores cafés do campeonato.</p>
        </div>
          

      <div class="total-card">
        <img src="/card-rank.svg" alt="">
          <div class="total-info">
          <p>Total de Cafés Avaliados</p>

          <strong>
            {{ cafes.length }}
          </strong>
        </div>
      

    </div>
      </div>
    
    </section>

<section class="tabela">

  <div class="cabecalho">

    <span>Posição</span>
    <span>Café</span>
    <span>Produtor</span>
    <span>Nota Final (Média SCA)</span>
    <span>Ações</span>

  </div>

  <div 
    class="linha"
    v-for="(cafe,index) in ranking"
    :key="cafe.id"
  >

    <p>
      {{ index + 1 }}
    </p>

    <p class="nome">
      {{ cafe.nome }}
    </p>

    <p class="produtor">
      {{ cafe.produtor }}
    </p>

    <p class="nota">
      {{ calcularNota(cafe).toFixed(1) }}
    </p>

    <button class="btn-detalhes">
      Ver Detalhes
    </button>
  </div>
  </section>

  <section class="participar">
    <div class="texto">
      <img src="/medalha.svg" alt="Megafone">
      <div>
        <h3>Como funciona a pontuação?</h3>
        <p>
          As notas são baseadas na metodologia SCA (Specialty Coffee Association). 
          Cada critério recebe uma nota de 0 a 10 e a média final determina a classificação.
        </p>
      </div>
    </div>
    <img class="fazenda" src="/img-banner.svg" alt="Fazenda">
  </section>

  </main>
</template>

<style scoped>
.ranking {
  width: 95%;
  max-width: 1200px;
  margin: 40px auto;
  color: #333;
}

.conteudo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.info img {
  height: 36px;
  width: 36px;
}

.info h1 {
  margin: 0;
  color: #5c3818;
  font-weight: 600;
  font-size: 30px;  
}

.titulo p {
  margin: 6px 0 0 0;
  color: #666;
  font-size: 18px;
}

.total-card {
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #fcf9f6;
  border: 1px solid #f0e6df;
  border-radius: 12px;
  padding: 12px 24px;
}

.total-card img{
  width: 60px;
  height: 60px;
}

.total-info {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.total-info p {
  font-size: 15px;
  color: #888;
}

.total-info strong {
  font-size: 28px;
  color: #333;
  line-height: 1.1;
}

.cabecalho, .linha {
  display: grid;
  grid-template-columns: 0.8fr 2.5fr 2fr 2fr 1.2fr;
  align-items: center;
  padding: 14px 20px;
}

.cabecalho {
  border-bottom: 2px solid #e8e2e2;
  margin-bottom: 5px;
}

.cabecalho span {
  font-size: 16px;
  font-weight: 600;
  color: #888;
}


.linha {
  background-color: #fff;
  margin-bottom: 3px;
  border-radius: 12px;
  border: 1px solid #f3f3f3;
  transition: transform 0.2s, box-shadow 0.2s;
}

.linha:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
}

.nome {
  color: #222;
  font-size: 15px;
}

.produtor,.nota{
  color: #555;
  font-size: 14px;
}

.btn-detalhes {
  background-color: transparent;
  border: 1px solid #dcdcdc;
  color: #333;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  transition: 0.2s;
}

.btn-detalhes:hover {
  background-color: #f7f7f7;
  border-color: #bbb;
}

.participar{
  width: 100%;
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
  max-width: 650px;
}

.fazenda{
  width: 240px;
}
</style>
