import fetch from "node-fetch";

async function fetchTextSafely(url: string): Promise<string> {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
      },
    });
    if (!response.ok) return "";
    return await response.text();
  } catch (e) {
    return "";
  }
}

async function fetchJsonSafely(url: string): Promise<any> {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
      },
    });
    if (!response.ok) return null;
    return await response.json();
  } catch (e) {
    return null;
  }
}

function parseXMLItems(xmlText: string, username: string): any[] {
  if (!xmlText) return [];
  const items: any[] = [];
  const itemMatches = xmlText.matchAll(/<item>([\s\S]*?)<\/item>/g);

  for (const match of itemMatches) {
    const itemContent = match[1];

    const titleMatch = itemContent.match(/<title>([\s\S]*?)<\/title>/);
    const linkMatch = itemContent.match(/<link>([\s\S]*?)<\/link>/);
    const pubDateMatch = itemContent.match(/<pubDate>([\s\S]*?)<\/pubDate>/);

    let title = titleMatch ? titleMatch[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim() : "";
    title = title
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'");

    // Split artist and track name (separated by en-dash, em-dash or standard hyphen)
    let artist = "Artista";
    let trackName = "Música";
    const dashIndex = title.search(/[\u2013\u2014-]/);
    if (dashIndex !== -1) {
      artist = title.substring(0, dashIndex).trim();
      trackName = title.substring(dashIndex + 1).trim();
    } else {
      trackName = title;
    }

    items.push({
      title,
      artist,
      trackName,
      link: linkMatch ? linkMatch[1].trim() : `https://www.last.fm/user/${username}`,
      pubDate: pubDateMatch ? pubDateMatch[1].trim() : "",
    });
  }
  return items;
}

export async function fetchLastFMProfile(username: string) {
  // Correct base URLs on lfm.xiffy.nl (without "/user/")
  const baseUrl = `https://lfm.xiffy.nl/${username}`;

  // Fetch recent tracks first to check if profile is accessible/valid
  const recentTracksResponse = await fetch(baseUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
    },
  });

  if (!recentTracksResponse.ok) {
    if (recentTracksResponse.status === 404) {
      const err: any = new Error("Usuário Last.fm não encontrado ou sem reproduções recentes.");
      err.status = 404;
      throw err;
    }
    const err: any = new Error("Falha ao obter o feed do Last.fm.");
    err.status = recentTracksResponse.status;
    throw err;
  }

  const recentXmlText = await recentTracksResponse.text();
  const recentTracks = parseXMLItems(recentXmlText, username);

  // Fetch remaining sections concurrently
  const [lovedRes, topTracksRes, topArtistsRes, recommendedJsonRes] = await Promise.all([
    fetchTextSafely(`${baseUrl}/loved`),
    fetchTextSafely(`${baseUrl}/toptracks`),
    fetchTextSafely(`${baseUrl}/topartists`),
    fetchJsonSafely(`${baseUrl}/recommended/json`),
  ]);

  const lovedTracks = parseXMLItems(lovedRes, username);
  const topTracks = parseXMLItems(topTracksRes, username);
  const topArtists = parseXMLItems(topArtistsRes, username);

  // Process recommended tracks (JSON format preferred, XML as fallback)
  let recommendedTracks: any[] = [];
  if (recommendedJsonRes && Array.isArray(recommendedJsonRes)) {
    recommendedTracks = recommendedJsonRes.map((rec: any) => {
      const art = rec.artist || "Artista";
      const trk = rec.track || rec.title || "Música";
      return {
        title: `${art} - ${trk}`,
        artist: art,
        trackName: trk,
        link: rec.url || rec.link || `https://www.last.fm/music/${encodeURIComponent(art)}/_/${encodeURIComponent(trk)}`,
        pubDate: "",
      };
    });
  } else {
    // Try to fetch recommended XML as fallback
    const recXmlText = await fetchTextSafely(`${baseUrl}/recommended`);
    recommendedTracks = parseXMLItems(recXmlText, username);
  }

  return {
    username,
    profileUrl: `https://www.last.fm/user/${username}`,
    items: recentTracks.slice(0, 20),
    lovedTracks: lovedTracks.slice(0, 20),
    topTracks: topTracks.slice(0, 20),
    topArtists: topArtists.slice(0, 20),
    recommendedTracks: recommendedTracks.slice(0, 20),
  };
}
