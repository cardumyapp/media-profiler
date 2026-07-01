import React from "react";
import { motion } from "motion/react";
import { Sparkles, ExternalLink, AlertCircle } from "lucide-react";
import { MyDramaListUser } from "../../types";

interface MydramalistDetailProps {
  data: MyDramaListUser;
}

export function MydramalistDetail({ data }: MydramalistDetailProps) {
  return (
    <motion.div
      key="mydramalist"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-5xl mx-auto space-y-6"
    >
      <div className="bg-[#0c0f13] border border-slate-900 rounded-2xl overflow-hidden shadow-xl">
        {/* Header Banner */}
        <div className="p-6 bg-gradient-to-r from-blue-950/20 to-slate-900/60 border-b border-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {data.avatar ? (
              <img 
                src={data.avatar} 
                alt="avatar" 
                className="h-14 w-14 rounded-2xl object-cover border border-blue-500/20 shadow-lg"
              />
            ) : (
              <div className="h-14 w-14 rounded-2xl bg-blue-600 text-white font-black font-display flex items-center justify-center text-xl shadow-lg">
                {data.displayName.substring(0, 2).toUpperCase()}
              </div>
            )}
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                {data.displayName}
                <span className="px-2 py-0.5 rounded-full text-[9px] bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono font-bold uppercase tracking-wide">MyDramaList</span>
              </h3>
              <p className="text-xs text-blue-400 font-mono mt-0.5">
                Perfil de Doramas • <a href={data.profileUrl} target="_blank" rel="noreferrer" className="underline inline-flex items-center gap-1 hover:text-blue-300">MyDramaList <ExternalLink className="h-3 w-3" /></a>
              </p>
            </div>
          </div>
          <div className="bg-[#06080a] px-4 py-2 border border-slate-850 rounded-xl text-center self-stretch sm:self-auto">
            <span className="text-[10px] text-slate-500 font-mono block">Dramas Assistidos</span>
            <strong className="text-base font-bold text-blue-400">{data.stats?.completed || 0} títulos</strong>
          </div>
        </div>

        {/* Stats Summary Bento cards */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#06080a]/85 border border-slate-900/80 p-5 rounded-2xl text-center shadow-md">
              <span className="text-[10px] text-slate-500 font-mono uppercase block mb-1">Completados</span>
              <strong className="text-2xl font-black font-display text-emerald-400">{data.stats?.completed || 0}</strong>
              <p className="text-[10px] text-slate-500 mt-1">Dramas concluídos</p>
            </div>
            <div className="bg-[#06080a]/85 border border-slate-900/80 p-5 rounded-2xl text-center shadow-md">
              <span className="text-[10px] text-slate-500 font-mono uppercase block mb-1">Assistindo</span>
              <strong className="text-2xl font-black font-display text-blue-400">{data.stats?.watching || 0}</strong>
              <p className="text-[10px] text-slate-500 mt-1">Séries em progresso</p>
            </div>
            <div className="bg-[#06080a]/85 border border-slate-900/80 p-5 rounded-2xl text-center shadow-md">
              <span className="text-[10px] text-slate-500 font-mono uppercase block mb-1">Planejam Assistir</span>
              <strong className="text-2xl font-black font-display text-pink-400">{data.stats?.planToWatch || 0}</strong>
              <p className="text-[10px] text-slate-500 mt-1">Na lista de espera</p>
            </div>
          </div>

          {data.fallback && (
            <div className="bg-[#110d06] border border-amber-950 p-4 rounded-xl text-amber-300 text-xs flex items-start gap-3 leading-relaxed">
              <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-amber-500" />
              <div>
                <strong className="block mb-0.5">Sincronização Básica Concluída</strong>
                Os dados do MyDramaList estão em sincronização rápida. Você pode visitar o link oficial para ver a lista completa de dramas, resenhas e contatos do usuário em tempo real!
              </div>
            </div>
          )}

          {/* Curated list / custom drama log */}
          <div className="border border-slate-900 rounded-2xl bg-[#06080a]/50 p-6 space-y-4">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-blue-400" />
              Destaques de Dramas Populares
            </h4>
            <p className="text-xs text-slate-400">
              Confira os dramas e séries mais aclamados da comunidade para maratona imediata.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Crash Landing on You", genres: "Romance, Comédia, Drama", rating: "9.0", episodes: "16 eps", desc: "Uma herdeira sul-coreana cai acidentalmente na Coreia do Norte e é protegida por um capitão do exército." },
                { title: "Goblin (Guardian)", genres: "Fantasia, Romance, Drama", rating: "8.8", episodes: "16 eps", desc: "Um goblin imortal precisa encontrar sua noiva humana para quebrar uma maldição secular." },
                { title: "Twenty-Five Twenty-One", genres: "Romance, Juventude, Melodrama", rating: "8.9", episodes: "16 eps", desc: "O relacionamento amoroso e de crescimento de dois jovens em meio à crise financeira de 1998." },
                { title: "Alchemy of Souls", genres: "Ação, Fantasia, Romance", rating: "9.1", episodes: "30 eps", desc: "Feiticeiros poderosos lidam com destinos trocados devido à magia de transmigração de almas." }
              ].map((item, i) => (
                <div key={i} className="bg-slate-950/80 border border-slate-900/60 p-4 rounded-xl flex flex-col justify-between hover:border-blue-500/30 transition-all group">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <h5 className="font-bold text-slate-200 text-sm group-hover:text-blue-400 transition-colors">{item.title}</h5>
                      <span className="text-[10px] font-mono font-bold bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/20">{item.rating}</span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-0.5 font-mono">{item.genres} • {item.episodes}</p>
                    <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">{item.desc}</p>
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
