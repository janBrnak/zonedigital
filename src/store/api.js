const API_TOKEN = '106eee20a433566f39a20e454d2fe626';
const API_BASE = 'https://api.themoviedb.org/3';

export const URL_MOVIE_POSTER = `https://image.tmdb.org/t/p/w500`;
export const FETCH_MOVIES_NOW_PLAYING = `${API_BASE}/movie/now_playing?api_key=${API_TOKEN}`;
export const FETCH_MOVIE_GENRE_LIST = `${API_BASE}/genre/movie/list?api_key=${API_TOKEN}`;