import React from "react";
import { motion } from "motion/react";
import { Tv, BookOpen, Heart } from "lucide-react";
import { AniListUser } from "../../types";

interface AnilistDetailProps {
  data: AniListUser;
}

export function AnilistDetail({ data }: AnilistDetailProps) {
  const formatWatchTime = (minutes: number) => {
    const days = Math.floor(minutes / (24 * 60));
    const hours = Math.floor((minutes % (24 * 60)) / 60);
    if (days > 0) return `${days}d e ${hours}h`;
    return `${hours} horas`;
  };

  return (
    <motion.div
      key="anilist"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-5xl mx-auto space-y-6"
    >
      {/* Banner Profile Cover */}
      <div className="bg-[#0c0f13] border border-slate-900 rounded-2xl overflow-hidden shadow-xl">
        <div className="h-44 bg-slate-950 relative overflow-hidden">
          {data.bannerImage ? (
            <img 
              src={data.bannerImage} 
              alt="banner" 
              className="w-full h-full object-cover opacity-50"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-sky-950 to-indigo-950" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f13] to-transparent" />
          
          {/* User Avatar Info overlap */}
          <div className="absolute bottom-5 left-6 flex items-center gap-4">
            <img 
              src={data.avatar?.large} 
              alt="avatar" 
              className="h-16 w-16 rounded-xl border-2 border-sky-400 object-cover bg-slate-900 shadow-lg"
            />
            <div>
              <h3 className="text-xl font-bold font-display text-white">{data.name}</h3>
              <p className="text-xs text-sky-400 font-mono">Anime & Manga Tracker</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* General Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-[#06080a]/80 border border-slate-900/60 p-4 rounded-xl text-center">
              <span className="text-[10px] text-slate-500 font-mono block mb-1">Tempo Assistindo</span>
              <strong className="text-sm font-bold text-sky-400">{formatWatchTime(data.stats?.watchedTime || 0)}</strong>
            </div>
            <div className="bg-[#06080a]/80 border border-slate-900/60 p-4 rounded-xl text-center">
              <span className="text-[10px] text-slate-500 font-mono block mb-1">Capítulos Lidos</span>
              <strong className="text-sm font-bold text-sky-400">{data.stats?.chaptersRead || 0}</strong>
            </div>
            <div className="bg-[#06080a]/80 border border-slate-900/60 p-4 rounded-xl text-center">
              <span className="text-[10px] text-slate-500 font-mono block mb-1">Nota Média</span>
              <strong className="text-sm font-bold text-sky-400">
                {data.stats?.animeListScores?.meanScore ? `${data.stats.animeListScores.meanScore}/100` : "N/A"}
              </strong>
            </div>
            <div className="bg-[#06080a]/80 border border-slate-900/60 p-4 rounded-xl text-center">
              <span className="text-[10px] text-slate-500 font-mono block mb-1">Desvio Padrão</span>
              <strong className="text-sm font-bold text-sky-400">
                {data.stats?.animeListScores?.standardDeviation ? data.stats.animeListScores.standardDeviation : "N/A"}
              </strong>
            </div>
          </div>

          {/* Detailed API Statistics Block */}
          {data.statistics && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#06080a]/30 border border-slate-900/40 p-5 rounded-2xl">
              {/* Anime Statistics Section */}
              {data.statistics.anime && (
                <div className="space-y-4">
                  <h4 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2">
                    <Tv className="h-4 w-4" />
                    Estatísticas de Anime
                  </h4>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-[#0c0f13]/80 p-2.5 rounded-lg border border-slate-900/40 text-center">
                      <span className="text-[9px] text-slate-500 block">Total</span>
                      <strong className="text-xs font-bold text-white">{data.statistics.anime.count}</strong>
                    </div>
                    <div className="bg-[#0c0f13]/80 p-2.5 rounded-lg border border-slate-900/40 text-center">
                      <span className="text-[9px] text-slate-500 block">Episódios</span>
                      <strong className="text-xs font-bold text-white">{data.statistics.anime.episodesWatched}</strong>
                    </div>
                    <div className="bg-[#0c0f13]/80 p-2.5 rounded-lg border border-slate-900/40 text-center">
                      <span className="text-[9px] text-slate-500 block">Nota Média</span>
                      <strong className="text-xs font-bold text-white">
                        {data.statistics.anime.meanScore ? `${data.statistics.anime.meanScore}/100` : "N/A"}
                      </strong>
                    </div>
                  </div>

                  {/* Statuses distribution */}
                  {data.statistics.anime.statuses && data.statistics.anime.statuses.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-[10px] text-slate-400 font-mono block">Distribuição por Status</span>
                      <div className="space-y-1.5">
                        {data.statistics.anime.statuses.slice(0, 4).map((st) => {
                          const percentage = data.statistics.anime?.count 
                            ? Math.round((st.count / data.statistics.anime.count) * 100) 
                            : 0;
                          
                          const statusLabels: Record<string, string> = {
                            COMPLETED: "Completo",
                            PLANNING: "Planejando",
                            CURRENT: "Assistindo",
                            PAUSED: "Pausado",
                            DROPPED: "Abandonado",
                            REPEATING: "Revendo"
                          };

                          const statusColors: Record<string, string> = {
                            COMPLETED: "bg-emerald-500",
                            PLANNING: "bg-sky-500",
                            CURRENT: "bg-purple-500",
                            PAUSED: "bg-amber-500",
                            DROPPED: "bg-rose-500",
                            REPEATING: "bg-indigo-500"
                          };

                          return (
                            <div key={st.status} className="text-[11px]">
                              <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
                                <span>{statusLabels[st.status] || st.status}</span>
                                <span className="font-mono">{st.count} ({percentage}%)</span>
                              </div>
                              <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                                <div className={`h-full ${statusColors[st.status] || "bg-slate-500"}`} style={{ width: `${percentage}%` }} />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Genres distribution */}
                  {data.statistics.anime.genres && data.statistics.anime.genres.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-[10px] text-slate-400 font-mono block">Gêneros Favoritos</span>
                      <div className="flex flex-wrap gap-1.5">
                        {data.statistics.anime.genres.slice(0, 5).map((g) => (
                          <span key={g.genre} className="text-[10px] bg-sky-500/5 text-sky-400 border border-sky-500/10 px-2.5 py-0.5 rounded-full font-sans">
                            {g.genre} <strong className="text-slate-500 font-mono ml-0.5">{g.count}</strong>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Manga Statistics Section */}
              {data.statistics.manga && (
                <div className="space-y-4">
                  <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Estatísticas de Mangá
                  </h4>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-[#0c0f13]/80 p-2.5 rounded-lg border border-slate-900/40 text-center">
                      <span className="text-[9px] text-slate-500 block">Total</span>
                      <strong className="text-xs font-bold text-white">{data.statistics.manga.count}</strong>
                    </div>
                    <div className="bg-[#0c0f13]/80 p-2.5 rounded-lg border border-slate-900/40 text-center">
                      <span className="text-[9px] text-slate-500 block">Vols Lidos</span>
                      <strong className="text-xs font-bold text-white">{data.statistics.manga.volumesRead}</strong>
                    </div>
                    <div className="bg-[#0c0f13]/80 p-2.5 rounded-lg border border-slate-900/40 text-center">
                      <span className="text-[9px] text-slate-500 block">Nota Média</span>
                      <strong className="text-xs font-bold text-white">
                        {data.statistics.manga.meanScore ? `${data.statistics.manga.meanScore}/100` : "N/A"}
                      </strong>
                    </div>
                  </div>

                  {/* Statuses distribution */}
                  {data.statistics.manga.statuses && data.statistics.manga.statuses.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-[10px] text-slate-400 font-mono block">Distribuição por Status</span>
                      <div className="space-y-1.5">
                        {data.statistics.manga.statuses.slice(0, 4).map((st) => {
                          const percentage = data.statistics.manga?.count 
                            ? Math.round((st.count / data.statistics.manga.count) * 100) 
                            : 0;
                          
                          const statusLabels: Record<string, string> = {
                            COMPLETED: "Completo",
                            PLANNING: "Planejando",
                            CURRENT: "Lendo",
                            PAUSED: "Pausado",
                            DROPPED: "Abandonado",
                            REPEATING: "Relendo"
                          };

                          const statusColors: Record<string, string> = {
                            COMPLETED: "bg-emerald-500",
                            PLANNING: "bg-sky-500",
                            CURRENT: "bg-purple-500",
                            PAUSED: "bg-amber-500",
                            DROPPED: "bg-rose-500",
                            REPEATING: "bg-indigo-500"
                          };

                          return (
                            <div key={st.status} className="text-[11px]">
                              <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
                                <span>{statusLabels[st.status] || st.status}</span>
                                <span className="font-mono">{st.count} ({percentage}%)</span>
                              </div>
                              <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                                <div className={`h-full ${statusColors[st.status] || "bg-slate-500"}`} style={{ width: `${percentage}%` }} />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Genres distribution */}
                  {data.statistics.manga.genres && data.statistics.manga.genres.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-[10px] text-slate-400 font-mono block">Gêneros Favoritos</span>
                      <div className="flex flex-wrap gap-1.5">
                        {data.statistics.manga.genres.slice(0, 5).map((g) => (
                          <span key={g.genre} className="text-[10px] bg-emerald-500/5 text-emerald-400 border border-emerald-500/10 px-2.5 py-0.5 rounded-full font-sans">
                            {g.genre} <strong className="text-slate-500 font-mono ml-0.5">{g.count}</strong>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Favorites Lists */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Favorite Anime */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <Heart className="h-4 w-4 text-rose-500 animate-pulse" />
                Animes Favoritos ({data.favourites?.anime?.nodes?.length || 0})
              </h4>
              {data.favourites?.anime?.nodes?.length ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {data.favourites.anime.nodes.slice(0, 6).map((node) => (
                    <div key={node.id} className="bg-[#06080a] border border-slate-900 rounded-xl overflow-hidden hover:border-slate-800 transition-all group">
                      <div className="h-28 bg-slate-900 overflow-hidden relative">
                        <img 
                          src={node.coverImage?.large} 
                          alt={node.title.english || node.title.romaji} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-all"
                        />
                      </div>
                      <div className="p-2">
                        <p className="text-xs font-bold text-slate-200 line-clamp-1">
                          {node.title.english || node.title.romaji}
                        </p>
                        <p className="text-[10px] text-slate-500 truncate mt-0.5">
                          {node.genres?.slice(0, 2).join(", ")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic">Nenhum anime favoritado.</p>
              )}
            </div>

            {/* Favorite Manga */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-emerald-400" />
                Mangás Favoritos ({data.favourites?.manga?.nodes?.length || 0})
              </h4>
              {data.favourites?.manga?.nodes?.length ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {data.favourites.manga.nodes.slice(0, 6).map((node) => (
                    <div key={node.id} className="bg-[#06080a] border border-slate-900 rounded-xl overflow-hidden hover:border-slate-800 transition-all group">
                      <div className="h-28 bg-slate-900 overflow-hidden relative">
                        <img 
                          src={node.coverImage?.large} 
                          alt={node.title.english || node.title.romaji} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-all"
                        />
                      </div>
                      <div className="p-2">
                        <p className="text-xs font-bold text-slate-200 line-clamp-1">
                          {node.title.english || node.title.romaji}
                        </p>
                        <p className="text-[10px] text-slate-500 truncate mt-0.5">
                          {node.genres?.slice(0, 2).join(", ")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic">Nenhum mangá favoritado.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
