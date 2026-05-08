// app/page.tsx
'use client' // Isso diz ao Next.js que este arquivo tem botões ou coisas que mudam na tela

import { definirCorFarol } from '@/lib/utils';

export default function Dashboard() {
  // 1. Criando dados "fictícios" para testar antes de ligar o banco de dados
  const lojasExemplo = [
    { id: '83', nome: 'Campina Grande', nps: 108, gap: -0.33 },
    { id: '300', nome: 'Epitácio Pessoa', nps: 94, gap: -0.76 },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-black">Projeto Onepage 2026 - Regional NE1</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-4">Loja</th>
              <th className="p-4">NPS</th>
              <th className="p-4">GAP Quebra</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {lojasExemplo.map((loja) => (
              <tr key={loja.id} className="border-b">
                <td className="p-4">{loja.id} - {loja.nome}</td>
                <td className="p-4">{loja.nps}</td>
                {/* Aqui usamos a lógica do Farol que criamos no Passo 2 */}
                <td className={`p-4 ${definirCorFarol(loja.gap)}`}>
                  {loja.gap}%
                </td>
                <td className="p-4">
                  {loja.gap >= -0.49 ? '✅ Excelente' : '🚨 Atenção'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}