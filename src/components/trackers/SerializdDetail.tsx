import React from "react";
import { motion } from "motion/react";
import { Heart, Tv, ExternalLink } from "lucide-react";
import { SerializdUser } from "../../types";

interface SerializdDetailProps {
  data: SerializdUser;
}

export function SerializdDetail({ data }: SerializdDetailProps) {
  return (
    <motion.div
      key="serializd"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-5xl mx-auto space-y-6"
    >
      <div className="bg-[#0c0f13] border border-slate-900 rounded-2xl overflow-hidden shadow-xl">
        {/* Header Banner */}
        <div className="p-6 bg-gradient-to-r from-teal-950/20 to-slate-900/60 border-b border-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {data.profilePicture ? (
              <img 
                src={data.profilePicture} 
                alt="avatar" 
                className="h-16 w-14 rounded-2xl border border-teal-500/30 object-cover shadow-lg"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="h-14 w-14 rounded-2xl bg-teal-600 text-white font-black font-display flex items-center justify-center text-xl shadow-lg">
                {data.username.substring(0, 2).toUpperCase()}
              </div>
            )}
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                {data.username}
              </h3>
              <p className="text-xs text-teal-400 font-mono">
                Perfil Serializd • <a href={`https://www.serializd.com/user/${data.username}`} target="_blank" rel="noreferrer" className="underline inline-flex items-center gap-1 hover:text-teal-300">serializd.com <ExternalLink className="h-3 w-3" /></a>
              </p>
              {data.joinedOn && (
                <p className="text-[11px] text-slate-400 font-mono">
                  Membro desde {new Date(data.joinedOn).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
                </p>
              )}
            </div>
          </div>
          <div className="bg-[#06080a] px-4 py-2 border border-slate-850 rounded-xl text-center self-stretch sm:self-auto flex sm:flex-col justify-center gap-1">
            <span className="text-[10px] text-slate-500 font-mono block">Diário Recente</span>
            <strong className="text-sm font-bold text-teal-400">{data.items?.length || 0} logs de episódios</strong>
          </div>
        </div>

        {/* Scraped Stats Bento */}
        <div className="p-6 border-b border-slate-900/60 bg-[#06080a]/30 grid grid-cols-2 sm:grid-cols-5 gap-4">
          <div className="bg-[#0c0f13]/80 border border-slate-900 rounded-xl p-3.5 text-center">
            <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-wider">Séries</span>
            <strong className="text-lg font-bold text-teal-400 font-mono mt-1 block">{data.stats?.showsCount || 0}</strong>
          </div>
          <div className="bg-[#0c0f13]/80 border border-slate-900 rounded-xl p-3.5 text-center">
            <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-wider">Reviews</span>
            <strong className="text-lg font-bold text-teal-400 font-mono mt-1 block">{data.stats?.reviewsCount || 0}</strong>
          </div>
          <div className="bg-[#0c0f13]/80 border border-slate-900 rounded-xl p-3.5 text-center">
            <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-wider">Lista Desejos</span>
            <strong className="text-lg font-bold text-teal-400 font-mono mt-1 block">{data.stats?.watchlistCount || 0}</strong>
          </div>
          <div className="bg-[#0c0f13]/80 border border-slate-900 rounded-xl p-3.5 text-center">
            <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-wider">Seguidores</span>
            <strong className="text-lg font-bold text-teal-400 font-mono mt-1 block">{data.stats?.followersCount || 0}</strong>
          </div>
          <div className="bg-[#0c0f13]/80 border border-slate-900 rounded-xl p-3.5 text-center">
            <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-wider">Seguindo</span>
            <strong className="text-lg font-bold text-teal-400 font-mono mt-1 block">{data.stats?.followingCount || 0}</strong>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Biography */}
          {data.biography && (
            <div className="bg-[#06080a] p-4 rounded-xl border border-slate-900 text-xs text-slate-400 space-y-1">
              <span className="text-[10px] text-slate-500 font-mono uppercase block">Biografia do Serializd</span>
              <p className="text-slate-300 leading-relaxed">{data.biography}</p>
            </div>
          )}

          {/* Favorite Shows Section */}
          {data.favoriteShows && data.favoriteShows.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <Heart className="h-4 w-4 text-teal-400 fill-teal-400/20" />
                Séries Favoritas
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {data.favoriteShows.map((show) => (
                  <a 
                    key={show.showId} 
                    href={`https://www.serializd.com/show/${show.showId}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="group bg-[#06080a]/80 border border-slate-900 rounded-xl p-3 flex flex-col items-center justify-between hover:border-teal-500/20 transition-all text-center gap-2"
                  >
                    {show.bannerImage ? (
                      <div className="aspect-[2/3] w-20 rounded-lg overflow-hidden border border-slate-950 shadow-md group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src={show.bannerImage} 
                          alt={show.showName} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[2/3] w-20 rounded-lg bg-slate-950 flex flex-col items-center justify-center border border-dashed border-slate-850 text-slate-600 font-mono text-[9px]">
                        <Tv className="h-5 w-5 mb-1 text-slate-700" />
                        Sem Imagem
                      </div>
                    )}
                    <span className="text-xs font-bold text-slate-200 group-hover:text-teal-400 transition-colors line-clamp-2 leading-tight">
                      {show.showName}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Logged TV Shows List */}
          <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <Tv className="h-4 w-4 text-teal-400" />
            Reviews & Séries Recentes
          </h4>

          {data.items && data.items.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.items.map((item) => (
                <div key={item.id} className="bg-[#06080a]/80 border border-slate-900 p-4 rounded-2xl flex gap-4 hover:border-slate-850 transition-all">
                  {item.bannerUrl && (
                    <div className="h-28 w-20 rounded-lg bg-slate-950 overflow-hidden shrink-0 relative border border-slate-900 shadow">
                      <img 
                        src={item.bannerUrl} 
                        alt={item.showName} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <h5 className="font-bold text-slate-100 text-sm truncate">{item.showName}</h5>
                      {item.rating && (
                        <span className="text-[10px] font-mono font-bold bg-teal-500/10 text-teal-400 border border-teal-500/20 px-2 py-0.5 rounded shrink-0">
                          ★ {item.rating}/10
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] text-slate-500 font-mono">
                      {item.seasonName || "Série Completa"} {item.episodeName ? `• ${item.episodeName}` : ""}
                    </p>
                    {item.reviewText && (
                      <p className="text-xs text-slate-400 line-clamp-3 bg-slate-900/30 p-2.5 rounded border border-slate-900/60 leading-relaxed italic">
                        "{item.reviewText}"
                      </p>
                    )}
                    {item.isSpoiler && (
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 bg-red-500/10 text-red-400 border border-red-500/20 rounded">
                        Spoilers
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-500 italic">Nenhum show recente encontrado no diário público.</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
