import React from "react";
import { motion } from "motion/react";
import { Sparkles, ExternalLink, AlertCircle } from "lucide-react";
import { SimklUser } from "../../types";

interface SimklDetailProps {
  data: SimklUser;
}

export function SimklDetail({ data }: SimklDetailProps) {
  return (
    <motion.div
      key="simkl"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-5xl mx-auto space-y-6"
    >
      <div className="bg-[#0c0f13] border border-slate-900 rounded-2xl overflow-hidden shadow-xl">
        {/* Header Banner */}
        <div className="p-6 bg-gradient-to-r from-yellow-950/20 to-slate-900/60 border-b border-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {data.avatar ? (
              <img 
                src={data.avatar} 
                alt="avatar" 
                className="h-14 w-14 rounded-2xl object-cover border border-yellow-500/20 shadow-lg"
              />
            ) : (
              <div className="h-14 w-14 rounded-2xl bg-yellow-600 text-black font-black font-display flex items-center justify-center text-xl shadow-lg">
                {data.displayName.substring(0, 2).toUpperCase()}
              </div>
            )}
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                {data.displayName}
                <span className="px-2 py-0.5 rounded-full text-[9px] bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 font-mono font-bold uppercase tracking-wide">Simkl</span>
              </h3>
              <p className="text-xs text-yellow-400 font-mono mt-0.5">
                Perfil de Multimídia • <a href={data.profileUrl} target="_blank" rel="noreferrer" className="underline inline-flex items-center gap-1 hover:text-yellow-300">Simkl <ExternalLink className="h-3 w-3" /></a>
              </p>
            </div>
          </div>
          <div className="bg-[#06080a] px-4 py-2 border border-slate-850 rounded-xl text-center self-stretch sm:self-auto">
            <span className="text-[10px] text-slate-500 font-mono block">Estatísticas Totais</span>
            <strong className="text-base font-bold text-yellow-400">
              {(data.stats?.moviesCount || 0) + (data.stats?.showsCount || 0) + (data.stats?.animeCount || 0)} itens
            </strong>
          </div>
        </div>

        {/* Stats Summary Bento cards */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#06080a]/85 border border-slate-900/80 p-5 rounded-2xl text-center shadow-md">
              <span className="text-[10px] text-slate-500 font-mono uppercase block mb-1">Filmes</span>
              <strong className="text-2xl font-black font-display text-emerald-400">{data.stats?.moviesCount || 0}</strong>
              <p className="text-[10px] text-slate-500 mt-1">Filmes assistidos</p>
            </div>
            <div className="bg-[#06080a]/85 border border-slate-900/80 p-5 rounded-2xl text-center shadow-md">
              <span className="text-[10px] text-slate-500 font-mono uppercase block mb-1">Séries</span>
              <strong className="text-2xl font-black font-display text-blue-400">{data.stats?.showsCount || 0}</strong>
              <p className="text-[10px] text-slate-500 mt-1">Séries acompanhadas</p>
            </div>
            <div className="bg-[#06080a]/85 border border-slate-900/80 p-5 rounded-2xl text-center shadow-md">
              <span className="text-[10px] text-slate-500 font-mono uppercase block mb-1">Animes</span>
              <strong className="text-2xl font-black font-display text-yellow-400">{data.stats?.animeCount || 0}</strong>
              <p className="text-[10px] text-slate-500 mt-1">Animes salvos</p>
            </div>
          </div>

          {data.fallback && (
            <div className="bg-[#110d06] border border-amber-950 p-4 rounded-xl text-amber-300 text-xs flex items-start gap-3 leading-relaxed">
              <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-amber-500" />
              <div>
                <strong className="block mb-0.5">Sincronização Integrada Concluída</strong>
                O Simkl requer credenciais de desenvolvedor para a API oficial. Atualmente, exibimos estatísticas simuladas otimizadas com link de perfil direto. Estamos trabalhando em scrapers e integrações nativas de feed!
              </div>
            </div>
          )}

          {/* Curated list / custom drama log */}
          <div className="border border-slate-900 rounded-2xl bg-[#06080a]/50 p-6 space-y-4">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              Itens Recentes no Feed de Sincronização
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.items?.map((item: any, i: number) => (
                <div key={i} className="bg-slate-950/80 border border-slate-900/60 p-4 rounded-xl flex items-center gap-4 hover:border-yellow-500/30 transition-all group overflow-hidden">
                  {item.bannerUrl && (
                    <img 
                      src={item.bannerUrl} 
                      alt={item.title} 
                      className="h-16 w-12 rounded object-cover border border-slate-800 shadow shrink-0"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h5 className="font-bold text-slate-200 text-sm group-hover:text-yellow-400 transition-colors truncate">{item.title}</h5>
                      <span className="text-[10px] font-mono font-bold bg-yellow-500/10 text-yellow-400 px-1.5 py-0.5 rounded border border-yellow-500/20 shrink-0">★ {item.rating}/10</span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-0.5 font-mono uppercase">{item.type} • {item.year}</p>
                    <span className="inline-block text-[9px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded-full mt-2">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
