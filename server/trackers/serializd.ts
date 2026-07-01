export async function fetchSerializdProfile(username: string) {
  const profilePageUrl = `https://www.serializd.com/user/${username}`;
  let scrapedData: any = null;
  let useFallback = false;

  const headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
  };

  try {
    const response = await fetch(profilePageUrl, { headers });
    
    if (response.status === 404) {
      const err: any = new Error("Serializd user not found");
      err.status = 404;
      throw err;
    }

    if (response.ok) {
      const html = await response.text();
      const nextDataMatch = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
      
      if (nextDataMatch) {
        try {
          const nextData = JSON.parse(nextDataMatch[1]);
          const profileData = nextData?.props?.pageProps?.data;
          const details = profileData?.details;

          if (profileData && details) {
            scrapedData = {
              username: details.username || username,
              biography: profileData.description || "",
              profilePicture: details.imagePath || null,
              joinedOn: details.joinedOn || null,
              stats: {
                reviewsCount: details.reviewCount || 0,
                followersCount: details.followersCount || 0,
                followingCount: details.followingCount || 0,
                showsCount: details.showWatchedCount || 0,
                watchlistCount: details.showWatchlistCount || 0,
              },
              favoriteShows: (profileData.favoriteShows || [])
                .filter((show: any) => show !== null && show !== undefined)
                .map((show: any) => {
                  let bannerImage = show.bannerImage;
                  if (bannerImage && bannerImage.startsWith("/")) {
                    bannerImage = `https://image.tmdb.org/t/p/w780${bannerImage}`;
                  }
                  return {
                    showId: show.showId,
                    showName: show.showName,
                    bannerImage: bannerImage || null,
                  };
                }),
            };
          }
        } catch (jsonErr) {
          console.error("Error parsing __NEXT_DATA__ for Serializd:", jsonErr);
          useFallback = true;
        }
      } else {
        useFallback = true;
      }
    } else {
      useFallback = true;
    }
  } catch (err: any) {
    if (err.status === 404) throw err;
    console.error("Scraper fetch error for Serializd, trying API fallback:", err);
    useFallback = true;
  }

  // Fallback API if scraping failed or __NEXT_DATA__ wasn't found
  if (useFallback || !scrapedData) {
    try {
      const profileUrl = `https://www.serializd.com/api/user/${username}`;
      const profileRes = await fetch(profileUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          "Accept": "application/json",
        },
      });

      if (profileRes.ok) {
        const userData = await profileRes.json();
        scrapedStatsFallback(userData);
      } else {
        if (profileRes.status === 404) {
          const err: any = new Error("Serializd user not found");
          err.status = 404;
          throw err;
        }
        throw new Error(`Failed to fetch Serializd profile API: ${profileRes.status}`);
      }
    } catch (e: any) {
      if (e.status === 404) throw e;
      const err: any = new Error("Failed to fetch Serializd profile info");
      err.status = 500;
      throw err;
    }
  }

  function getFallbackData(userData: any, fallbackReviewsCount: number) {
    return {
      username: userData.serializd_username || username,
      biography: userData.biography || "",
      profilePicture: userData.profile_picture_url || userData.profilePicture || null,
      stats: {
        reviewsCount: userData.reviews_count || userData.reviewsCount || fallbackReviewsCount,
        followersCount: userData.followers_count || userData.followersCount || 0,
        followingCount: userData.following_count || userData.followingCount || 0,
        showsCount: userData.shows_count || userData.showsCount || 0,
        watchlistCount: 0,
      },
      favoriteShows: [],
    };
  }

  // Helper to fallback if API is needed
  let finalUserData = scrapedData;
  if (!finalUserData) {
    // If we reach here, it shouldn't happen unless both failed, but let's be extremely safe
    const err: any = new Error("Failed to retrieve Serializd profile data");
    err.status = 500;
    throw err;
  }

  // Fetch reviews / recent logged shows
  let reviews: any[] = [];
  try {
    const reviewsUrl = `https://www.serializd.com/api/user/${username}/reviews`;
    const reviewsRes = await fetch(reviewsUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Accept": "application/json",
      },
    });

    if (reviewsRes.ok) {
      const reviewsData = await reviewsRes.json();
      reviews = reviewsData.reviews || reviewsData || [];
    }
  } catch (reviewsErr) {
    console.error("Error fetching Serializd reviews:", reviewsErr);
  }

  // Process the reviews list
  const processedItems = reviews.slice(0, 15).map((item: any) => {
    let bannerUrl = item.show?.bannerImage || item.showBannerImage || null;
    if (bannerUrl && bannerUrl.startsWith("/")) {
      bannerUrl = `https://image.tmdb.org/t/p/w780${bannerUrl}`;
    }
    return {
      id: item.id,
      showName: item.showName || item.show_name || item.show?.name || "TV Show",
      seasonName: item.seasonName || item.season_name || null,
      episodeName: item.episodeName || item.episode_name || null,
      rating: item.rating || null,
      reviewText: item.reviewText || item.review_text || "",
      isSpoiler: item.isSpoilers || item.is_spoilers || false,
      date: item.date || item.created_at || "",
      bannerUrl: bannerUrl,
    };
  });

  return {
    ...finalUserData,
    items: processedItems,
  };

  function scrapedStatsFallback(userData: any) {
    scrapedData = getFallbackData(userData, reviews.length);
  }
}
