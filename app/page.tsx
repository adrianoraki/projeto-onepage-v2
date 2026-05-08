'use client'
import { useState } from 'react'
import { LISTA_LOJAS } from '@/lib/lojas'

export default function Dashboard() {
  const [regional, setRegional] = useState('NE1')

  const lojasFiltradas = LISTA_LOJAS.filter(l => l.regional === regional)

  return (
    <div className="min-h-screen bg-slate-50 p-6 text-slate-900 font-sans">
      <header className="max-w-6xl mx-auto mb-10">
        <h1 className="text-4xl font-black text-slate-800 tracking-tight">PROJETO ONEPAGE 2026</h1>
        <div className="h-1 w-20 bg-blue-600 mt-2"></div>
      </header>

      <div className="max-w-6xl mx-auto">
        {/* Seleção de Regional */}
        <div className="flex gap-4 mb-8">
          {['NE1', 'NE2'].map((r) => (
            <button
              key={r}
              onClick={() => setRegional(r)}
              className={`px-10 py-3 rounded-xl font-black transition-all border-2 ${
                regional === r 
                ? 'bg-blue-600 border-blue-600 text-white shadow-lg' 
                : 'bg-white border-slate-200 text-slate-400 hover:border-blue-300'
              }`}
            >
              REGIONAL {r}
            </button>
          ))}
        </div>

        {/* Tabela de Lojas */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider">Identificação (Nº — Loja)</th>
                <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider text-center">Regional</th>
                <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {lojasFiltradas.map((loja) => (
                <tr key={loja.numero} className="hover:bg-blue-50/50 transition-colors">
                  <td className="px-8 py-5">
                    <span className="inline-block w-12 font-black text-blue-600 text-lg">{loja.numero}</span>
                    <span className="font-bold text-slate-700 ml-2 text-lg">— {loja.nome}</span>
                  </td>
                  <td className="px-8 py-5 text-center">
                    <span className="bg-slate-100 px-4 py-1.5 rounded-full text-xs font-black text-slate-500 uppercase border">
                      {loja.regional}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right text-slate-300 italic font-medium">
                    Aguardando Lançamento
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}