import { ref } from "vue";

export const cafes = ref([
    {
        id: 1,
        nome: 'Bourbon Amarelo',
        produtor: 'Fazenda Boa Vista',
        aroma: 9,
        sabor: 10,
        acidez: 9,
        corpo: 9,
        finalizacao: 9.5,
        media: 9.3,
        observacoes: 'Muito equilibrado.',
        data: '25/05/2024 14:32',
    }, 
    {
        id: 2,
        nome: 'Arara',
        produtor: 'Sitio das Flores',
        aroma: 9,
        sabor: 9,
        acidez: 8,
        corpo: 9,
        finalizacao: 8.5,
        media: 8.5,
        observacoes: 'Café doce.',
        data: '25/05/2024 10:15',
    },
    {
        id: 3,
        nome: 'Catuaí Vermelho',
        produtor: 'Café do Vale',
        aroma: 8.2,
        sabor: 8.1,
        acidez: 8.0,
        corpo: 8.0,
        finalizacao: 8.2,
        observacoes: 'Corpo médio e sabor agradável.',
        data: '24/05/2024 16:45'
    },
    {
        id: 4,
        nome: 'Mundo Novo',
        produtor: 'Santa Clara',
        aroma: 7.5,
        sabor: 7.4,
        acidez: 7.3,
        corpo: 7.2,
        finalizacao: 7.6,
        observacoes: 'Notas de chocolate e castanhas.',
        data: '24/05/2024 09:30',
    },
])

export function calcularNota(cafe) {
  return (
    cafe.aroma +
    cafe.sabor +
    cafe.acidez +
    cafe.corpo +
    cafe.finalizacao
  ) / 5
}