import React from "react";
import { motion } from "motion/react";
import { Flame, ExternalLink } from "lucide-react";
import { TraktUser } from "../../types";

interface TraktDetailProps {
  data: TraktUser;
}

export function TraktDetail({ data }: TraktDetailProps) {
  return (
    <motion.div
      key="trakt"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-5xl mx-auto space-y-6"
    >
      <div className="bg-[#0c0f13] border border-slate-900 rounded-2xl overflow-hidden shadow-xl">
        {/* Header Banner */}
        <div className="p-6 bg-gradient-to-r from-rose-950/20 to-slate-900/60 border-b border-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-rose-600 text-white font-black font-display flex items-center justify-center text-xl shadow-lg">
              {data.username.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{data.username}</h3>
              <p className="text-xs text-rose-400 font-mono">
                Perfil Trakt.tv • <a href={data.profileUrl} target="_blank" rel="noreferrer" className="underline inline-flex items-center gap-1 hover:text-rose-300">Trakt.tv <ExternalLink className="h-3 w-3" /></a>
              </p>
            </div>
          </div>
          <div className="bg-[#06080a] px-4 py-2 border border-slate-850 rounded-xl text-center self-stretch sm:self-auto">
            <span className="text-[10px] text-slate-500 font-mono block">Histórico do Feed</span>
            <strong className="text-base font-bold text-rose-400">{data.items?.length || 0} itens mapeados</strong>
          </div>
        </div>

        {/* Trakt History entries list */}
        <div className="p-6 space-y-6">
          <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <Flame className="h-4 w-4 text-rose-500" />
            Atividade do Histórico de Visualização
          </h4>

          {data.items && data.items.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.items.map((item, index) => (
                <div key={index} className="bg-[#06080a]/80 border border-slate-900 p-4 rounded-2xl space-y-3 hover:border-slate-850 transition-all">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded">
                        {item.action === "rated" ? "Avaliou" : "Assistiu"}
                      </span>
                      <h5 className="font-bold text-slate-100 text-sm leading-snug">{item.title}</h5>
                    </div>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-slate-600 hover:text-slate-400 transition-all shrink-0 mt-0.5"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="flex flex-col gap-1 text-[10px] text-slate-500 font-mono">
                    {item.description && (
                      <p className="text-xs text-slate-400 italic font-sans bg-slate-950/40 p-2.5 rounded border border-slate-900/60 leading-relaxed mb-1">
                        "{item.description}"
                      </p>
                    )}
                    {item.pubDate && (
                      <span>Registrado em: {new Date(item.pubDate).toLocaleString("pt-BR")}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-500 italic">Nenhuma atividade recente encontrada no histórico público do Trakt.</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
