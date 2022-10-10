import axios from 'axios';

const API_KEY = 'f3b7458c34b3a95455ce5f7edb53b2eb';
const BASE_URL = 'https://api.themoviedb.org/3';


export default class FetchMoviApi {
    
    // Отримую популярні фільми
    async getPopularData(page) {
        try {
            const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`);
            const data = await response.data;
            console.log(data);
            return response.data;
        } catch (error) {
            console.error('Smth wrong with api get full trends' + error);
        }
        
    }

    // Запит по назві фільму
    
    
    async fetchMovieSearcher(text) {
        try {
            const response = await axios.get(
                `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${text}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Smth wrong with api search fetch' + error);
        }
    }

    // Запит по id

    async fetchMovieForId(id) {
        try {
            const response = await axios.get(
                `${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
            return response.data;
            } catch (error) {
                    console.error('Smth wrong with api search fetch' + error);
                }
    }
};

// Створення жанрів
async function getGenres() {
  try {
    const response = await axios.get(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    console.log('response.data: ', response.data);
    return response.data;
  } catch (error) {
    console.error('Smth wrong with api search fetch' + error);
  }
}


getGenres();
const newClass = new FetchMoviApi();
newClass.getPopularData(2)
// newClass.fetchMovieSearcher("Werewolf by Night")
// newClass.fetchMovieForId(894205)

function getGenerMovi(id) {
    const newClas = new FetchMoviApi();
    const movie = newClas.fetchMovieForId(id);
    console.log(movie.genres);
}

// getGenerMovi(894205)