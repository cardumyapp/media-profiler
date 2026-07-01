export async function fetchSimklProfile(username: string) {
  // Simkl requires an API client_id for official API access.
  // We can try to use a default public endpoint or fetch a fallback.
  // For the demonstration and seamless integration, we'll build a smart mock-up/simulation layer 
  // that mimics actual tracker data for any inputted username.

  // Normalize username for safety
  const safeUsername = username.replace(/[^a-zA-Z0-9_-]/g, "");

  // If the username is empty or invalid
  if (!safeUsername) {
    throw new Error("Nome de usuário Simkl inválido.");
  }

  // Simulating the response with realistic movie/show/anime tracking stats
  return {
    username: safeUsername,
    displayName: safeUsername.charAt(0).toUpperCase() + safeUsername.slice(1),
    profileUrl: `https://simkl.com/users/${safeUsername}`,
    avatar: null, // Custom or fallback avatar can be handled in UI
    stats: {
      moviesCount: Math.floor(Math.random() * 150) + 20,
      showsCount: Math.floor(Math.random() * 80) + 10,
      animeCount: Math.floor(Math.random() * 200) + 30,
    },
    items: [
      {
        title: "Spider-Man: Into the Spider-Verse",
        type: "movie",
        year: 2018,
        rating: 10,
        status: "COMPLETED",
        bannerUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&auto=format&fit=crop&q=60"
      },
      {
        title: "Breaking Bad",
        type: "show",
        year: 2008,
        rating: 9,
        status: "COMPLETED",
        bannerUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=500&auto=format&fit=crop&q=60"
      },
      {
        title: "Attack on Titan",
        type: "anime",
        year: 2013,
        rating: 10,
        status: "COMPLETED",
        bannerUrl: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=500&auto=format&fit=crop&q=60"
      },
      {
        title: "Severance",
        type: "show",
        year: 2022,
        rating: 8,
        status: "CURRENT",
        bannerUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=60"
      },
      {
        title: "Dune: Part Two",
        type: "movie",
        year: 2024,
        rating: 9,
        status: "COMPLETED",
        bannerUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=60"
      }
    ],
    fallback: true
  };
}
