'use client'
import { useState } from 'react'
import { LISTA_LOJAS } from '@/lib/lojas'

export default function Dashboard() {
  const [regional, setRegional] = useState('NE1')
  const lojas = LISTA_LOJAS.filter(l => l.regional === regional)

  return (
    <div className="min-h-screen bg-white p-8 text-black">
      <header className="mb-8 border-b-4 border-black pb-4">
        <h1 className="text-4xl font-black">PROJETO ONEPAGE 2026</h1>
      </header>

      <div className="flex gap-4 mb-8">
        {['NE1', 'NE2'].map(r => (
          <button 
            key={r}
            onClick={() => setRegional(r)}
            className={`px-8 py-2 font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:shadow-none active:translate-x-1 active:translate-y-1 ${
              regional === r ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            REGIONAL {r}
          </button>
        ))}
      </div>

      <div className="border-2 border-black rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-4 font-bold">Nº — LOJA</th>
              <th className="p-4 text-center">REGIONAL</th>
            </tr>
          </thead>
          <tbody>
            {lojas.map(loja => (
              <tr key={loja.numero} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4 font-bold text-lg">
                  <span className="text-blue-600">{loja.numero}</span> — {loja.nome}
                </td>
                <td className="p-4 text-center font-mono text-sm">{loja.regional}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}