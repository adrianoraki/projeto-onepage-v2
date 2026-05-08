// lib/lojas.ts

export interface Loja {
  numero: string;
  nome: string;
  regional: 'NE1' | 'NE2';
}

export const LISTA_LOJAS: Loja[] = [
  // --- REGIONAL NE1 ---
  { numero: '77', nome: 'João Pessoa', regional: 'NE1' },
  { numero: '83', nome: 'Campina Grande', regional: 'NE1' },
  { numero: '109', nome: 'Paulista', regional: 'NE1' },
  { numero: '114', nome: 'Natal', regional: 'NE1' },
  { numero: '119', nome: 'Camaragibe', regional: 'NE1' },
  { numero: '120', nome: 'São Gonçalo Do Amarante', regional: 'NE1' },
  { numero: '204', nome: 'Recife', regional: 'NE1' },
  { numero: '207', nome: 'João Pessoa - Cabedelo', regional: 'NE1' },
  { numero: '238', nome: 'Olinda Yara Brasil', regional: 'NE1' },
  { numero: '268', nome: 'Maria Lacerda', regional: 'NE1' },
  { numero: '298', nome: 'Natal Ponta Negra', regional: 'NE1' },
  { numero: '300', nome: 'Epitácio Pessoa', regional: 'NE1' },
  { numero: '305', nome: 'Campina Grande Mirante', regional: 'NE1' },
  { numero: '333', nome: 'Mossoró', regional: 'NE1' },

  // --- REGIONAL NE2 ---
  { numero: '44', nome: 'Jaboatão', regional: 'NE2' },
  { numero: '46', nome: 'Caruaru Centro', regional: 'NE2' },
  { numero: '76', nome: 'Menino Marcelo', regional: 'NE2' },
  { numero: '91', nome: 'Garanhuns', regional: 'NE2' },
  { numero: '107', nome: 'Imbiribeira', regional: 'NE2' },
  { numero: '138', nome: 'Serra Talhada', regional: 'NE2' },
  { numero: '152', nome: 'Arapiraca', regional: 'NE2' },
  { numero: '163', nome: 'Caruaru Petropólis', regional: 'NE2' },
  { numero: '179', nome: 'Maceió Durval Góes', regional: 'NE2' },
  { numero: '198', nome: 'Cabo Santo Agostinho', regional: 'NE2' },
  { numero: '250', nome: 'Petrolina', regional: 'NE2' },
  { numero: '262', nome: 'Boa Viagem', regional: 'NE2' },
  { numero: '284', nome: 'Benfica', regional: 'NE2' },
  { numero: '289', nome: 'Maceió Farol', regional: 'NE2' },
  { numero: '290', nome: 'Mangabeiras', regional: 'NE2' }
];