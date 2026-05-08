// lib/utils.ts

// Função para definir a cor baseada no GAP (Estilo Neon da sua imagem)
export function getCorGap(gap: number) {
  // Se o GAP for maior ou igual a -0.49 (ex: -0.12), fica Verde Neon
  if (gap >= -0.49) {
    return "text-[#00FFD1] font-bold"; 
  }
  // Se for menor (ex: -0.51), fica Vermelho/Rosa Neon
  return "text-[#FF4B91] font-bold";
}

// Função para ajudar a juntar nomes de classes CSS
export function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}