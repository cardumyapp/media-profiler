export async function fetchAniListProfile(username: string) {
  const query = `
    query ($name: String) {
      User (name: $name) {
        id
        name
        avatar {
          large
        }
        bannerImage
        about
        stats {
          watchedTime
          chaptersRead
          animeListScores {
            meanScore
            standardDeviation
          }
          mangaListScores {
            meanScore
            standardDeviation
          }
        }
        statistics {
          anime {
            count
            meanScore
            minutesWatched
            episodesWatched
            statuses {
              status
              count
            }
            genres {
              genre
              count
            }
          }
          manga {
            count
            meanScore
            chaptersRead
            volumesRead
            statuses {
              status
              count
            }
            genres {
              genre
              count
            }
          }
        }
        favourites {
          anime {
            nodes {
              id
              title {
                romaji
                english
              }
              genres
              coverImage {
                large
              }
            }
          }
          manga {
            nodes {
              id
              title {
                romaji
                english
              }
              genres
              coverImage {
                large
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { name: username },
    }),
  });

  if (!response.ok) {
    if (response.status === 404) {
      const err: any = new Error("AniList user not found");
      err.status = 404;
      throw err;
    }
    const err: any = new Error("Failed to fetch AniList data");
    err.status = response.status;
    throw err;
  }

  const data = await response.json();
  if (data.errors) {
    const err: any = new Error("AniList user not found or error in GraphQL query");
    err.status = 404;
    throw err;
  }

  return data.data.User;
}
