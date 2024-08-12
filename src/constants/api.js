
export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_KEY
    }
};


export const CORE_URL = 'https://api.themoviedb.org/3/movie'

export const IMG_URL = 'https://image.tmdb.org/t/p/w500'

export const OPEN_AI_KEY = import.meta.env.VITE_GPT_KEY
