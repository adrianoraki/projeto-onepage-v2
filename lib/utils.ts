// lib/utils.ts

/**
 * Função simplificada para gerenciar classes sem depender de bibliotecas externas
 * Isso vai fazer o erro de import sumir do seu VS Code.
 */
export function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

/**
 * SUA FERRAMENTA DE CORES (O Farol)
 * Baseado na sua regra: >= -0.49% é Verde, abaixo disso é Vermelho.
 */
export function getCorGap(gap: number) {
  if (gap >= -0.49) {
    return 'bg-green-500 text-white font-bold px-2 py-1 rounded'; 
  }
  return 'bg-red-500 text-white font-bold px-2 py-1 rounded';
}