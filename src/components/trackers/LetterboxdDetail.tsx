import React from "react";
import { motion } from "motion/react";
import { Heart, Film, MapPin, ExternalLink } from "lucide-react";
import { LetterboxdUser } from "../../types";

interface LetterboxdDetailProps {
  data: LetterboxdUser;
}

export function LetterboxdDetail({ data }: LetterboxdDetailProps) {
  return (
    <motion.div
      key="letterboxd"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-5xl mx-auto space-y-6"
    >
      <div className="bg-[#0c0f13] border border-slate-900 rounded-2xl overflow-hidden shadow-xl">
        {/* Header Banner */}
        <div className="p-6 bg-gradient-to-r from-orange-950/20 to-slate-900/60 border-b border-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            {data.avatar ? (
              <img 
                src={data.avatar} 
                alt={data.displayName} 
                className="h-16 w-14 rounded-2xl object-cover border border-orange-500/20 shadow-md shrink-0"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="h-14 w-14 rounded-2xl bg-orange-600 text-white font-black font-display flex items-center justify-center text-xl shadow-lg shrink-0">
                {data.username.substring(0, 2).toUpperCase()}
              </div>
            )}
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                {data.displayName}
                <span className="text-xs font-mono font-normal text-slate-500">@{data.username}</span>
              </h3>
              <p className="text-xs text-orange-400 font-mono">
                Perfil Letterboxd • <a href={data.profileUrl} target="_blank" rel="noreferrer" className="underline inline-flex items-center gap-1 hover:text-orange-300">Letterboxd.com <ExternalLink className="h-3 w-3" /></a>
              </p>
              {data.location && (
                <p className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                  <MapPin className="h-3 w-3 text-orange-500" />
                  {data.location}
                </p>
              )}
              {data.bio && (
                <p className="text-xs text-slate-300 mt-2 border-l-2 border-orange-500/30 pl-2 italic leading-relaxed max-w-xl">
                  {data.bio}
                </p>
              )}
            </div>
          </div>
          <div className="bg-[#06080a] px-4 py-2 border border-slate-850 rounded-xl text-center self-stretch sm:self-auto flex sm:flex-col justify-center gap-1">
            <span className="text-[10px] text-slate-500 font-mono block">Diário Recente</span>
            <strong className="text-sm font-bold text-orange-400">{data.items?.length || 0} filmes logados</strong>
          </div>
        </div>

        {/* Scraped Stats Bento */}
        {data.stats && (
          <div className="p-6 border-b border-slate-900/60 bg-[#06080a]/30 grid grid-cols-2 sm:grid-cols-5 gap-4">
            {data.stats.films && (
              <div className="bg-[#0c0f13]/80 border border-slate-900 rounded-xl p-3.5 text-center">
                <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-wider">Filmes</span>
                <strong className="text-lg font-bold text-orange-400 font-mono mt-1 block">{data.stats.films}</strong>
              </div>
            )}
            {data.stats.thisYear && (
              <div className="bg-[#0c0f13]/80 border border-slate-900 rounded-xl p-3.5 text-center">
                <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-wider">Este Ano</span>
                <strong className="text-lg font-bold text-orange-400 font-mono mt-1 block">{data.stats.thisYear}</strong>
              </div>
            )}
            {data.stats.lists && (
              <div className="bg-[#0c0f13]/80 border border-slate-900 rounded-xl p-3.5 text-center">
                <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-wider">Listas</span>
                <strong className="text-lg font-bold text-orange-400 font-mono mt-1 block">{data.stats.lists}</strong>
              </div>
            )}
            {data.stats.following && (
              <div className="bg-[#0c0f13]/80 border border-slate-900 rounded-xl p-3.5 text-center">
                <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-wider">Seguindo</span>
                <strong className="text-lg font-bold text-orange-400 font-mono mt-1 block">{data.stats.following}</strong>
              </div>
            )}
            {data.stats.followers && (
              <div className="bg-[#0c0f13]/80 border border-slate-900 rounded-xl p-3.5 text-center">
                <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-wider">Seguidores</span>
                <strong className="text-lg font-bold text-orange-400 font-mono mt-1 block">{data.stats.followers}</strong>
              </div>
            )}
          </div>
        )}

        {/* Favorite Films Section */}
        {data.favorites && data.favorites.length > 0 && (
          <div className="p-6 border-b border-slate-900/60 bg-[#06080a]/10">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 mb-4">
              <Heart className="h-4 w-4 text-orange-500" />
              Filmes Favoritos
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {data.favorites.map((fav, fIdx) => (
                <a 
                  key={fIdx} 
                  href={fav.link}
                  target="_blank" 
                  rel="noreferrer"
                  className="group bg-[#06080a]/80 border border-slate-900 rounded-xl p-3 flex flex-col items-center justify-between hover:border-orange-500/20 transition-all text-center gap-2"
                >
                  {fav.posterUrl ? (
                    <div className="aspect-[2/3] w-20 rounded-lg overflow-hidden border border-slate-950 shadow-md group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={fav.posterUrl} 
                        alt={fav.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[2/3] w-20 rounded-lg bg-slate-950 flex flex-col items-center justify-center border border-dashed border-slate-850 text-slate-600 font-mono text-[9px]">
                      <Film className="h-5 w-5 mb-1 text-slate-700" />
                      Sem Poster
                    </div>
                  )}
                  <span className="text-xs font-bold text-slate-200 group-hover:text-orange-400 transition-colors line-clamp-2 leading-tight">
                    {fav.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Film Entries List */}
        <div className="p-6 space-y-6">
          <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <Film className="h-4 w-4 text-orange-500" />
            Filmes Assistidos & Resenhas
          </h4>
          
          {data.items && data.items.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.items.map((item, index) => (
                <div key={index} className="bg-[#06080a]/80 border border-slate-900 p-4 rounded-2xl flex gap-4 hover:border-slate-850 transition-all">
                  {item.imageUrl && (
                    <div className="h-28 w-20 rounded-lg bg-slate-950 overflow-hidden shrink-0 relative border border-slate-900 shadow">
                      <img 
                        src={item.imageUrl} 
                        alt={item.filmTitle} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <h5 className="font-bold text-slate-100 text-sm truncate">{item.filmTitle}</h5>
                      {item.rating && (
                        <span className="text-[10px] font-mono font-bold bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2 py-0.5 rounded shrink-0">
                          ★ {item.rating}/5
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] text-slate-500 font-mono">
                      Ano: {item.filmYear || "N/A"} • Publicado em {new Date(item.pubDate).toLocaleDateString("pt-BR")}
                    </p>
                    {item.review && (
                      <p className="text-xs text-slate-400 line-clamp-3 bg-slate-900/30 p-2.5 rounded border border-slate-900/60 leading-relaxed italic">
                        "{item.review}"
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-500 italic">Nenhum filme recente encontrado no diário público.</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
