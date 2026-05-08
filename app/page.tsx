'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function Dashboard() {
  const [lojas, setLojas] = useState([])
  const [loading, setLoading] = useState(true)

  // Função para definir a cor do Farol baseada no GAP
  const getFarolColor = (gap: number) => {
    if (gap >= -0.49) return 'bg-green-100 text-green-800' // Sucesso
    return 'bg-red-100 text-red-800' // Crítico
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Projeto Onepage 2026</h1>
            <p className="text-gray-500">Dashboard de Auditoria & KPIs</p>
          </div>
          <div className="flex gap-4">
            <span className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow">Regional NE1</span>
            <span className="px-4 py-2 bg-white border rounded-lg shadow">Regional NE2</span>
          </div>
        </header>

        {/* Tabela de Indicadores */}
        <div className="bg-white shadow rounded-xl overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Loja</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Presença</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Etiqueta</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">NPS</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">GAP Quebra</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {/* Exemplo de Loja (Substituiremos pelo fetch do Supabase) */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">83 - Campina Grande</td>
                <td className="px-6 py-4">0,37%</td>
                <td className="px-6 py-4">0,70%</td>
                <td className="px-6 py-4">108</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${getFarolColor(-0.33)}`}>
                    -0,33%
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">300 - Epitácio Pessoa</td>
                <td className="px-6 py-4">1,12%</td>
                <td className="px-6 py-4">1,45%</td>
                <td className="px-6 py-4">94</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${getFarolColor(-0.76)}`}>
                    -0,76%
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}