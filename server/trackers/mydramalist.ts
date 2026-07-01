export async function fetchMyDramaListProfile(username: string) {
  const profileUrl = `https://mydramalist.com/profile/${username}`;
  const response = await fetch(profileUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    },
  });

  if (response.status === 404) {
    const err: any = new Error("Perfil MyDramaList não encontrado.");
    err.status = 404;
    throw err;
  }

  if (!response.ok) {
    // If rate limited or other error, fallback to mock but active indicator
    return {
      username,
      displayName: username,
      profileUrl,
      avatar: null,
      stats: {
        completed: 0,
        watching: 0,
        planToWatch: 0,
      },
      items: [],
      fallback: true
    };
  }

  const html = await response.text();
  // Simple custom regex to find user avatar
  const avatarMatch = html.match(/<img[^>]+src="([^"]+)"[^>]+class="[^"]*img-responsive[^"]*rounded-circle[^"]*"/i) ||
                      html.match(/class="[^"]*profile-avatar[^"]*"[^>]+src="([^"]+)"/i) ||
                      html.match(/src="([^"]+)"[^>]+class="[^"]*profile-avatar[^"]*"/i) ||
                      html.match(/<img[^>]+src="([^"]+)"[^>]+alt="avatar"/i);
  const avatar = avatarMatch ? avatarMatch[1] : null;

  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  let displayName = username;
  if (titleMatch) {
    const cleanTitle = titleMatch[1].replace("- MyDramaList", "").trim();
    displayName = cleanTitle.split("'s")[0] || username;
  }

  // Try to match statistics if present
  const completedMatch = html.match(/Completed<\/span>[^<]*<span class="badge[^>]*>(\d+)/i) || html.match(/Completed\s*\((\d+)\)/i);
  const watchingMatch = html.match(/Watching<\/span>[^<]*<span class="badge[^>]*>(\d+)/i) || html.match(/Watching\s*\((\d+)\)/i);
  const planMatch = html.match(/Plan to Watch<\/span>[^<]*<span class="badge[^>]*>(\d+)/i) || html.match(/Plan to Watch\s*\((\d+)\)/i);

  const completed = completedMatch ? parseInt(completedMatch[1], 10) : 0;
  const watching = watchingMatch ? parseInt(watchingMatch[1], 10) : 0;
  const planToWatch = planMatch ? parseInt(planMatch[1], 10) : 0;

  return {
    username,
    displayName,
    profileUrl,
    avatar,
    stats: {
      completed,
      watching,
      planToWatch,
    },
    items: [],
    fallback: false
  };
}
