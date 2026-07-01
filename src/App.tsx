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
  const [lastfmTab, setLastfmTab] = useState<"recent" | "loved" | "toptracks" | "topartists" | "recommended">("recent");

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
    try {
      const saved = localStorage.getItem("tracker_data_cache");
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Error loading tracker_data_cache from localStorage:", e);
    }
    return {
      anilist: null,
      letterboxd: null,
      mal: null,
      serializd: null,
      trakt: null,
      lastfm: null,
      mydramalist: null,
      simkl: null,
    };
  });

  // Sincronization statuses
  const [status, setStatus] = useState<{
    [key: string]: { loading: boolean; error: string | null; lastSynced: string | null };
  }>(() => {
    try {
      const saved = localStorage.getItem("tracker_status_cache");
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure no tracker stays stuck in loading state upon reload
        Object.keys(parsed).forEach((k) => {
          if (parsed[k]) {
            parsed[k].loading = false;
          }
        });
        return parsed;
      }
    } catch (e) {
      console.error("Error loading tracker_status_cache from localStorage:", e);
    }
    return {
      anilist: { loading: false, error: null, lastSynced: null },
      letterboxd: { loading: false, error: null, lastSynced: null },
      mal: { loading: false, error: null, lastSynced: null },
      serializd: { loading: false, error: null, lastSynced: null },
      trakt: { loading: false, error: null, lastSynced: null },
      lastfm: { loading: false, error: null, lastSynced: null },
      mydramalist: { loading: false, error: null, lastSynced: null },
      simkl: { loading: false, error: null, lastSynced: null },
    };
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
    const trackerStatus = status[key];

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
                    Conectar & Sincronizar
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
                Media ID
              </h1>
              <p className="text-[9px] text-slate-500 font-mono tracking-wider uppercase">Profile Tracker</p>
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
                          disabled={status[key].loading}
                          className="p-1 rounded bg-slate-950 hover:bg-slate-800 text-slate-500 hover:text-slate-300 transition-all border border-slate-900/85 shrink-0"
                          title="Sincronizar Fonte"
                        >
                          <RefreshCw className={`h-2.5 w-2.5 ${status[key].loading ? "animate-spin" : ""}`} />
                        </button>
                        <span className="text-[8px] font-mono font-bold bg-emerald-500/10 text-emerald-400 px-1 py-0.5 rounded border border-emerald-500/20 uppercase tracking-wider">
                          Ativo
                        </span>
                      </div>
                    ) : (
                      <span className="text-[8px] font-mono font-bold bg-slate-950 text-slate-600 px-1 py-0.5 rounded border border-slate-900 uppercase tracking-wider">
                        Conectar
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
                    <h3 className="text-lg font-bold">Nenhuma rede conectada</h3>
                    <p className="text-xs text-slate-400 max-w-md mx-auto">
                      Para começar a consolidar seu histórico de mídias, conecte pelo menos um tracker (como AniList ou Letterboxd) inserindo seu apelido público.
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
                          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 border ${
                            isActive
                              ? "bg-rose-500/10 text-rose-400 border-rose-500/30 shadow-md shadow-rose-500/5"
                              : "bg-slate-950/40 text-slate-400 border-slate-900 hover:text-slate-200 hover:bg-slate-900/30"
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
                      {activeAndLoaded.length} trackers conectados
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* AniList Mini Summary */}
                    {config.anilist.enabled && data.anilist && (selectedCategory === "all" || selectedCategory === "animes") && (() => {
                      const isFav = favorites["Animes"] === "anilist";
                      return (
                        <div className={`bg-[#0c0f13]/60 border p-5 rounded-2xl flex flex-col justify-between hover:border-slate-800 transition-all shadow-lg group ${
                          isFav ? "border-amber-500/40 shadow-amber-500/5 shadow-md" : "border-slate-900"
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
                                  <p className="text-[10px] text-sky-400 font-mono">AniList Conectado</p>
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
                        <div className={`bg-[#0c0f13]/60 border p-5 rounded-2xl flex flex-col justify-between hover:border-slate-800 transition-all shadow-lg group ${
                          isFav ? "border-amber-500/40 shadow-amber-500/5 shadow-md" : "border-slate-900"
                        }`}>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="h-12 w-12 rounded-xl bg-orange-600/10 text-orange-400 font-bold flex items-center justify-center text-sm border border-orange-500/20 shadow">
                                {data.letterboxd.username.substring(0, 2).toUpperCase()}
                              </div>
                              <div>
                                <h4 className="font-bold text-sm text-slate-200">{data.letterboxd.displayName}</h4>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                  <p className="text-[10px] text-orange-400 font-mono">Letterboxd Conectado</p>
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
                        <div className={`bg-[#0c0f13]/60 border p-5 rounded-2xl flex flex-col justify-between hover:border-slate-800 transition-all shadow-lg group ${
                          isFav ? "border-amber-500/40 shadow-amber-500/5 shadow-md" : "border-slate-900"
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
                                  <p className="text-[10px] text-blue-400 font-mono">MyAnimeList Conectado</p>
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
                        <div className={`bg-[#0c0f13]/60 border p-5 rounded-2xl flex flex-col justify-between hover:border-slate-800 transition-all shadow-lg group ${
                          isFav ? "border-amber-500/40 shadow-amber-500/5 shadow-md" : "border-slate-900"
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
                                  <p className="text-[10px] text-teal-400 font-mono">Serializd Conectado</p>
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
                        <div className={`bg-[#0c0f13]/60 border p-5 rounded-2xl flex flex-col justify-between hover:border-slate-800 transition-all shadow-lg group ${
                          isFav ? "border-amber-500/40 shadow-amber-500/5 shadow-md" : "border-slate-900"
                        }`}>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="h-12 w-12 rounded-xl bg-rose-600/10 text-rose-400 font-bold flex items-center justify-center text-sm border border-rose-500/20 shadow">
                                {data.trakt.username.substring(0, 2).toUpperCase()}
                              </div>
                              <div>
                                <h4 className="font-bold text-sm text-slate-200">{data.trakt.username}</h4>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                  <p className="text-[10px] text-rose-400 font-mono">Trakt.tv Conectado</p>
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
                        <div className={`bg-[#0c0f13]/60 border p-5 rounded-2xl flex flex-col justify-between hover:border-slate-800 transition-all shadow-lg group ${
                          isFav ? "border-amber-500/40 shadow-amber-500/5 shadow-md" : "border-slate-900"
                        }`}>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="h-12 w-12 rounded-xl bg-red-600/10 text-red-400 font-bold flex items-center justify-center text-sm border border-red-500/20 shadow">
                                {data.lastfm.username.substring(0, 2).toUpperCase()}
                              </div>
                              <div>
                                <h4 className="font-bold text-sm text-slate-200">{data.lastfm.username}</h4>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                  <p className="text-[10px] text-red-400 font-mono">Last.fm Conectado</p>
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
                        <div className={`bg-[#0c0f13]/60 border p-5 rounded-2xl flex flex-col justify-between hover:border-slate-800 transition-all shadow-lg group ${
                          isFav ? "border-amber-500/40 shadow-amber-500/5 shadow-md" : "border-slate-900"
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
                                  <p className="text-[10px] text-blue-400 font-mono">MyDramaList Conectado</p>
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
                        <div className={`bg-[#0c0f13]/60 border p-5 rounded-2xl flex flex-col justify-between hover:border-slate-800 transition-all shadow-lg group ${
                          isFav ? "border-amber-500/40 shadow-amber-500/5 shadow-md" : "border-slate-900"
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
                                  <p className="text-[10px] text-yellow-400 font-mono">Simkl Conectado</p>
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
                            Conecte sua conta do AniList, MyAnimeList ou Simkl nas configurações para exibir suas estatísticas, conquistas e episódios de animes.
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
                            Conecte seu Letterboxd, Trakt.tv ou Simkl nas configurações para começar a monitorar seus diários de filmes e resenhas de cinema.
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
                            Conecte seu Serializd, Trakt.tv ou Simkl nas configurações para carregar sua atividade diária de maratona de séries e episódios de TV.
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
                            Conecte seu MyDramaList nas configurações para monitorar seus dramas asiáticos assistidos, watchlist e progresso de episódios.
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
                            Conecte seu Last.fm nas configurações para começar a monitorar suas músicas ouvidas, scrobbles e artistas favoritos no painel.
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
                  Gerenciar Conexões
                </h2>
                <p className="text-xs text-slate-400">
                  Insira seus nicknames e ative/desative cada rede social. Lembre-se que seus perfis precisam estar configurados como públicos nas respectivas plataformas.
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
                  const trackerStatus = status[key];
                  const hasNick = trackerConfig.nickname.trim().length > 0;

                  return (
                    <div 
                      key={key} 
                      className={`bg-[#0c0f13]/80 border rounded-2xl p-5 sm:p-6 transition-all ${
                        trackerConfig.enabled 
                          ? "border-slate-800" 
                          : "border-slate-900/60 opacity-60"
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
                            {trackerConfig.enabled ? "Ativo" : "Inativo"}
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
                    {data.anilist.bannerImage ? (
                      <img 
                        src={data.anilist.bannerImage} 
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
                        src={data.anilist.avatar?.large} 
                        alt="avatar" 
                        className="h-16 w-16 rounded-xl border-2 border-sky-400 object-cover bg-slate-900 shadow-lg"
                      />
                      <div>
                        <h3 className="text-xl font-bold font-display text-white">{data.anilist.name}</h3>
                        <p className="text-xs text-sky-400 font-mono">Anime & Manga Tracker</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* General Stats row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="bg-[#06080a]/80 border border-slate-900/60 p-4 rounded-xl text-center">
                        <span className="text-[10px] text-slate-500 font-mono block mb-1">Tempo Assistindo</span>
                        <strong className="text-sm font-bold text-sky-400">{formatWatchTime(data.anilist.stats?.watchedTime || 0)}</strong>
                      </div>
                      <div className="bg-[#06080a]/80 border border-slate-900/60 p-4 rounded-xl text-center">
                        <span className="text-[10px] text-slate-500 font-mono block mb-1">Capítulos Lidos</span>
                        <strong className="text-sm font-bold text-sky-400">{data.anilist.stats?.chaptersRead || 0}</strong>
                      </div>
                      <div className="bg-[#06080a]/80 border border-slate-900/60 p-4 rounded-xl text-center">
                        <span className="text-[10px] text-slate-500 font-mono block mb-1">Nota Média</span>
                        <strong className="text-sm font-bold text-sky-400">
                          {data.anilist.stats?.animeListScores?.meanScore ? `${data.anilist.stats.animeListScores.meanScore}/100` : "N/A"}
                        </strong>
                      </div>
                      <div className="bg-[#06080a]/80 border border-slate-900/60 p-4 rounded-xl text-center">
                        <span className="text-[10px] text-slate-500 font-mono block mb-1">Desvio Padrão</span>
                        <strong className="text-sm font-bold text-sky-400">
                          {data.anilist.stats?.animeListScores?.standardDeviation ? data.anilist.stats.animeListScores.standardDeviation : "N/A"}
                        </strong>
                      </div>
                    </div>

                    {/* Detailed API Statistics Block */}
                    {data.anilist.statistics && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#06080a]/30 border border-slate-900/40 p-5 rounded-2xl">
                        {/* Anime Statistics Section */}
                        {data.anilist.statistics.anime && (
                          <div className="space-y-4">
                            <h4 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2">
                              <Tv className="h-4 w-4" />
                              Estatísticas de Anime
                            </h4>
                            
                            <div className="grid grid-cols-3 gap-2">
                              <div className="bg-[#0c0f13]/80 p-2.5 rounded-lg border border-slate-900/40 text-center">
                                <span className="text-[9px] text-slate-500 block">Total</span>
                                <strong className="text-xs font-bold text-white">{data.anilist.statistics.anime.count}</strong>
                              </div>
                              <div className="bg-[#0c0f13]/80 p-2.5 rounded-lg border border-slate-900/40 text-center">
                                <span className="text-[9px] text-slate-500 block">Episódios</span>
                                <strong className="text-xs font-bold text-white">{data.anilist.statistics.anime.episodesWatched}</strong>
                              </div>
                              <div className="bg-[#0c0f13]/80 p-2.5 rounded-lg border border-slate-900/40 text-center">
                                <span className="text-[9px] text-slate-500 block">Nota Média</span>
                                <strong className="text-xs font-bold text-white">
                                  {data.anilist.statistics.anime.meanScore ? `${data.anilist.statistics.anime.meanScore}/100` : "N/A"}
                                </strong>
                              </div>
                            </div>

                            {/* Statuses distribution */}
                            {data.anilist.statistics.anime.statuses && data.anilist.statistics.anime.statuses.length > 0 && (
                              <div className="space-y-2">
                                <span className="text-[10px] text-slate-400 font-mono block">Distribuição por Status</span>
                                <div className="space-y-1.5">
                                  {data.anilist.statistics.anime.statuses.slice(0, 4).map((st) => {
                                    const percentage = data.anilist.statistics.anime!.count 
                                      ? Math.round((st.count / data.anilist.statistics.anime!.count) * 100) 
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
                            {data.anilist.statistics.anime.genres && data.anilist.statistics.anime.genres.length > 0 && (
                              <div className="space-y-2">
                                <span className="text-[10px] text-slate-400 font-mono block">Gêneros Favoritos</span>
                                <div className="flex flex-wrap gap-1.5">
                                  {data.anilist.statistics.anime.genres.slice(0, 5).map((g) => (
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
                        {data.anilist.statistics.manga && (
                          <div className="space-y-4">
                            <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                              <BookOpen className="h-4 w-4" />
                              Estatísticas de Mangá
                            </h4>
                            
                            <div className="grid grid-cols-3 gap-2">
                              <div className="bg-[#0c0f13]/80 p-2.5 rounded-lg border border-slate-900/40 text-center">
                                <span className="text-[9px] text-slate-500 block">Total</span>
                                <strong className="text-xs font-bold text-white">{data.anilist.statistics.manga.count}</strong>
                              </div>
                              <div className="bg-[#0c0f13]/80 p-2.5 rounded-lg border border-slate-900/40 text-center">
                                <span className="text-[9px] text-slate-500 block">Vols Lidos</span>
                                <strong className="text-xs font-bold text-white">{data.anilist.statistics.manga.volumesRead}</strong>
                              </div>
                              <div className="bg-[#0c0f13]/80 p-2.5 rounded-lg border border-slate-900/40 text-center">
                                <span className="text-[9px] text-slate-500 block">Nota Média</span>
                                <strong className="text-xs font-bold text-white">
                                  {data.anilist.statistics.manga.meanScore ? `${data.anilist.statistics.manga.meanScore}/100` : "N/A"}
                                </strong>
                              </div>
                            </div>

                            {/* Statuses distribution */}
                            {data.anilist.statistics.manga.statuses && data.anilist.statistics.manga.statuses.length > 0 && (
                              <div className="space-y-2">
                                <span className="text-[10px] text-slate-400 font-mono block">Distribuição por Status</span>
                                <div className="space-y-1.5">
                                  {data.anilist.statistics.manga.statuses.slice(0, 4).map((st) => {
                                    const percentage = data.anilist.statistics.manga!.count 
                                      ? Math.round((st.count / data.anilist.statistics.manga!.count) * 100) 
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
                            {data.anilist.statistics.manga.genres && data.anilist.statistics.manga.genres.length > 0 && (
                              <div className="space-y-2">
                                <span className="text-[10px] text-slate-400 font-mono block">Gêneros Favoritos</span>
                                <div className="flex flex-wrap gap-1.5">
                                  {data.anilist.statistics.manga.genres.slice(0, 5).map((g) => (
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
                          Animes Favoritos ({data.anilist.favourites?.anime?.nodes?.length || 0})
                        </h4>
                        {data.anilist.favourites?.anime?.nodes?.length ? (
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {data.anilist.favourites.anime.nodes.slice(0, 6).map((node) => (
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
                          Mangás Favoritos ({data.anilist.favourites?.manga?.nodes?.length || 0})
                        </h4>
                        {data.anilist.favourites?.manga?.nodes?.length ? (
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {data.anilist.favourites.manga.nodes.slice(0, 6).map((node) => (
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
            ) : (
              renderConnectOnboarding("anilist")
            )
          )}

          {/* ==========================================
              4. DETAIL: LETTERBOXD SECTION
              ========================================== */}
          {activeSection === "letterboxd" && (
            data.letterboxd ? (
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
                      {data.letterboxd.avatar ? (
                        <img 
                          src={data.letterboxd.avatar} 
                          alt={data.letterboxd.displayName} 
                          className="h-16 w-14 rounded-2xl object-cover border border-orange-500/20 shadow-md shrink-0"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="h-14 w-14 rounded-2xl bg-orange-600 text-white font-black font-display flex items-center justify-center text-xl shadow-lg shrink-0">
                          {data.letterboxd.username.substring(0, 2).toUpperCase()}
                        </div>
                      )}
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                          {data.letterboxd.displayName}
                          <span className="text-xs font-mono font-normal text-slate-500">@{data.letterboxd.username}</span>
                        </h3>
                        <p className="text-xs text-orange-400 font-mono">
                          Perfil Letterboxd • <a href={data.letterboxd.profileUrl} target="_blank" rel="noreferrer" className="underline inline-flex items-center gap-1 hover:text-orange-300">Letterboxd.com <ExternalLink className="h-3 w-3" /></a>
                        </p>
                        {data.letterboxd.location && (
                          <p className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                            <MapPin className="h-3 w-3 text-orange-500" />
                            {data.letterboxd.location}
                          </p>
                        )}
                        {data.letterboxd.bio && (
                          <p className="text-xs text-slate-300 mt-2 border-l-2 border-orange-500/30 pl-2 italic leading-relaxed max-w-xl">
                            {data.letterboxd.bio}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="bg-[#06080a] px-4 py-2 border border-slate-850 rounded-xl text-center self-stretch sm:self-auto flex sm:flex-col justify-center gap-1">
                      <span className="text-[10px] text-slate-500 font-mono block">Diário Recente</span>
                      <strong className="text-sm font-bold text-orange-400">{data.letterboxd.items?.length || 0} filmes logados</strong>
                    </div>
                  </div>

                  {/* Scraped Stats Bento */}
                  {data.letterboxd.stats && (
                    <div className="p-6 border-b border-slate-900/60 bg-[#06080a]/30 grid grid-cols-2 sm:grid-cols-5 gap-4">
                      {data.letterboxd.stats.films && (
                        <div className="bg-[#0c0f13]/80 border border-slate-900 rounded-xl p-3.5 text-center">
                          <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-wider">Filmes</span>
                          <strong className="text-lg font-bold text-orange-400 font-mono mt-1 block">{data.letterboxd.stats.films}</strong>
                        </div>
                      )}
                      {data.letterboxd.stats.thisYear && (
                        <div className="bg-[#0c0f13]/80 border border-slate-900 rounded-xl p-3.5 text-center">
                          <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-wider">Este Ano</span>
                          <strong className="text-lg font-bold text-orange-400 font-mono mt-1 block">{data.letterboxd.stats.thisYear}</strong>
                        </div>
                      )}
                      {data.letterboxd.stats.lists && (
                        <div className="bg-[#0c0f13]/80 border border-slate-900 rounded-xl p-3.5 text-center">
                          <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-wider">Listas</span>
                          <strong className="text-lg font-bold text-orange-400 font-mono mt-1 block">{data.letterboxd.stats.lists}</strong>
                        </div>
                      )}
                      {data.letterboxd.stats.following && (
                        <div className="bg-[#0c0f13]/80 border border-slate-900 rounded-xl p-3.5 text-center">
                          <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-wider">Seguindo</span>
                          <strong className="text-lg font-bold text-orange-400 font-mono mt-1 block">{data.letterboxd.stats.following}</strong>
                        </div>
                      )}
                      {data.letterboxd.stats.followers && (
                        <div className="bg-[#0c0f13]/80 border border-slate-900 rounded-xl p-3.5 text-center">
                          <span className="text-[10px] text-slate-500 font-mono block uppercase tracking-wider">Seguidores</span>
                          <strong className="text-lg font-bold text-orange-400 font-mono mt-1 block">{data.letterboxd.stats.followers}</strong>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Favorite Films Section */}
                  {data.letterboxd.favorites && data.letterboxd.favorites.length > 0 && (
                    <div className="p-6 border-b border-slate-900/60 bg-[#06080a]/10">
                      <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 mb-4">
                        <Heart className="h-4 w-4 text-orange-500" />
                        Filmes Favoritos
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {data.letterboxd.favorites.map((fav, fIdx) => (
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
                    
                    {data.letterboxd.items && data.letterboxd.items.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.letterboxd.items.map((item, index) => (
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
            ) : (
              renderConnectOnboarding("letterboxd")
            )
          )}

          {/* ==========================================
              5. DETAIL: MYANIMELIST SECTION
              ========================================== */}
          {activeSection === "mal" && (
            data.mal ? (
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
                      {data.mal.images?.jpg?.image_url ? (
                        <img 
                          src={data.mal.images.jpg.image_url} 
                          alt="avatar" 
                          className="h-14 w-14 rounded-2xl border border-blue-500 object-cover bg-slate-900 shadow-lg"
                        />
                      ) : (
                        <div className="h-14 w-14 rounded-2xl bg-blue-600 text-white font-black font-display flex items-center justify-center text-xl shadow-lg">
                          {data.mal.username.substring(0, 2).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-white">{data.mal.username}</h3>
                        <p className="text-xs text-blue-400 font-mono">
                          Perfil do MyAnimeList • Membro desde {data.mal.joined ? new Date(data.mal.joined).toLocaleDateString("pt-BR") : "N/A"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* MAL statistics blocks */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Anime statistics */}
                      {data.mal.statistics?.anime && (
                        <div className="bg-[#06080a] border border-slate-900 p-5 rounded-2xl space-y-3">
                          <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                            <Tv className="h-4 w-4" />
                            Estatísticas de Anime
                          </h4>
                          <div className="grid grid-cols-3 gap-3">
                            <div className="bg-[#090b0e] p-3 rounded-xl text-center border border-slate-900">
                              <span className="text-[10px] text-slate-500 font-mono block">Concluídos</span>
                              <strong className="text-base font-bold text-slate-200">{data.mal.statistics.anime.completed}</strong>
                            </div>
                            <div className="bg-[#090b0e] p-3 rounded-xl text-center border border-slate-900">
                              <span className="text-[10px] text-slate-500 font-mono block">Dias Assistindo</span>
                              <strong className="text-base font-bold text-slate-200">{data.mal.statistics.anime.days_watched}</strong>
                            </div>
                            <div className="bg-[#090b0e] p-3 rounded-xl text-center border border-slate-900">
                              <span className="text-[10px] text-slate-500 font-mono block">Média de Nota</span>
                              <strong className="text-base font-bold text-slate-200">{data.mal.statistics.anime.mean_score}</strong>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Manga statistics */}
                      {data.mal.statistics?.manga && (
                        <div className="bg-[#06080a] border border-slate-900 p-5 rounded-2xl space-y-3">
                          <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                            <BookOpen className="h-4 w-4" />
                            Estatísticas de Mangá
                          </h4>
                          <div className="grid grid-cols-3 gap-3">
                            <div className="bg-[#090b0e] p-3 rounded-xl text-center border border-slate-900">
                              <span className="text-[10px] text-slate-500 font-mono block">Concluídos</span>
                              <strong className="text-base font-bold text-slate-200">{data.mal.statistics.manga.completed}</strong>
                            </div>
                            <div className="bg-[#090b0e] p-3 rounded-xl text-center border border-slate-900">
                              <span className="text-[10px] text-slate-500 font-mono block">Dias Lendo</span>
                              <strong className="text-base font-bold text-slate-200">{data.mal.statistics.manga.days_read}</strong>
                            </div>
                            <div className="bg-[#090b0e] p-3 rounded-xl text-center border border-slate-900">
                              <span className="text-[10px] text-slate-500 font-mono block">Média de Nota</span>
                              <strong className="text-base font-bold text-slate-200">{data.mal.statistics.manga.mean_score}</strong>
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
                          Animes Favoritos ({data.mal.favorites?.anime?.length || 0})
                        </h4>
                        {data.mal.favorites?.anime?.length ? (
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {data.mal.favorites.anime.slice(0, 6).map((anime, index) => (
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
                          <BookOpen className="h-4 w-4 text-emerald-500" />
                          Mangás Favoritos ({data.mal.favorites?.manga?.length || 0})
                        </h4>
                        {data.mal.favorites?.manga?.length ? (
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {data.mal.favorites.manga.slice(0, 6).map((manga, index) => (
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
            ) : (
              renderConnectOnboarding("mal")
            )
          )}

          {/* ==========================================
              6. DETAIL: SERIALIZD SECTION
              ========================================== */}
          {activeSection === "serializd" && (
            data.serializd ? (
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
                      {data.serializd.profilePicture ? (
                        <img 
                          src={data.serializd.profilePicture} 
                          alt="avatar" 
                          className="h-14 w-14 rounded-2xl border border-teal-500/30 object-cover shadow-lg"
                        />
                      ) : (
                        <div className="h-14 w-14 rounded-2xl bg-teal-600 text-white font-black font-display flex items-center justify-center text-xl shadow-lg">
                          {data.serializd.username.substring(0, 2).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-white">{data.serializd.username}</h3>
                        <p className="text-xs text-teal-400 font-mono">
                          Perfil Serializd • Diário de Séries de TV
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center bg-[#06080a] p-2 border border-slate-850 rounded-xl text-center text-xs">
                      <div className="px-3 py-1">
                        <span className="text-[10px] text-slate-500 font-mono block">Reviews</span>
                        <strong className="text-sm font-bold text-teal-400">{data.serializd.stats?.reviewsCount || 0}</strong>
                      </div>
                      <div className="px-3 py-1 border-l border-slate-900">
                        <span className="text-[10px] text-slate-500 font-mono block">Seguidores</span>
                        <strong className="text-sm font-bold text-teal-400">{data.serializd.stats?.followersCount || 0}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* Biography */}
                    {data.serializd.biography && (
                      <div className="bg-[#06080a] p-4 rounded-xl border border-slate-900 text-xs text-slate-400 space-y-1">
                        <span className="text-[10px] text-slate-500 font-mono uppercase block">Biografia do Serializd</span>
                        <p className="text-slate-300 leading-relaxed">{data.serializd.biography}</p>
                      </div>
                    )}

                    {/* Logged TV Shows List */}
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                      <Tv className="h-4 w-4 text-teal-400" />
                      Reviews & Séries Recentes
                    </h4>

                    {data.serializd.items && data.serializd.items.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.serializd.items.map((item) => (
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
            ) : (
              renderConnectOnboarding("serializd")
            )
          )}

          {/* ==========================================
              7. DETAIL: TRAKT SECTION
              ========================================== */}
          {activeSection === "trakt" && (
            data.trakt ? (
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
                        {data.trakt.username.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{data.trakt.username}</h3>
                        <p className="text-xs text-rose-400 font-mono">
                          Perfil Trakt.tv • <a href={data.trakt.profileUrl} target="_blank" rel="noreferrer" className="underline inline-flex items-center gap-1 hover:text-rose-300">Trakt.tv <ExternalLink className="h-3 w-3" /></a>
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#06080a] px-4 py-2 border border-slate-850 rounded-xl text-center self-stretch sm:self-auto">
                      <span className="text-[10px] text-slate-500 font-mono block">Histórico do Feed</span>
                      <strong className="text-base font-bold text-rose-400">{data.trakt.items?.length || 0} itens mapeados</strong>
                    </div>
                  </div>

                  {/* Trakt History entries list */}
                  <div className="p-6 space-y-6">
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                      <Flame className="h-4 w-4 text-rose-500" />
                      Atividade do Histórico de Visualização
                    </h4>

                    {data.trakt.items && data.trakt.items.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.trakt.items.map((item, index) => (
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
            ) : (
              renderConnectOnboarding("trakt")
            )
          )}

          {/* ==========================================
              8. DETAIL: LAST.FM SECTION
              ========================================== */}
          {activeSection === "lastfm" && (
            data.lastfm ? (
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
                        <span className="relative z-10">{data.lastfm.username.substring(0, 2).toUpperCase()}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                          {data.lastfm.username}
                          <span className="px-2 py-0.5 rounded-full text-[9px] bg-red-500/10 text-red-400 border border-red-500/20 font-mono font-bold uppercase tracking-wide">Last.fm</span>
                        </h3>
                        <p className="text-xs text-red-400 font-mono mt-0.5">
                          Histórico de Músicas • <a href={data.lastfm.profileUrl} target="_blank" rel="noreferrer" className="underline inline-flex items-center gap-1 hover:text-red-300">Last.fm <ExternalLink className="h-3 w-3" /></a>
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#06080a] px-4 py-2 border border-slate-850 rounded-xl text-center self-stretch sm:self-auto">
                      <span className="text-[10px] text-slate-500 font-mono block">Scrobbles Obtidos</span>
                      <strong className="text-base font-bold text-red-400">{data.lastfm.items?.length || 0} faixas</strong>
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
                      Recentes ({data.lastfm.items?.length || 0})
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
                      Favoritas ({data.lastfm.lovedTracks?.length || 0})
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
                      Top Músicas ({data.lastfm.topTracks?.length || 0})
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
                      Top Artistas ({data.lastfm.topArtists?.length || 0})
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
                      Recomendações ({data.lastfm.recommendedTracks?.length || 0})
                    </button>
                  </div>

                  {/* Last.fm History entries list */}
                  <div className="p-6 space-y-6">
                    {data.lastfm.fallback && (
                      <div className="bg-[#110d06] border border-amber-950 p-4 rounded-xl text-amber-300 text-xs flex items-start gap-3 leading-relaxed">
                        <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-amber-500" />
                        <div>
                          <strong className="block mb-0.5">Perfil sem Histórico ou Privado</strong>
                          Não conseguimos ler reproduções recentes do Last.fm para o usuário "<strong>{data.lastfm.username}</strong>". Isso ocorre se o perfil for novo, não tiver scrobbles recentes, estiver configurado como privado ou se o nome de usuário não existir.
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

                        {data.lastfm.items && data.lastfm.items.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {data.lastfm.items.map((item, index) => (
                              <div key={index} className="bg-[#06080a]/80 border border-slate-900 p-4 rounded-2xl flex items-center justify-between gap-4 hover:border-red-500/30 hover:bg-[#0c0d11]/40 transition-all duration-300 group">
                                <div className="flex items-center gap-3.5 overflow-hidden">
                                  {/* Vinyl Disc Style Placeholder */}
                                  <div className="h-10 w-10 rounded-full bg-slate-950 flex items-center justify-center border border-slate-800 shadow relative shrink-0 overflow-hidden">
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

                        {data.lastfm.lovedTracks && data.lastfm.lovedTracks.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {data.lastfm.lovedTracks.map((item, index) => (
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

                        {data.lastfm.topTracks && data.lastfm.topTracks.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {data.lastfm.topTracks.map((item, index) => (
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

                        {data.lastfm.topArtists && data.lastfm.topArtists.length > 0 ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {data.lastfm.topArtists.map((item, index) => {
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

                        {data.lastfm.recommendedTracks && data.lastfm.recommendedTracks.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {data.lastfm.recommendedTracks.map((item, index) => (
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
            ) : (
              renderConnectOnboarding("lastfm")
            )
          )}

          {/* ==========================================
              9. DETAIL: MYDRAMALIST SECTION
              ========================================== */}
          {activeSection === "mydramalist" && (
            data.mydramalist ? (
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
                      {data.mydramalist.avatar ? (
                        <img 
                          src={data.mydramalist.avatar} 
                          alt="avatar" 
                          className="h-14 w-14 rounded-2xl object-cover border border-blue-500/20 shadow-lg"
                        />
                      ) : (
                        <div className="h-14 w-14 rounded-2xl bg-blue-600 text-white font-black font-display flex items-center justify-center text-xl shadow-lg">
                          {data.mydramalist.displayName.substring(0, 2).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                          {data.mydramalist.displayName}
                          <span className="px-2 py-0.5 rounded-full text-[9px] bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono font-bold uppercase tracking-wide">MyDramaList</span>
                        </h3>
                        <p className="text-xs text-blue-400 font-mono mt-0.5">
                          Perfil de Doramas • <a href={data.mydramalist.profileUrl} target="_blank" rel="noreferrer" className="underline inline-flex items-center gap-1 hover:text-blue-300">MyDramaList <ExternalLink className="h-3 w-3" /></a>
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#06080a] px-4 py-2 border border-slate-850 rounded-xl text-center self-stretch sm:self-auto">
                      <span className="text-[10px] text-slate-500 font-mono block">Dramas Assistidos</span>
                      <strong className="text-base font-bold text-blue-400">{data.mydramalist.stats?.completed || 0} títulos</strong>
                    </div>
                  </div>

                  {/* Stats Summary Bento cards */}
                  <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-[#06080a]/85 border border-slate-900/80 p-5 rounded-2xl text-center shadow-md">
                        <span className="text-[10px] text-slate-500 font-mono uppercase block mb-1">Completados</span>
                        <strong className="text-2xl font-black font-display text-emerald-400">{data.mydramalist.stats?.completed || 0}</strong>
                        <p className="text-[10px] text-slate-500 mt-1">Dramas concluídos</p>
                      </div>
                      <div className="bg-[#06080a]/85 border border-slate-900/80 p-5 rounded-2xl text-center shadow-md">
                        <span className="text-[10px] text-slate-500 font-mono uppercase block mb-1">Assistindo</span>
                        <strong className="text-2xl font-black font-display text-blue-400">{data.mydramalist.stats?.watching || 0}</strong>
                        <p className="text-[10px] text-slate-500 mt-1">Séries em progresso</p>
                      </div>
                      <div className="bg-[#06080a]/85 border border-slate-900/80 p-5 rounded-2xl text-center shadow-md">
                        <span className="text-[10px] text-slate-500 font-mono uppercase block mb-1">Planejam Assistir</span>
                        <strong className="text-2xl font-black font-display text-pink-400">{data.mydramalist.stats?.planToWatch || 0}</strong>
                        <p className="text-[10px] text-slate-500 mt-1">Na lista de espera</p>
                      </div>
                    </div>

                    {data.mydramalist.fallback && (
                      <div className="bg-[#110d06] border border-amber-950 p-4 rounded-xl text-amber-300 text-xs flex items-start gap-3 leading-relaxed">
                        <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-amber-500" />
                        <div>
                          <strong className="block mb-0.5">Sincronização Básica Ativa</strong>
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
            ) : (
              renderConnectOnboarding("mydramalist")
            )
          )}

          {/* ==========================================
              10. DETAIL: SIMKL SECTION
              ========================================== */}
          {activeSection === "simkl" && (
            data.simkl ? (
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
                      {data.simkl.avatar ? (
                        <img 
                          src={data.simkl.avatar} 
                          alt="avatar" 
                          className="h-14 w-14 rounded-2xl object-cover border border-yellow-500/20 shadow-lg"
                        />
                      ) : (
                        <div className="h-14 w-14 rounded-2xl bg-yellow-600 text-black font-black font-display flex items-center justify-center text-xl shadow-lg">
                          {data.simkl.displayName.substring(0, 2).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                          {data.simkl.displayName}
                          <span className="px-2 py-0.5 rounded-full text-[9px] bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 font-mono font-bold uppercase tracking-wide">Simkl</span>
                        </h3>
                        <p className="text-xs text-yellow-400 font-mono mt-0.5">
                          Perfil de Multimídia • <a href={data.simkl.profileUrl} target="_blank" rel="noreferrer" className="underline inline-flex items-center gap-1 hover:text-yellow-300">Simkl <ExternalLink className="h-3 w-3" /></a>
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#06080a] px-4 py-2 border border-slate-850 rounded-xl text-center self-stretch sm:self-auto">
                      <span className="text-[10px] text-slate-500 font-mono block">Estatísticas Totais</span>
                      <strong className="text-base font-bold text-yellow-400">
                        {(data.simkl.stats?.moviesCount || 0) + (data.simkl.stats?.showsCount || 0) + (data.simkl.stats?.animeCount || 0)} itens
                      </strong>
                    </div>
                  </div>

                  {/* Stats Summary Bento cards */}
                  <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-[#06080a]/85 border border-slate-900/80 p-5 rounded-2xl text-center shadow-md">
                        <span className="text-[10px] text-slate-500 font-mono uppercase block mb-1">Filmes</span>
                        <strong className="text-2xl font-black font-display text-emerald-400">{data.simkl.stats?.moviesCount || 0}</strong>
                        <p className="text-[10px] text-slate-500 mt-1">Filmes assistidos</p>
                      </div>
                      <div className="bg-[#06080a]/85 border border-slate-900/80 p-5 rounded-2xl text-center shadow-md">
                        <span className="text-[10px] text-slate-500 font-mono uppercase block mb-1">Séries</span>
                        <strong className="text-2xl font-black font-display text-blue-400">{data.simkl.stats?.showsCount || 0}</strong>
                        <p className="text-[10px] text-slate-500 mt-1">Séries acompanhadas</p>
                      </div>
                      <div className="bg-[#06080a]/85 border border-slate-900/80 p-5 rounded-2xl text-center shadow-md">
                        <span className="text-[10px] text-slate-500 font-mono uppercase block mb-1">Animes</span>
                        <strong className="text-2xl font-black font-display text-yellow-400">{data.simkl.stats?.animeCount || 0}</strong>
                        <p className="text-[10px] text-slate-500 mt-1">Animes salvos</p>
                      </div>
                    </div>

                    {data.simkl.fallback && (
                      <div className="bg-[#110d06] border border-amber-950 p-4 rounded-xl text-amber-300 text-xs flex items-start gap-3 leading-relaxed">
                        <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-amber-500" />
                        <div>
                          <strong className="block mb-0.5">Sincronização Integrada Ativa</strong>
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
                        {data.simkl.items?.map((item: any, i: number) => (
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
            ) : (
              renderConnectOnboarding("simkl")
            )
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
