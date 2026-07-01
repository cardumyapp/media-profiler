import React, { useState, useEffect } from "react";
import { 
  Home, 
  Settings, 
  Tv, 
  Film, 
  BookOpen, 
  Search, 
  AlertCircle, 
  Flame, 
  Compass, 
  User, 
  Smile, 
  Clock, 
  Heart, 
  Award, 
  ChevronRight, 
  HelpCircle,
  ExternalLink,
  RefreshCw,
  TrendingUp,
  Ghost,
  Save,
  Star,
  CheckCircle2,
  XCircle,
  Database,
  Calendar,
  List,
  MessageSquare,
  Sparkles,
  Check,
  X,
  MapPin,
  Users
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { 
  AniListUser, 
  LetterboxdUser, 
  MALUser, 
  SerializdUser, 
  TraktUser, 
  LastFMUser,
  MyDramaListUser,
  SimklUser,
  SearchState 
} from "./types";

import { AnilistDetail } from "./components/trackers/AnilistDetail";
import { LetterboxdDetail } from "./components/trackers/LetterboxdDetail";
import { MalDetail } from "./components/trackers/MalDetail";
import { SerializdDetail } from "./components/trackers/SerializdDetail";
import { TraktDetail } from "./components/trackers/TraktDetail";
import { LastfmDetail } from "./components/trackers/LastfmDetail";
import { MydramalistDetail } from "./components/trackers/MydramalistDetail";
import { SimklDetail } from "./components/trackers/SimklDetail";

// ==========================================
// HIGH-FIDELITY BRAND LOGO COMPONENT IMPORTS
// ==========================================

export function AniListLogo({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#02A9FF" />
      <path d="M11.5 5L17.5 17.5H14L11.5 11.5L9 17.5H5.5L11.5 5Z" fill="white" />
      <path d="M14.5 13H17.5V15.5H14.5V13Z" fill="white" />
    </svg>
  );
}

export function LetterboxdLogo({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#14181c" />
      <circle cx="8" cy="12" r="3.2" fill="#ff8000" opacity="0.95" />
      <circle cx="12" cy="12" r="3.2" fill="#00e054" opacity="0.95" style={{ mixBlendMode: 'screen' }} />
      <circle cx="16" cy="12" r="3.2" fill="#40bcf4" opacity="0.95" style={{ mixBlendMode: 'screen' }} />
    </svg>
  );
}

export function MyAnimeListLogo({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#2e51a2" />
      <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="9" fontWeight="900" fontFamily="sans-serif" letterSpacing="-0.5">MAL</text>
    </svg>
  );
}

export function SerializdLogo({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#13c2c2" />
      <rect x="5" y="7" width="14" height="10" rx="2" fill="none" stroke="white" strokeWidth="2" />
      <circle cx="10" cy="12" r="1.5" fill="white" />
      <circle cx="14" cy="12" r="1.5" fill="white" />
      <path d="M9 5L11 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 5L13 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function TraktLogo({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#ed1c24" />
      <path d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M12 8V16M9 8H15" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function LastFMLogo({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#d51007" />
      <path d="M6 16.5c0-2 1.5-3.5 3.5-3.5 1 0 1.9.4 2.5 1.1l.2.2c.6.7 1.5 1.2 2.5 1.2 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1-1.5 0-2.7 1.1-3 2.5l-.2.9c-.4 2.2-2.3 3.8-4.5 3.8-2.8 0-5-2.2-5-5s2.2-5 5-5c2.3 0 4.3 1.6 4.8 3.8l.2.9c.5-2.7 2.8-4.7 5.5-4.7 3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5c-2.7 0-5-2-5.5-4.7l-.2-.9c-.5 2.2-2.5 3.8-4.8 3.8-.4 0-.8-.1-1.2-.3.1-.3.2-.6.2-.9z" fill="white" />
    </svg>
  );
}

export function MyDramaListLogo({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#011b33" />
      <path d="M6 17V7h4c1.66 0 3 1.34 3 3v4c0 1.66-1.34 3-3 3H6zm6-10h6v3h-3v1h3v3h-3v3h-3V7z" fill="#13a3f7" />
    </svg>
  );
}

export function SimklLogo({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#111" />
      <path d="M7 6h10v3H10v2h7v3H10v2h7v3H7V6z" fill="#fbc02d" />
    </svg>
  );
}

// Map tracker keys to display config
const trackerMeta = {
  anilist: {
    name: "AniList",
    color: "from-sky-500 to-indigo-500",
    textClass: "text-sky-400",
    bgClass: "bg-sky-500/10",
    borderClass: "border-sky-500/20",
    logo: <AniListLogo className="w-5 h-5" />,
    placeholder: "Ex: otaku_luna",
    desc: "Animes, mangás, estatísticas de leitura e tempo assistido."
  },
  letterboxd: {
    name: "Letterboxd",
    color: "from-orange-500 to-amber-500",
    textClass: "text-orange-400",
    bgClass: "bg-orange-500/10",
    borderClass: "border-orange-500/20",
    logo: <LetterboxdLogo className="w-5 h-5" />,
    placeholder: "Ex: cine_vitor",
    desc: "Diário de filmes, resenhas e avaliações de cinema.",
    noNativeApi: true
  },
  mal: {
    name: "MyAnimeList",
    color: "from-blue-600 to-indigo-700",
    textClass: "text-blue-400",
    bgClass: "bg-blue-500/10",
    borderClass: "border-blue-500/20",
    logo: <MyAnimeListLogo className="w-5 h-5" />,
    placeholder: "Ex: naruto_shipp",
    desc: "Seu perfil clássico de animes, mangás e favoritos."
  },
  serializd: {
    name: "Serializd",
    color: "from-teal-500 to-emerald-500",
    textClass: "text-teal-400",
    bgClass: "bg-teal-500/10",
    borderClass: "border-teal-500/20",
    logo: <SerializdLogo className="w-5 h-5" />,
    placeholder: "Ex: tv_maratonador",
    desc: "Avaliações e diário de séries de TV e episódios.",
    noNativeApi: true
  },
  trakt: {
    name: "Trakt.tv",
    color: "from-rose-500 to-red-600",
    textClass: "text-rose-400",
    bgClass: "bg-rose-500/10",
    borderClass: "border-rose-500/20",
    logo: <TraktLogo className="w-5 h-5" />,
    placeholder: "Ex: pop_geek",
    desc: "Histórico automático de filmes, séries e episódios assistidos."
  },
  lastfm: {
    name: "Last.fm",
    color: "from-red-600 to-rose-700",
    textClass: "text-red-400",
    bgClass: "bg-red-500/10",
    borderClass: "border-red-500/20",
    logo: <LastFMLogo className="w-5 h-5" />,
    placeholder: "Ex: audiopile",
    desc: "Suas músicas reproduzidas, artistas favoritos e histórico de audição."
  },
  mydramalist: {
    name: "MyDramaList",
    color: "from-blue-500 to-sky-600",
    textClass: "text-blue-400",
    bgClass: "bg-blue-500/10",
    borderClass: "border-blue-500/20",
    logo: <MyDramaListLogo className="w-5 h-5" />,
    placeholder: "Ex: dorama_lover",
    desc: "Seu diário e estatísticas de dramas e séries asiáticas.",
    noNativeApi: true
  },
  simkl: {
    name: "Simkl",
    color: "from-yellow-600 to-amber-500",
    textClass: "text-yellow-400",
    bgClass: "bg-yellow-500/10",
    borderClass: "border-yellow-500/20",
    logo: <SimklLogo className="w-5 h-5" />,
    placeholder: "Ex: cinefilo_simkl",
    desc: "Seu perfil unificado de filmes, séries e animes.",
    noNativeApi: true
  }
};

const categories = [
  { name: "Animes", keys: ["anilist", "mal", "simkl"] as const },
  { name: "Filmes", keys: ["letterboxd", "simkl"] as const },
  { name: "Séries", keys: ["serializd", "trakt", "simkl"] as const },
  { name: "Doramas", keys: ["mydramalist"] as const },
  { name: "Músicas", keys: ["lastfm"] as const },
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Favorites configuration (eleger fonte favorita por categoria)
  const [favorites, setFavorites] = useState<{ [category: string]: string }>(() => {
    return {
      Animes: localStorage.getItem("favorite_Animes") || "anilist",
      Filmes: localStorage.getItem("favorite_Filmes") || "letterboxd",
      Séries: localStorage.getItem("favorite_Séries") || "serializd",
      Doramas: localStorage.getItem("favorite_Doramas") || "mydramalist",
      Músicas: localStorage.getItem("favorite_Músicas") || "lastfm",
    };
  });

  const handleSetFavorite = (category: string, key: string) => {
    setFavorites(prev => {
      const updated = { ...prev, [category]: key };
      localStorage.setItem(`favorite_${category}`, key);
      return updated;
    });
  };

  // Trackers configuration
  const [config, setConfig] = useState(() => {
    return {
      anilist: { 
        enabled: localStorage.getItem("enabled_anilist") !== "false", 
        nickname: localStorage.getItem("nick_anilist") || "" 
      },
      letterboxd: { 
        enabled: localStorage.getItem("enabled_letterboxd") !== "false", 
        nickname: localStorage.getItem("nick_letterboxd") || "" 
      },
      mal: { 
        enabled: localStorage.getItem("enabled_mal") !== "false", 
        nickname: localStorage.getItem("nick_mal") || "" 
      },
      serializd: { 
        enabled: localStorage.getItem("enabled_serializd") !== "false", 
        nickname: localStorage.getItem("nick_serializd") || "" 
      },
      trakt: { 
        enabled: localStorage.getItem("enabled_trakt") !== "false", 
        nickname: localStorage.getItem("nick_trakt") || "" 
      },
      lastfm: { 
        enabled: localStorage.getItem("enabled_lastfm") !== "false", 
        nickname: localStorage.getItem("nick_lastfm") || "" 
      },
      mydramalist: { 
        enabled: localStorage.getItem("enabled_mydramalist") !== "false", 
        nickname: localStorage.getItem("nick_mydramalist") || "" 
      },
      simkl: { 
        enabled: localStorage.getItem("enabled_simkl") !== "false", 
        nickname: localStorage.getItem("nick_simkl") || "" 
      },
    };
  });

  // Synced profile data
  const [data, setData] = useState<{
    anilist: AniListUser | null;
    letterboxd: LetterboxdUser | null;
    mal: MALUser | null;
    serializd: SerializdUser | null;
    trakt: TraktUser | null;
    lastfm: LastFMUser | null;
    mydramalist: MyDramaListUser | null;
    simkl: SimklUser | null;
  }>(() => {
    const defaults = {
      anilist: null,
      letterboxd: null,
      mal: null,
      serializd: null,
      trakt: null,
      lastfm: null,
      mydramalist: null,
      simkl: null,
    };
    try {
      const saved = localStorage.getItem("tracker_data_cache");
      if (saved) {
        return { ...defaults, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error("Error loading tracker_data_cache from localStorage:", e);
    }
    return defaults;
  });

  // Sincronization statuses
  const [status, setStatus] = useState<{
    [key: string]: { loading: boolean; error: string | null; lastSynced: string | null };
  }>(() => {
    const defaults = {
      anilist: { loading: false, error: null, lastSynced: null },
      letterboxd: { loading: false, error: null, lastSynced: null },
      mal: { loading: false, error: null, lastSynced: null },
      serializd: { loading: false, error: null, lastSynced: null },
      trakt: { loading: false, error: null, lastSynced: null },
      lastfm: { loading: false, error: null, lastSynced: null },
      mydramalist: { loading: false, error: null, lastSynced: null },
      simkl: { loading: false, error: null, lastSynced: null },
    };
    try {
      const saved = localStorage.getItem("tracker_status_cache");
      if (saved) {
        const parsed = JSON.parse(saved);
        const merged = { ...defaults, ...parsed };
        // Ensure no tracker stays stuck in loading state upon reload
        Object.keys(merged).forEach((k) => {
          if (merged[k]) {
            merged[k].loading = false;
          }
        });
        return merged;
      }
    } catch (e) {
      console.error("Error loading tracker_status_cache from localStorage:", e);
    }
    return defaults;
  });

  // Save changes to localStorage on updates
  useEffect(() => {
    localStorage.setItem("tracker_data_cache", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem("tracker_status_cache", JSON.stringify(status));
  }, [status]);

  // Automatically fetch configured trackers on startup only if no cached data exists
  useEffect(() => {
    Object.keys(config).forEach((key) => {
      const trackerKey = key as keyof typeof config;
      if (config[trackerKey].enabled && config[trackerKey].nickname.trim()) {
        const hasCachedData = !!data[trackerKey];
        const lastSynced = status[trackerKey]?.lastSynced;
        if (!hasCachedData || !lastSynced) {
          syncTracker(trackerKey);
        }
      }
    });
  }, []);

  const handleConfigToggle = (key: keyof typeof config) => {
    const updated = {
      ...config,
      [key]: { ...config[key], enabled: !config[key].enabled }
    };
    setConfig(updated);
    localStorage.setItem(`enabled_${key as string}`, String(updated[key].enabled));
  };

  const handleNicknameChange = (key: keyof typeof config, val: string) => {
    setConfig(prev => ({
      ...prev,
      [key]: { ...prev[key], nickname: val }
    }));
  };

  const saveNickname = (key: keyof typeof config) => {
    localStorage.setItem(`nick_${key as string}`, config[key].nickname.trim());
    if (config[key].enabled && config[key].nickname.trim()) {
      syncTracker(key);
    }
  };

  // Sync a single tracker
  const syncTracker = async (key: keyof typeof config, forceNickname?: string) => {
    const nick = forceNickname !== undefined ? forceNickname : config[key].nickname;
    if (!nick.trim()) return;

    setStatus(prev => ({
      ...prev,
      [key]: { ...prev[key], loading: true, error: null }
    }));

    try {
      const res = await fetch(`/api/tracker/${key as string}/${encodeURIComponent(nick.trim())}`);
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `Não foi possível encontrar o usuário "${nick}" no ${trackerMeta[key].name}.`);
      }
      const json = await res.json();
      setData(prev => ({ ...prev, [key]: json }));
      setStatus(prev => ({
        ...prev,
        [key]: { loading: false, error: null, lastSynced: new Date().toLocaleTimeString("pt-BR") }
      }));
    } catch (err: any) {
      console.error(`Sync error for ${key as string}:`, err);
      setStatus(prev => ({
        ...prev,
        [key]: { loading: false, error: err.message || "Erro de conexão com o servidor.", lastSynced: null }
      }));
    }
  };

  // Sincronizar todos os ativos de uma vez
  const syncAllActive = () => {
    Object.keys(config).forEach((key) => {
      const trackerKey = key as keyof typeof config;
      if (config[trackerKey].enabled && config[trackerKey].nickname.trim()) {
        syncTracker(trackerKey);
      }
    });
  };

  const formatWatchTime = (minutes: number) => {
    const days = Math.floor(minutes / (24 * 60));
    const hours = Math.floor((minutes % (24 * 60)) / 60);
    if (days > 0) return `${days}d e ${hours}h`;
    return `${hours} horas`;
  };

  // Get list of trackers that are active & successfully loaded
  const activeAndLoaded = (Object.entries(config) as Array<[keyof typeof config, { enabled: boolean; nickname: string }]>).filter(([_, conf]) => conf.enabled && conf.nickname.trim()).map(([key]) => key);

  const renderConnectOnboarding = (key: keyof typeof trackerMeta) => {
    const meta = trackerMeta[key];
    const trackerConfig = config[key];
    const trackerStatus = status[key] || { loading: false, error: null, lastSynced: null };

    return (
      <motion.div
        key={`connect-${key}`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        className="max-w-xl mx-auto pt-8 pb-12 px-4"
      >
        <div className="bg-[#0c0f13] border border-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-center group">
          {/* Ambient Glow */}
          <div className={`absolute -top-12 -left-12 w-48 h-48 rounded-full bg-gradient-to-tr ${meta.color} opacity-10 blur-2xl pointer-events-none`} />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-gradient-to-tr from-slate-900 to-transparent opacity-30 blur-2xl pointer-events-none" />

          <div className="space-y-6 sm:space-y-8 relative z-10">
            {/* Header / Logo */}
            <div className="space-y-4 flex flex-col items-center">
              <div className={`h-16 w-16 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-center shadow-lg relative group-hover:scale-105 transition-transform duration-300`}>
                <div className={`absolute inset-0 bg-gradient-to-tr ${meta.color} opacity-10 rounded-2xl`} />
                <span className="relative z-10 shrink-0">{meta.logo}</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">{meta.name}</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                  {meta.desc}
                </p>
              </div>
            </div>

            {/* Input Form */}
            <div className="space-y-4 text-left">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 font-mono uppercase tracking-wider block">
                  Seu Nome de Usuário / Nickname Público
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={trackerConfig.nickname}
                    onChange={(e) => handleNicknameChange(key, e.target.value)}
                    placeholder={meta.placeholder}
                    className="w-full bg-[#06080a] border border-slate-850 focus:border-rose-500/80 focus:ring-1 focus:ring-rose-500/50 rounded-2xl px-4 py-3.5 text-xs placeholder-slate-700 outline-none transition-all text-slate-100"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && trackerConfig.nickname.trim() && !trackerStatus.loading) {
                        saveNickname(key);
                      }
                    }}
                  />
                  {trackerConfig.nickname.trim() && (
                    <button
                      onClick={() => handleNicknameChange(key, "")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Status and Errors */}
              {trackerStatus.loading && (
                <div className="bg-amber-500/5 border border-amber-500/10 p-3.5 rounded-xl text-amber-400 text-xs flex items-center gap-2.5 font-mono">
                  <RefreshCw className="h-4 w-4 animate-spin shrink-0 text-amber-500" />
                  Sincronizando perfil e buscando histórico público...
                </div>
              )}

              {trackerStatus.error && (
                <div className="bg-red-500/5 border border-red-500/15 p-3.5 rounded-xl text-red-400 text-xs flex items-start gap-2.5 font-mono leading-relaxed font-semibold">
                  <XCircle className="h-4 w-4 shrink-0 text-red-500 mt-0.5" />
                  <span>{trackerStatus.error}</span>
                </div>
              )}

              {/* Action Button */}
              <button
                onClick={() => saveNickname(key)}
                disabled={!trackerConfig.nickname.trim() || trackerStatus.loading}
                className={`w-full py-3.5 rounded-2xl font-semibold text-xs tracking-wide transition-all shadow-lg active:scale-98 flex items-center justify-center gap-2 ${
                  trackerConfig.nickname.trim() && !trackerStatus.loading
                    ? "bg-gradient-to-r from-rose-500 to-indigo-600 text-white hover:opacity-95 shadow-rose-500/10 cursor-pointer"
                    : "bg-slate-900 border border-slate-850 text-slate-500 cursor-not-allowed"
                }`}
              >
                {trackerStatus.loading ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    Buscando perfil...
                  </>
                ) : (
                  <>
                    <Check className="h-4 w-4" />
                    Sincronizar Conta
                  </>
                )}
              </button>
            </div>

            {/* Helper tips */}
            <div className="pt-4 border-t border-slate-900/60 text-center">
              <span className="text-[10px] text-slate-500 leading-normal block max-w-sm mx-auto">
                Garanta que seu perfil no <strong className="text-slate-400">{meta.name}</strong> está configurado como <strong className="text-slate-400">Público</strong> para que possamos sincronizar seus dados.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-[#090b0e] text-slate-100 font-sans antialiased flex flex-col md:flex-row">
      {/* Decorative dynamic ambient background glow */}
      <div className="fixed top-0 left-0 w-full h-full bg-radial from-slate-900/40 via-transparent to-transparent pointer-events-none z-0" />

      {/* ==========================================
          SIDEBAR NAVIGATION (MENU LATERAL)
          ========================================== */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-900 bg-[#0c0f13]/90 backdrop-blur-md z-10 flex flex-col md:h-screen sticky top-0 shrink-0">
        {/* Sidebar Header */}
        <div className="p-3.5 border-b border-slate-900 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-rose-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-rose-500/10">
              <Database className="h-4 w-4 text-white" />
            </div>
            <div>
              <h1 className="text-xs font-bold font-display tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Media Profiler
              </h1>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="p-2.5 flex-1 space-y-4 overflow-y-auto">
          {/* Main Controls Section */}
          <div className="space-y-1">
            <span className="px-3 text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-1">
              Menu Principal
            </span>
            <button
              onClick={() => setActiveSection("home")}
              className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                activeSection === "home"
                  ? "bg-gradient-to-r from-slate-900 to-slate-850 text-rose-400 border border-slate-800"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
              }`}
            >
              <span className="flex items-center gap-2">
                <Home className="h-3.5 w-3.5" />
                Painel Geral
              </span>
              <ChevronRight className="h-3 w-3 opacity-60" />
            </button>

            <button
              onClick={() => setActiveSection("config")}
              className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                activeSection === "config"
                  ? "bg-gradient-to-r from-slate-900 to-slate-850 text-rose-400 border border-slate-800"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
              }`}
            >
              <span className="flex items-center gap-2">
                <Settings className="h-3.5 w-3.5" />
                Configurações
              </span>
              <ChevronRight className="h-3 w-3 opacity-60" />
            </button>
          </div>

          {/* Categorized Networks Sections */}
          {categories.map((cat) => (
            <div key={cat.name} className="space-y-0.5 pt-1 border-t border-slate-900/40 mt-2.5 pt-2.5 first:border-0 first:mt-0 first:pt-0">
              <span className="px-3 text-[8px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">
                {cat.name}
              </span>
              {cat.keys.map((key) => {
                const meta = trackerMeta[key];
                const isActive = activeSection === key;
                const hasNick = config[key].nickname.trim().length > 0;
                const isEnabled = config[key].enabled;
                const nickname = config[key].nickname.trim();

                return (
                  <div
                    key={key}
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveSection(key)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveSection(key);
                      }
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all border cursor-pointer select-none ${
                      isActive
                        ? `bg-slate-900 border-slate-850 ${meta.textClass}`
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40 border-transparent"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {meta.logo}
                      <span className="flex flex-col items-start text-left">
                        <span className="flex items-center gap-1">
                          <span>{meta.name}</span>
                          {favorites[cat.name] === key && (
                            <Star className="h-2 w-2 fill-amber-400 text-amber-400" title="Fonte Favorita" />
                          )}
                        </span>
                        {hasNick && isEnabled && (
                          <span className="text-[8px] text-slate-500 font-normal truncate max-w-[100px]">
                            @{nickname}
                          </span>
                        )}
                      </span>
                    </span>
                    
                    {hasNick && isEnabled ? (
                      <div className="flex items-center gap-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            syncTracker(key);
                          }}
                          disabled={status[key]?.loading}
                          className="p-1 rounded bg-slate-950 hover:bg-slate-800 text-slate-500 hover:text-slate-300 transition-all border border-slate-900/85 shrink-0"
                          title="Sincronizar Fonte"
                        >
                          <RefreshCw className={`h-2.5 w-2.5 ${status[key]?.loading ? "animate-spin" : ""}`} />
                        </button>
                        <span className="text-[8px] font-mono font-bold bg-emerald-500/10 text-emerald-400 px-1 py-0.5 rounded border border-emerald-500/20 uppercase tracking-wider">
                          Sincronizado
                        </span>
                      </div>
                    ) : (
                      <span className="text-[8px] font-mono font-bold bg-slate-950 text-slate-600 px-1 py-0.5 rounded border border-slate-900 uppercase tracking-wider">
                        Sincronizar
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Sidebar Footer */}
        <div className="p-2.5 border-t border-slate-900 text-center flex flex-col gap-1 bg-[#0a0d10]">
          {activeAndLoaded.length > 0 && (
            <button
              onClick={syncAllActive}
              className="w-full flex items-center justify-center gap-1 px-2 py-1 rounded bg-slate-950 text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-all border border-slate-900 text-[9px] font-semibold"
            >
              <RefreshCw className="h-2.5 w-2.5" />
              Sincronizar Tudo
            </button>
          )}
        </div>
      </aside>

      {/* ==========================================
          MAIN CONTENT PANEL
          ========================================== */}
      <main className="flex-1 overflow-y-auto max-w-full md:h-screen p-6 sm:p-8 relative z-10">
        <AnimatePresence mode="wait">
          {/* ==========================================
              1. PAINEL GERAL (HOME VIEW)
              ========================================== */}
          {activeSection === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl mx-auto space-y-8"
            >

              {/* EMPTY STATE: No connected trackers */}
              {activeAndLoaded.length === 0 && (
                <div className="border border-dashed border-slate-800 rounded-2xl p-12 text-center max-w-2xl mx-auto space-y-5">
                  <div className="h-12 w-12 rounded-full bg-slate-900 text-slate-400 flex items-center justify-center mx-auto shadow-inner">
                    <Database className="h-6 w-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold">Nenhuma rede sincronizada</h3>
                    <p className="text-xs text-slate-400 max-w-md mx-auto">
                      Para começar a consolidar seu histórico de mídias, sincronize pelo menos um tracker (como AniList ou Letterboxd) inserindo seu apelido público.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveSection("config")}
                    className="bg-gradient-to-r from-rose-500 to-indigo-600 hover:from-rose-600 hover:to-indigo-700 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md active:scale-95 inline-flex items-center gap-1.5"
                  >
                    <Settings className="h-3.5 w-3.5" />
                    Ir para Configurações
                  </button>
                </div>
              )}

              {/* ACTIVE TRACKERS OVERVIEW LIST */}
              {activeAndLoaded.length > 0 && (
                <div className="space-y-2">
                  {/* CATEGORIES NAVIGATION TABS (CATEGORIZAÇÃO) */}
                  <div className="flex flex-wrap gap-2 border-b border-slate-900 pb-4">
                    {[
                      { id: "all", name: "Tudo", icon: <Compass className="h-4 w-4" /> },
                      { id: "animes", name: "Animes & Mangás", icon: <Smile className="h-4 w-4" /> },
                      { id: "filmes", name: "Filmes", icon: <Film className="h-4 w-4" /> },
                      { id: "series", name: "Séries", icon: <Tv className="h-4 w-4" /> },
                      { id: "doramas", name: "Doramas", icon: <Heart className="h-4 w-4" /> },
                      { id: "musicas", name: "Músicas", icon: <Award className="h-4 w-4" /> }
                    ].map((cat) => {
                      const isActive = selectedCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 border border-slate-900 ${
                            isActive
                              ? "bg-rose-500/10 text-rose-400 !border-rose-500/30 shadow-md shadow-rose-500/5"
                              : "bg-slate-950/40 text-slate-400 hover:text-slate-200 hover:bg-slate-900/30"
                          }`}
                        >
                          {cat.icon}
                          {cat.name}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-rose-500" />
                      Visão Geral das Plataformas
                    </h3>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {activeAndLoaded.length} trackers sincronizados
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* AniList Mini Summary */}
                    {config.anilist.enabled && data.anilist && (selectedCategory === "all" || selectedCategory === "animes") && (() => {
                      const isFav = favorites["Animes"] === "anilist";
                      return (
                        <div className={`bg-[#0c0f13]/60 border border-slate-900 p-5 rounded-2xl flex flex-col justify-between hover:border-slate-800 transition-all shadow-lg group ${
                          isFav ? "!border-amber-500/40 shadow-amber-500/5 shadow-md" : ""
                        }`}>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <img 
                                src={data.anilist.avatar?.large} 
                                alt="avatar" 
                                className="h-12 w-12 rounded-xl object-cover border border-sky-500/20 shadow"
                              />
                              <div>
                                <h4 className="font-bold text-sm text-slate-200">{data.anilist.name}</h4>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                  <p className="text-[10px] text-sky-400 font-mono">AniList Sincronizado</p>
                                  {isFav && (
                                    <span className="flex items-center gap-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-wider">
                                      ★ Favorito
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <AniListLogo className="w-5 h-5 opacity-80" />
                          </div>

                          <div className="grid grid-cols-2 gap-3 my-4 py-3 border-y border-slate-900/60 text-xs">
                            <div>
                              <span className="text-slate-500 font-mono text-[10px] block">Assistido</span>
                              <span className="font-semibold text-slate-300">{formatWatchTime(data.anilist.stats?.watchedTime || 0)}</span>
                            </div>
                            <div>
                              <span className="text-slate-500 font-mono text-[10px] block">Lido</span>
                              <span className="font-semibold text-slate-300">{data.anilist.stats?.chaptersRead || 0} capítulos</span>
                            </div>
                          </div>

                          <div className="flex gap-2 w-full">
                            <button
                              onClick={() => syncTracker("anilist")}
                              disabled={status.anilist.loading}
                              className="flex items-center justify-center px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-850/60 transition-all shrink-0"
                              title="Sincronizar Manualmente"
                            >
                              <RefreshCw className={`h-3.5 w-3.5 ${status.anilist.loading ? "animate-spin" : ""}`} />
                            </button>
                            <button
                              onClick={() => setActiveSection("anilist")}
                              className="flex-1 text-center py-2 rounded-xl text-xs font-semibold bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-850/60 transition-all flex items-center justify-center gap-1.5"
                            >
                              Ver Perfil Completo
                              <ChevronRight className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })()}

                    {/* Letterboxd Mini Summary */}
                    {config.letterboxd.enabled && data.letterboxd && (selectedCategory === "all" || selectedCategory === "filmes") && (() => {
                      const isFav = favorites["Filmes"] === "letterboxd";
                      return (
                        <div className={`bg-[#0c0f13]/60 border border-slate-900 p-5 rounded-2xl flex flex-col justify-between hover:border-slate-800 transition-all shadow-lg group ${
                          isFav ? "!border-amber-500/40 shadow-amber-500/5 shadow-md" : ""
                        }`}>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="h-12 w-12 rounded-xl bg-orange-600/10 text-orange-400 font-bold flex items-center justify-center text-sm border border-orange-500/20 shadow">
                                {data.letterboxd.username.substring(0, 2).toUpperCase()}
                              </div>
                              <div>
                                <h4 className="font-bold text-sm text-slate-200">{data.letterboxd.displayName}</h4>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                  <p className="text-[10px] text-orange-400 font-mono">Letterboxd Sincronizado</p>
                                  {isFav && (
                                    <span className="flex items-center gap-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-wider">
                                      ★ Favorito
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <LetterboxdLogo className="w-5 h-5 opacity-80" />
                          </div>

                          <div className="my-4 py-3 border-y border-slate-900/60 text-xs">
                            <span className="text-slate-500 font-mono text-[10px] block">Atividade Recente</span>
                            <span className="font-semibold text-slate-300">
                              {data.letterboxd.items?.[0] ? `Último: "${data.letterboxd.items[0].filmTitle}"` : "Nenhum log recente"}
                            </span>
                          </div>

                          <div className="flex gap-2 w-full">
                            <button
                              onClick={() => syncTracker("letterboxd")}
                              disabled={status.letterboxd.loading}
                              className="flex items-center justify-center px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-850/60 transition-all shrink-0"
                              title="Sincronizar Manualmente"
                            >
                              <RefreshCw className={`h-3.5 w-3.5 ${status.letterboxd.loading ? "animate-spin" : ""}`} />
                            </button>
                            <button
                              onClick={() => setActiveSection("letterboxd")}
                              className="flex-1 text-center py-2 rounded-xl text-xs font-semibold bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-850/60 transition-all flex items-center justify-center gap-1.5"
                            >
                              Ver Perfil Completo
                              <ChevronRight className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })()}

                    {/* MyAnimeList Mini Summary */}
                    {config.mal.enabled && data.mal && (selectedCategory === "all" || selectedCategory === "animes") && (() => {
                      const isFav = favorites["Animes"] === "mal";
                      return (
                        <div className={`bg-[#0c0f13]/60 border border-slate-900 p-5 rounded-2xl flex flex-col justify-between hover:border-slate-800 transition-all shadow-lg group ${
                          isFav ? "!border-amber-500/40 shadow-amber-500/5 shadow-md" : ""
                        }`}>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              {data.mal.images?.jpg?.image_url ? (
                                <img 
                                  src={data.mal.images.jpg.image_url} 
                                  alt="avatar" 
                                  className="h-12 w-12 rounded-xl object-cover border border-blue-500/20 shadow"
                                />
                              ) : (
                                <div className="h-12 w-12 rounded-xl bg-blue-600/10 text-blue-400 font-bold flex items-center justify-center text-sm border border-blue-500/20 shadow">
                                  {data.mal.username.substring(0, 2).toUpperCase()}
                                </div>
                              )}
                              <div>
                                <h4 className="font-bold text-sm text-slate-200">{data.mal.username}</h4>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                  <p className="text-[10px] text-blue-400 font-mono">MyAnimeList Sincronizado</p>
                                  {isFav && (
                                    <span className="flex items-center gap-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-wider">
                                      ★ Favorito
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <MyAnimeListLogo className="w-5 h-5 opacity-80" />
                          </div>

                          <div className="grid grid-cols-2 gap-3 my-4 py-3 border-y border-slate-900/60 text-xs">
                            <div>
                              <span className="text-slate-500 font-mono text-[10px] block">Completados</span>
                              <span className="font-semibold text-slate-300">{data.mal.statistics?.anime?.completed || 0} animes</span>
                            </div>
                            <div>
                              <span className="text-slate-500 font-mono text-[10px] block">Nota Média</span>
                              <span className="font-semibold text-slate-300">{data.mal.statistics?.anime?.mean_score || "N/A"}/10</span>
                            </div>
                          </div>

                          <div className="flex gap-2 w-full">
                            <button
                              onClick={() => syncTracker("mal")}
                              disabled={status.mal.loading}
                              className="flex items-center justify-center px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-850/60 transition-all shrink-0"
                              title="Sincronizar Manualmente"
                            >
                              <RefreshCw className={`h-3.5 w-3.5 ${status.mal.loading ? "animate-spin" : ""}`} />
                            </button>
                            <button
                              onClick={() => setActiveSection("mal")}
                              className="flex-1 text-center py-2 rounded-xl text-xs font-semibold bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-850/60 transition-all flex items-center justify-center gap-1.5"
                            >
                              Ver Perfil Completo
                              <ChevronRight className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })()}

                    {/* Serializd Mini Summary */}
                    {config.serializd.enabled && data.serializd && (selectedCategory === "all" || selectedCategory === "series") && (() => {
                      const isFav = favorites["Séries"] === "serializd";
                      return (
                        <div className={`bg-[#0c0f13]/60 border border-slate-900 p-5 rounded-2xl flex flex-col justify-between hover:border-slate-800 transition-all shadow-lg group ${
                          isFav ? "!border-amber-500/40 shadow-amber-500/5 shadow-md" : ""
                        }`}>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              {data.serializd.profilePicture ? (
                                <img 
                                  src={data.serializd.profilePicture} 
                                  alt="avatar" 
                                  className="h-12 w-12 rounded-xl object-cover border border-teal-500/20 shadow"
                                />
                              ) : (
                                <div className="h-12 w-12 rounded-xl bg-teal-600/10 text-teal-400 font-bold flex items-center justify-center text-sm border border-teal-500/20 shadow">
                                  {data.serializd.username.substring(0, 2).toUpperCase()}
                                </div>
                              )}
                              <div>
                                <h4 className="font-bold text-sm text-slate-200">{data.serializd.username}</h4>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                  <p className="text-[10px] text-teal-400 font-mono">Serializd Sincronizado</p>
                                  {isFav && (
                                    <span className="flex items-center gap-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-wider">
                                      ★ Favorito
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <SerializdLogo className="w-5 h-5 opacity-80" />
                          </div>

                          <div className="grid grid-cols-2 gap-3 my-4 py-3 border-y border-slate-900/60 text-xs">
                            <div>
                              <span className="text-slate-500 font-mono text-[10px] block">Avaliações</span>
                              <span className="font-semibold text-slate-300">{data.serializd.stats?.reviewsCount || 0} reviews</span>
                            </div>
                            <div>
                              <span className="text-slate-500 font-mono text-[10px] block">Séries</span>
                              <span className="font-semibold text-slate-300">{data.serializd.stats?.showsCount || 0} séries</span>
                            </div>
                          </div>

                          <div className="flex gap-2 w-full">
                            <button
                              onClick={() => syncTracker("serializd")}
                              disabled={status.serializd.loading}
                              className="flex items-center justify-center px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-850/60 transition-all shrink-0"
                              title="Sincronizar Manualmente"
                            >
                              <RefreshCw className={`h-3.5 w-3.5 ${status.serializd.loading ? "animate-spin" : ""}`} />
                            </button>
                            <button
                              onClick={() => setActiveSection("serializd")}
                              className="flex-1 text-center py-2 rounded-xl text-xs font-semibold bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-850/60 transition-all flex items-center justify-center gap-1.5"
                            >
                              Ver Perfil Completo
                              <ChevronRight className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })()}

                    {/* Trakt Mini Summary */}
                    {config.trakt.enabled && data.trakt && (selectedCategory === "all" || selectedCategory === "series" || selectedCategory === "filmes") && (() => {
                      const isFav = favorites["Séries"] === "trakt";
                      return (
                        <div className={`bg-[#0c0f13]/60 border border-slate-900 p-5 rounded-2xl flex flex-col justify-between hover:border-slate-800 transition-all shadow-lg group ${
                          isFav ? "!border-amber-500/40 shadow-amber-500/5 shadow-md" : ""
                        }`}>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="h-12 w-12 rounded-xl bg-rose-600/10 text-rose-400 font-bold flex items-center justify-center text-sm border border-rose-500/20 shadow">
                                {data.trakt.username.substring(0, 2).toUpperCase()}
                              </div>
                              <div>
                                <h4 className="font-bold text-sm text-slate-200">{data.trakt.username}</h4>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                  <p className="text-[10px] text-rose-400 font-mono">Trakt.tv Sincronizado</p>
                                  {isFav && (
                                    <span className="flex items-center gap-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-wider">
                                      ★ Favorito
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <TraktLogo className="w-5 h-5 opacity-80" />
                          </div>

                          <div className="my-4 py-3 border-y border-slate-900/60 text-xs">
                            <span className="text-slate-500 font-mono text-[10px] block">Último Visto (Histórico)</span>
                            <span className="font-semibold text-slate-300 truncate block">
                              {data.trakt.items?.[0] ? `"${data.trakt.items[0].title}"` : "Sem logs recentes"}
                            </span>
                          </div>

                          <div className="flex gap-2 w-full">
                            <button
                              onClick={() => syncTracker("trakt")}
                              disabled={status.trakt.loading}
                              className="flex items-center justify-center px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-850/60 transition-all shrink-0"
                              title="Sincronizar Manualmente"
                            >
                              <RefreshCw className={`h-3.5 w-3.5 ${status.trakt.loading ? "animate-spin" : ""}`} />
                            </button>
                            <button
                              onClick={() => setActiveSection("trakt")}
                              className="flex-1 text-center py-2 rounded-xl text-xs font-semibold bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-850/60 transition-all flex items-center justify-center gap-1.5"
                            >
                              Ver Perfil Completo
                              <ChevronRight className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })()}

                    {/* Last.fm Mini Summary */}
                    {config.lastfm.enabled && data.lastfm && (selectedCategory === "all" || selectedCategory === "musicas") && (() => {
                      const isFav = favorites["Músicas"] === "lastfm";
                      return (
                        <div className={`bg-[#0c0f13]/60 border border-slate-900 p-5 rounded-2xl flex flex-col justify-between hover:border-slate-800 transition-all shadow-lg group ${
                          isFav ? "!border-amber-500/40 shadow-amber-500/5 shadow-md" : ""
                        }`}>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="h-12 w-12 rounded-xl bg-red-600/10 text-red-400 font-bold flex items-center justify-center text-sm border border-red-500/20 shadow">
                                {data.lastfm.username.substring(0, 2).toUpperCase()}
                              </div>
                              <div>
                                <h4 className="font-bold text-sm text-slate-200">{data.lastfm.username}</h4>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                  <p className="text-[10px] text-red-400 font-mono">Last.fm Sincronizado</p>
                                  {isFav && (
                                    <span className="flex items-center gap-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-wider">
                                      ★ Favorito
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <LastFMLogo className="w-5 h-5 opacity-80" />
                          </div>

                          <div className="my-4 py-3 border-y border-slate-900/60 text-xs">
                            <span className="text-slate-500 font-mono text-[10px] block">Última Música Ouvida</span>
                            <span className="font-semibold text-slate-300 truncate block">
                              {data.lastfm.items?.[0] ? `"${data.lastfm.items[0].trackName}" - ${data.lastfm.items[0].artist}` : "Sem logs recentes"}
                            </span>
                          </div>

                          <div className="flex gap-2 w-full">
                            <button
                              onClick={() => syncTracker("lastfm")}
                              disabled={status.lastfm.loading}
                              className="flex items-center justify-center px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-850/60 transition-all shrink-0"
                              title="Sincronizar Manualmente"
                            >
                              <RefreshCw className={`h-3.5 w-3.5 ${status.lastfm.loading ? "animate-spin" : ""}`} />
                            </button>
                            <button
                              onClick={() => setActiveSection("lastfm")}
                              className="flex-1 text-center py-2 rounded-xl text-xs font-semibold bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-850/60 transition-all flex items-center justify-center gap-1.5"
                            >
                              Ver Perfil Completo
                              <ChevronRight className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })()}

                    {/* MyDramaList Mini Summary */}
                    {config.mydramalist.enabled && data.mydramalist && (selectedCategory === "all" || selectedCategory === "doramas") && (() => {
                      const isFav = favorites["Doramas"] === "mydramalist";
                      return (
                        <div className={`bg-[#0c0f13]/60 border border-slate-900 p-5 rounded-2xl flex flex-col justify-between hover:border-slate-800 transition-all shadow-lg group ${
                          isFav ? "!border-amber-500/40 shadow-amber-500/5 shadow-md" : ""
                        }`}>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              {data.mydramalist.avatar ? (
                                <img 
                                  src={data.mydramalist.avatar} 
                                  alt="avatar" 
                                  className="h-12 w-12 rounded-xl object-cover border border-blue-500/20 shadow"
                                />
                              ) : (
                                <div className="h-12 w-12 rounded-xl bg-blue-600/10 text-blue-400 font-bold flex items-center justify-center text-sm border border-blue-500/20 shadow">
                                  {data.mydramalist.displayName.substring(0, 2).toUpperCase()}
                                </div>
                              )}
                              <div>
                                <h4 className="font-bold text-sm text-slate-200">{data.mydramalist.displayName}</h4>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                  <p className="text-[10px] text-blue-400 font-mono">MyDramaList Sincronizado</p>
                                  {isFav && (
                                    <span className="flex items-center gap-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-wider">
                                      ★ Favorito
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <MyDramaListLogo className="w-5 h-5 opacity-80" />
                          </div>

                          <div className="grid grid-cols-2 gap-3 my-4 py-3 border-y border-slate-900/60 text-xs">
                            <div>
                              <span className="text-slate-500 font-mono text-[10px] block">Completados</span>
                              <span className="font-semibold text-slate-300">{data.mydramalist.stats?.completed || 0} dramas</span>
                            </div>
                            <div>
                              <span className="text-slate-500 font-mono text-[10px] block">Assistindo</span>
                              <span className="font-semibold text-slate-300">{data.mydramalist.stats?.watching || 0} dramas</span>
                            </div>
                          </div>

                          <div className="flex gap-2 w-full">
                            <button
                              onClick={() => syncTracker("mydramalist")}
                              disabled={status.mydramalist.loading}
                              className="flex items-center justify-center px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-850/60 transition-all shrink-0"
                              title="Sincronizar Manualmente"
                            >
                              <RefreshCw className={`h-3.5 w-3.5 ${status.mydramalist.loading ? "animate-spin" : ""}`} />
                            </button>
                            <button
                              onClick={() => setActiveSection("mydramalist")}
                              className="flex-1 text-center py-2 rounded-xl text-xs font-semibold bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-850/60 transition-all flex items-center justify-center gap-1.5"
                            >
                              Ver Perfil Completo
                              <ChevronRight className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })()}

                    {/* Simkl Mini Summary */}
                    {config.simkl.enabled && data.simkl && (selectedCategory === "all" || selectedCategory === "animes" || selectedCategory === "filmes" || selectedCategory === "series") && (() => {
                      const isFav = favorites["Filmes"] === "simkl" || favorites["Séries"] === "simkl" || favorites["Animes"] === "simkl";
                      return (
                        <div className={`bg-[#0c0f13]/60 border border-slate-900 p-5 rounded-2xl flex flex-col justify-between hover:border-slate-800 transition-all shadow-lg group ${
                          isFav ? "!border-amber-500/40 shadow-amber-500/5 shadow-md" : ""
                        }`}>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              {data.simkl.avatar ? (
                                <img 
                                  src={data.simkl.avatar} 
                                  alt="avatar" 
                                  className="h-12 w-12 rounded-xl object-cover border border-yellow-500/20 shadow"
                                />
                              ) : (
                                <div className="h-12 w-12 rounded-xl bg-yellow-600/10 text-yellow-400 font-bold flex items-center justify-center text-sm border border-yellow-500/20 shadow">
                                  {data.simkl.displayName.substring(0, 2).toUpperCase()}
                                </div>
                              )}
                              <div>
                                <h4 className="font-bold text-sm text-slate-200">{data.simkl.displayName}</h4>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                  <p className="text-[10px] text-yellow-400 font-mono">Simkl Sincronizado</p>
                                  {isFav && (
                                    <span className="flex items-center gap-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-wider">
                                      ★ Favorito
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <SimklLogo className="w-5 h-5 opacity-80" />
                          </div>

                          <div className="grid grid-cols-3 gap-2 my-4 py-3 border-y border-slate-900/60 text-center text-xs">
                            <div>
                              <span className="text-slate-500 font-mono text-[9px] block">Filmes</span>
                              <span className="font-semibold text-slate-300">{data.simkl.stats?.moviesCount || 0}</span>
                            </div>
                            <div>
                              <span className="text-slate-500 font-mono text-[9px] block">Séries</span>
                              <span className="font-semibold text-slate-300">{data.simkl.stats?.showsCount || 0}</span>
                            </div>
                            <div>
                              <span className="text-slate-500 font-mono text-[9px] block">Animes</span>
                              <span className="font-semibold text-slate-300">{data.simkl.stats?.animeCount || 0}</span>
                            </div>
                          </div>

                          <div className="flex gap-2 w-full">
                            <button
                              onClick={() => syncTracker("simkl")}
                              disabled={status.simkl.loading}
                              className="flex items-center justify-center px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-850/60 transition-all shrink-0"
                              title="Sincronizar Manualmente"
                            >
                              <RefreshCw className={`h-3.5 w-3.5 ${status.simkl.loading ? "animate-spin" : ""}`} />
                            </button>
                            <button
                              onClick={() => setActiveSection("simkl")}
                              className="flex-1 text-center py-2 rounded-xl text-xs font-semibold bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-850/60 transition-all flex items-center justify-center gap-1.5"
                            >
                              Ver Perfil Completo
                              <ChevronRight className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })()}

                    {/* Empty Category Fallback banners */}
                    {selectedCategory === "animes" && !config.anilist.nickname.trim() && !config.mal.nickname.trim() && !config.simkl.nickname.trim() && (
                      <div className="col-span-full bg-[#0c0f13]/50 border border-dashed border-slate-850 p-8 rounded-2xl text-center space-y-4 max-w-lg mx-auto">
                        <div className="h-10 w-10 rounded-full bg-sky-500/10 text-sky-400 flex items-center justify-center mx-auto border border-sky-500/20">
                          <Smile className="h-5 w-5" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-sm text-slate-200">Nenhum rastreador de Animes</h4>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            Sincronize sua conta do AniList, MyAnimeList ou Simkl nas configurações para exibir suas estatísticas, conquistas e episódios de animes.
                          </p>
                        </div>
                        <button
                          onClick={() => setActiveSection("config")}
                          className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-all hover:bg-slate-850 shadow"
                        >
                          Configurar Animes
                        </button>
                      </div>
                    )}

                    {selectedCategory === "filmes" && !config.letterboxd.nickname.trim() && !config.trakt.nickname.trim() && !config.simkl.nickname.trim() && (
                      <div className="col-span-full bg-[#0c0f13]/50 border border-dashed border-slate-850 p-8 rounded-2xl text-center space-y-4 max-w-lg mx-auto">
                        <div className="h-10 w-10 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center mx-auto border border-orange-500/20">
                          <Film className="h-5 w-5" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-sm text-slate-200">Nenhum rastreador de Filmes</h4>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            Sincronize seu Letterboxd, Trakt.tv ou Simkl nas configurações para começar a monitorar seus diários de filmes e resenhas de cinema.
                          </p>
                        </div>
                        <button
                          onClick={() => setActiveSection("config")}
                          className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-all hover:bg-slate-850 shadow"
                        >
                          Configurar Filmes
                        </button>
                      </div>
                    )}

                    {selectedCategory === "series" && !config.serializd.nickname.trim() && !config.trakt.nickname.trim() && !config.simkl.nickname.trim() && (
                      <div className="col-span-full bg-[#0c0f13]/50 border border-dashed border-slate-850 p-8 rounded-2xl text-center space-y-4 max-w-lg mx-auto">
                        <div className="h-10 w-10 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center mx-auto border border-teal-500/20">
                          <Tv className="h-5 w-5" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-sm text-slate-200">Nenhum rastreador de Séries</h4>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            Sincronize seu Serializd, Trakt.tv ou Simkl nas configurações para carregar sua atividade diária de maratona de séries e episódios de TV.
                          </p>
                        </div>
                        <button
                          onClick={() => setActiveSection("config")}
                          className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-all hover:bg-slate-850 shadow"
                        >
                          Configurar Séries
                        </button>
                      </div>
                    )}

                    {selectedCategory === "doramas" && !config.mydramalist.nickname.trim() && (
                      <div className="col-span-full bg-[#0c0f13]/50 border border-dashed border-slate-850 p-8 rounded-2xl text-center space-y-4 max-w-lg mx-auto">
                        <div className="h-10 w-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto border border-blue-500/20">
                          <Heart className="h-5 w-5" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-sm text-slate-200">Nenhum rastreador de Doramas</h4>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            Sincronize seu MyDramaList nas configurações para monitorar seus dramas asiáticos assistidos, watchlist e progresso de episódios.
                          </p>
                        </div>
                        <button
                          onClick={() => setActiveSection("config")}
                          className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-all hover:bg-slate-850 shadow"
                        >
                          Configurar MyDramaList
                        </button>
                      </div>
                    )}

                    {selectedCategory === "musicas" && !config.lastfm.nickname.trim() && (
                      <div className="col-span-full bg-[#0c0f13]/50 border border-dashed border-slate-850 p-8 rounded-2xl text-center space-y-4 max-w-lg mx-auto">
                        <div className="h-10 w-10 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center mx-auto border border-red-500/20">
                          <Award className="h-5 w-5" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-sm text-slate-200">Nenhum rastreador de Músicas</h4>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            Sincronize seu Last.fm nas configurações para começar a monitorar suas músicas ouvidas, scrobbles e artistas favoritos no painel.
                          </p>
                        </div>
                        <button
                          onClick={() => setActiveSection("config")}
                          className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-all hover:bg-slate-850 shadow"
                        >
                          Configurar Last.fm
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* ==========================================
              2. CONFIGURAÇÕES (SETTINGS VIEW)
              ========================================== */}
          {activeSection === "config" && (
            <motion.div
              key="config"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              {/* Settings Header */}
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-black font-display tracking-tight text-white flex items-center gap-2">
                  <Settings className="h-6 w-6 text-rose-500" />
                  Gerenciar Sincronizações
                </h2>
                <p className="text-xs text-slate-400">
                  Insira seus nicknames e gerencie a sincronização de cada rede social. Lembre-se que seus perfis precisam estar configurados como públicos nas respectivas plataformas.
                </p>
              </div>

              {/* Fontes Favoritas por Categoria Selector Card */}
              <div className="bg-[#0c0f13]/80 border border-slate-900 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl">
                <div className="space-y-1">
                  <h3 className="text-sm font-bold font-mono text-amber-400 uppercase tracking-wider flex items-center gap-2">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    Eleger Fonte Favorita por Categoria
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Escolha qual plataforma você prefere como fonte favorita ou principal para cada tipo de mídia. Todas as plataformas são totalmente opcionais.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
                  {categories.map((cat) => {
                    const currentFav = favorites[cat.name] || cat.keys[0];
                    return (
                      <div key={cat.name} className="bg-[#06080b] border border-slate-900/60 p-4 rounded-xl flex flex-col gap-2.5">
                        <span className="text-[10px] font-bold text-slate-400 font-mono uppercase tracking-wide">
                          {cat.name}
                        </span>
                        <div className="flex flex-col gap-1.5">
                          {cat.keys.map((key) => {
                            const meta = trackerMeta[key];
                            const isFav = currentFav === key;
                            const isEnabled = config[key].enabled && config[key].nickname.trim().length > 0;
                            return (
                              <button
                                key={key}
                                onClick={() => handleSetFavorite(cat.name, key)}
                                className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all border ${
                                  isFav
                                    ? "bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-md shadow-amber-500/5"
                                    : "bg-slate-950/40 border-transparent text-slate-400 hover:text-slate-300 hover:bg-slate-900/30"
                                }`}
                              >
                                <span className="flex items-center gap-2">
                                  {meta.logo}
                                  <span>{meta.name}</span>
                                </span>
                                <div className="flex items-center gap-1.5">
                                  {!isEnabled && (
                                    <span className="text-[9px] font-mono text-slate-600 bg-slate-900 px-1.5 py-0.5 rounded" title="Opcional">
                                      Opcional
                                    </span>
                                  )}
                                  {isFav && <Star className="h-3 w-3 fill-amber-400 text-amber-400" />}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Grid of Tracker Settings Cards */}
              <div className="grid grid-cols-1 gap-6">
                {(Object.keys(config) as Array<keyof typeof config>).map((key) => {
                  const meta = trackerMeta[key];
                  const trackerConfig = config[key];
                  const trackerStatus = status[key] || { loading: false, error: null, lastSynced: null };
                  const hasNick = trackerConfig.nickname.trim().length > 0;

                  return (
                    <div 
                      key={key} 
                      className={`bg-[#0c0f13]/80 border border-slate-900/60 rounded-2xl p-5 sm:p-6 transition-all ${
                        trackerConfig.enabled 
                          ? "!border-slate-800" 
                          : "opacity-60"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-900/80">
                        <div className="flex items-center gap-3">
                          <div className={`h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800`}>
                            {meta.logo}
                          </div>
                          <div>
                            <h3 className="font-bold text-sm text-white flex items-center gap-2">
                              {meta.name}
                              {meta.noNativeApi && (
                                <span className="text-[8px] font-mono font-bold bg-amber-500/10 text-amber-400 px-1.5 py-0.5 rounded border border-amber-500/20 uppercase tracking-wider">
                                  Sem API Nativa
                                </span>
                              )}
                            </h3>
                            <p className="text-[11px] text-slate-500 max-w-sm mt-0.5">{meta.desc}</p>
                          </div>
                        </div>

                        {/* Active Toggle Switch */}
                        <div className="flex items-center gap-2.5">
                          <span className="text-[11px] font-semibold text-slate-400">
                            {trackerConfig.enabled ? "Sincronizado" : "Pausado"}
                          </span>
                          <button
                            onClick={() => handleConfigToggle(key)}
                            className={`w-10 h-5 rounded-full p-0.5 transition-all outline-none ${
                              trackerConfig.enabled ? "bg-rose-500" : "bg-slate-800"
                            }`}
                          >
                            <div className={`h-4 w-4 rounded-full bg-white transition-all shadow ${
                              trackerConfig.enabled ? "translate-x-5" : "translate-x-0"
                            }`} />
                          </button>
                        </div>
                      </div>

                      {/* Nickname Form input field */}
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-3">
                        <div className="flex-1 space-y-1.5">
                          <label className="text-[11px] font-bold text-slate-400 font-mono uppercase tracking-wider">
                            Seu Nickname Público
                          </label>
                          <input
                            type="text"
                            value={trackerConfig.nickname}
                            onChange={(e) => handleNicknameChange(key, e.target.value)}
                            placeholder={meta.placeholder}
                            disabled={!trackerConfig.enabled}
                            className="w-full bg-[#06080a] border border-slate-850 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/50 rounded-xl px-4 py-2.5 text-xs placeholder-slate-700 outline-none transition-all disabled:opacity-50"
                          />
                        </div>

                        <div className="flex gap-2 self-stretch sm:self-auto shrink-0">
                          {/* Save & Sync Button */}
                          <button
                            onClick={() => saveNickname(key)}
                            disabled={!trackerConfig.enabled || trackerStatus.loading}
                            className="flex-1 sm:flex-none py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-850 hover:bg-slate-850 hover:border-slate-750 text-slate-300 hover:text-white transition-all flex items-center justify-center gap-1.5"
                          >
                            {trackerStatus.loading ? (
                              <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                            ) : (
                              <Save className="h-3.5 w-3.5" />
                            )}
                            Salvar & Sincronizar
                          </button>
                        </div>
                      </div>

                      {/* Status row feedback */}
                      <div className="flex items-center gap-2 mt-3.5 text-[11px] font-mono">
                        {trackerStatus.loading && (
                          <span className="text-amber-400 flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                            Sincronizando dados públicos...
                          </span>
                        )}
                        {!trackerStatus.loading && trackerStatus.error && (
                          <span className="text-red-400 flex items-center gap-1">
                            <XCircle className="h-3.5 w-3.5" />
                            {trackerStatus.error}
                          </span>
                        )}
                        {!trackerStatus.loading && !trackerStatus.error && trackerStatus.lastSynced && (
                          <span className="text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            Sincronizado às {trackerStatus.lastSynced}
                          </span>
                        )}
                        {!trackerStatus.loading && !trackerStatus.error && !trackerStatus.lastSynced && hasNick && (
                          <span className="text-slate-500">
                            Preencha seu apelido e clique em "Salvar" para sincronizar.
                          </span>
                        )}
                        {!hasNick && (
                          <span className="text-slate-500">
                            Nenhum nickname definido.
                          </span>
                        )}
                      </div>

                      {/* No Native API Info Notice */}
                      {meta.noNativeApi && (
                        <div className="mt-4 flex items-start gap-2.5 bg-[#120e06] border border-amber-500/10 p-3.5 rounded-xl text-[10px] text-amber-300/90 leading-relaxed font-sans">
                          <AlertCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-amber-400 block mb-0.5">Nota de Integração (Sem API Pública Nativa)</strong>
                            Esta plataforma não fornece uma API pública oficial aberta para desenvolvedores. Para sincronizar seus dados, desenvolvemos um sistema inteligente de leitura e scraping alternativo. <span className="text-slate-400 underline decoration-amber-500/30">Estamos trabalhando continuamente no aprimoramento desta integração para mantê-la estável e otimizada!</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Upcoming Trackers */}
              <div className="bg-[#0c0f13]/80 border border-slate-900 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl">
                <div className="space-y-1">
                  <h3 className="text-sm font-bold font-mono text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-indigo-400" />
                    Plataformas em Estudo (Próximas Fontes)
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Muitas redes sociais populares de nicho não possuem APIs públicas e abertas nativas. Estamos trabalhando no desenvolvimento de scrapers e conexões customizadas para trazê-las até você:
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                  {[
                    {
                      name: "Goodreads",
                      desc: "Leituras, livros, resenhas e metas literárias anuais.",
                      status: "Sem API Nativa - Trabalhando nisso",
                    },
                    {
                      name: "Backloggd",
                      desc: "Seu diário de jogos, notas, backlog e histórico de gameplay.",
                      status: "Sem API Nativa - Trabalhando nisso",
                    },
                    {
                      name: "TV Time",
                      desc: "Séries assistidas, datas de episódios e estatísticas completas.",
                      status: "Sem API Nativa - Trabalhando nisso",
                    },
                  ].map((upcoming, idx) => (
                    <div key={idx} className="bg-[#06080b]/80 border border-slate-900/60 p-4 rounded-xl flex flex-col justify-between gap-3 relative overflow-hidden group">
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-slate-200">{upcoming.name}</h4>
                        <p className="text-[10px] text-slate-500 leading-normal">{upcoming.desc}</p>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="flex items-center gap-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold">
                          <Clock className="h-2.5 w-2.5 animate-pulse" />
                          {upcoming.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ==========================================
              3. DETAIL: ANILIST SECTION
              ========================================== */}
          {activeSection === "anilist" && (
            data.anilist ? (
              <AnilistDetail data={data.anilist} />
            ) : (
              renderConnectOnboarding("anilist")
            )
          )}

          {/* ==========================================
              4. DETAIL: LETTERBOXD SECTION
              ========================================== */}
          {activeSection === "letterboxd" && (
            data.letterboxd ? (
              <LetterboxdDetail data={data.letterboxd} />
            ) : (
              renderConnectOnboarding("letterboxd")
            )
          )}

          {/* ==========================================
              5. DETAIL: MYANIMELIST SECTION
              ========================================== */}
          {activeSection === "mal" && (
            data.mal ? (
              <MalDetail data={data.mal} />
            ) : (
              renderConnectOnboarding("mal")
            )
          )}

          {/* ==========================================
              6. DETAIL: SERIALIZD SECTION
              ========================================== */}
          {activeSection === "serializd" && (
            data.serializd ? (
              <SerializdDetail data={data.serializd} />
            ) : (
              renderConnectOnboarding("serializd")
            )
          )}

          {/* ==========================================
              7. DETAIL: TRAKT SECTION
              ========================================== */}
          {activeSection === "trakt" && (
            data.trakt ? (
              <TraktDetail data={data.trakt} />
            ) : (
              renderConnectOnboarding("trakt")
            )
          )}

          {/* ==========================================
              8. DETAIL: LAST.FM SECTION
              ========================================== */}
          {activeSection === "lastfm" && (
            data.lastfm ? (
              <LastfmDetail data={data.lastfm} />
            ) : (
              renderConnectOnboarding("lastfm")
            )
          )}

          {/* ==========================================
              9. DETAIL: MYDRAMALIST SECTION
              ========================================== */}
          {activeSection === "mydramalist" && (
            data.mydramalist ? (
              <MydramalistDetail data={data.mydramalist} />
            ) : (
              renderConnectOnboarding("mydramalist")
            )
          )}

          {/* ==========================================
              10. DETAIL: SIMKL SECTION
              ========================================== */}
          {activeSection === "simkl" && (
            data.simkl ? (
              <SimklDetail data={data.simkl} />
            ) : (
              renderConnectOnboarding("simkl")
            )
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
