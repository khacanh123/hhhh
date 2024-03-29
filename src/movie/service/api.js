import axios from "axios";

export const getDataMovies = async (page = 1) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=vi&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
    const response = await axios.get(url);
    const result = await response.status === 200 ? response.data : [];
    return result;
  }