// types/index.ts
export interface Loja {
  id: string;
  nome: string;
  regional: 'NE1' | 'NE2';
  presenca: number;
  etiqueta: number;
  nps: number;
  gap_quebra: number; // Ex: -0.33
}