import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { fetchSerializdProfile } from "./server/trackers/serializd";
import { fetchTraktProfile } from "./server/trackers/trakt";
import { fetchLetterboxdProfile } from "./server/trackers/letterboxd";
import { fetchMALProfile } from "./server/trackers/mal";
import { fetchAniListProfile } from "./server/trackers/anilist";
import { fetchLastFMProfile } from "./server/trackers/lastfm";
import { fetchMyDramaListProfile } from "./server/trackers/mydramalist";
import { fetchSimklProfile } from "./server/trackers/simkl";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Endpoint: Fetch Serializd user details & recent reviews
app.get("/api/tracker/serializd/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const data = await fetchSerializdProfile(username);
    return res.json(data);
  } catch (error: any) {
    console.error("Error fetching Serializd:", error);
    const statusCode = error.status || 500;
    return res.status(statusCode).json({ error: error.message || "Internal server error fetching Serializd" });
  }
});

// Endpoint: Fetch Trakt user history via public Atom/RSS feed
app.get("/api/tracker/trakt/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const data = await fetchTraktProfile(username);
    return res.json(data);
  } catch (error: any) {
    console.error("Error fetching Trakt history:", error);
    const statusCode = error.status || 500;
    return res.status(statusCode).json({ error: error.message || "Internal server error fetching Trakt" });
  }
});

// Endpoint: Fetch Letterboxd user diary via public RSS
app.get("/api/tracker/letterboxd/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const data = await fetchLetterboxdProfile(username);
    return res.json(data);
  } catch (error: any) {
    console.error("Error fetching Letterboxd RSS:", error);
    const statusCode = error.status || 500;
    return res.status(statusCode).json({ error: error.message || "Internal server error fetching Letterboxd" });
  }
});

// Endpoint: Fetch MyAnimeList user details via public Jikan API
app.get("/api/tracker/mal/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const data = await fetchMALProfile(username);
    return res.json(data);
  } catch (error: any) {
    console.error("Error fetching MyAnimeList profile:", error);
    const statusCode = error.status || 500;
    return res.status(statusCode).json({ error: error.message || "Internal server error fetching MAL" });
  }
});

// Endpoint: Fetch AniList user details via GraphQL
app.get("/api/tracker/anilist/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const data = await fetchAniListProfile(username);
    return res.json(data);
  } catch (error: any) {
    console.error("Error fetching AniList:", error);
    const statusCode = error.status || 500;
    return res.status(statusCode).json({ error: error.message || "Internal server error fetching AniList" });
  }
});

// Endpoint: Fetch Last.fm user recent tracks via public RSS
app.get("/api/tracker/lastfm/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const data = await fetchLastFMProfile(username);
    return res.json(data);
  } catch (error: any) {
    console.warn("Error fetching Last.fm RSS:", error.message || error);
    // Graceful fallback for inactive, empty, private, or not found profiles
    return res.json({
      username,
      profileUrl: `https://www.last.fm/user/${username}`,
      items: [],
      fallback: true,
      error: error.message || "Usuário não encontrado ou sem reproduções recentes."
    });
  }
});

// Endpoint: Fetch MyDramaList user profile details
app.get("/api/tracker/mydramalist/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const data = await fetchMyDramaListProfile(username);
    return res.json(data);
  } catch (error: any) {
    console.error("Error fetching MyDramaList profile:", error);
    return res.json({
      username,
      displayName: username,
      profileUrl: `https://mydramalist.com/profile/${username}`,
      avatar: null,
      stats: {
        completed: 0,
        watching: 0,
        planToWatch: 0,
      },
      items: [],
      fallback: true
    });
  }
});

// Endpoint: Fetch Simkl user profile details
app.get("/api/tracker/simkl/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const data = await fetchSimklProfile(username);
    return res.json(data);
  } catch (error: any) {
    console.error("Error fetching Simkl profile:", error);
    return res.json({
      username,
      displayName: username,
      profileUrl: `https://simkl.com/users/${username}`,
      avatar: null,
      stats: {
        moviesCount: 0,
        showsCount: 0,
        animeCount: 0,
      },
      items: [],
      fallback: true
    });
  }
});



// Vite middleware integration
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
