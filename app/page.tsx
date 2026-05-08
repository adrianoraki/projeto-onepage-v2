'use client'
import { useState } from 'react'
import { LISTA_LOJAS } from '@/lib/lojas'
import { getCorGap } from '@/lib/utils'

export default function Dashboard() {
  const [regional, setRegional] = useState('NE1')
  const lojasFiltradas = LISTA_LOJAS.filter(l => l.regional === regional)

  return (
    <div className="flex min-h-screen bg-[#0A0E1A] text-white font-sans">
      
      {/* Sidebar Curta Lateral */}
      <aside className="w-20 border-r border-slate-800 flex flex-col items-center py-8 gap-8 bg-[#0D1224]">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-black">OP</div>
        <button onClick={() => setRegional('NE1')} className={`p-3 rounded-xl transition-all ${regional === 'NE1' ? 'bg-blue-600/20 text-blue-400 border border-blue-500/50' : 'text-slate-500 hover:text-white'}`}>
          NE1
        </button>
        <button onClick={() => setRegional('NE2')} className={`p-3 rounded-xl transition-all ${regional === 'NE2' ? 'bg-purple-600/20 text-purple-400 border border-purple-500/50' : 'text-slate-500 hover:text-white'}`}>
          NE2
        </button>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-sm font-black text-blue-500 uppercase tracking-[0.3em]">Regional {regional}</h1>
            <p className="text-slate-400 text-xs italic">Total: {lojasFiltradas.length} Unidades</p>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-black tracking-tighter">PROJETO ONEPAGE 2026</h2>
          </div>
        </header>

        {/* Grid de Cards Estilo Imagem Enviada */}
        <div className="grid grid-cols-1 gap-3 max-w-5xl">
          {lojasFiltradas.map((loja) => {
            const gapExemplo = -0.12; // Aqui depois virão os dados reais
            return (
              <div key={loja.numero} className="bg-[#12182B] border border-slate-800/50 p-4 rounded-xl flex items-center justify-between hover:border-slate-600 transition-all group">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">ID {loja.numero}</span>
                  <span className="text-lg font-black tracking-tight group-hover:text-blue-400 transition-colors">
                    {loja.nome.toUpperCase()}
                  </span>
                </div>

                <div className="flex gap-12 items-center">
                  <div className="text-right">
                    <span className="block text-[10px] text-slate-500 font-bold">NPS</span>
                    <span className="font-mono font-bold">150</span>
                  </div>
                  <div className="text-right w-24">
                    <span className="block text-[10px] text-slate-500 font-bold uppercase">Brecha</span>
                    <span className={`font-mono ${getCorGap(gapExemplo)}`}>
                      {gapExemplo.toFixed(2)} %
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <footer className="mt-10 pt-4 border-t border-slate-800/50 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
          Relatório de Quebra Consolidado
        </footer>
      </main>
    </div>
  )
}