<script setup>
import { cafes, calcularNota } from '@/utils/cafes'
import { ref } from 'vue';

const nome = ref('')
const produtor = ref('')

const aroma = ref(0)
const sabor = ref(0)
const acidez = ref(0)
const corpo = ref(0)
const finalizacao = ref(0)

const observacoes = ref('')

function adicionarCafe(){
    if(
    !nome.value ||
    !produtor.value ||
    !aroma.value ||
    !sabor.value ||
    !acidez.value ||
    !corpo.value ||
    !finalizacao.value
  ){
    alert('Preencha todos os campos obrigatórios!')
    return
  }

  const novoCafe = {
    id: cafes.value.length + 1,
    nome: nome.value,
    produtor: produtor.value,
    aroma: Number(aroma.value),
    sabor: Number(sabor.value),
    acidez: Number(acidez.value),
    corpo: Number(corpo.value),
    finalizacao: Number(finalizacao.value),
    observacoes: observacoes.value,
    data: new Date().toLocaleDateString('pt-BR')
  }

  cafes.value.push(novoCafe)
  
  nome.value = ''
  produtor.value = ''
  aroma.value = 0
  sabor.value = 0
  acidez.value = 0
  corpo.value = 0
  finalizacao.value = 0
  observacoes.value = ''
}
</script>

<template>
  <main class="avaliacoes">
    <section class="topo">
      <div class="titulo">
        <img src="/logo.svg" alt="logo">
        <h1>Avaliações de Cafés</h1>
      </div>
      <p>Veja os cafés já avaliados e adicione uma nova avaliação</p>
    </section>

    <div class="conteudo">
      <section class="lista">
        <h2>Cafés Avaliados ({{ cafes.length }})</h2>

        <div
          class="item"
          v-for="cafe in cafes"
          :key="cafe.id"
        >
          <div class="info">
            <img src="/logo-avaliacao.svg" alt="">
            <div>
              <h3>{{ cafe.nome }}</h3>
              <p>Produtor: {{ cafe.produtor }}</p>
              <p>Avaliado em: {{ cafe.data }}</p>
            </div>
          </div>

          <div class="nota">
            <span>Média SCA</span>
            <strong>{{ calcularNota(cafe).toFixed(1) }}</strong>
          </div>
        </div>
      </section>
      
      <section class="formulario">
        <div class="form">
          <img src="/avaliacao.svg" alt="">
          <h2>Nova Avaliação</h2>
        </div>

        <form>
          <div class="info-cadastro">
            <label>
              Nome do Café
              <input type="text" placeholder="Ex.: Bourbon Amarelo" v-model="nome" >
            </label>
            <label>
              Produtor
              <input type="text" placeholder="Ex.: Fazenda Boa Vista" v-model="produtor">
            </label>
          </div> 

          <h3>Notas SCA</h3>

          <div class="notas">
            <label>
              Aroma
              <input type="number" placeholder="0" v-model="aroma" min="0" max="10">
            </label>
            <label>
              Sabor
              <input type="number" placeholder="0" v-model="sabor" min="0" max="10" >
            </label>
            <label>
              Acidez
              <input type="number" placeholder="0" v-model="acidez" min="0" max="10">
            </label>
            <label>
              Corpo
              <input type="number" placeholder="0" v-model="corpo" min="0" max="10">
            </label>
            <label>
              Finalização
              <input type="number" placeholder="0" v-model="finalizacao" min="0" max="10">
            </label>
          </div>

          <label>
            Observações
            <textarea placeholder="Digite observações sobre o café" v-model="observacoes"></textarea>
          </label>

          <button @click.prevent="adicionarCafe">
            Avaliar Café
          </button>
          
        </form>
        
        
      </section>
      
    </div>
  </main> 
</template>

<style scoped>
.avaliacoes{
  width: 90%;
  max-width: 1200px;
  margin: 30px auto;
}

.topo{
  margin-bottom: 30px;
}

.topo p{
  color: #555;
  font-size: 18px;
}

.titulo {
  display: flex;
  align-items: center;
  gap: 15px;
}

.titulo img{
  height: 40px;
  width: 40px;
}

.titulo h1{
  margin: 0;
  color: #6b3f22;
  font-weight: 600;
  font-size: 30px;
}


.conteudo{
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.lista{
  flex: 1;
  background: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0,0,0,.08);
}

.lista h2{
  color: #6b3f22;
  font-size: 25px;
  font-weight: 600;
  margin-top: 0;
}

.item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
}

.item:last-child{
  border: none;
}

.info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.info img{
  width: 45px;
  height: 45px;
}

.info h3{
  margin: 0;
  color: #6b3f22;
}

.info p{
  margin: 5px 0;
  color: #555;
  font-size: 14px;
}

.nota{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nota span{
  font-size: 13px;
  color: #777;
}

.nota strong{
  font-size: 28px;
  color: #6b3f22;
}

.formulario{
  flex: 1.3;
  background: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0,0,0,.08);
}

.formulario form{
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.formulario label{
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #555;
  font-weight: 500;
}

.formulario h3{
  color: #6b3f22;
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: 600;
} 
.form {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.form h2 {
  color: #6b3f22;
  margin: 0;
  font-weight: 600;
}

.form img {
  width: 30px;
  height: 30px;
}

input,
textarea{
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
}

textarea{
  height: 100px;
  resize: none;
}

.info-cadastro {
  display: flex;
  gap: 15px;
  width: 100%;
}

.info-cadastro label {
  flex: 1;
}

.notas{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

button{
  margin-top: 15px;
  padding: 14px;
  border: none;
  border-radius: 10px;
  background: #6b3f22;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
</style>