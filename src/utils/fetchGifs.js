// Currently used for fetching gif images for game cards
export async function fetchGifs(apiKey, gifIds, gifTitles) {
  const ids = gifIds.join(',');
  const url = `https://api.giphy.com/v1/gifs?api_key=${apiKey}&ids=${ids}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.data.map((gif, index) => ({
    // Giphy image id
    id: gif.id,
    // Titles created in giphyConfig file
    title: gifTitles[index],
    url: gif.images.fixed_height.url,
  }));
}
