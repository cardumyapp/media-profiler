export async function fetchTraktProfile(username: string) {
  const feedUrl = `https://trakt.tv/users/${username}/history.atom`;
  const response = await fetch(feedUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    },
  });

  if (response.status === 404) {
    const err: any = new Error("Trakt user history not found. Verify nickname and public settings.");
    err.status = 404;
    throw err;
  }

  if (!response.ok) {
    const err: any = new Error("Failed to fetch Trakt RSS/Atom history");
    err.status = response.status;
    throw err;
  }

  const atomText = await response.text();
  const items: any[] = [];
  
  // Parse Atom entries using custom robust regex
  const entryMatches = atomText.matchAll(/<entry>([\s\S]*?)<\/entry>/g);
  for (const match of entryMatches) {
    const entryContent = match[1];

    const titleMatch = entryContent.match(/<title>([\s\S]*?)<\/title>/);
    const linkMatch = entryContent.match(/<link[^>]*href="([^"]+)"/);
    const publishedMatch = entryContent.match(/<published>([\s\S]*?)<\/published>/);
    const contentMatch = entryContent.match(/<content[^>]*>([\s\S]*?)<\/content>/);

    let title = titleMatch ? titleMatch[1].trim() : "";
    title = title.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim();

    // Clean username from title if prepended, e.g. "username watched Movie"
    const prefixPattern = new RegExp(`^${username}\\s+`, "i");
    title = title.replace(prefixPattern, "");

    // Determine action type from title or content
    let action = "watched";
    if (title.toLowerCase().startsWith("rated")) {
      action = "rated";
      title = title.replace(/^rated\s+/i, "");
    } else if (title.toLowerCase().startsWith("watched")) {
      action = "watched";
      title = title.replace(/^watched\s+/i, "");
    }

    let contentHtml = contentMatch ? contentMatch[1] : "";
    contentHtml = contentHtml.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim();
    const cleanContent = contentHtml.replace(/<[^>]*>/g, "").trim();

    items.push({
      title,
      action,
      link: linkMatch ? linkMatch[1] : `https://trakt.tv/users/${username}`,
      pubDate: publishedMatch ? publishedMatch[1] : "",
      description: cleanContent.length > 300 ? cleanContent.substring(0, 300) + "..." : cleanContent,
    });
  }

  return {
    username,
    profileUrl: `https://trakt.tv/users/${username}`,
    items: items.slice(0, 20),
  };
}
