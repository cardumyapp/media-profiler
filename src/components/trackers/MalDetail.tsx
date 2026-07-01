import React from "react";
import { motion } from "motion/react";
import { Tv, BookOpen, Heart } from "lucide-react";
import { MALUser } from "../../types";

interface MalDetailProps {
  data: MALUser;
}

export function MalDetail({ data }: MalDetailProps) {
  return (
    <motion.div
      key="mal"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-5xl mx-auto space-y-6"
    >
      <div className="bg-[#0c0f13] border border-slate-900 rounded-2xl overflow-hidden shadow-xl">
        <div className="p-6 bg-gradient-to-r from-blue-950/20 to-slate-900/60 border-b border-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {data.images?.jpg?.image_url ? (
              <img 
                src={data.images.jpg.image_url} 
                alt="avatar" 
                className="h-14 w-14 rounded-2xl border border-blue-500 object-cover bg-slate-900 shadow-lg"
              />
            ) : (
              <div className="h-14 w-14 rounded-2xl bg-blue-600 text-white font-black font-display flex items-center justify-center text-xl shadow-lg">
                {data.username.substring(0, 2).toUpperCase()}
              </div>
            )}
            <div>
              <h3 className="text-xl font-bold text-white">{data.username}</h3>
              <p className="text-xs text-blue-400 font-mono">
                Perfil do MyAnimeList • Membro desde {data.joined ? new Date(data.joined).toLocaleDateString("pt-BR") : "N/A"}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* MAL statistics blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Anime statistics */}
            {data.statistics?.anime && (
              <div className="bg-[#06080a] border border-slate-900 p-5 rounded-2xl space-y-3">
                <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                  <Tv className="h-4 w-4" />
                  Estatísticas de Anime
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-[#090b0e] p-3 rounded-xl text-center border border-slate-900">
                    <span className="text-[10px] text-slate-500 font-mono block">Concluídos</span>
                    <strong className="text-base font-bold text-slate-200">{data.statistics.anime.completed}</strong>
                  </div>
                  <div className="bg-[#090b0e] p-3 rounded-xl text-center border border-slate-900">
                    <span className="text-[10px] text-slate-500 font-mono block">Dias Assistindo</span>
                    <strong className="text-base font-bold text-slate-200">{data.statistics.anime.days_watched}</strong>
                  </div>
                  <div className="bg-[#090b0e] p-3 rounded-xl text-center border border-slate-900">
                    <span className="text-[10px] text-slate-500 font-mono block">Média de Nota</span>
                    <strong className="text-base font-bold text-slate-200">{data.statistics.anime.mean_score}</strong>
                  </div>
                </div>
              </div>
            )}

            {/* Manga statistics */}
            {data.statistics?.manga && (
              <div className="bg-[#06080a] border border-slate-900 p-5 rounded-2xl space-y-3">
                <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Estatísticas de Mangá
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-[#090b0e] p-3 rounded-xl text-center border border-slate-900">
                    <span className="text-[10px] text-slate-500 font-mono block">Concluídos</span>
                    <strong className="text-base font-bold text-slate-200">{data.statistics.manga.completed}</strong>
                  </div>
                  <div className="bg-[#090b0e] p-3 rounded-xl text-center border border-slate-900">
                    <span className="text-[10px] text-slate-500 font-mono block">Dias Lendo</span>
                    <strong className="text-base font-bold text-slate-200">{data.statistics.manga.days_read}</strong>
                  </div>
                  <div className="bg-[#090b0e] p-3 rounded-xl text-center border border-slate-900">
                    <span className="text-[10px] text-slate-500 font-mono block">Média de Nota</span>
                    <strong className="text-base font-bold text-slate-200">{data.statistics.manga.mean_score}</strong>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* MAL Favorites Anime & Manga */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Favorite Anime */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <Heart className="h-4 w-4 text-rose-500" />
                Animes Favoritos ({data.favorites?.anime?.length || 0})
              </h4>
              {data.favorites?.anime?.length ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {data.favorites.anime.slice(0, 6).map((anime, index) => (
                    <div key={index} className="bg-[#06080a] border border-slate-900 rounded-xl overflow-hidden hover:border-slate-800 transition-all group">
                      <div className="h-28 bg-slate-900 overflow-hidden relative">
                        {anime.images?.jpg?.large_image_url ? (
                          <img 
                            src={anime.images.jpg.large_image_url} 
                            alt={anime.title} 
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-all"
                          />
                        ) : (
                          <div className="w-full h-full bg-slate-950 flex items-center justify-center text-[10px] italic text-slate-600">Sem Capa</div>
                        )}
                      </div>
                      <div className="p-2">
                        <p className="text-xs font-bold text-slate-200 line-clamp-2 leading-tight">
                          {anime.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic">Nenhum anime favoritado no MyAnimeList.</p>
              )}
            </div>

            {/* Favorite Manga */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-emerald-400" />
                Mangás Favoritos ({data.favorites?.manga?.length || 0})
              </h4>
              {data.favorites?.manga?.length ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {data.favorites.manga.slice(0, 6).map((manga, index) => (
                    <div key={index} className="bg-[#06080a] border border-slate-900 rounded-xl overflow-hidden hover:border-slate-800 transition-all group">
                      <div className="h-28 bg-slate-900 overflow-hidden relative">
                        {manga.images?.jpg?.large_image_url ? (
                          <img 
                            src={manga.images.jpg.large_image_url} 
                            alt={manga.title} 
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-all"
                          />
                        ) : (
                          <div className="w-full h-full bg-slate-950 flex items-center justify-center text-[10px] italic text-slate-600">Sem Capa</div>
                        )}
                      </div>
                      <div className="p-2">
                        <p className="text-xs font-bold text-slate-200 line-clamp-2 leading-tight">
                          {manga.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic">Nenhum mangá favoritado no MyAnimeList.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
