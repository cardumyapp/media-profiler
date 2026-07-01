import React, { useState } from "react";
import { motion } from "motion/react";
import { Heart, Clock, Award, User, Sparkles, ExternalLink, AlertCircle } from "lucide-react";
import { LastFMUser } from "../../types";

interface LastfmDetailProps {
  data: LastFMUser;
}

type LastfmTab = "recent" | "loved" | "toptracks" | "topartists" | "recommended";

export function LastfmDetail({ data }: LastfmDetailProps) {
  const [lastfmTab, setLastfmTab] = useState<LastfmTab>("recent");

  return (
    <motion.div
      key="lastfm"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-5xl mx-auto space-y-6"
    >
      <div className="bg-[#0c0f13] border border-slate-900 rounded-2xl overflow-hidden shadow-xl">
        {/* Header Banner */}
        <div className="p-6 bg-gradient-to-r from-red-950/20 to-slate-900/60 border-b border-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-red-600 text-white font-black font-display flex items-center justify-center text-xl shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
              <span className="relative z-10">{data.username.substring(0, 2).toUpperCase()}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                {data.username}
                <span className="px-2 py-0.5 rounded-full text-[9px] bg-red-500/10 text-red-400 border border-red-500/20 font-mono font-bold uppercase tracking-wide">Last.fm</span>
              </h3>
              <p className="text-xs text-red-400 font-mono mt-0.5">
                Histórico de Músicas • <a href={data.profileUrl} target="_blank" rel="noreferrer" className="underline inline-flex items-center gap-1 hover:text-red-300">Last.fm <ExternalLink className="h-3 w-3" /></a>
              </p>
            </div>
          </div>
          <div className="bg-[#06080a] px-4 py-2 border border-slate-850 rounded-xl text-center self-stretch sm:self-auto">
            <span className="text-[10px] text-slate-500 font-mono block">Scrobbles Obtidos</span>
            <strong className="text-base font-bold text-red-400">{data.items?.length || 0} faixas</strong>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="px-6 py-2 bg-[#06080a] border-b border-slate-900 flex flex-wrap gap-2 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setLastfmTab("recent")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all flex items-center gap-1.5 ${
              lastfmTab === "recent"
                ? "bg-red-500/10 text-red-400 border border-red-500/30"
                : "text-slate-400 hover:text-slate-200 border border-transparent"
            }`}
          >
            <Clock className="h-3.5 w-3.5" />
            Recentes ({data.items?.length || 0})
          </button>
          <button
            onClick={() => setLastfmTab("loved")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all flex items-center gap-1.5 ${
              lastfmTab === "loved"
                ? "bg-red-500/10 text-red-400 border border-red-500/30"
                : "text-slate-400 hover:text-slate-200 border border-transparent"
            }`}
          >
            <Heart className="h-3.5 w-3.5" />
            Favoritas ({data.lovedTracks?.length || 0})
          </button>
          <button
            onClick={() => setLastfmTab("toptracks")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all flex items-center gap-1.5 ${
              lastfmTab === "toptracks"
                ? "bg-red-500/10 text-red-400 border border-red-500/30"
                : "text-slate-400 hover:text-slate-200 border border-transparent"
            }`}
          >
            <Award className="h-3.5 w-3.5" />
            Top Músicas ({data.topTracks?.length || 0})
          </button>
          <button
            onClick={() => setLastfmTab("topartists")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all flex items-center gap-1.5 ${
              lastfmTab === "topartists"
                ? "bg-red-500/10 text-red-400 border border-red-500/30"
                : "text-slate-400 hover:text-slate-200 border border-transparent"
            }`}
          >
            <User className="h-3.5 w-3.5" />
            Top Artistas ({data.topArtists?.length || 0})
          </button>
          <button
            onClick={() => setLastfmTab("recommended")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all flex items-center gap-1.5 ${
              lastfmTab === "recommended"
                ? "bg-red-500/10 text-red-400 border border-red-500/30"
                : "text-slate-400 hover:text-slate-200 border border-transparent"
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Recomendações ({data.recommendedTracks?.length || 0})
          </button>
        </div>

        {/* Last.fm History entries list */}
        <div className="p-6 space-y-6">
          {data.fallback && (
            <div className="bg-[#110d06] border border-amber-950 p-4 rounded-xl text-amber-300 text-xs flex items-start gap-3 leading-relaxed">
              <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-amber-500" />
              <div>
                <strong className="block mb-0.5">Perfil sem Histórico ou Privado</strong>
                Não conseguimos ler reproduções recentes do Last.fm para o usuário "<strong>{data.username}</strong>". Isso ocorre se o perfil for novo, não tiver scrobbles recentes, estiver configurado como privado ou se o nome de usuário não existir.
              </div>
            </div>
          )}

          {lastfmTab === "recent" && (
            <>
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <span className="relative flex h-2 w-2 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-duration-1000"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                Faixas Ouvidas Recentemente
              </h4>

              {data.items && data.items.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.items.map((item, index) => (
                    <div key={index} className="bg-[#06080a]/80 border border-slate-900 p-4 rounded-2xl flex items-center justify-between gap-4 hover:border-red-500/30 hover:bg-[#0c0d11]/40 transition-all duration-300 group">
                      <div className="flex items-center gap-3.5 overflow-hidden">
                        {/* Vinyl Disc Style Placeholder */}
                        <div className="h-10 w-10 rounded-full bg-slate-950 flex items-center justify-center border border-slate-880 shadow relative shrink-0 overflow-hidden">
                          <div className="absolute inset-2 rounded-full border border-dashed border-slate-800 animate-spin" style={{ animationDuration: '6s' }} />
                          <div className="h-3 w-3 rounded-full bg-red-500 z-10 border border-slate-950" />
                        </div>
                        <div className="overflow-hidden">
                          <h5 className="font-bold text-slate-100 text-sm truncate group-hover:text-red-400 transition-colors">{item.trackName}</h5>
                          <p className="text-xs text-slate-400 truncate mt-0.5">{item.artist}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 shrink-0">
                        {item.pubDate ? (
                          <span className="text-[10px] text-slate-500 font-mono">
                            {item.pubDate.includes("now playing") || item.pubDate.includes("reproduzindo") ? (
                              <span className="text-red-500 font-bold flex items-center gap-1">
                                TOCANDO AGORA
                              </span>
                            ) : (
                              item.pubDate
                            )}
                          </span>
                        ) : (
                          <span className="text-[10px] text-red-500 font-bold">AGORA</span>
                        )}
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-slate-600 hover:text-red-400 transition-all"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic">Nenhuma música recente encontrada no histórico público do Last.fm.</p>
              )}
            </>
          )}

          {lastfmTab === "loved" && (
            <>
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500" />
                Músicas Favoritadas (Loved Tracks)
              </h4>

              {data.lovedTracks && data.lovedTracks.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.lovedTracks.map((item, index) => (
                    <div key={index} className="bg-[#06080a]/80 border border-red-500/10 p-4 rounded-2xl flex items-center justify-between gap-4 hover:border-red-500/40 hover:bg-[#0c0d11]/40 transition-all duration-300 group">
                      <div className="flex items-center gap-3.5 overflow-hidden">
                        <div className="h-10 w-10 rounded-full bg-slate-950 flex items-center justify-center border border-red-955 shadow relative shrink-0 overflow-hidden">
                          <div className="absolute inset-2 rounded-full border border-dashed border-red-900/30 animate-spin" style={{ animationDuration: '8s' }} />
                          <Heart className="h-3 w-3 text-red-500 fill-red-500 z-10" />
                        </div>
                        <div className="overflow-hidden">
                          <h5 className="font-bold text-slate-100 text-sm truncate group-hover:text-red-400 transition-colors">{item.trackName}</h5>
                          <p className="text-xs text-slate-400 truncate mt-0.5">{item.artist}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 shrink-0">
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-slate-600 hover:text-red-400 transition-all"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic">Nenhuma música favorita encontrada no perfil público do Last.fm.</p>
              )}
            </>
          )}

          {lastfmTab === "toptracks" && (
            <>
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <Award className="h-4 w-4 text-amber-500" />
                Faixas Mais Tocadas (Top Tracks)
              </h4>

              {data.topTracks && data.topTracks.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.topTracks.map((item, index) => (
                    <div key={index} className="bg-[#06080a]/80 border border-slate-900 p-4 rounded-2xl flex items-center justify-between gap-4 hover:border-red-500/30 hover:bg-[#0c0d11]/40 transition-all duration-300 group">
                      <div className="flex items-center gap-3.5 overflow-hidden">
                        <div className="h-10 w-10 rounded-full bg-slate-950 flex items-center justify-center border border-slate-850 shadow relative shrink-0 overflow-hidden font-mono font-bold text-slate-500 text-xs">
                          #{index + 1}
                        </div>
                        <div className="overflow-hidden">
                          <h5 className="font-bold text-slate-100 text-sm truncate group-hover:text-red-400 transition-colors">{item.trackName}</h5>
                          <p className="text-xs text-slate-400 truncate mt-0.5">{item.artist}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 shrink-0">
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-slate-600 hover:text-red-400 transition-all"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic">Nenhum histórico de reproduções mais ouvidas disponível.</p>
              )}
            </>
          )}

          {lastfmTab === "topartists" && (
            <>
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <User className="h-4 w-4 text-blue-400" />
                Artistas Mais Tocados (Top Artists)
              </h4>

              {data.topArtists && data.topArtists.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {data.topArtists.map((item, index) => {
                    const artistName = item.title || item.trackName || "Artista Desconhecido";
                    return (
                      <div key={index} className="bg-[#06080a]/80 border border-slate-900 p-4 rounded-2xl flex items-center justify-between gap-3 hover:border-red-500/30 hover:bg-[#0c0d11]/40 transition-all duration-300 group font-sans">
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 shrink-0 font-mono text-xs text-slate-500 font-bold">
                            #{index + 1}
                          </div>
                          <div className="overflow-hidden">
                            <h5 className="font-bold text-slate-100 text-sm truncate group-hover:text-red-400 transition-colors">{artistName}</h5>
                            <p className="text-[10px] text-slate-500 font-mono uppercase mt-0.5">Artista</p>
                          </div>
                        </div>
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-slate-600 hover:text-red-400 transition-all shrink-0"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic">Nenhum artista mais ouvido disponível.</p>
              )}
            </>
          )}

          {lastfmTab === "recommended" && (
            <>
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-purple-400" />
                Sugestões de Recomendadas (Recommended Tracks)
              </h4>

              {data.recommendedTracks && data.recommendedTracks.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.recommendedTracks.map((item, index) => (
                    <div key={index} className="bg-[#06080a]/80 border border-purple-500/10 p-4 rounded-2xl flex items-center justify-between gap-4 hover:border-purple-500/40 hover:bg-[#0c0d11]/40 transition-all duration-300 group">
                      <div className="flex items-center gap-3.5 overflow-hidden">
                        <div className="h-10 w-10 rounded-full bg-slate-950 flex items-center justify-center border border-purple-950 shadow relative shrink-0 overflow-hidden">
                          <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                        </div>
                        <div className="overflow-hidden">
                          <h5 className="font-bold text-slate-100 text-sm truncate group-hover:text-purple-400 transition-colors">{item.trackName}</h5>
                          <p className="text-xs text-slate-400 truncate mt-0.5">{item.artist}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 shrink-0">
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-slate-600 hover:text-purple-400 transition-all"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic">Nenhuma recomendação de música encontrada para este perfil no momento.</p>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
