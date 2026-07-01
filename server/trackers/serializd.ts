export async function fetchSerializdProfile(username: string) {
  // Fetch main user profile info
  const profileUrl = `https://www.serializd.com/api/user/${username}`;
  const profileRes = await fetch(profileUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      "Accept": "application/json",
    },
  });

  if (profileRes.status === 404) {
    const err: any = new Error("Serializd user not found");
    err.status = 404;
    throw err;
  }

  if (!profileRes.ok) {
    const err: any = new Error("Failed to fetch Serializd profile");
    err.status = profileRes.status;
    throw err;
  }

  const userData = await profileRes.json();

  // Now fetch reviews / recent logged shows
  const reviewsUrl = `https://www.serializd.com/api/user/${username}/reviews`;
  const reviewsRes = await fetch(reviewsUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      "Accept": "application/json",
    },
  });

  let reviews: any[] = [];
  if (reviewsRes.ok) {
    const reviewsData = await reviewsRes.json();
    reviews = reviewsData.reviews || reviewsData || [];
  }

  return {
    username: userData.serializd_username || username,
    biography: userData.biography || "",
    profilePicture: userData.profile_picture_url || userData.profilePicture || null,
    stats: {
      reviewsCount: userData.reviews_count || userData.reviewsCount || reviews.length || 0,
      followersCount: userData.followers_count || userData.followersCount || 0,
      followingCount: userData.following_count || userData.followingCount || 0,
      showsCount: userData.shows_count || userData.showsCount || 0,
    },
    items: reviews.slice(0, 15).map((item: any) => ({
      id: item.id,
      showName: item.showName || item.show_name || item.show?.name || "TV Show",
      seasonName: item.seasonName || item.season_name || null,
      episodeName: item.episodeName || item.episode_name || null,
      rating: item.rating || null,
      reviewText: item.reviewText || item.review_text || "",
      isSpoiler: item.isSpoilers || item.is_spoilers || false,
      date: item.date || item.created_at || "",
      bannerUrl: item.show?.bannerImage || item.showBannerImage || null,
    })),
  };
}
