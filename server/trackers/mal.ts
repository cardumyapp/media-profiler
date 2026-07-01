export async function fetchMALProfile(username: string) {
  const userRes = await fetch(`https://api.jikan.moe/v4/users/${username}/full`, {
    headers: { "User-Agent": "aistudio-media-summary" }
  });

  if (userRes.status === 404) {
    const err: any = new Error("MyAnimeList user not found");
    err.status = 404;
    throw err;
  }

  if (!userRes.ok) {
    const err: any = new Error("Failed to fetch MyAnimeList user data");
    err.status = userRes.status;
    throw err;
  }

  const userData = await userRes.json();
  return userData.data;
}
