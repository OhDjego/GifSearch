import axios from "axios";

const GIPHY_API_KEY = "vf7nDm11F3X2Pe63jIGjWWPiFCFCZXM8";

export const useGiphySearch = () => {
  const searchGifs = async (query) => {
    try {
      const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: GIPHY_API_KEY,
          q: query,
          limit: 9,
        },
      });
      return response.data.data;
    } catch (error) {
      console.error("Fehler beim Abrufen von Giphy-Daten:", error);
      return [];
    }
  };

  return { searchGifs };
};
