import fetch from "node-fetch";

export async function fetchLetterboxdProfile(username: string) {
  const rssUrl = `https://letterboxd.com/${username}/rss/`;
  const profileUrl = `https://letterboxd.com/${username}/`;

  // Fetch both concurrently to save time
  const [rssResponse, htmlResponse] = await Promise.all([
    fetch(rssUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
      },
    }).catch(() => null),
    fetch(profileUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
      },
    }).catch(() => null)
  ]);

  if (!rssResponse || !rssResponse.ok) {
    if (rssResponse && rssResponse.status === 404) {
      const err: any = new Error("Letterboxd user not found");
      err.status = 404;
      throw err;
    }
    const err: any = new Error("Failed to fetch Letterboxd RSS");
    err.status = rssResponse ? rssResponse.status : 500;
    throw err;
  }

  const xmlText = await rssResponse.text();

  // Custom regex parser for RSS items
  const items: any[] = [];
  const itemMatches = xmlText.matchAll(/<item>([\s\S]*?)<\/item>/g);

  for (const match of itemMatches) {
    const itemContent = match[1];

    const titleMatch = itemContent.match(/<title>([\s\S]*?)<\/title>/);
    const linkMatch = itemContent.match(/<link>([\s\S]*?)<\/link>/);
    const pubDateMatch = itemContent.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
    const descMatch = itemContent.match(/<description>([\s\S]*?)<\/description>/);
    
    const filmTitleMatch = itemContent.match(/<letterboxd:filmTitle>([\s\S]*?)<\/letterboxd:filmTitle>/);
    const filmYearMatch = itemContent.match(/<letterboxd:filmYear>([\s\S]*?)<\/letterboxd:filmYear>/);
    const memberRatingMatch = itemContent.match(/<letterboxd:memberRating>([\s\S]*?)<\/letterboxd:memberRating>/);

    // Clean CDATA and HTML from description to get review text
    let description = descMatch ? descMatch[1] : "";
    description = description.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1");
    // Extract image src if available
    const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
    const imageUrl = imgMatch ? imgMatch[1] : null;
    // Remove all HTML tags
    const cleanReview = description.replace(/<[^>]*>/g, "").trim();

    items.push({
      title: titleMatch ? titleMatch[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1") : "",
      link: linkMatch ? linkMatch[1] : "",
      pubDate: pubDateMatch ? pubDateMatch[1] : "",
      filmTitle: filmTitleMatch ? filmTitleMatch[1] : "",
      filmYear: filmYearMatch ? filmYearMatch[1] : "",
      rating: memberRatingMatch ? memberRatingMatch[1] : null,
      review: cleanReview.length > 500 ? cleanReview.substring(0, 500) + "..." : cleanReview,
      imageUrl,
    });
  }

  // Extract basic profile metadata from RSS channel
  const channelTitleMatch = xmlText.match(/<title>([\s\S]*?)<\/title>/);
  let displayName = channelTitleMatch ? channelTitleMatch[1].replace("Letterboxd - ", "").replace("’s Profile", "").trim() : username;

  // Set default scraped fields
  let avatar = "";
  let bio = "";
  let location = "";
  const stats: any = {
    films: "",
    thisYear: "",
    lists: "",
    following: "",
    followers: ""
  };
  const favorites: any[] = [];

  // Scrape the main HTML page
  if (htmlResponse && htmlResponse.ok) {
    try {
      const html = await htmlResponse.text();

      // Extract avatar
      const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
      if (ogImageMatch) {
        avatar = ogImageMatch[1];
      }

      // Extract displayName if possible
      const ogTitleMatch = html.match(/<meta property="og:title" content="([^"]+)"/);
      if (ogTitleMatch) {
        displayName = ogTitleMatch[1].replace("’s profile", "").replace("'s profile", "").trim();
      }

      // Extract bio
      const bioMatch = html.match(/<div class="bio js-bio">([\s\S]*?)<\/div>/);
      if (bioMatch) {
        const pMatch = bioMatch[1].match(/<p>([\s\S]*?)<\/p>/);
        bio = pMatch ? pMatch[1].replace(/<[^>]*>/g, "").trim() : bioMatch[1].replace(/<[^>]*>/g, "").trim();
      }

      // Extract location
      const locationMatch = html.match(/<div class="profile-metadata js-profile-metadata">[\s\S]*?class="label">([\s\S]*?)<\/span>/);
      if (locationMatch) {
        location = locationMatch[1].replace(/<[^>]*>/g, "").trim();
      }

      // Extract stats
      const statRegex = /<h4 class="profile-statistic statistic">[\s\S]*?value">([\s\S]*?)<\/span>[\s\S]*?definition[^>]*>([\s\S]*?)<\/span>/g;
      let statMatch;
      while ((statMatch = statRegex.exec(html)) !== null) {
        const val = statMatch[1].trim();
        const label = statMatch[2].replace(/<[^>]*>/g, "").trim().toLowerCase();
        if (label.includes("films") || label.includes("filmes")) {
          stats.films = val;
        } else if (label.includes("this year") || label.includes("este ano")) {
          stats.thisYear = val;
        } else if (label.includes("lists") || label.includes("listas")) {
          stats.lists = val;
        } else if (label.includes("following") || label.includes("seguindo")) {
          stats.following = val;
        } else if (label.includes("followers") || label.includes("seguidores")) {
          stats.followers = val;
        }
      }

      // Extract favorite films
      const favSectionMatch = html.match(/<section id="favourites" class="section">([\s\S]*?)<\/section>/);
      if (favSectionMatch) {
        const favSection = favSectionMatch[1];
        const favMatches = favSection.matchAll(/data-item-name="([^"]+)" data-item-slug="([^"]+)" data-item-link="([^"]+)"([\s\S]*?)(?:>|$)/g);
        for (const favMatch of favMatches) {
          const name = favMatch[1];
          const slug = favMatch[2];
          const link = favMatch[3];
          const remainingAttr = favMatch[4];
          
          let posterUrl = null;
          const pathMatch = remainingAttr.match(/data-resolvable-poster-path='([^']+)'/);
          if (pathMatch) {
            try {
              const cleanedPathStr = pathMatch[1].replace(/&quot;/g, '"');
              const pathObj = JSON.parse(cleanedPathStr);
              const uid = pathObj.postered?.uid;
              const cacheBustingKey = pathObj.cacheBustingKey;
              if (uid && uid.startsWith("film:")) {
                const idNum = uid.replace("film:", "");
                const splitPath = idNum.split("").join("/");
                posterUrl = `https://a.ltrbxd.com/resized/film-poster/${splitPath}/${idNum}-0-150-0-225-crop.jpg?v=${cacheBustingKey}`;
              }
            } catch (e) {
              // Ignore JSON parse errors
            }
          }
          
          favorites.push({
            name,
            slug,
            link: `https://letterboxd.com${link}`,
            posterUrl,
          });
        }
      }
    } catch (e) {
      console.error("Letterboxd scraper error:", e);
    }
  }

  return {
    username,
    displayName,
    profileUrl,
    items: items.slice(0, 20),
    avatar,
    bio,
    location,
    stats,
    favorites,
  };
}
