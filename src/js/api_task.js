import axios from 'axios';

const API_KEY = 'f3b7458c34b3a95455ce5f7edb53b2eb';
const BASE_URL = 'https://api.themoviedb.org/3';


export default class FetchMoviApi {
    
    // Отримую популярні фільми
    async getPopularData() {
        try {
            const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
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


const newClass = new FetchMoviApi();
// newClass.getPopularData()
// newClass.fetchMovieSearcher("Werewolf by Night")
newClass.fetchMovieForId(894205)

function getGenerMovi(id) {
    const newClas = new FetchMoviApi();
    const movie = newClas.fetchMovieForId(id);
    console.log(movie.genres);
}

getGenerMovi(894205)