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
          <span>Total de Cafés Avaliados</span>

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

    <span>
      {{ index + 1 }}
    </span>


    <span class="nome">
      {{ cafe.nome }}
    </span>


    <span>
      {{ cafe.produtor }}
    </span>


<span>
  {{ calcularNota(cafe).toFixed(1) }}
</span>

    <button class="btn-detalhes">
      Ver Detalhes
    </button>


  </div>


</section>


  </main>
</template>

<style scoped>
.ranking {
  width: 95%;
  max-width: 1200px;
  margin: 40px auto;
  font-family: 'Inter', sans-serif; 
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
  font-size: 24px;
  font-weight: 700;
}

.titulo p {
  margin: 6px 0 0 0;
  color: #666;
  font-size: 14px;
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

.total-icon {
  width: 32px;
  height: 32px;
}

.total-info {
  display: flex;
  flex-direction: column;
}

.total-info span {
  font-size: 11px;
  color: #888;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
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
  border-bottom: 2px solid #f0f0f0;
  margin-bottom: 10px;
}

.cabecalho span {
  font-size: 13px;
  font-weight: 600;
  color: #888;
}

.linha {
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 8px;
  border: 1px solid #f3f3f3;
  transition: transform 0.2s, box-shadow 0.2s;
}

.linha:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
}

.posicao {
  font-size: 16px;
  font-weight: bold;
  color: #666;
}

.cafe-detalhe {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cafe-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #eee;
}

.nome {
  color: #222;
  font-size: 15px;
}

.produtor {
  color: #555;
  font-size: 14px;
}

/* Nota e Estrelas */
.nota-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nota {
  font-size: 16px;
  color: #2b773c;
  font-weight: 700;
}

.estrelas {
  color: #ffb800;
  letter-spacing: 2px;
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
  transition: all 0.2s;
}

.btn-detalhes:hover {
  background-color: #f7f7f7;
  border-color: #bbb;
}


.como-funciona {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px dashed #e0e0e0;
}

.footer-texto h3 {
  font-size: 14px;
  color: #5c3818;
  margin: 0 0 6px 0;
}

.footer-texto p {
  font-size: 12px;
  color: #777;
  line-height: 1.6;
  margin: 0;
}
</style>
