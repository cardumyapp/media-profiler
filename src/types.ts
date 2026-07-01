export interface AniListUser {
  id: number;
  name: string;
  avatar: {
    large: string;
  };
  bannerImage: string | null;
  about: string | null;
  stats: {
    watchedTime: number;
    chaptersRead: number;
    animeListScores: {
      meanScore: number;
      standardDeviation: number;
    } | null;
    mangaListScores: {
      meanScore: number;
      standardDeviation: number;
    } | null;
  };
  statistics?: {
    anime?: {
      count: number;
      meanScore: number;
      minutesWatched: number;
      episodesWatched: number;
      statuses: Array<{
        status: string;
        count: number;
      }>;
      genres: Array<{
        genre: string;
        count: number;
      }>;
    };
    manga?: {
      count: number;
      meanScore: number;
      chaptersRead: number;
      volumesRead: number;
      statuses: Array<{
        status: string;
        count: number;
      }>;
      genres: Array<{
        genre: string;
        count: number;
      }>;
    };
  };
  favourites: {
    anime: {
      nodes: Array<{
        id: number;
        title: {
          romaji: string;
          english: string | null;
        };
        genres: string[];
        coverImage: {
          large: string;
        };
      }>;
    };
    manga: {
      nodes: Array<{
        id: number;
        title: {
          romaji: string;
          english: string | null;
        };
        genres: string[];
        coverImage: {
          large: string;
        };
      }>;
    };
  };
}

export interface LetterboxdItem {
  title: string;
  link: string;
  pubDate: string;
  filmTitle: string;
  filmYear: string;
  rating: string | null;
  review: string;
  imageUrl: string | null;
}

export interface LetterboxdUser {
  username: string;
  displayName: string;
  profileUrl: string;
  items: LetterboxdItem[];
  avatar?: string;
  bio?: string;
  location?: string;
  stats?: {
    films?: string;
    thisYear?: string;
    lists?: string;
    following?: string;
    followers?: string;
  };
  favorites?: Array<{
    name: string;
    link: string;
    slug: string;
    posterUrl?: string | null;
  }>;
}

export interface MALUser {
  username: string;
  joined: string;
  images?: {
    jpg?: {
      image_url?: string;
    };
  };
  statistics?: {
    anime?: {
      completed: number;
      days_watched: number;
      mean_score: number;
    };
    manga?: {
      completed: number;
      days_read: number;
      mean_score: number;
    };
  };
  favorites?: {
    anime?: Array<{
      title: string;
      images?: {
        jpg?: {
          large_image_url?: string;
        };
      };
    }>;
    manga?: Array<{
      title: string;
      images?: {
        jpg?: {
          large_image_url?: string;
        };
      };
    }>;
  };
}

export interface SerializdItem {
  id: number;
  showName: string;
  seasonName: string | null;
  episodeName: string | null;
  rating: number | null;
  reviewText: string;
  isSpoiler: boolean;
  date: string;
  bannerUrl: string | null;
}

export interface SerializdFavoriteShow {
  showId: number;
  showName: string;
  bannerImage: string | null;
}

export interface SerializdUser {
  username: string;
  biography: string;
  profilePicture: string | null;
  joinedOn?: string;
  stats: {
    reviewsCount: number;
    followersCount: number;
    followingCount: number;
    showsCount: number;
    watchlistCount?: number;
  };
  favoriteShows?: SerializdFavoriteShow[];
  items: SerializdItem[];
}

export interface TraktItem {
  title: string;
  action: string;
  link: string;
  pubDate: string;
  description: string;
}

export interface TraktUser {
  username: string;
  profileUrl: string;
  items: TraktItem[];
}

export interface LastFMItem {
  title: string;
  artist: string;
  trackName: string;
  link: string;
  pubDate: string;
}

export interface LastFMUser {
  username: string;
  profileUrl: string;
  items: LastFMItem[];
  lovedTracks?: LastFMItem[];
  topTracks?: LastFMItem[];
  topArtists?: LastFMItem[];
  recommendedTracks?: LastFMItem[];
  fallback?: boolean;
}

export interface MyDramaListUser {
  username: string;
  displayName: string;
  profileUrl: string;
  avatar: string | null;
  stats: {
    completed: number;
    watching: number;
    planToWatch: number;
  };
  items: any[];
  fallback: boolean;
}

export interface SimklItem {
  title: string;
  type: string;
  year: number | null;
  rating: number | null;
  status: string;
  bannerUrl: string | null;
}

export interface SimklUser {
  username: string;
  displayName: string;
  profileUrl: string;
  avatar: string | null;
  stats: {
    moviesCount: number;
    showsCount: number;
    animeCount: number;
  };
  items: SimklItem[];
  fallback?: boolean;
}

export interface SearchState {
  anilistNick: string;
  letterboxdNick: string;
  malNick: string;
  serializdNick: string;
  traktNick: string;
  lastfmNick: string;
  mydramalistNick: string;
  simklNick: string;
}
