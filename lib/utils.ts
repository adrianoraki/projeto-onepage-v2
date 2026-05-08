// lib/utils.ts

// Esta função recebe o valor do GAP e retorna a cor correta
export function definirCorFarol(gap) {
  if (gap >= -0.49) {
    return "text-green-600 font-bold"; // Verde para sucesso
  } else {
    return "text-red-600 font-bold";   // Vermelho para crítico
  }
}